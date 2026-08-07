import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { BarChart3, Building2, CreditCard, FileText, Plane, ShieldCheck, Users } from "lucide-react";
export const metadata: Metadata = { title: "Business Mobility" };
const features = [
  ["Company Accounts", "Create a structured mobility program for employees, teams, executives, and approved riders.", Building2],
  ["Employee Mobility", "Support commuting, meetings, airport movement, and everyday business transportation through GRABME.", Users],
  ["Central Billing", "Keep organization-level payment and billing activity visible within the business mobility program.", CreditCard],
  ["Ride Reporting", "Review ride activity and usage summaries for clearer company mobility oversight.", BarChart3],
  ["Program Controls", "Manage eligible users and business mobility access from the operational layer.", FileText],
  ["Airport Travel", "Use the same GRABME business program for eligible employee and executive airport journeys.", Plane],
  ["Account Security", "Keep company accounts, payments, ride data, and location-sensitive access within controlled platform boundaries.", ShieldCheck],
];
export default function CorporatePage(){return <><Navbar/><main><PageHero eyebrow="GRABME BUSINESS" title="Electric mobility for modern organizations." text="One business mobility layer for employees, company programs, airport travel, billing visibility, reporting, and operational control."/>
<section className="bg-[#F7F7F7] px-6 py-24 text-black"><div className="mx-auto max-w-7xl"><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{features.map(([title,text,Icon]) => <div key={title as string} className="rounded-[2rem] bg-white p-8 shadow-sm"><Icon className="mb-5 text-[#53e36a]" size={34}/><h2 className="text-2xl font-black">{title as string}</h2><p className="mt-3 leading-7 text-black/60">{text as string}</p></div>)}</div></div></section>
<section className="bg-[#050505] px-6 py-24 text-white"><div className="mx-auto max-w-7xl"><div className="mb-12 max-w-3xl"><p className="font-black text-[#53e36a]">ONE BUSINESS JOURNEY</p><h2 className="mt-3 text-4xl font-black tracking-[-0.05em] md:text-6xl">Employees ride. Companies stay in control.</h2></div><div className="grid gap-5 md:grid-cols-3">{[["Rider experience","Employees use the same GRABME passenger journey for eligible business rides."],["Program layer","Company eligibility, usage, billing, and controls sit behind the rider experience."],["Operational visibility","Mission Control provides the administrative foundation for company mobility oversight."]].map(([t,x]) => <div key={t} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"><h3 className="text-2xl font-black">{t}</h3><p className="mt-4 leading-7 text-white/58">{x}</p></div>)}</div><a href="/contact" className="mt-8 inline-flex rounded-2xl bg-[#53e36a] px-6 py-4 text-sm font-black text-black">Talk to GRABME Business</a></div></section>
</main><Footer/></>}
