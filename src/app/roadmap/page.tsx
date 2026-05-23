import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

const roadmap = [
  ["Month 1", "Architecture + Backend Foundation", "Database, authentication, user roles, ride model, driver model, payment planning, API structure."],
  ["Month 2", "Passenger + Driver App Core", "Booking flow, ride categories, driver acceptance, GPS tracking, ride status logic, basic app screens."],
  ["Month 3", "Admin + Payments + Pilot", "Admin dashboard, Bank Audi / ATM Pay setup, testing, bug fixing, deployment preparation, pilot launch."],
];

export default function RoadmapPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="ROADMAP"
          title="Phase 1 development roadmap."
          text="A focused 3-month execution plan for launching the GRABME MVP with passenger app, driver app, admin dashboard, tracking, payments, and pilot readiness."
        />

        <section className="bg-[#F7F7F7] px-6 py-24 text-black">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-3">
              {roadmap.map(([month, title, text]) => (
                <div key={month} className="rounded-[2rem] bg-white p-8 shadow-sm">
                  <p className="font-semibold text-[#7AC943]">{month}</p>
                  <h2 className="mt-3 text-2xl font-black">{title}</h2>
                  <p className="mt-4 leading-7 text-black/60">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-[3rem] bg-black p-10 text-white">
              <h2 className="text-4xl font-black">Phase 1 Delivery Target</h2>
              <p className="mt-5 max-w-3xl text-white/65">
                The target for Phase 1 is a functional MVP delivered within 3 months,
                assuming scope remains limited to the approved MVP features and all
                third-party requirements, including Bank Audi documentation, are provided on time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}