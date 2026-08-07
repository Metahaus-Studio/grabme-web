import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, BriefcaseBusiness, Gamepad2, LogIn, MonitorPlay, Route, ShieldCheck, Wifi } from "lucide-react";

export const metadata: Metadata = {
  title: "GRABME Connect",
  description: "The connected in-car experience for GRABME rides: passenger login, live journey information, entertainment, cabin modes, and ride-linked safety.",
};

const features = [
  ["Passenger Login", "Start a ride-linked cabin session so the in-car experience follows the authenticated passenger and active trip.", LogIn],
  ["Live Journey", "Keep route progress, destination, ETA, driver details, vehicle details, and trip state visible in the cabin.", Route],
  ["Entertainment", "Open the current in-car entertainment surface during the journey from the GRABME Connect screen.", MonitorPlay],
  ["Kids Mode", "A simplified child-friendly mode for family journeys and a clearer cabin experience.", Gamepad2],
  ["Work Mode", "A focused in-car mode for passengers who want a quieter, more work-oriented journey.", BriefcaseBusiness],
  ["Wi-Fi Portal", "Support the connected cabin experience through the in-vehicle GRABME interface and available network connection.", Wifi],
  ["Ride-Linked Safety", "Keep core trip, driver, vehicle, and safety information attached to the active ride session.", ShieldCheck],
];

const flow = [
  ["01", "Enter the vehicle", "The passenger boards a GRABME EV equipped with the current Connect experience."],
  ["02", "Open GRABME Connect", "The cabin screen presents the connected ride surface for the active journey."],
  ["03", "Continue the ride", "Live journey information remains visible while entertainment or a cabin mode can be used."],
  ["04", "End with the trip", "The connected passenger session follows the ride lifecycle and closes with the completed journey."],
];

export default function GrabMeConnectPage() {
  return <><Navbar/><main className="bg-[#050505] text-white">
    <section className="relative overflow-hidden px-6 pb-24 pt-36 md:pb-32 md:pt-44"><div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_25%,rgba(122,201,67,0.2),transparent_27%)]"/><div className="relative mx-auto max-w-7xl"><p className="font-black text-[#53e36a]">GRABME CONNECT</p><h1 className="mt-4 max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.065em] md:text-8xl">Your ride, <span className="text-[#53e36a]">inside the cabin.</span></h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/60 md:text-xl">GRABME Connect extends the active ride into the vehicle with passenger login, live trip visibility, entertainment, and dedicated cabin modes.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#experience" className="inline-flex items-center gap-2 rounded-2xl bg-[#53e36a] px-6 py-4 text-sm font-black text-black">Explore Connect <ArrowRight size={17}/></a><Link href="/#download" className="rounded-2xl border border-white/15 px-6 py-4 text-sm font-bold text-white">Get GRABME</Link></div><p className="mt-6 text-xs text-white/34">Designed &amp; built by MetaHaus.</p></div></section>

    <section id="experience" className="border-y border-white/10 bg-white/[0.025] px-6 py-24 md:py-32"><div className="mx-auto max-w-7xl"><div className="mb-12 max-w-3xl"><p className="font-black text-[#53e36a]">CURRENT CONNECT EXPERIENCE</p><h2 className="mt-3 text-4xl font-black tracking-[-0.05em] md:text-6xl">Everything the passenger needs during the active ride.</h2></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{features.map(([title,text,Icon]) => <div key={title as string} className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7"><Icon className="mb-5 text-[#53e36a]" size={30}/><h3 className="text-xl font-black">{title as string}</h3><p className="mt-3 text-sm leading-6 text-white/52">{text as string}</p></div>)}</div></div></section>

    <section className="px-6 py-24 md:py-32"><div className="mx-auto max-w-7xl"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><div><p className="font-black text-[#53e36a]">RIDE-LINKED BY DESIGN</p><h2 className="mt-3 text-4xl font-black tracking-[-0.05em] md:text-6xl">The cabin experience follows the journey.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-white/58">Connect is not a separate destination. It is the in-car continuation of the GRABME ride, designed around the same passenger, vehicle, driver, and trip lifecycle.</p></div><div className="grid gap-4 sm:grid-cols-2">{flow.map(([n,title,text]) => <div key={n} className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7"><p className="text-sm font-black text-[#53e36a]">{n}</p><h3 className="mt-4 text-2xl font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-white/52">{text}</p></div>)}</div></div></div></section>

    <section className="bg-[#f4f5f1] px-6 py-24 text-black md:py-28"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2"><div className="rounded-[2.5rem] bg-white p-8 md:p-10"><p className="font-black text-[#5b982f]">CONNECTED TO THE RIDE</p><h2 className="mt-3 text-4xl font-black tracking-[-0.05em]">One passenger experience, from phone to cabin.</h2><p className="mt-5 leading-8 text-black/58">The Passenger app owns booking and the active trip. GRABME Connect extends that same journey inside supported vehicles, keeping the cabin experience aligned with the ride rather than creating a second disconnected product.</p></div><div className="rounded-[2.5rem] bg-black p-8 text-white md:p-10"><p className="font-black text-[#53e36a]">VEHICLE BOUNDARY</p><h2 className="mt-3 text-4xl font-black tracking-[-0.05em]">Software-led, vehicle-aware.</h2><p className="mt-5 leading-8 text-white/58">GRABME Connect controls the software experience shown on supported in-car devices. Physical vehicle functions remain dependent on the capabilities and authorized interfaces provided by each EV manufacturer.</p></div></div></section>

    <section className="px-6 py-20 text-center"><p className="text-sm font-semibold text-white/38">GRABME CONNECT</p><p className="mt-2 text-lg font-black">Designed &amp; built by MetaHaus.</p></section>
  </main><Footer/></>;
}
