"use client";
import {AvailabilityAction} from "./AvailabilityAction";
import { AccountGuidance } from './AccountGuidance';
import { websiteCopy } from '@/lib/website-copy';
import { useRef, useState } from 'react';
import { apiEnabled, request, type Plan, type Profile } from '@/lib/passenger-api';
import { T, useLocale } from './Locale';
type Transaction = {
    id: string;
    amount: number;
    type: string;
    createdAt: string;
};
export function Account() {
    const { ar } = useLocale();
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const [sent, setSent] = useState(false);
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState('');
    const [token, setToken] = useState('');
    const [checkedAt,setCheckedAt]=useState(0);
    const [profile, setProfile] = useState<Profile | null>(null);
    const [plans, setPlans] = useState<Plan[]>([]);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
 const [currency,setCurrency]=useState('');
 const [nextCursor,setNextCursor]=useState<string|null>(null);
    const generation = useRef(0);
    function logout() { generation.current++; setToken(''); setProfile(null); setPlans([]); setTransactions([]); setCurrency(''); setNextCursor(null); setCode(''); setSent(false); setError(''); setBusy(false); }
    function explain(err: unknown) { const message = err instanceof Error ? err.message : ''; if (message === 'SESSION_EXPIRED') {
        logout();
        setError(ar ? 'انتهت الجلسة. سجّل الدخول مجدداً.' : 'Your session expired. Please sign in again.');
    }
    else
        setError(ar ? 'تعذّر إكمال الطلب. حاول مجدداً بعد قليل.' : 'We could not complete that request. Please wait a moment and try again.'); }
    async function load(accessToken: string) { const current = ++generation.current; setBusy(true); setError(''); try {
        const [p, c, h] = await Promise.all([request<Profile>('/users/me/profile', { token: accessToken }), request<Plan[]>('/users/me/subscription-plans', { token: accessToken }), request<Transaction[] | {
                items: Transaction[];currency?:string;nextCursor?:string|null;
            }>('/users/me/wallet-transactions', { token: accessToken })]);
        if (current !== generation.current)
            return;
        setProfile(p);
        setCheckedAt(Date.now());
        setPlans(c);
        setTransactions(Array.isArray(h) ? h : h.items ?? []);
 setCurrency(Array.isArray(h)?'':h.currency??'');
 setNextCursor(Array.isArray(h)?null:h.nextCursor??null);
    }
    catch (err) {
        if (current === generation.current)
            explain(err);
    }
    finally {
        if (current === generation.current)
            setBusy(false);
    } }
    async function moreHistory(){if(!nextCursor||busy)return;const current=generation.current;setBusy(true);setError('');try{const result=await request<{items:Transaction[];nextCursor:string|null}>('/users/me/wallet-transactions?before='+encodeURIComponent(nextCursor),{token});if(current===generation.current){setTransactions(items=>[...items,...result.items.filter(item=>!items.some(existing=>existing.id===item.id))]);setNextCursor(result.nextCursor)}}catch(err){if(current===generation.current)explain(err)}finally{if(current===generation.current)setBusy(false)}}
 async function submit(e: React.FormEvent) { e.preventDefault(); if (!apiEnabled || busy)
        return; setBusy(true); setError(''); try {
        if (!sent) {
            await request('/auth/send-otp', { body: { phone: phone.trim(), role: 'PASSENGER' } });
            setSent(true);
        }
        else {
            const auth = await request<{
                accessToken: string;
                user: {
                    role: string;
                };
            }>('/auth/verify-otp', { body: { phone: phone.trim(), otpCode: code } });
            if (auth.user.role !== 'PASSENGER')
                throw new Error('PASSENGER_REQUIRED');
            setToken(auth.accessToken);
            await load(auth.accessToken);
        }
    }
    catch (err) {
        explain(err);
    }
    finally {
        setBusy(false);
    } }
    return <div className="account-panel">{!token ? <><p><T en="Use the same phone number as your Passenger app. Your session stays in this tab's memory and ends when you reload or sign out." ar="استخدم رقم هاتفك نفسه في تطبيق الراكب. تنتهي الجلسة عند إعادة تحميل الصفحة أو تسجيل الخروج."/></p>{!apiEnabled && <p className="notice"><T en="Website sign-in is not connected in this preview. Continue using your Passenger app." ar="تسجيل الدخول غير متصل في هذه المعاينة. يمكنك متابعة استخدام تطبيق الراكب."/></p>}<form onSubmit={submit}><label><T en="Phone number with country code" ar="رقم الهاتف مع رمز البلد"/><input type="tel" autoComplete="tel" dir="ltr" value={phone} readOnly={sent} onChange={e => setPhone(e.target.value)} pattern="\+[0-9]{7,15}" placeholder="+961…" required/></label>{sent && <label><T en="Six-digit verification code" ar="رمز التحقّق من ستة أرقام"/><input inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" maxLength={6} value={code} onChange={e => setCode(e.target.value)} required/></label>}{!apiEnabled ? <AvailabilityAction kind="account"/> : <button className="button" disabled={busy}>{busy ? <T en="Please wait…" ar="يرجى الانتظار…"/> : sent ? <T en="Verify and sign in" ar="تحقّق وسجّل الدخول"/> : <T en="Send verification code" ar="أرسل رمز التحقّق"/>}</button>}{sent && <button type="button" className="text-link" disabled={busy} onClick={() => { setSent(false); setCode(''); }}><T en="Change number / request another code" ar="تغيير الرقم / طلب رمز آخر"/></button>}</form></> : <><div className="actions"><h2><T en="Your account" ar="حسابك"/></h2><button className="button secondary" onClick={logout}><T en="Sign out" ar="تسجيل الخروج"/></button><button className="text-link" disabled={busy} onClick={() => load(token)}><T en="Refresh" ar="تحديث"/></button></div>{busy && <p role="status"><T en="Loading your account…" ar="جارٍ تحميل حسابك…"/></p>}{profile && <><h3>{websiteCopy(profile.name ?? "")}</h3><AccountGuidance profile={profile} plans={plans} checkedAt={checkedAt}/><section className="feature-panel"><h3><T en="Membership" ar="العضوية"/></h3>{profile.currentSubscription ? <><p>{websiteCopy(profile.currentSubscription.subscriptionPlan.name ?? "")} · {profile.currentSubscription.status}</p><p><T en="Membership end date" ar="تاريخ انتهاء العضوية"/>: {profile.currentSubscription.endsAt ? new Date(profile.currentSubscription.endsAt).toLocaleDateString(ar ? 'ar-LB' : 'en-GB') : (ar ? 'غير محدد' : 'Not specified')}</p></> : <p><T en="No active membership is returned for your account." ar="لا توجد عضوية نشطة لحسابك."/></p>}<p><T en="An end date is not a confirmed automatic renewal. Use in-app support for cancellation and renewal questions." ar="تاريخ الانتهاء لا يعني التجديد التلقائي. تواصل مع الدعم في التطبيق للاستفسار عن الإلغاء والتجديد."/></p></section><h3 id="eligible-plans"><T en="Your eligible plans" ar="الخطط المتاحة لك"/></h3>{plans.length ? <div className="two-grid">{plans.map(plan => <section className="feature-panel" key={plan.id}><h3>{websiteCopy(plan.name ?? "")}</h3><p>{websiteCopy(plan.description ?? "")}</p><dl><dt><T en="Program" ar="البرنامج"/></dt><dd>{websiteCopy(plan.type ?? "")}</dd><dt><T en="Ride credits" ar="رصيد الرحلات"/></dt><dd>{plan.monthlyRideCredits ?? 0}</dd><dt><T en="Ride discount" ar="خصم الرحلات"/></dt><dd>{plan.discountPercent ?? 0}%</dd></dl><p className="fine"><T en="Online purchase is unavailable pending approved payment and billing terms." ar="الشراء الإلكتروني غير متاح لحين اعتماد الدفع وشروط الفوترة."/></p></section>)}</div> : <p><T en="No eligible plans are currently available." ar="لا توجد خطط مؤهّلة متاحة حالياً."/></p>}<h3><T en="Eligibility" ar="الأهلية"/></h3><p><T en="Student verification" ar="التحقّق الطلابي"/>: {profile.studentMember?.verified ? (ar ? 'موثّق' : 'Verified') : (ar ? 'غير موثّق' : 'Not verified')}</p><p><T en="Corporate account" ar="حساب الشركة"/>: {websiteCopy(profile.corporateAccount?.companyName ?? (ar ? 'غير مرتبط' : 'Not linked'))}</p>{nextCursor&&<button className="text-link" disabled={busy} onClick={moreHistory}><T en="Load older wallet activity" ar="تحميل حركة المحفظة الأقدم"/></button>}<h3><T en="Wallet activity" ar="حركة المحفظة"/></h3><p className="fine"><T en="Wallet entries are not tax receipts, reward points or membership qualification." ar="قيود المحفظة ليست إيصالات ضريبية أو نقاط مكافآت أو تأهيلاً للعضوية."/></p>{transactions.length ? <ul className="transactions">{transactions.map(t => <li key={t.id}><span>{websiteCopy(t.type ?? "")}</span><span>{t.amount} {currency}</span><time>{new Date(t.createdAt).toLocaleDateString(ar ? 'ar-LB' : 'en-GB')}</time></li>)}</ul> : <p><T en="No wallet activity to display." ar="لا توجد حركة محفظة لعرضها."/></p>}</>}</>}{error && <p role="alert" className="error">{error}</p>}</div>;
}
