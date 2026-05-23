import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

const rideTypes = [
  {
    name: "Standard",
    subtitle: "Fair everyday electric rides.",
    points: ["Affordable pricing", "Fast pickup", "Lebanese local-focused mobility"],
  },
  {
    name: "Priority",
    subtitle: "Faster matching when demand is high.",
    points: ["Inspired by DiDi-style priority rides", "Higher pickup priority", "Dynamic pricing by car type"],
  },
  {
    name: "Premium",
    subtitle: "Comfort-focused rides.",
    points: ["Better EV vehicles", "Higher-rated drivers", "Comfortable daily upgrades"],
  },
  {
    name: "Luxury",
    subtitle: "Executive and special car experience.",
    points: ["Luxury cars", "Airport and VIP rides", "Events and premium transfers"],
  },
  {
    name: "Airport",
    subtitle: "Flight-linked mobility.",
    points: ["Flight booking support", "Pickup tracking", "Airport window experience"],
  },
  {
    name: "Students",
    subtitle: "Affordable student mobility.",
    points: ["University-focused rides", "Student membership plans", "Lower-cost routes"],
  },
  {
    name: "Shopping",
    subtitle: "Assisted grocery rides.",
    points: ["Elderly support", "Driver helps with groceries", "Short assistance add-on"],
  },
  {
    name: "Corporate",
    subtitle: "Business mobility subscriptions.",
    points: ["Banks and employees", "Monthly billing", "Company dashboards"],
  },
];

export default function RideTypesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="RIDE TYPES"
          title="A ride category for every customer segment."
          text="GRABME supports daily commuters, students, airport travelers, elderly customers, corporate teams, premium riders, and luxury clients."
        />

        <section className="bg-[#050505] px-6 py-24 text-white">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {rideTypes.map((ride, index) => (
              <div
                key={ride.name}
                className={`rounded-[2rem] border p-8 transition hover:-translate-y-1 ${
                  index === 1 || index === 3
                    ? "border-[#7AC943] bg-[#7AC943]/10"
                    : "border-white/10 bg-white/[0.04]"
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