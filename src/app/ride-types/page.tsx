import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

const rideTypes = [
  {
    name: "Standard",
    subtitle: "Fair everyday electric rides.",
    points: ["Affordable pricing", "Fast pickup", "Everyday EV transportation"],
  },
  {
    name: "Premium",
    subtitle: "Comfort-focused rides.",
    points: ["Higher-end vehicles", "Comfortable interiors", "Priority experience"],
  },
  {
    name: "Luxury",
    subtitle: "Executive transportation.",
    points: ["Luxury EVs", "Airport transfers", "VIP and event rides"],
  },
  {
    name: "Corporate",
    subtitle: "Business mobility.",
    points: ["Company accounts", "Monthly billing", "Ride reports"],
  },
];

export default function RideTypesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="RIDE TYPES"
          title="Choose the right ride for every moment."
          text="GRABME is designed for daily transportation, premium rides, luxury travel, and corporate mobility."
        />

        <section className="bg-[#050505] px-6 py-24 text-white">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {rideTypes.map((ride, index) => (
              <div
                key={ride.name}
                className={`rounded-[2rem] border p-8 ${
                  index === 1 ? "border-[#7AC943] bg-[#7AC943]/10" : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <div className="mb-8 h-36 rounded-[1.5rem] bg-gradient-to-br from-white/15 to-white/5" />
                <h2 className="text-3xl font-black">{ride.name}</h2>
                <p className="mt-3 font-semibold text-[#7AC943]">{ride.subtitle}</p>
                <ul className="mt-6 space-y-3 text-sm text-white/65">
                  {ride.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}