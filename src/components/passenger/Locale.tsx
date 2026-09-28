"use client";
import { createContext, useContext, useEffect, useSyncExternalStore } from 'react';
const Context = createContext({ ar: false, toggle: () => { } });
function subscribe(listener: () => void) { window.addEventListener('grabme-language', listener); window.addEventListener('storage', listener); return () => { window.removeEventListener('grabme-language', listener); window.removeEventListener('storage', listener); }; }
function snapshot() { try {
    return localStorage.getItem('grabme-language') === 'ar';
}
catch {
    return false;
} }
export function Locale({ children }: {
    children: React.ReactNode;
}) {
    const ar = useSyncExternalStore(subscribe, snapshot, () => false);
    useEffect(() => { document.documentElement.lang = ar ? 'ar' : 'en'; document.documentElement.dir = ar ? 'rtl' : 'ltr'; }, [ar]);
    return <Context.Provider value={{ ar, toggle: () => { try {
            localStorage.setItem('grabme-language', ar ? 'en' : 'ar');
            window.dispatchEvent(new Event('grabme-language'));
        }
        catch { } } }}>{children}</Context.Provider>;
}
export const useLocale = () => useContext(Context);
export function T({ en, ar }: {
    en: string;
    ar: string;
}) { return <>{useLocale().ar ? ar : en}</>; }
