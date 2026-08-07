import { Car, Clock3, Luggage, Plane } from "lucide-react";

const items = [
  ["Airport Journey", "Book an airport pickup or drop-off through the same GRABME passenger experience.", Plane],
  ["Trip Details", "Keep the airport journey organized with pickup, destination, timing, and relevant travel details.", Clock3],
  ["Vehicle Choice", "Choose the ride category that best fits passenger count, comfort, and luggage needs.", Car],
  ["Luggage Ready", "Select a suitable EV for individual, family, executive, or luggage-heavy airport travel.", Luggage],
];

export function Airport() {
  return <section className="bg-[#F7F7F7] px-6 py-28 md:py-36 text-black"><div className="mx-auto max-w-7xl"><p className="font-bold text-[#5b982f]">GRABME AIRPORT</p><h2 className="mt-3 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">Airport mobility built into the GRABME journey.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-black/55">A dedicated airport experience with clear ride details, EV selection, pickup coordination, and live trip visibility.</p><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{items.map(([title,text,Icon]) => <div key={title as string} className="rounded-[2rem] bg-white p-7 shadow-sm"><Icon className="mb-5 text-[#53e36a]" size={32}/><h3 className="text-xl font-black">{title as string}</h3><p className="mt-3 text-sm leading-6 text-black/60">{text as string}</p></div>)}</div><a href="/airport" className="mt-8 inline-flex rounded-2xl bg-black px-6 py-4 text-sm font-black text-white transition hover:bg-[#53e36a] hover:text-black">Explore Airport Rides</a></div></section>;
}
