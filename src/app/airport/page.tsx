import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Car, Clock3, Luggage, MapPinned, Plane, Route, UserCheck } from "lucide-react";
export const metadata: Metadata = { title: "Airport Mobility" };

const features = [
  ["Airport Ride", "Choose the airport journey inside the GRABME passenger experience for pickup or drop-off travel.", Plane],
  ["Travel Details", "Keep relevant airport journey information such as flight and terminal details attached to the booking where applicable.", Route],
  ["Pickup Coordination", "Confirm pickup information and follow the same clear matching and trip lifecycle used across GRABME.", MapPinned],
  ["Vehicle Choice", "Select an available EV category that suits comfort, passenger count, and travel needs.", Car],
  ["Luggage Ready", "Choose an appropriate vehicle for solo travel, families, executives, or luggage-heavy trips.", Luggage],
  ["Meet & Greet", "Support a clearer arrival experience for eligible airport journeys where the service is enabled.", UserCheck],
];

export default function AirportPage(){return <><Navbar/><main><PageHero eyebrow="GRABME AIRPORT" title="Airport mobility without leaving the GRABME journey." text="A dedicated EV airport experience built around travel details, pickup coordination, ride choice, live visibility, and a clear end-to-end trip lifecycle."/>
<section className="bg-[#F7F7F7] px-6 py-24 text-black"><div className="mx-auto max-w-7xl"><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{features.map(([title,text,Icon]) => <div key={title as string} className="rounded-[2rem] bg-white p-8 shadow-sm"><Icon className="mb-5 text-[#53e36a]" size={34}/><h2 className="text-2xl font-black">{title as string}</h2><p className="mt-3 leading-7 text-black/60">{text as string}</p></div>)}</div></div></section>
<section className="bg-[#050505] px-6 py-24 text-white"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center"><div><p className="font-black text-[#53e36a]">THE AIRPORT FLOW</p><h2 className="mt-3 text-4xl font-black tracking-[-0.05em] md:text-6xl">Travel details meet live mobility.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-white/58">Airport rides use the same trusted GRABME lifecycle: request, match, driver arrival, pickup, live trip, and completion - with the travel information needed for airport movement layered into the journey.</p></div><div className="grid gap-4 sm:grid-cols-2">{[["Before pickup","Review airport, pickup, ride category, timing, and travel details."],["Driver matched","See the assigned driver, vehicle, ETA, and ride state."],["At pickup","Coordinate the airport pickup with clear trip and location visibility."],["On the move","Follow the live electric journey through arrival and completion."]].map(([t,x]) => <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"><Clock3 className="mb-4 text-[#53e36a]" size={24}/><h3 className="font-black">{t}</h3><p className="mt-2 text-sm leading-6 text-white/52">{x}</p></div>)}</div></div></section>
</main><Footer/></>}
