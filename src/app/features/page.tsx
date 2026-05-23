import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Building2, CreditCard, Leaf, MapPinned, ShieldCheck, Star, Zap, Clock } from "lucide-react";

const features = [
  ["Electric Fleet", "EV-first transportation built for cleaner urban mobility.", Leaf],
  ["Live Tracking", "Real-time driver location, ETA, route visibility, and trip status.", MapPinned],
  ["Ride Options", "Standard, Premium, Luxury, and Corporate ride categories.", Star],
  ["Verified Drivers", "Driver approval, document verification, ratings, and vehicle checks.", ShieldCheck],
  ["Bank Audi Payments", "Direct payment gateway integration planned from the MVP.", CreditCard],
  ["Corporate Accounts", "Business profiles, monthly billing, reporting, and team ride controls.", Building2],
  ["Fast Booking", "Simple passenger booking flow from pickup to confirmed ride.", Clock],
  ["EV Brand Positioning", "A mobility brand built around sustainability, speed, and modern UX.", Zap],
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="FEATURES"
          title="Everything GRABME needs to move Lebanon smarter."
          text="A complete electric mobility platform designed for everyday riders, premium clients, corporate accounts, and scalable fleet operations."
        />

        <section className="bg-[#F7F7F7] px-6 py-24 text-black">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="PLATFORM FEATURES"
              title="Built as a complete mobility ecosystem."
              text="The platform connects passengers, drivers, payments, tracking, fleet operations, and business accounts into one scalable system."
            />

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {features.map(([title, text, Icon]) => (
                <div key={title as string} className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm">
                  <Icon className="mb-5 text-[#7AC943]" size={32} />
                  <h3 className="text-lg font-black">{title as string}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/60">{text as string}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}