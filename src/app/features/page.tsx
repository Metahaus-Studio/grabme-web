import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Building2, CarFront, Command, GraduationCap, Leaf, MapPinned, Plane, ShieldCheck, TabletSmartphone, Trophy, Users, CreditCard, Banknote } from "lucide-react";
export const metadata: Metadata = { title: "GRABME Platform" };

const capabilities = [
  ["EV-only mobility", "An electric-only fleet foundation and EV-native passenger experience.", Leaf],
  ["Passenger journey", "Destination, ride choice, scheduling, pickup, matching, live trip, completion, and rating.", CarFront],
  ["Live ride visibility", "Driver, vehicle, ETA, route, and trip lifecycle visibility throughout the active journey.", MapPinned],
  ["Driver operations", "Availability, ride requests, passenger contact, pickup, trip execution, navigation, earnings, and ratings.", Users],
  ["Mission Control", "Operational visibility across rides, dispatch, drivers, passengers, programs, and reporting.", Command],
  ["Business mobility", "Company accounts, employee access, billing visibility, airport travel, and ride reporting.", Building2],
  ["Student mobility", "Verified student access and program-aware mobility within the passenger experience.", GraduationCap],
  ["Airport mobility", "Dedicated airport journeys with travel details, pickup coordination, live visibility, and EV selection.", Plane],
  ["Membership & programs", "Membership, student, and corporate program value layered onto the same rider identity.", Trophy],
  ["Passenger payments", "Visa, Mastercard, Wish Money, and cash options integrated into the passenger ride experience.", CreditCard],
  ["Driver settlement", "Earnings, settlement, and cash-out workflows remain part of driver operations rather than passenger payments.", Banknote],
  ["GRABME Connect", "Passenger login, live journey information, entertainment, and dedicated in-car modes.", TabletSmartphone],
  ["Trust & safety", "Verified profiles, ride visibility, ratings, and operational controls across the platform.", ShieldCheck],
];

export default function FeaturesPage(){return <><Navbar/><main><PageHero eyebrow="GRABME PLATFORM" title="One mobility platform from request to operations." text="Passenger, Driver, Mission Control, Business, Students, Airport, Membership, payments, and GRABME Connect share one EV-first product foundation."/>
<section className="bg-[#F7F7F7] px-6 py-24 text-black"><div className="mx-auto max-w-7xl"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{capabilities.map(([t,x,Icon]) => <div key={t as string} className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm"><Icon className="mb-5 text-[#53e36a]" size={32}/><h2 className="text-xl font-black">{t as string}</h2><p className="mt-3 text-sm leading-6 text-black/60">{x as string}</p></div>)}</div></div></section>
<section className="bg-[#050505] px-6 py-24 text-white"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-4">{[["RIDE","Passenger app","Book and follow the journey."],["DRIVE","Driver app","Receive and execute rides."],["OPERATE","Mission Control","Oversee the mobility system."],["CONNECT","In-car experience","Continue the active ride in the cabin."]].map(([e,t,x]) => <div key={e} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"><p className="text-xs font-black tracking-[0.17em] text-[#53e36a]">{e}</p><h3 className="mt-4 text-2xl font-black">{t}</h3><p className="mt-3 leading-7 text-white/55">{x}</p></div>)}</div></section>
</main><Footer/></>}
