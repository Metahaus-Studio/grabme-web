import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { BatteryCharging, Building2, CarFront, Command, MapPinned, TabletSmartphone } from "lucide-react";
export const metadata: Metadata = { title: "About GRABME" };

const principles = [
  ["Electric by default", "GRABME is built around an EV-only fleet rather than treating electric vehicles as a secondary ride category.", BatteryCharging],
  ["One passenger journey", "Booking, matching, pickup, live ride, completion, ratings, programs, and airport mobility stay connected.", CarFront],
  ["Built for operators", "Mission Control gives the mobility business an administrative layer behind the passenger and driver apps.", Command],
  ["Connected programs", "Corporate, student, membership, and airport experiences reuse the same platform foundations.", Building2],
  ["Live mobility", "Route, ETA, driver, vehicle, and ride state remain central to the active journey.", MapPinned],
  ["Connected cabin", "GRABME Connect continues the authenticated ride inside supported vehicles with live trip information and cabin experiences.", TabletSmartphone],
];

export default function AboutPage(){return <><Navbar/><main><PageHero eyebrow="ABOUT GRABME" title="An electric mobility ecosystem built as one product." text="GRABME connects the passenger journey, driver operations, business programs, Mission Control, and the in-car experience through one EV-first mobility platform."/>
<section className="bg-[#F7F7F7] px-6 py-24 text-black"><div className="mx-auto max-w-7xl"><div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end"><div><p className="font-black text-[#5b982f]">WHAT GRABME IS</p><h2 className="mt-3 text-4xl font-black tracking-[-0.05em] md:text-6xl">More than an e-taxi booking app.</h2></div><p className="max-w-xl text-lg leading-8 text-black/58">The public passenger experience is only one layer. GRABME is designed as a connected operating system for electric mobility - riders, drivers, operations, business programs, and the cabin working together.</p></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{principles.map(([t,x,Icon]) => <div key={t as string} className="rounded-[2rem] bg-white p-8 shadow-sm"><Icon className="mb-5 text-[#53e36a]" size={32}/><h3 className="text-2xl font-black">{t as string}</h3><p className="mt-4 leading-7 text-black/60">{x as string}</p></div>)}</div></div></section>
<section className="bg-[#050505] px-6 py-24 text-white"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2"><div><p className="font-black text-[#53e36a]">PRODUCT FAMILY</p><h2 className="mt-3 text-4xl font-black tracking-[-0.05em] md:text-6xl">Ride. Drive. Operate. Connect.</h2></div><div className="space-y-4 text-lg leading-8 text-white/58"><p><strong className="text-white">Ride</strong> gives passengers the end-to-end mobility experience.</p><p><strong className="text-white">Drive</strong> gives drivers the tools to receive and execute rides.</p><p><strong className="text-white">Operate</strong> gives GRABME the administrative and dispatch foundation behind the network.</p><p><strong className="text-white">Connect</strong> extends the active journey into supported vehicle cabins.</p></div></div></section>
</main><Footer/></>}
