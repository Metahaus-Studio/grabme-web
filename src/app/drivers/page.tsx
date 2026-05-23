import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { BadgeCheck, BatteryCharging, Car, Clock, ShoppingBag, Wallet, Wifi } from "lucide-react";

const benefits = [
  ["Flexible Schedule", "Go online, accept rides, and manage your availability.", Clock],
  ["Verified Ecosystem", "Driver and vehicle approval builds trust and platform safety.", BadgeCheck],
  ["EV Mobility", "Participate in Lebanon’s electric transportation shift.", Car],
  ["Earnings Tools", "Track rides, income, performance, and daily progress.", Wallet],
  ["Charging Support", "Future charging station partnerships including locations like Spinneys.", BatteryCharging],
  ["Grab-Me Connect", "Future in-car screens with login/logout, Wi-Fi, lost item support, and tracking.", Wifi],
  ["Shopping Assistance", "Optional elderly/grocery support add-on for short service rides.", ShoppingBag],
];

export default function DriversPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="DRIVERS"
          title="Drive the future of electric mobility."
          text="GRABME gives drivers a modern digital platform for electric rides, premium customers, airport trips, corporate demand, student rides, and future smart vehicle tools."
        />

        <section className="bg-[#050505] px-6 py-24 text-white">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map(([title, text, Icon]) => (
              <div key={title as string} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
                <Icon className="mb-5 text-[#7AC943]" size={32} />
                <h2 className="text-xl font-black">{title as string}</h2>
                <p className="mt-3 text-sm leading-6 text-white/60">{text as string}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-7xl rounded-[3rem] border border-white/10 bg-[#7AC943]/10 p-10">
            <h2 className="text-4xl font-black">Driver onboarding starts here.</h2>
            <p className="mt-4 max-w-2xl text-white/65">
              Drivers can apply, submit documents, add EV vehicle details, connect payment information, and wait for admin approval before going live.
            </p>
            <div className="mt-8">
              <Button href="/contact" icon>Apply as Driver</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}