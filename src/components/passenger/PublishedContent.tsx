"use client";
import { websiteCopy } from '@/lib/website-copy';
import { useEffect, useState } from 'react';
import { apiEnabled, request } from '@/lib/passenger-api';
import { useLocale, T } from './Locale';
type Text = {
    en: string;
    ar: string;
};
type Publication = {
    id: string;
    expiresAt: string;
    content: {
        headline: Text;
        coverage: Text;
        services: {
            id: string;
            status: 'AVAILABLE' | 'LIMITED' | 'UNAVAILABLE';
            details: Text;
        }[];
        appStore?: string;
        playStore?: string;
    };
};
function storeLink(value: string | undefined, host: string) { try {
    const url = new URL(value ?? '');
    return url.protocol === 'https:' && url.hostname === host ? url.href : null;
}
catch {
    return null;
} }
export function PublishedContent({ download = false }: {
    download?: boolean;
}) {
    const { ar } = useLocale();
    const [publication, setPublication] = useState<Publication | null>(null);
    useEffect(() => { if (!apiEnabled)
        return; const abort = new AbortController(); let expiry: ReturnType<typeof setTimeout> | undefined; request<Publication | null>('/website/content', { signal: abort.signal }).then(value => { if (!value || !Number.isFinite(Date.parse(value.expiresAt)) || Date.parse(value.expiresAt) <= Date.now() || !value.content?.coverage?.en || !value.content?.coverage?.ar || !Array.isArray(value.content.services))
        return; setPublication(value); expiry = setTimeout(() => setPublication(null), Math.min(Date.parse(value.expiresAt) - Date.now(), 2147483647)); }).catch(() => { }); return () => { abort.abort(); if (expiry)
        clearTimeout(expiry); }; }, []);
    if (!publication && !download)
        return null;
    if (download) {
        const apple = storeLink(publication?.content.appStore, 'apps.apple.com');
        const google = storeLink(publication?.content.playStore, 'play.google.com');
        return <div className="store-downloads"><div className="actions">{apple ? <a className="button" href={apple} rel="noopener noreferrer"><T en="Download on the App Store" ar="تنزيل من App Store"/></a> : <button className="button secondary" disabled>App Store</button>}{google ? <a className="button" href={google} rel="noopener noreferrer"><T en="Get it on Google Play" ar="تنزيل من Google Play"/></a> : <button className="button secondary" disabled>Google Play</button>}</div>{(!apple || !google) && <p className="fine"><T en="Download links are not available yet. Store buttons will open the official listings when published." ar="روابط التنزيل غير متاحة بعد. ستفتح أزرار المتاجر الصفحات الرسمية عند نشرها."/></p>}</div>;
    }
    if (!publication) return null;
    return <section className="feature-panel"><p className="eyebrow"><T en="CURRENT SERVICE INFORMATION" ar="معلومات الخدمة الحالية"/></p><h2>{websiteCopy(publication.content.headline[ar ? 'ar' : 'en'])}</h2><p>{websiteCopy(publication.content.coverage[ar ? 'ar' : 'en'])}</p><ul>{publication.content.services.map(service => <li key={service.id}><strong>{service.id}</strong>: {ar ? { AVAILABLE: 'متاح', LIMITED: 'توفّر محدود', UNAVAILABLE: 'غير متاح' }[service.status] : { AVAILABLE: 'Available', LIMITED: 'Limited availability', UNAVAILABLE: 'Unavailable' }[service.status]}. {websiteCopy(service.details[ar ? 'ar' : 'en'])}</li>)}</ul></section>;
}
