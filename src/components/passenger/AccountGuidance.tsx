"use client";
import Link from 'next/link';
import { accountGuidance } from '@/lib/account-guidance';
import type { Plan, Profile } from '@/lib/passenger-api';
import { T } from './Locale';

export function AccountGuidance({ profile, plans, checkedAt }: { profile: Profile; plans: Plan[]; checkedAt: number }) {
    const items = accountGuidance(profile, plans, checkedAt);
    if (!items.length) return null;
    return <section aria-labelledby="account-guidance-title">
        <h3 id="account-guidance-title"><T en="Useful next steps" ar="خطوات مفيدة تالية" /></h3>
        <p className="fine"><T en="Based on the account information returned at your last refresh." ar="استناداً إلى معلومات الحساب المُعادة عند آخر تحديث." /></p>
        <div className="two-grid">{items.map(item => <Link key={item.id} className="feature-panel" href={item.href}>
            <h4><T en={item.title.en} ar={item.title.ar} /></h4>
            <p><T en={item.detail.en} ar={item.detail.ar} /></p>
        </Link>)}</div>
    </section>;
}
