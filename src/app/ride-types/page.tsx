import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CalendarClock, Car, Crown, Gauge, GraduationCap, Plane, Sparkles, CreditCard, WalletCards, Banknote, MapPinned, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Ride with GRABME",
  description: "Explore the GRABME Passenger experience, EV ride categories, scheduling, payments, live trips, and rider programs.",
};

const rideTypes = [
  { name: "Standard", subtitle: "Everyday electric mobility", text: "A straightforward EV ride for everyday trips and daily transportation.", icon: Car },
  { name: "Priority", subtitle: "Faster matching", text: "A higher-priority ride option for passengers who want quicker matching when available.", icon: Gauge },
  { name: "Premium", subtitle: "More comfort", text: "A comfort-focused electric ride category for passengers who want an upgraded journey.", icon: Sparkles },
  { name: "Luxury", subtitle: "Executive travel", text: "A premium vehicle experience for executive trips, events, and special journeys.", icon: Crown },
  { name: "Airport", subtitle: "Travel-ready mobility", text: "A dedicated airport journey with travel details, pickup coordination, and suitable EV selection.", icon: Plane },
  { name: "Students", subtitle: "Verified student mobility", text: "Student-oriented access and program benefits within the main GRABME passenger experience.", icon: GraduationCap },
];

const journey = [
  ["1", "Choose your destination", "Search a destination and review the journey from your current pickup context."],
  ["2", "Choose how to travel", "Select Standard, Priority, Premium, Luxury, Airport, or an eligible program journey."],
  ["3", "Ride now or schedule", "Request immediately or choose a scheduled ride when you want to travel later."],
  ["4", "Confirm pickup & payment", "Review pickup and pay with a supported passenger payment method."],
  ["5", "Match with a driver", "Follow searching and matched states as GRABME assigns an available EV driver."],
  ["6", "Follow the live trip", "See driver, vehicle, ETA, route, trip progress, completion, and rating."],
];

const payments = [
  ["Visa", "Card payment inside the passenger journey.", CreditCard],
  ["Mastercard", "Card payment inside the passenger journey.", CreditCard],
  ["Wish Money", "Supported digital payment option for riders.", WalletCards],
  ["Cash", "Pay the driver in cash where enabled.", Banknote],
];

export default function RideTypesPage() {
  return <><Navbar/><main>
    <PageHero eyebrow="RIDE WITH GRABME" title="Your Passenger experience, from destination to arrival." text="A compact EV booking flow with ride choice, scheduling, pickup, payments, matching, live trip visibility, programs, completion, and rating."/>

    <section className="bg-[#050505] px-6 py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#53e36a]">PASSENGER EXPERIENCE</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] md:text-6xl">Compact where it matters. Clear at every decision.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/58">The booking experience keeps the vehicle, price, journey details, ride categories, timing, and payment context close together so the passenger can make a decision without jumping between screens.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[['Ride choice','Standard, Priority, Premium and Luxury EV options.'],['Timing','Ride now or choose a scheduled journey.'],['Live context','Pickup, route, ETA, driver and vehicle information.'],['Completion','Trip history, rating and repeat-ride context.']].map(([t,x]) => <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"><h3 className="font-black">{t}</h3><p className="mt-2 text-sm leading-6 text-white/48">{x}</p></div>)}
          </div>
        </div>
        <div className="mx-auto w-full max-w-[390px] overflow-hidden rounded-[3rem] border border-white/12 bg-black p-2 shadow-[0_35px_100px_rgba(0,0,0,0.5)]">
          <img src="/passenger-ride-selection.jpg" alt="GRABME ride selection experience" className="h-[760px] w-full rounded-[2.5rem] object-cover object-top"/>
        </div>
      </div>
    </section>

    <section className="bg-[#f4f5f1] px-6 py-20 text-black md:py-28"><div className="mx-auto max-w-7xl"><div className="mb-10 max-w-3xl"><p className="text-xs font-black uppercase tracking-[0.16em] text-[#428d37]">EV RIDE CATEGORIES</p><h2 className="mt-3 text-4xl font-black tracking-[-0.05em] md:text-6xl">Choose the journey that fits.</h2></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{rideTypes.map(({name,subtitle,text,icon:Icon}) => <div key={name} className="rounded-[1.8rem] bg-white p-7 shadow-sm"><div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#53e36a]/12 text-[#428d37]"><Icon size={25}/></div><h3 className="text-2xl font-black">{name}</h3><p className="mt-2 text-sm font-black text-[#428d37]">{subtitle}</p><p className="mt-3 text-sm leading-6 text-black/58">{text}</p></div>)}</div></div></section>

    <section className="bg-black px-6 py-20 text-white md:py-28"><div className="mx-auto max-w-7xl"><div className="mb-10 max-w-3xl"><p className="text-xs font-black uppercase tracking-[0.16em] text-[#53e36a]">PASSENGER FLOW</p><h2 className="mt-3 text-4xl font-black tracking-[-0.05em] md:text-6xl">One continuous ride lifecycle.</h2></div><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{journey.map(([n,t,x]) => <div key={n} className="rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-6"><p className="text-xs font-black text-[#53e36a]">STEP {n}</p><h3 className="mt-3 text-xl font-black">{t}</h3><p className="mt-3 text-sm leading-6 text-white/48">{x}</p></div>)}</div></div></section>

    <section className="bg-[#f4f5f1] px-6 py-20 text-black md:py-28"><div className="mx-auto max-w-7xl"><div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-[#428d37]">PAY YOUR WAY</p><h2 className="mt-3 text-4xl font-black tracking-[-0.05em] md:text-6xl">Payment stays inside the ride.</h2><p className="mt-5 max-w-xl leading-7 text-black/58">Passenger payment options are part of the booking experience. Driver settlement and cash-out workflows are handled separately in driver operations.</p></div><div className="grid gap-4 sm:grid-cols-2">{payments.map(([t,x,Icon]) => <div key={t as string} className="rounded-[1.6rem] bg-white p-6"><Icon className="mb-4 text-[#53e36a]" size={25}/><h3 className="font-black">{t as string}</h3><p className="mt-2 text-sm leading-6 text-black/52">{x as string}</p></div>)}</div></div></div></section>

    <section className="bg-[#050505] px-6 py-20 text-white"><div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 md:flex-row md:items-center md:justify-between md:p-9"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-[#53e36a]">READY TO RIDE?</p><h2 className="mt-2 text-3xl font-black">Your EV journey starts in GRABME.</h2></div><div className="flex flex-wrap gap-3"><Link href="/#download" className="inline-flex items-center gap-2 rounded-2xl bg-[#53e36a] px-6 py-4 text-sm font-black text-black">Get GRABME <CalendarClock size={17}/></Link><Link href="/airport" className="inline-flex items-center gap-2 rounded-2xl border border-white/12 px-6 py-4 text-sm font-black">Airport rides <MapPinned size={17}/></Link><Link href="/membership" className="inline-flex items-center gap-2 rounded-2xl border border-white/12 px-6 py-4 text-sm font-black">Programs <Star size={17}/></Link></div></div></section>
  </main><Footer/></>;
}
