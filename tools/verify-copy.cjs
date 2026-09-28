/* eslint-disable @typescript-eslint/no-require-imports */
const {chromium}=require('C:/Users/User/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('node:fs'),assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
 const page=await browser.newPage({viewport:{width:390,height:844}});const results=[];
 const routes=['/','/ride-types','/membership','/corporate','/partners','/contact','/account','/download','/students','/airport','/grabme-connect','/features','/about','/drivers','/mission-control','/privacy','/terms','/account-deletion','/admin/drivers','/previous-site'];
 for(const language of ['en','ar']){
  await page.goto('http://127.0.0.1:3190');
  if(language==='ar')await page.getByRole('button',{name:'التبديل إلى العربية'}).click();
  for(const route of routes){await page.goto('http://127.0.0.1:3190'+route);await page.waitForFunction(lang=>document.documentElement.lang===lang,language);await page.locator('details').evaluateAll(items=>items.forEach(e=>e.open=true));const text=await page.locator('body').innerText();assert.equal(/[\u2014\u2013]/u.test(text),false,language+route);assert.equal(/Premiere|بريميير/.test(text),false,'No new public product branding');results.push({route,language,noLongDashes:true});}
 }
 await page.goto('http://127.0.0.1:3190');await page.getByLabel('المظهر',{exact:true}).selectOption('dark');await page.waitForFunction(()=>document.documentElement.dataset.theme==='dark');await page.screenshot({path:'evidence/copy-arabic-dark-mobile.png',fullPage:true});
 await page.getByRole('button',{name:'Switch to English'}).click();await page.setViewportSize({width:1440,height:1000});await page.getByLabel('Appearance',{exact:true}).selectOption('light');await page.waitForFunction(()=>document.documentElement.dataset.theme==='light');await page.screenshot({path:'evidence/copy-english-light-desktop.png',fullPage:true});
 const saved=JSON.parse(fs.readFileSync('src/lib/previous-site.json','utf8'));for(const [slug,item]of Object.entries(saved))assert.equal(item.text,fs.readFileSync(`archive/${slug}-public-text.txt`,'utf8'));
 fs.writeFileSync('evidence/copy-audit.json',JSON.stringify({results,archiveTextPreserved:true,publicPremiereBranding:false},null,2));await browser.close();console.log('40 English/Arabic rendered-copy checks passed. Original archived text unchanged.');
})().catch(error=>{console.error(error);process.exit(1)});
