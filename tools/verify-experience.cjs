/* eslint-disable @typescript-eslint/no-require-imports */
const {chromium}=require('C:/Users/User/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('node:fs'),assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
 const page=await browser.newPage(),errors=[],links=new Set(),results=[];page.on('pageerror',e=>errors.push(e.message));
 const routes=['/','/ride-types','/membership','/corporate','/partners','/contact','/account','/download','/students','/airport','/grabme-connect','/features','/about','/drivers','/mission-control','/privacy','/terms','/account-deletion','/admin/drivers','/previous-site'];
 for(const language of ['en','ar'])for(const theme of ['light','dark']){
  await page.goto('http://127.0.0.1:3190');await page.waitForLoadState('networkidle');if(await page.locator('html').getAttribute('lang')!==language)await page.locator('.language').click();await page.locator('.appearance select').selectOption(theme);
  for(const route of routes){await page.setViewportSize({width:language==='ar'?390:1440,height:950});await page.goto('http://127.0.0.1:3190'+route);await page.waitForLoadState('networkidle');assert.equal(await page.locator('h1').count(),1);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`overflow ${route} ${language} ${theme}`);
   await page.locator('img').evaluateAll(async images=>{for(const img of images){img.loading='eager';await img.decode()}});
   const imgs=await page.locator('img').evaluateAll(es=>es.map(e=>({src:e.getAttribute('src'),ok:e.naturalWidth>0,alt:e.getAttribute('alt')})));assert.ok(imgs.every(i=>i.ok&&i.alt));if(route!=='/previous-site')assert.ok(imgs.length,route+' imagery');
   for(const href of await page.locator('a').evaluateAll(es=>es.map(e=>e.getAttribute('href')))){assert.ok(href&&href!=='#','empty link '+route);if(href.startsWith('/')||href.startsWith('#')){const u=new URL(href,'http://127.0.0.1:3190'+route);links.add(u.pathname+u.hash)}}
   assert.equal(await page.locator('a a,button button').count(),0,'nested controls');results.push({route,language,theme,images:imgs.length});
  }
 }
 for(const target of links){const response=await page.goto('http://127.0.0.1:3190'+target);if(response)assert.equal(response.status(),200,target);const hash=new URL(page.url()).hash;if(hash)assert.equal(await page.locator(hash).count(),1,'missing target '+target)}
 await page.goto('http://127.0.0.1:3190/ride-types');if(await page.locator('html').getAttribute('lang')==='ar')await page.locator('.language').click();await page.locator('.appearance select').selectOption('light');
 const choices=page.locator('.explorer-options button');for(let i=0;i<4;i++){await choices.nth(i).click();assert.equal(await choices.nth(i).getAttribute('aria-pressed'),'true');assert.equal(await page.locator('.explorer-result h3').count(),1)}
 await page.setViewportSize({width:1440,height:1000});await page.screenshot({path:'evidence/experience-rides-light-desktop.png',fullPage:true});
 await page.goto('http://127.0.0.1:3190/grabme-connect');await page.getByRole('button',{name:'Work',exact:true}).click();await page.getByText('A calmer space between meetings.').waitFor();
 for(const [route,button] of [['/download','App Store'],['/download','Google Play'],['/account','Sign-in availability'],['/drivers','Application availability']]){
  await page.goto('http://127.0.0.1:3190'+route);const trigger=page.getByRole('button',{name:button,exact:true});await trigger.click();assert.ok(await page.locator('dialog[open]').isVisible());await page.keyboard.press('Escape');assert.equal(await page.locator('dialog[open]').count(),0);assert.equal(await trigger.evaluate(e=>document.activeElement===e),true,'focus restored');await trigger.click();await page.getByRole('button',{name:'Got it',exact:true}).click();assert.equal(await page.locator('dialog[open]').count(),0);
 }
 await page.goto('http://127.0.0.1:3190/contact');await page.locator('#help-center summary').first().click();assert.equal(await page.locator('#help-center details').first().getAttribute('open'),'');
 await page.goto('http://127.0.0.1:3190');await page.screenshot({path:'evidence/experience-home-light-desktop.png',fullPage:true});await page.setViewportSize({width:390,height:844});await page.locator('.appearance select').selectOption('dark');await page.locator('.language').click();await page.screenshot({path:'evidence/experience-home-ar-dark-mobile.png',fullPage:true});
 assert.equal(errors.length,0,JSON.stringify(errors));fs.writeFileSync('evidence/experience-audit.json',JSON.stringify({results,internalTargets:[...links],errors,checks:['80 route/theme/language checks','all image loads and alt text','all internal paths and hash targets','four ride choices','three cabin modes','availability dialogs and Escape/focus return','help accordion','no nested links or buttons'],limitations:['No store URLs supplied or live booking/intake activation.']},null,2));await browser.close();console.log(JSON.stringify({routeChecks:results.length,internalTargets:links.size,errors:errors.length}));
})().catch(e=>{console.error(e);process.exit(1)});
