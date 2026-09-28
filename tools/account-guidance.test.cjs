/* eslint-disable @typescript-eslint/no-require-imports */
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const ts=require('typescript');
const compiled=ts.transpileModule(fs.readFileSync('src/lib/account-guidance.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
const context={exports:{}};
vm.runInNewContext(compiled,context);
const {accountGuidance}=context.exports;
const now=Date.parse('2026-09-28T12:00:00Z');
const profile=end=>({currentSubscription:{status:'ACTIVE',endsAt:end,subscriptionPlan:{name:'Test plan'}}});
test('missing account evidence does not invent a recommendation',()=>assert.equal(accountGuidance({},[],now).length,0));
test('end date within seven days creates a support notice without promising renewal',()=>{const result=accountGuidance(profile('2026-10-02T12:00:00Z'),[],now);assert.equal(result[0].id,'membership-ending');assert.equal(result[0].href,'/contact');assert.match(result[0].detail.en,/Automatic renewal is not confirmed/)});
test('end date at or before now creates a status check instead of active benefits',()=>assert.equal(accountGuidance(profile('2026-09-28T12:00:00Z'),[],now)[0].id,'membership-ended'));
test('missing, invalid and distant end dates do not imply renewal reminders',()=>{for(const end of [undefined,'invalid','2027-01-01T00:00:00Z'])assert.equal(accountGuidance(profile(end),[],now).length,0)});
test('plan discovery requires actual eligible plans and no current membership',()=>{assert.equal(accountGuidance({},[{id:'eligible'}],now)[0].id,'eligible-plans');assert.equal(accountGuidance(profile('2027-01-01T00:00:00Z'),[{id:'eligible'}],now).length,0)});
test('Student and Corporate guidance requires returned eligibility evidence',()=>{assert.equal(accountGuidance({studentMember:{verified:false}},[],now).length,0);const items=accountGuidance({studentMember:{verified:true},corporateAccount:{companyName:'Test company'}},[],now);assert.equal(items.length,2);assert.equal(items[0].id,'student-verified');assert.equal(items[1].id,'corporate-linked')});
