import { Car, Plane, Radar, Timer } from "lucide-react";

const items = [
  ["Flight-Aware Booking", "Future booking flow linked to airport pickup and flight timing.", Plane],
  ["Car Tracking", "Track the assigned vehicle before and after arrival.", Radar],
  ["Premium Pickup", "Luxury and priority airport ride options.", Car],
  ["Reliable Timing", "Designed around ETA, pickup window, and airport flow.", Timer],
];

export function Airport() {
  return (
    <section className="bg-[#F7F7F7] px-6 py-24 text-black">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 font-semibold text-[#7AC943]">GRABME AIRPORT</p>
        <h2 className="max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
          Airport rides built for timing, tracking, and premium arrivals.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map(([title, text, Icon]) => (
            <div key={title as string} className="rounded-[2rem] bg-white p-7 shadow-sm">
              <Icon className="mb-5 text-[#7AC943]" size={32} />
              <h3 className="text-xl font-black">{title as string}</h3>
              <p className="mt-3 text-sm leading-6 text-black/60">{text as string}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}