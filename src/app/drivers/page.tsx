import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { BadgeCheck, Car, Clock, Wallet } from "lucide-react";

const benefits = [
  ["Flexible Schedule", "Go online and accept rides when available.", Clock],
  ["Verified Ecosystem", "Driver and vehicle approval builds trust.", BadgeCheck],
  ["EV Mobility", "Participate in Lebanon’s electric transport future.", Car],
  ["Earnings Tools", "Track rides, income, and performance.", Wallet],
];

export default function DriversPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="DRIVERS"
          title="Drive the future of mobility."
          text="GRABME gives drivers a modern digital platform for electric taxi rides, premium demand, and structured ride management."
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
              Drivers can apply, submit documents, add vehicle details, and wait for admin approval before going live.
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