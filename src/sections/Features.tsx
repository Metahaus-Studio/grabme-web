import { Building2, CreditCard, Leaf, MapPinned, ShieldCheck, Star } from "lucide-react";

const features = [
  {
    title: "Eco Friendly",
    text: "A 100% electric fleet designed for cleaner urban transportation.",
    icon: Leaf,
  },
  {
    title: "Live Tracking",
    text: "Track every ride in real time from pickup to drop-off.",
    icon: MapPinned,
  },
  {
    title: "Premium Rides",
    text: "Choose standard, premium, luxury, or corporate transportation.",
    icon: Star,
  },
  {
    title: "Verified Drivers",
    text: "Driver profiles, vehicle checks, and approval workflows.",
    icon: ShieldCheck,
  },
  {
    title: "Corporate Solutions",
    text: "Business transport with centralized billing and ride reports.",
    icon: Building2,
  },
  {
    title: "Bank Audi Payments",
    text: "Direct payment gateway integration prepared from the start.",
    icon: CreditCard,
  },
];

export function Features() {
  return (
    <section id="features" className="bg-[#F7F7F7] px-6 py-24 text-black">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-semibold text-[#7AC943]">FEATURES</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
            Everything you need, all in one place.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, text, icon: Icon }) => (
            <div
              key={title}
              className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Icon className="mb-6 text-[#7AC943]" size={34} />
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-black/60">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}