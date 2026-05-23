import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Car, Clock, Luggage, Plane, Radar, Star } from "lucide-react";

const items = [
  ["Flight-Aware Booking", "Airport rides designed around flight timing, pickup windows, and arrival planning.", Plane],
  ["Live Car Tracking", "Passengers can track the assigned driver and vehicle before pickup.", Radar],
  ["Premium Airport Pickup", "Priority and luxury ride options for travelers, VIPs, and business clients.", Star],
  ["Luggage-Friendly Rides", "Vehicle selection for airport luggage, families, and larger ride needs.", Luggage],
  ["Reliable Timing", "Clear ETA, pickup coordination, and driver visibility.", Clock],
  ["Car Categories", "Standard, Priority, Premium, and Luxury airport options.", Car],
];

export default function AirportPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="GRABME AIRPORT"
          title="Airport rides built around timing, tracking, and premium arrivals."
          text="GRABME Airport is designed for travelers who need reliable pickup, live driver tracking, luggage-friendly ride options, and premium airport transportation."
        />

        <section className="bg-[#F7F7F7] px-6 py-24 text-black">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map(([title, text, Icon]) => (
              <div key={title as string} className="rounded-[2rem] bg-white p-8 shadow-sm">
                <Icon className="mb-5 text-[#7AC943]" size={34} />
                <h2 className="text-2xl font-black">{title as string}</h2>
                <p className="mt-3 leading-7 text-black/60">{text as string}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}