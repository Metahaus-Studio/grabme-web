"use client";
import { useRef, useState } from 'react';
import { apiEnabled, request } from '@/lib/passenger-api';
import { T, useLocale } from './Locale';
export function Application({ corporate = false }: {
    corporate?: boolean;
}) {
    const { ar } = useLocale();
    const [category, setCategory] = useState(corporate ? 'corporate' : 'retail');
    const [review, setReview] = useState(false);
    const enabled = apiEnabled && process.env.NEXT_PUBLIC_WEBSITE_INTAKE_ENABLED === 'true';
    const [busy, setBusy] = useState(false), [error, setError] = useState(''), [reference, setReference] = useState('');
    const key = useRef(''), flight = useRef(false);
    async function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!enabled) {
            setReview(true);
            return;
        }
        if (flight.current || reference)
            return;
        const values = new FormData(event.currentTarget);
        if (values.get('website'))
            return;
        if (!key.current)
            key.current = crypto.randomUUID();
        flight.current = true;
        setBusy(true);
        setError('');
        const number = (name: string) => values.get(name) ? Number(values.get(name)) : undefined;
        try {
            const result = await request<{
                reference: string;
                status: string;
            }>('/website/applications', { body: { idempotencyKey: key.current, kind: corporate ? 'CORPORATE' : 'PARTNERSHIP', category, company: values.get('company'), contact: values.get('contact'), email: values.get('email'), locations: values.get('locations'), interest: values.get('interest'), teamSize: corporate ? number('teamSize') : undefined, volume: !corporate && category !== 'advertising' ? number('volume') : undefined, campaign: category === 'advertising' ? values.get('campaign') : undefined, consent: true, consentVersion: 'website-intake-v1', website: '' } });
            if (!result.reference)
                throw new Error('INVALID_RESPONSE');
            setReference(result.reference);
        }
        catch {
            setError(ar ? 'تعذّر تأكيد الطلب. احتفظنا بالحقول لإعادة المحاولة.' : 'We could not confirm the application. Your fields are retained; retry to recover the same submission.');
        }
        finally {
            flight.current = false;
            setBusy(false);
        }
    }
    return <section className="account-panel"><h2><T en={corporate ? 'Tell us about your team' : 'Start a partnership conversation'} ar={corporate ? 'أخبرنا عن فريقك' : 'ابدأ حوار شراكة'}/></h2>{!enabled && <p className="notice"><T en="Application preview. Submissions are not connected yet. Nothing entered here is sent or saved. Please do not enter sensitive information." ar="معاينة الطلب. الإرسال غير متصل بعد. لا تُرسل المعلومات المُدخلة هنا ولا تُحفظ. يرجى عدم إدخال معلومات حساسة."/></p>}<form onSubmit={submit} onChange={() => { setReview(false); key.current = ''; }}><fieldset disabled={busy || Boolean(reference)}><input name="website" tabIndex={-1} autoComplete="off" className="honeypot" aria-hidden="true"/><div className="two-grid"><label><T en="Company name" ar="اسم الشركة"/><input name="company" autoComplete="organization" minLength={2} maxLength={150} required/></label>{!corporate && <label><T en="Business category" ar="نوع النشاط"/><select name="category" value={category} onChange={e => setCategory(e.target.value)}>{[['retail', 'Grocery & retail', 'البقالة والتجارة'], ['rewards', 'Restaurants & rewards', 'المطاعم والمكافآت'], ['hospitality', 'Hotels, venues & airport services', 'الفنادق وخدمات المطار'], ['advertising', 'Advertising', 'الإعلانات'], ['other', 'Other', 'أخرى']].map(([value, en, arabic]) => <option key={value} value={value}>{ar ? arabic : en}</option>)}</select></label>}<label><T en="Contact person" ar="الشخص المسؤول"/><input name="contact" autoComplete="name" minLength={2} maxLength={100} required/></label><label><T en="Work email" ar="البريد الإلكتروني للعمل"/><input name="email" type="email" autoComplete="email" maxLength={254} required/></label><label><T en="Locations / service area" ar="المواقع / منطقة الخدمة"/><input name="locations" minLength={2} maxLength={300} required/></label>{corporate ? <label><T en="Team size" ar="حجم الفريق"/><input type="number" name="teamSize" min={1} max={1000000} required/></label> : category === 'advertising' ? <label><T en="Campaign audience and goals" ar="جمهور الحملة وأهدافها"/><input name="campaign" minLength={5} maxLength={500} required/></label> : <label><T en="Expected monthly volume (optional)" ar="الحجم الشهري المتوقع (اختياري)"/><input name="volume" type="number" min={0} max={10000000}/></label>}</div><label><T en={corporate ? 'Travel needs' : 'Partnership interest'} ar={corporate ? 'احتياجات التنقّل' : 'اهتمامك بالشراكة'}/><textarea name="interest" minLength={10} maxLength={2000} rows={4} required/></label><label className="checkbox"><input type="checkbox" required/><T en={enabled ? "I consent to GrabMe using this information to review and respond to my application." : "I understand this is a local preview, not a submitted application."} ar={enabled ? "أوافق على استخدام GrabMe لهذه المعلومات لمراجعة طلبي والرد عليه." : "أفهم أن هذه معاينة محلية وليست طلباً مُرسلاً."}/></label><button type="submit" className="button"><T en={busy ? "Sending…" : enabled ? "Submit application" : "Review preview"} ar={busy ? "جارٍ الإرسال…" : enabled ? "إرسال الطلب" : "مراجعة المعاينة"}/></button></fieldset>{reference && <p role="status" className="notice"><T en="Application received for review. Reference:" ar="استُلم الطلب للمراجعة. الرقم المرجعي:"/> {reference}. <T en="This is not a partnership activation or credit approval." ar="هذا ليس تفعيل شراكة أو موافقة ائتمانية."/></p>}{error && <p role="alert" className="error">{error}</p>}{review && <p role="status" className="notice"><T en="Your fields pass local validation. No application was submitted, no reference was created, and no commercial benefits were activated." ar="اجتازت الحقول التحقّق المحلي. لم يُرسل طلب ولم يُنشأ رقم مرجعي ولم تُفعّل مزايا تجارية."/></p>}</form></section>;
}
