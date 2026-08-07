import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { BarChart3, Building2, CarFront, Command, GraduationCap, Plane, Radio, Star, Users, WalletCards } from "lucide-react";
export const metadata: Metadata = { title: "Mission Control" };

const capabilities = [
  ["Ride Operations", "See and manage the ride lifecycle across active and completed mobility activity.", CarFront],
  ["Dispatch", "Support ride assignment and operational visibility across passenger and driver activity.", Radio],
  ["Drivers", "Manage driver profiles, onboarding, status, and operational records.", Users],
  ["Passengers", "Maintain passenger visibility and account-level operational context.", Users],
  ["Corporate", "Support company mobility programs and business account oversight.", Building2],
  ["Students", "Manage student mobility programs and verified program access.", GraduationCap],
  ["Airport", "Keep airport journeys visible within the same operational platform.", Plane],
  ["Memberships", "Support rider program and membership administration.", Star],
  ["Payments", "Maintain operational visibility across passenger payment activity, ride settlement context, and driver payout workflows.", WalletCards],
  ["Reporting", "Review mobility activity and program data through the administrative experience.", BarChart3],
];

export default function MissionControlPage(){return <><Navbar/><main><PageHero eyebrow="GRABME MISSION CONTROL" title="Every ride. One operating layer." text="Mission Control is the administrative foundation behind GRABME - connecting rides, dispatch, drivers, passengers, business programs, students, airport mobility, memberships, and reporting."/>
<section className="bg-[#050505] px-6 py-24 text-white"><div className="mx-auto max-w-7xl"><div className="mb-12 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#53e36a]/12 text-[#53e36a]"><Command size={32}/></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{capabilities.map(([title,text,Icon]) => <div key={title as string} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7"><Icon className="mb-5 text-[#53e36a]" size={30}/><h2 className="text-xl font-black">{title as string}</h2><p className="mt-3 text-sm leading-6 text-white/55">{text as string}</p></div>)}</div></div></section>
<section className="bg-[#f4f5f1] px-6 py-24 text-black"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2"><div><p className="font-black text-[#5b982f]">OPERATIONS, NOT JUST SCREENS</p><h2 className="mt-3 text-4xl font-black tracking-[-0.05em] md:text-6xl">The system behind the passenger and driver apps.</h2></div><div className="grid gap-4">{[["Passenger requests a ride","Mission Control receives operational context around the ride and its lifecycle."],["Driver receives and executes","Driver availability, matching, pickup, trip progress, and completion remain connected."],["Programs stay attached","Corporate, student, airport, membership, wallet, and rating context remains part of the platform."],["Operations stay visible","Administrators have one place to oversee mobility activity and supporting programs."]].map(([t,x]) => <div key={t} className="rounded-2xl bg-white p-6"><h3 className="font-black">{t}</h3><p className="mt-2 leading-7 text-black/58">{x}</p></div>)}</div></div></section>
</main><Footer/></>}
