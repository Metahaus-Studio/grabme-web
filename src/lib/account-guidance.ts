import type { Plan, Profile } from './passenger-api';

export type AccountGuidance = {
    id: string;
    title: { en: string; ar: string };
    detail: { en: string; ar: string };
    href: string;
};

/** Deterministic guidance from the signed-in Passenger response, without inferred benefits. */
export function accountGuidance(profile: Profile, plans: Plan[], now = Date.now()): AccountGuidance[] {
    const items: AccountGuidance[] = [];
    const membership = profile.currentSubscription;
    const end = membership?.endsAt ? Date.parse(membership.endsAt) : NaN;
    if (membership && Number.isFinite(end) && end <= now) {
        items.push({ id: 'membership-ended', title: { en: 'Check your membership status', ar: 'تحقّق من حالة عضويتك' }, detail: { en: 'The returned end date has passed. Refresh your account or contact Support before relying on membership benefits.', ar: 'انقضى تاريخ الانتهاء المُعاد. حدّث حسابك أو تواصل مع الدعم قبل الاعتماد على مزايا العضوية.' }, href: '/contact' });
    } else if (membership?.status === 'ACTIVE' && Number.isFinite(end) && end - now <= 7 * 86400000) {
        items.push({ id: 'membership-ending', title: { en: 'Your membership end date is approaching', ar: 'موعد انتهاء عضويتك يقترب' }, detail: { en: 'Your account shows an end date within seven days. Contact Support for the available next steps. Automatic renewal is not confirmed.', ar: 'يعرض حسابك تاريخ انتهاء خلال سبعة أيام. تواصل مع الدعم لمعرفة الخيارات المتاحة. التجديد التلقائي غير مؤكّد.' }, href: '/contact' });
    }
    if (!membership && plans.length > 0) {
        items.push({ id: 'eligible-plans', title: { en: 'Explore your eligible plans', ar: 'اكتشف الخطط المؤهّلة لك' }, detail: { en: 'Your account has available plans listed below. Compare their returned benefits. Online purchase remains unavailable until approved.', ar: 'توجد خطط متاحة لحسابك أدناه. قارن المزايا المُعادة. يبقى الشراء الإلكتروني غير متاح حتى اعتماده.' }, href: '#eligible-plans' });
    }
    if (profile.studentMember?.verified) {
        items.push({ id: 'student-verified', title: { en: 'Your student status is verified', ar: 'تمّ التحقّق من صفتك الطلابية' }, detail: { en: 'Student verification is linked to this Passenger account. Only benefits returned for your eligible plan apply.', ar: 'يرتبط التحقّق الطلابي بحساب الراكب هذا. تُطبّق فقط المزايا المُعادة لخطتك المؤهّلة.' }, href: '/students' });
    }
    if (profile.corporateAccount) {
        items.push({ id: 'corporate-linked', title: { en: 'Your company account is linked', ar: 'حساب شركتك مرتبط' }, detail: { en: 'Your existing company program is linked to this Passenger identity. Travel access and billing remain subject to the approved program.', ar: 'يرتبط برنامج شركتك الحالي بهوية الراكب هذه. يخضع التنقّل والفوترة للبرنامج المعتمد.' }, href: '/corporate' });
    }
    return items;
}
