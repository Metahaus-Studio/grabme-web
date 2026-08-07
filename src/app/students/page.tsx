import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { BadgePercent, GraduationCap, MapPinned, ShieldCheck, Smartphone, WalletCards } from "lucide-react";

export const metadata: Metadata = { title: "Students" };
const features = [
  ["Verified Student Access", "Student eligibility can be tied to a verified GRABME profile so the right program is applied to the right rider.", GraduationCap],
  ["Student Programs", "Student-oriented ride benefits and mobility access stay connected to the same passenger experience.", BadgePercent],
  ["Campus Journeys", "Use GRABME for university, home, work, and everyday movement through the standard booking flow.", MapPinned],
  ["Safer Profiles", "Structured accounts, driver visibility, ride history, and live trip information support a clearer student journey.", ShieldCheck],
  ["One Passenger App", "Students do not need a separate app - the program is part of the main GRABME passenger experience.", Smartphone],
  ["Program-Aware Value", "Eligible student benefits can be reflected through the rider account and mobility program configuration.", WalletCards],
];

export default function StudentsPage(){return <><Navbar/><main><PageHero eyebrow="GRABME STUDENTS" title="Electric mobility built around student life." text="Verified student access, program-aware mobility benefits, live ride visibility, and everyday EV transportation inside the same GRABME passenger experience."/>
<section className="bg-[#F7F7F7] px-6 py-24 text-black"><div className="mx-auto max-w-7xl"><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{features.map(([title,text,Icon]) => <div key={title as string} className="rounded-[2rem] bg-white p-8 shadow-sm"><Icon className="mb-5 text-[#53e36a]" size={34}/><h2 className="text-2xl font-black">{title as string}</h2><p className="mt-3 leading-7 text-black/60">{text as string}</p></div>)}</div></div></section>
<section className="bg-[#050505] px-6 py-24 text-white"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2"><div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 md:p-10"><p className="font-black text-[#53e36a]">FOR STUDENTS</p><h2 className="mt-3 text-4xl font-black tracking-[-0.05em]">One account. Everyday mobility.</h2><p className="mt-5 leading-8 text-white/58">Search a destination, choose an available EV ride, confirm pickup, follow driver arrival, and stay connected through the live trip - with eligible student benefits attached to the account.</p></div><div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 md:p-10"><p className="font-black text-[#53e36a]">FOR PROGRAMS</p><h2 className="mt-3 text-4xl font-black tracking-[-0.05em]">Structured access, not a separate product.</h2><p className="mt-5 leading-8 text-white/58">Student mobility is part of the wider GRABME platform, allowing verified programs to coexist with the same passenger, driver, ride, and operational foundations.</p></div></div></section>
</main><Footer/></>}
