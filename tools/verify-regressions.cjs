/* eslint-disable @typescript-eslint/no-require-imports */
const {chromium}=require('C:/Users/User/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('node:fs'),assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
 const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const baseline=JSON.parse(fs.readFileSync('archive/driver-form-fields.json','utf8')).fields;
 const results=[];
 for(const language of ['en','ar'])for(const theme of ['light','dark'])for(const width of [390,1440]){
  await page.setViewportSize({width,height:900});await page.goto('http://127.0.0.1:3190/drivers');
  await page.waitForLoadState('networkidle');
  if(await page.locator('html').getAttribute('lang')!==language)await page.locator('.language').click();
  await page.locator('.appearance select').selectOption(theme);
  const fields=await page.locator('#driver-application [name]').evaluateAll(es=>es.map(e=>({name:e.name,type:e.type,required:e.required,accept:e.getAttribute('accept'),options:e.tagName==='SELECT'?[...e.options].map(o=>o.value):undefined})));
  assert.equal(fields.length,31);
  for(let i=0;i<baseline.length;i++){const old=baseline[i],current=fields.filter(f=>f.name===old.name)[0];assert.ok(current,old.name);assert.equal(current.type,old.type);assert.equal(current.required,old.required);assert.equal(current.accept,old.accept);if(old.options)assert.deepEqual(current.options,old.options.map(o=>o.value))}
  assert.equal(await page.locator('#driver-application input[type=file]:disabled').count(),4);
  assert.equal(await page.locator('#driver-application button[aria-haspopup=dialog]').isEnabled(),true);
  assert.equal(await page.locator('#driver-application a[href^="https://grabmeapp.com"]').count(),0,'No circular production fallback');
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
  await page.screenshot({path:`evidence/drivers-${language}-${theme}-${width}.png`,fullPage:true});
  results.push({language,theme,width,fields:31,noOverflow:true});
 }
 await page.goto('http://127.0.0.1:3190');assert.ok(await page.locator('a[href="/drivers#driver-application"]').count());
 for(const path of ['/','/download']){await page.goto('http://127.0.0.1:3190'+path);assert.equal(await page.getByRole('button',{name:'App Store',exact:true}).isVisible(),true);assert.equal(await page.getByRole('button',{name:'Google Play',exact:true}).isVisible(),true)}
 await page.goto('http://127.0.0.1:3190/contact');for(const href of ['/ride-types','/drivers#driver-application','/corporate','/students','/airport','/grabme-connect'])assert.ok(await page.locator(`main a[href="${href}"]`).count(),href);
 const inventory=JSON.parse(fs.readFileSync('archive/inventory.json','utf8'));let archivedLinks=0;
 for(const original of inventory){for(const link of original.links){if(!link.href.startsWith('/')&&!link.href.startsWith('#'))continue;const target=new URL(link.href,original.url);await page.goto('http://127.0.0.1:3190'+target.pathname+target.hash);if(target.hash)assert.equal(await page.locator(target.hash).count(),1,target.href);assert.equal(await page.locator('h1').count(),1);archivedLinks++;}}
 // Read production status only. Never submit a real application.
 let liveDriver;try{const response=await page.goto('https://grabmeapp.com/drivers',{timeout:30000});liveDriver={url:page.url(),status:response.status(),applicationForm:await page.locator('#driver-application form').count()};}catch(e){liveDriver={error:e.message}}
 assert.equal(errors.length,0,JSON.stringify(errors));fs.writeFileSync('evidence/regression-audit.json',JSON.stringify({results,archivedLinks,liveDriver,errors,storeButtons:'Original buttons had no URL or action; restored with explicit pending state.',submission:'Preview disabled. Original Supabase contract restored behind release flag; no submitted data.'},null,2));
 await browser.close();console.log(JSON.stringify({driverChecks:results.length,fields:31,liveDriver,errors}));
})().catch(e=>{console.error(e);process.exit(1)});
