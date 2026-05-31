"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import {
  BadgeCheck,
  BatteryCharging,
  Car,
  CheckCircle2,
  Clock,
  Loader2,
  ShoppingBag,
  Wallet,
  Wifi,
} from "lucide-react";

const benefits = [
  ["Flexible Schedule", "Go online, accept rides, and manage your availability.", Clock],
  ["Verified Ecosystem", "Driver and vehicle approval builds trust and platform safety.", BadgeCheck],
  ["EV Mobility", "Participate in Lebanon’s electric transportation shift.", Car],
  ["Earnings Tools", "Track rides, income, performance, and daily progress.", Wallet],
  ["Charging Support", "Future charging station partnerships including locations like Spinneys.", BatteryCharging],
  ["Grab-Me Connect", "Future in-car screens with login/logout, Wi-Fi, lost item support, and tracking.", Wifi],
  ["Shopping Assistance", "Optional elderly/grocery support add-on for short service rides.", ShoppingBag],
];

const fieldClass =
  "w-full min-w-0 rounded-2xl border border-white/10 bg-black/40 p-4 text-base outline-none focus:border-[#7AC943]";

export default function DriversPage() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const ar = lang === "ar";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    setLoading(true);
    setSubmitted(false);
    setError("");

    const formData = new FormData(form);
    const driverLicenseFile = formData.get("driver_license_file") as File;
const publicLicenseFile = formData.get("public_license_file") as File;
const idDocumentFile = formData.get("id_document_file") as File;
const selfieFile = formData.get("selfie_file") as File;

let driverLicenseUrl = "";
let publicLicenseUrl = "";
let idDocumentUrl = "";
let selfieUrl = "";

const uploadFile = async (file: File, folder: string) => {
  if (!file || file.size === 0) return "";

  const fileName = `${folder}/${Date.now()}-${file.name}`;

  const { error } = await supabase.storage
    .from("driver-documents")
    .upload(fileName, file);

  if (error) throw error;

  return fileName;
};

try {
  driverLicenseUrl = await uploadFile(
    driverLicenseFile,
    "driver-licenses"
  );

  if (publicLicenseFile?.size > 0) {
    publicLicenseUrl = await uploadFile(
      publicLicenseFile,
      "public-licenses"
    );
  }

  idDocumentUrl = await uploadFile(
    idDocumentFile,
    "id-documents"
  );

  selfieUrl = await uploadFile(
    selfieFile,
    "selfies"
  );
} catch (err) {
  console.error(err);
  setLoading(false);
  setError("Document upload failed.");
  return;
}

    const payload = {
      full_name: formData.get("full_name"),
      phone: formData.get("phone"),
      whatsapp: formData.get("whatsapp"),
      email: formData.get("email"),
      nationality: formData.get("nationality"),
      age: formData.get("age"),
      city: formData.get("city"),
      vehicle_type: formData.get("vehicle_type"),
      vehicle_brand: formData.get("vehicle_brand"),
      vehicle_model: formData.get("vehicle_model"),
      vehicle_year: formData.get("vehicle_year"),
      own_vehicle: formData.get("own_vehicle"),
      electric_vehicle: formData.get("electric_vehicle"),
      interested_in_grabme_ev: formData.get("interested_in_grabme_ev"),
      ev_purchase_plan_interest: formData.get("ev_purchase_plan_interest"),
      driving_license: formData.get("driving_license"),
      public_service_license: formData.get("public_service_license"),
      driver_license_file: driverLicenseUrl,
public_license_file: publicLicenseUrl,
id_document_file: idDocumentUrl,
selfie_file: selfieUrl,
      experience_years: formData.get("experience_years"),
      availability: formData.get("availability"),
      current_occupation: formData.get("current_occupation"),
      previous_platforms: formData.getAll("previous_platforms").join(","),
      notes: formData.get("notes"),
      language: lang,
      status: "new",
    };

    const { error } = await supabase.from("driver_applications").insert([payload]);

    setLoading(false);

    if (error) {
      setError(ar ? "حدث خطأ. الرجاء المحاولة مرة أخرى." : "Something went wrong. Please try again.");
      console.error(error);
      return;
    }

    setSubmitted(true);
    form.reset();
  }

  return (
    <>
      <Navbar />

      <main>
        <PageHero
          eyebrow="DRIVERS"
          title="Drive the future of electric mobility."
          text="GRABME gives drivers a modern digital platform for electric rides, premium customers, airport trips, corporate demand, student rides, and future smart vehicle tools."
        />

        <section className="bg-[#050505] px-6 py-24 text-white">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map(([title, text, Icon]) => (
              <div key={title as string} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
                <Icon className="mb-5 text-[#7AC943]" size={32} />
                <h2 className="text-xl font-black">{title as string}</h2>
                <p className="mt-3 text-sm leading-6 text-white/60">{text as string}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="driver-application" className="scroll-mt-24 bg-[#050505] px-4 pb-24 text-white md:px-6">
          <div className="mx-auto w-full max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 md:rounded-[3rem] md:p-10">
            <div className="mb-8 flex justify-end gap-2">
              <button onClick={() => setLang("en")} className={`rounded-xl px-4 py-2 font-bold ${!ar ? "bg-[#7AC943] text-black" : "bg-white/10"}`}>
                EN
              </button>
              <button onClick={() => setLang("ar")} className={`rounded-xl px-4 py-2 font-bold ${ar ? "bg-[#7AC943] text-black" : "bg-white/10"}`}>
                عربي
              </button>
            </div>

            <div dir={ar ? "rtl" : "ltr"}>
              <p className="mb-3 font-semibold text-[#7AC943]">
                {ar ? "طلب الانضمام كسائق" : "DRIVER APPLICATION"}
              </p>

              <h2 className="text-4xl font-black tracking-[-0.04em] md:text-5xl">
                {ar ? "قدّم للعمل كسائق مع GRABME." : "Apply to drive with GRABME."}
              </h2>

              <p className="mt-4 max-w-2xl text-white/60">
                {ar
                  ? "املأ هذا النموذج وسيتواصل معك فريق GRABME للخطوات التالية."
                  : "Fill this form to register your interest. The GRABME team will contact selected drivers for next onboarding steps."}
              </p>

              {submitted && (
                <div className="mt-8 flex items-center gap-3 rounded-2xl border border-[#7AC943]/30 bg-[#7AC943]/10 p-4 text-[#7AC943]">
                  <CheckCircle2 size={22} />
                  <p className="font-bold">
                    {ar ? "تم استلام طلبك. سنتواصل معك قريباً." : "Application received. We’ll contact you soon."}
                  </p>
                </div>
              )}

              {error && (
                <div className="mt-8 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-300">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-10 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
                <input name="full_name" required placeholder={ar ? "الاسم الكامل *" : "Full Name *"} className={fieldClass} />
                <input name="phone" required placeholder={ar ? "رقم الهاتف *" : "Phone Number *"} className={fieldClass} />
                <input name="whatsapp" placeholder={ar ? "رقم واتساب" : "WhatsApp Number"} className={fieldClass} />
                <input name="email" type="email" placeholder={ar ? "البريد الإلكتروني" : "Email Address"} className={fieldClass} />
                <div className="md:col-span-2 grid gap-4 md:grid-cols-2">
  <label className="rounded-2xl border border-white/10 bg-black/40 p-4">
    <span className="mb-2 block text-sm font-bold text-white">
  {ar ? "رخصة القيادة *" : "Driver License *"}
</span>

<p className="mb-3 text-xs leading-5 text-white/50">
  {ar
    ? "صوّر الرخصة أو ارفع صورة / ملف PDF."
    : "Take a photo or upload an image / PDF."}
</p>

<input
  type="file"
  name="driver_license_file"
  accept="image/*,.pdf"
  capture="environment"
  required
  className="w-full text-sm text-white"
/>
  </label>

  <label className="rounded-2xl border border-white/10 bg-black/40 p-4">
    <span className="mb-2 block text-sm font-bold text-white">
  {ar ? "رخصة النقل العمومي (اختياري)" : "Public Service License (Optional)"}
</span>

<p className="mb-3 text-xs leading-5 text-white/50">
  {ar
    ? "صوّرها أو ارفع صورة / ملف PDF. إذا لم تكن لديك الآن، يمكنك إحضارها لاحقاً خلال مرحلة الانضمام."
    : "Take a photo or upload an image / PDF. If you do not have it now, you can bring or send it during onboarding."}
</p>

<input
  type="file"
  name="public_license_file"
  accept="image/*,.pdf"
  capture="environment"
  className="w-full text-sm text-white"
/>
  </label>

  <label className="rounded-2xl border border-white/10 bg-black/40 p-4">
    <span className="mb-2 block text-sm font-bold text-white">
  {ar ? "الهوية أو جواز السفر *" : "National ID / Passport *"}
</span>

<p className="mb-3 text-xs leading-5 text-white/50">
  {ar
    ? "صوّر الهوية أو جواز السفر أو ارفع صورة / ملف PDF."
    : "Take a photo of your ID/passport or upload an image / PDF."}
</p>

<input
  type="file"
  name="id_document_file"
  accept="image/*,.pdf"
  capture="environment"
  required
  className="w-full text-sm text-white"
/>
  </label>

  <label className="rounded-2xl border border-white/10 bg-black/40 p-4">
    <span className="mb-2 block text-sm font-bold text-white">
  {ar ? "صورة شخصية *" : "Selfie Photo *"}
</span>

<p className="mb-3 text-xs leading-5 text-white/50">
  {ar
    ? "التقط صورة شخصية واضحة أو ارفع صورة من الهاتف."
    : "Take a clear selfie or upload a photo from your phone."}
</p>

<input
  type="file"
  name="selfie_file"
  accept="image/*"
  capture="user"
  required
  className="w-full text-sm text-white"
/>
  </label>
</div>
                <input name="nationality" placeholder={ar ? "الجنسية" : "Nationality"} className={fieldClass} />
                <input name="age" placeholder={ar ? "العمر" : "Age"} className={fieldClass} />
                <input name="city" required placeholder={ar ? "المدينة / المنطقة *" : "City / Area *"} className={fieldClass} />
                <input name="current_occupation" placeholder={ar ? "العمل الحالي" : "Current Occupation / Work"} className={fieldClass} />

                <input name="vehicle_type" placeholder={ar ? "نوع السيارة" : "Vehicle Type"} className={fieldClass} />
                <input name="vehicle_brand" placeholder={ar ? "ماركة السيارة" : "Vehicle Brand"} className={fieldClass} />
                <input name="vehicle_model" placeholder={ar ? "موديل السيارة" : "Vehicle Model"} className={fieldClass} />
                <input name="vehicle_year" placeholder={ar ? "سنة السيارة" : "Vehicle Year"} className={fieldClass} />

                <select name="own_vehicle" required className={fieldClass}>
                  <option value="">{ar ? "هل تملك سيارة؟ *" : "Do you own your vehicle? *"}</option>
                  <option value="yes">{ar ? "نعم" : "Yes"}</option>
                  <option value="no">{ar ? "لا" : "No"}</option>
                </select>

                <select name="electric_vehicle" required className={fieldClass}>
                  <option value="">{ar ? "هل السيارة كهربائية؟ *" : "Is your vehicle electric? *"}</option>
                  <option value="yes">{ar ? "نعم" : "Yes"}</option>
                  <option value="no">{ar ? "لا" : "No"}</option>
                  <option value="willing_to_switch">{ar ? "لا، لكن مستعد لقيادة سيارة كهربائية" : "No, but willing to drive EV"}</option>
                </select>

                <select name="driving_license" required className={fieldClass}>
                  <option value="">{ar ? "هل لديك رخصة قيادة صالحة؟ *" : "Valid driving license? *"}</option>
                  <option value="yes">{ar ? "نعم" : "Yes"}</option>
                  <option value="no">{ar ? "لا" : "No"}</option>
                </select>

                <select name="public_service_license" className={fieldClass}>
                  <option value="">{ar ? "هل لديك رخصة نقل عمومي؟" : "Public service driving license?"}</option>
                  <option value="yes">{ar ? "نعم" : "Yes"}</option>
                  <option value="no">{ar ? "لا" : "No"}</option>
                  <option value="in_progress">{ar ? "قيد التجهيز" : "In progress"} </option>
                </select>

                <select name="experience_years" className={fieldClass}>
                  <option value="">{ar ? "سنوات الخبرة في القيادة" : "Years of driving experience"}</option>
                  <option value="0-1">0–1</option>
                  <option value="2-5">2–5</option>
                  <option value="5-10">5–10</option>
                  <option value="10+">10+</option>
                </select>

                <select name="availability" required className={fieldClass}>
                  <option value="">{ar ? "التوفر *" : "Availability *"}</option>
                  <option value="full_time">{ar ? "دوام كامل" : "Full-time"}</option>
                  <option value="part_time">{ar ? "دوام جزئي" : "Part-time"}</option>
                  <option value="weekends">{ar ? "عطلات نهاية الأسبوع فقط" : "Weekends only"}</option>
                  <option value="flexible">{ar ? "مرن" : "Flexible"}</option>
                </select>

                <select name="interested_in_grabme_ev" required className={fieldClass}>
                  <option value="">{ar ? "هل تريد سيارة كهربائية من GRABME؟ *" : "Interested in a GRABME EV? *"}</option>
                  <option value="yes">{ar ? "نعم" : "Yes"}</option>
                  <option value="no">{ar ? "لا" : "No"}</option>
                  <option value="maybe">{ar ? "ربما، أريد معرفة التفاصيل" : "Maybe, I want more details"}</option>
                </select>

                <select name="ev_purchase_plan_interest" className={fieldClass}>
                  <option value="">{ar ? "نوع خطة السيارة الكهربائية المفضلة" : "Preferred EV plan"}</option>
                  <option value="purchase">{ar ? "شراء" : "Purchase"}</option>
                  <option value="monthly_installments">{ar ? "تقسيط شهري" : "Monthly installments"}</option>
                  <option value="rent_to_own">{ar ? "إيجار مع خيار التملك" : "Rent-to-own"}</option>
                  <option value="lease">{ar ? "تأجير" : "Lease"}</option>
                </select>

                <div className="w-full min-w-0 rounded-2xl border border-white/10 bg-black/40 p-4 md:col-span-2">
                  <p className="mb-4 text-white/80">
                    {ar ? "هل عملت سابقاً مع أي من هذه الفئات؟" : "Have you worked with:"}
                  </p>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      ["uber", "Uber"],
                      ["allo_taxi", "Allo Taxi"],
                      ["taxi_service", ar ? "شركة تاكسي" : "Local Taxi Service"],
                      ["chauffeur", ar ? "سائق خاص / Chauffeur" : "Private Driver / Chauffeur"],
                      ["delivery", ar ? "سائق توصيل" : "Delivery Driver"],
                      ["other", ar ? "غير ذلك" : "Other"],
                    ].map(([value, label]) => (
                      <label key={value} className="flex min-w-0 items-center gap-3 text-white/80">
                        <input type="checkbox" name="previous_platforms" value={value} className="h-4 w-4 shrink-0 accent-[#7AC943]" />
                        <span className="min-w-0 break-words">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <textarea name="notes" placeholder={ar ? "ملاحظات إضافية" : "Additional notes"} className={`${fieldClass} min-h-[140px] md:col-span-2`} />

                <div className="md:col-span-2">
                  <button type="submit" disabled={loading} className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#7AC943] px-8 py-4 font-black text-black transition hover:scale-[1.02] disabled:opacity-60 sm:w-auto">
                    {loading && <Loader2 className="animate-spin" size={18} />}
                    {ar ? "إرسال الطلب" : "Submit Application"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}