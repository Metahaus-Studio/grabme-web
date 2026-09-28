/* eslint-disable @typescript-eslint/no-require-imports */
const { chromium } = require('C:/Users/User/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('node:fs');
const routes = ['/', '/about', '/ride-types', '/features', '/membership', '/students', '/corporate', '/drivers', '/airport', '/grabme-connect', '/mission-control', '/contact'];
(async () => {
 const browser = await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
 const page = await browser.newPage(); const inventory=[];
 for (const route of routes) {
  const name=route==='/'?'home':route.slice(1); const url='https://www.grabmeapp.com'+route;
  await page.setViewportSize({width:1440,height:1000});
  const response=await page.goto(url,{waitUntil:'networkidle',timeout:60000});
  await page.evaluate(async()=>{document.documentElement.style.scrollBehavior='auto';for(let y=0;y<document.body.scrollHeight;y+=750){window.scrollTo({top:y,behavior:'instant'});await new Promise(r=>setTimeout(r,100));}window.scrollTo({top:0,behavior:'instant'});await new Promise(r=>setTimeout(r,300))});
  await page.screenshot({path:`archive/${name}-desktop.png`,fullPage:true});
  inventory.push({url,capturedAt:new Date().toISOString(),status:response.status(),title:await page.title(),links:await page.locator('a').evaluateAll(es=>es.map(e=>({text:e.textContent,href:e.getAttribute('href')}))),forms:await page.locator('form').count()});
  fs.writeFileSync(`archive/${name}-public-text.txt`,await page.locator('body').innerText());
  await page.setViewportSize({width:390,height:844});
  await page.screenshot({path:`archive/${name}-mobile.png`,fullPage:true});
  if(route==='/'){const button=page.getByRole('button').first();if(await button.count()){await button.click();await page.screenshot({path:'archive/home-mobile-menu.png'});}}
  fs.writeFileSync('archive/inventory.json',JSON.stringify(inventory,null,2));
 }
 await browser.close();
})();
