"use client";
import {T,useLocale} from './Locale';
import {useRef,useState} from 'react';
import {driverIntakeEnabled,submitDriverApplication} from '@/lib/driver-intake';
export function DriverApplication(){const {ar}=useLocale();const locked=useRef(false);const [state,setState]=useState<'idle'|'sending'|'sent'|'documents'|'uncertain'>('idle');
async function handleSubmit(event:React.FormEvent<HTMLFormElement>){event.preventDefault();if(!driverIntakeEnabled || locked.current)return;const form=event.currentTarget;locked.current=true;setState('sending');try{await submitDriverApplication(new FormData(form),ar?'ar':'en');setState('sent');form.reset();}catch(error){if(error instanceof Error && error.message==='documents'){locked.current=false;setState('documents');}else setState('uncertain');}}
return <section className="account-panel" id="driver-application"><h2><T en="Apply as a driver" ar="قدّم طلباً كسائق"/></h2>
{!driverIntakeEnabled && <p className="notice"><T en="Applications are temporarily unavailable. This form is a preview: information is not sent or saved, and document uploads are disabled." ar="تقديم الطلبات غير متاح مؤقتاً. هذا النموذج للمعاينة: لا يتم إرسال المعلومات أو حفظها، ورفع الوثائق معطّل."/></p>}
{state==='sent' && <p role="status"><T en="Application received. GrabMe will review your information." ar="تم استلام الطلب. ستراجع GrabMe معلوماتك."/></p>}
{state==='documents' && <p role="alert" className="error"><T en="Add the required documents. Use JPEG, PNG, WebP, HEIC or HEIF images, or PDF for licences and ID, up to 6 MB each." ar="أضف الوثائق المطلوبة. استخدم صور JPEG أو PNG أو WebP أو HEIC أو HEIF، أو PDF للرخص والهوية، بحد أقصى 6 ميغابايت لكل ملف."/></p>}
{state==='uncertain' && <p role="alert" className="error"><T en="We could not confirm completion. Some documents or your application may have been received. Contact GrabMe support before submitting again." ar="تعذّر تأكيد الإرسال. قد تكون بعض الوثائق أو الطلب قد وصلت. تواصل مع دعم GrabMe قبل الإرسال مجدداً."/></p>}
<p><T en="Required fields are marked *. EV plans express your preferences and do not guarantee financing or approval." ar="الحقول المطلوبة مميّزة بنجمة *. خطط السيارات تعبّر عن تفضيلاتك ولا تضمن التمويل أو الموافقة."/></p>
<form onSubmit={handleSubmit} ><fieldset disabled={state==='sending'||state==='sent'||state==='uncertain'}>
                <label>{ar ? "الاسم الكامل *" : "Full Name *"}<input name="full_name" required    /></label>
                <label>{ar ? "رقم الهاتف *" : "Phone Number *"}<input name="phone" required    /></label>
                <label>{ar ? "رقم واتساب" : "WhatsApp Number"}<input name="whatsapp"    /></label>
                <label>{ar ? "البريد الإلكتروني" : "Email Address"}<input name="email" type="email"    /></label>
                <div >
  <label >
    <span >
  {ar ? "رخصة القيادة *" : "Driver License *"}
</span>

<p >
  {ar
    ? "صوّر الرخصة أو ارفع صورة / ملف PDF."
    : "Take a photo or upload an image / PDF."}
</p>

<input
  type="file" disabled={!driverIntakeEnabled}
  name="driver_license_file"
  accept="image/*,.pdf"
  required
  
/>
  </label>

  <label >
    <span >
  {ar ? "رخصة النقل العمومي (اختياري)" : "Public Service License (Optional)"}
</span>

<p >
  {ar
    ? "صوّرها أو ارفع صورة / ملف PDF. إذا لم تكن لديك الآن، يمكنك إحضارها لاحقاً خلال مرحلة الانضمام."
    : "Take a photo or upload an image / PDF. If you do not have it now, you can bring or send it during onboarding."}
</p>

<input
  type="file" disabled={!driverIntakeEnabled}
  name="public_license_file"
  accept="image/*,.pdf"
  
/>
  </label>

  <label >
    <span >
  {ar ? "الهوية أو جواز السفر *" : "National ID / Passport *"}
</span>

<p >
  {ar
    ? "صوّر الهوية أو جواز السفر أو ارفع صورة / ملف PDF."
    : "Take a photo of your ID/passport or upload an image / PDF."}
</p>

<input
  type="file" disabled={!driverIntakeEnabled}
  name="id_document_file"
  accept="image/*,.pdf"
  required
  
/>
  </label>

  <label >
    <span >
  {ar ? "صورة شخصية *" : "Selfie Photo *"}
</span>

<p >
  {ar
    ? "التقط صورة شخصية واضحة أو ارفع صورة من الهاتف."
    : "Take a clear selfie or upload a photo from your phone."}
</p>

<input
  type="file" disabled={!driverIntakeEnabled}
  name="selfie_file"
  accept="image/*"
  capture="user"
  required
  
/>
  </label>
</div>
                <label>{ar ? "الجنسية" : "Nationality"}<input name="nationality"    /></label>
                <label>{ar ? "العمر" : "Age"}<input name="age"    /></label>
                <label>{ar ? "المدينة / المنطقة *" : "City / Area *"}<input name="city" required    /></label>
                <label>{ar ? "العمل الحالي" : "Current Occupation / Work"}<input name="current_occupation"    /></label>

                <label>{ar ? "نوع السيارة" : "Vehicle Type"}<input name="vehicle_type"    /></label>
                <label>{ar ? "ماركة السيارة" : "Vehicle Brand"}<input name="vehicle_brand"    /></label>
                <label>{ar ? "موديل السيارة" : "Vehicle Model"}<input name="vehicle_model"    /></label>
                <label>{ar ? "سنة السيارة" : "Vehicle Year"}<input name="vehicle_year"    /></label>

                <label>{ar ? "هل تملك سيارة؟ *" : "Do you own your vehicle? *"}<select name="own_vehicle" required ><option value="">{ar ? "اختر" : "Select"}</option>
                  <option value="yes">{ar ? "نعم" : "Yes"}</option>
                  <option value="no">{ar ? "لا" : "No"}</option>
                </select></label>

                <label>{ar ? "هل السيارة كهربائية؟ *" : "Is your vehicle electric? *"}<select name="electric_vehicle" required ><option value="">{ar ? "اختر" : "Select"}</option>
                  <option value="yes">{ar ? "نعم" : "Yes"}</option>
                  <option value="no">{ar ? "لا" : "No"}</option>
                  <option value="willing_to_switch">{ar ? "لا، لكن مستعد لقيادة سيارة كهربائية" : "No, but willing to drive EV"}</option>
                </select></label>

                <label>{ar ? "هل لديك رخصة قيادة صالحة؟ *" : "Valid driving license? *"}<select name="driving_license" required ><option value="">{ar ? "اختر" : "Select"}</option>
                  <option value="yes">{ar ? "نعم" : "Yes"}</option>
                  <option value="no">{ar ? "لا" : "No"}</option>
                </select></label>

                <label>{ar ? "هل لديك رخصة نقل عمومي؟" : "Public service driving license?"}<select name="public_service_license" ><option value="">{ar ? "اختر" : "Select"}</option>
                  <option value="yes">{ar ? "نعم" : "Yes"}</option>
                  <option value="no">{ar ? "لا" : "No"}</option>
                  <option value="in_progress">{ar ? "قيد التجهيز" : "In progress"} </option>
                </select></label>

                <label>{ar ? "سنوات الخبرة في القيادة" : "Years of driving experience"}<select name="experience_years" ><option value="">{ar ? "اختر" : "Select"}</option>
                  <option value="0-1">0-1</option>
                  <option value="2-5">2-5</option>
                  <option value="5-10">5-10</option>
                  <option value="10+">10+</option>
                </select></label>

                <label>{ar ? "التوفر *" : "Availability *"}<select name="availability" required ><option value="">{ar ? "اختر" : "Select"}</option>
                  <option value="full_time">{ar ? "دوام كامل" : "Full-time"}</option>
                  <option value="part_time">{ar ? "دوام جزئي" : "Part-time"}</option>
                  <option value="weekends">{ar ? "عطلات نهاية الأسبوع فقط" : "Weekends only"}</option>
                  <option value="flexible">{ar ? "مرن" : "Flexible"}</option>
                </select></label>

                <label>{ar ? "هل تريد سيارة كهربائية من GRABME؟ *" : "Interested in a GRABME EV? *"}<select name="interested_in_grabme_ev" required ><option value="">{ar ? "اختر" : "Select"}</option>
                  <option value="yes">{ar ? "نعم" : "Yes"}</option>
                  <option value="no">{ar ? "لا" : "No"}</option>
                  <option value="maybe">{ar ? "ربما، أريد معرفة التفاصيل" : "Maybe, I want more details"}</option>
                </select></label>

                <label>{ar ? "نوع خطة السيارة الكهربائية المفضلة" : "Preferred EV plan"}<select name="ev_purchase_plan_interest" ><option value="">{ar ? "اختر" : "Select"}</option>
                  <option value="purchase">{ar ? "شراء" : "Purchase"}</option>
                  <option value="monthly_installments">{ar ? "تقسيط شهري" : "Monthly installments"}</option>
                  <option value="rent_to_own">{ar ? "إيجار مع خيار التملك" : "Rent-to-own"}</option>
                  <option value="lease">{ar ? "تأجير" : "Lease"}</option>
                </select></label>

                <div >
                  <p >
                    {ar ? "هل عملت سابقاً مع أي من هذه الفئات؟" : "Have you worked with:"}
                  </p>

                  <div >
                    {[
                      ["uber", "Uber"],
                      ["allo_taxi", "Allo Taxi"],
                      ["taxi_service", ar ? "شركة تاكسي" : "Local Taxi Service"],
                      ["chauffeur", ar ? "سائق خاص / Chauffeur" : "Private Driver / Chauffeur"],
                      ["delivery", ar ? "سائق توصيل" : "Delivery Driver"],
                      ["other", ar ? "غير ذلك" : "Other"],
                    ].map(([value, label]) => (
                      <label key={value} className="checkbox" >
                        <input type="checkbox" name="previous_platforms" value={value}  />
                        <span >{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <label>{ar ? "ملاحظات إضافية" : "Additional notes"}<textarea name="notes" rows={5}/></label>

                <div >
                  <button className="button" type="submit" disabled={!driverIntakeEnabled || state==='sending'} >
                    
                    {ar ? "إرسال الطلب" : "Submit Application"}
                  </button>
                </div>
              </fieldset></form></section>}
