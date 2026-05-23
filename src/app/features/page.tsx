import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import {
  Building2,
  CreditCard,
  GraduationCap,
  Leaf,
  MapPinned,
  Plane,
  ShieldCheck,
  ShoppingBag,
  Star,
  TabletSmartphone,
  Users,
  Zap,
} from "lucide-react";

const features = [
  ["Electric Fleet", "Go-green electric taxi rides built for Lebanon’s next mobility era.", Leaf],
  ["Fair Pricing", "Designed to be more affordable than traditional premium ride apps.", CreditCard],
  ["Live Tracking", "Track driver location, route, ETA, and ride progress in real time.", MapPinned],
  ["Ride Categories", "Standard, Priority, Premium, Luxury, Airport, Student, and Corporate rides.", Star],
  ["Bank Audi / ATM Pay", "Payment gateway integration planned from the first launch phase.", CreditCard],
  ["Grab-Me Corporate", "Subscriptions and dedicated mobility plans for banks, teams, and employees.", Building2],
  ["Grab-Me Students", "Affordable student rides, university routes, and future student memberships.", GraduationCap],
  ["Grab-Me Airport", "Airport rides with flight booking support, live car tracking, and premium pickup flow.", Plane],
  ["Grab-Me Shopping", "Elderly-friendly grocery assistance where drivers can help with packing and pickup.", ShoppingBag],
  ["Grab-Me Membership", "Loyalty points, gift cards, blogger promos, discounts, and future rewards.", Users],
  ["Grab-Me Connect", "Future in-car Wi-Fi screens for tracking, safety, kids, lost items, and ride login/logout.", TabletSmartphone],
  ["Cybersecurity", "Security-first architecture for payments, user data, live location, and corporate accounts.", ShieldCheck],
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="FEATURES"
          title="More than a taxi app. A smart electric mobility ecosystem."
          text="GRABME is designed around electric rides, fair pricing, live tracking, corporate subscriptions, airport mobility, student access, elderly support, and future smart in-car experiences."
        />

        <section className="bg-[#F7F7F7] px-6 py-24 text-black">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="PLATFORM FEATURES"
              title="Built for riders, drivers, students, businesses, and future smart vehicles."
              text="The platform starts as an electric ride-hailing app, then expands into memberships, airport mobility, corporate plans, student rides, and Grab-Me Connect."
            />

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map(([title, text, Icon]) => (
                <div key={title as string} className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
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