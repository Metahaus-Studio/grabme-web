"use client";
import {useId,useRef} from 'react';
import Link from 'next/link';
import {Apple,Play,Info,X,ArrowUpRight} from 'lucide-react';
import {T,useLocale} from './Locale';
type Kind='apple'|'google'|'account'|'driver';
const copy={
 apple:['App Store','App Store','The official iOS download link has not been published yet. If you already have GrabMe, open the installed Passenger app.','لم يُنشر رابط تنزيل iOS الرسمي بعد. إذا كان GrabMe مثبّتاً لديك، افتح تطبيق الراكب.'],
 google:['Google Play','Google Play','The official Android download link has not been published yet. If you already have GrabMe, open the installed Passenger app.','لم يُنشر رابط تنزيل Android الرسمي بعد. إذا كان GrabMe مثبّتاً لديك، افتح تطبيق الراكب.'],
 account:['Sign-in availability','توفّر تسجيل الدخول','Website sign-in is not connected in this preview. Your existing Passenger app remains the place to access your account. No verification code has been sent.','تسجيل الدخول عبر الموقع غير متصل في هذه المعاينة. استخدم تطبيق الراكب للوصول إلى حسابك. لم يُرسل أي رمز تحقّق.'],
 driver:['Application availability','توفّر تقديم الطلبات','Driver applications are temporarily unavailable here. You can review every required field below, but no application or document will be sent.','طلبات السائقين غير متاحة هنا مؤقتاً. يمكنك مراجعة جميع الحقول المطلوبة أدناه، لكن لن يتم إرسال أي طلب أو وثيقة.']
};
export function AvailabilityAction({kind}:{kind:Kind}){const dialog=useRef<HTMLDialogElement>(null);const id=useId();const {ar}=useLocale();const [en,arabic,detail,detailAr]=copy[kind];const Icon=kind==='apple'?Apple:kind==='google'?Play:Info;
 return <><button className="button secondary" type="button" onClick={()=>dialog.current?.showModal()} aria-haspopup="dialog"><Icon size={19}/><T en={en} ar={arabic}/></button><dialog ref={dialog} className="availability-dialog" aria-labelledby={id} onClick={e=>{if(e.target===e.currentTarget)dialog.current?.close()}}><div className="dialog-content"><button type="button" className="dialog-close" aria-label={ar?'إغلاق':'Close'} onClick={()=>dialog.current?.close()}><X size={22}/></button><Icon size={32}/><h2 id={id}><T en={en} ar={arabic}/></h2><p><T en={detail} ar={detailAr}/></p><Link className="text-link" href="/contact#help-center" onClick={()=>dialog.current?.close()}><T en="See help and next steps" ar="المساعدة والخطوات التالية"/><ArrowUpRight size={18}/></Link><button type="button" className="button" onClick={()=>dialog.current?.close()}><T en="Got it" ar="فهمت"/></button></div></dialog></>;
}
