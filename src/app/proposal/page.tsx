import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

const phases = [
  ["Phase 1", "$15K–$20K", "MVP foundation: passenger app, driver app, admin dashboard, ride booking, live tracking, Bank Audi payment integration, and core website."],
  ["Phase 2", "$15K–$20K", "Airport, students, corporate subscriptions, membership, loyalty, enhanced dashboard, reporting, and operational improvements."],
  ["Phase 3", "$15K–$20K+", "Grab-Me Connect, in-car screens, ads, advanced safety, voice booking, AR concepts, charging station integrations, and scale features."],
];

export default function ProposalPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="PROPOSAL"
          title="GRABME electric mobility platform proposal."
          text="A phased build plan for launching Lebanon’s smart electric ride platform with fair pricing, premium cars, corporate subscriptions, student rides, airport mobility, Bank Audi payments, and future smart cabin features."
        />

        <section className="bg-[#F7F7F7] px-6 py-24 text-black">
          <div className="mx-auto max-w-7xl space-y-16">
            <div>
              <h2 className="text-4xl font-black">Project Overview</h2>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-black/65">
                GRABME will begin as an electric ride-hailing platform similar to Uber, but localized for Lebanon with fairer pricing, EV positioning, Bank Audi / ATM Pay integration, and future ecosystem layers including airport rides, corporate subscriptions, student mobility, memberships, elderly shopping assistance, and Grab-Me Connect in-car screens.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {phases.map(([phase, price, text]) => (
                <div key={phase} className="rounded-[2rem] bg-white p-8 shadow-sm">
                  <p className="font-semibold text-[#7AC943]">{phase}</p>
                  <h3 className="mt-3 text-3xl font-black">{price}</h3>
                  <p className="mt-4 leading-7 text-black/60">{text}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h2 className="text-3xl font-black">Phase 1 MVP Scope</h2>
                <ul className="mt-6 space-y-3 text-black/65">
                  <li>• Passenger mobile app</li>
                  <li>• Driver mobile app</li>
                  <li>• Admin dashboard</li>
                  <li>• Ride booking and ride statuses</li>
                  <li>• Live maps and tracking</li>
                  <li>• Standard, Priority, Premium, and Luxury rides</li>
                  <li>• Bank Audi / ATM Pay payment integration</li>
                  <li>• Driver onboarding and approval</li>
                  <li>• Basic analytics and support workflows</li>
                </ul>
              </div>

              <div className="rounded-[2rem] bg-black p-8 text-white shadow-sm">
                <h2 className="text-3xl font-black">Technology Stack</h2>
                <ul className="mt-6 space-y-3 text-white/65">
                  <li>• Website: Next.js, TypeScript, Tailwind CSS</li>
                  <li>• Mobile apps: React Native / Expo</li>
                  <li>• Backend: Node.js + TypeScript</li>
                  <li>• Database: PostgreSQL + Prisma</li>
                  <li>• Real-time: Socket.IO / WebSockets</li>
                  <li>• Maps: Google Maps API</li>
                  <li>• Notifications: Firebase Cloud Messaging</li>
                  <li>• Payments: Bank Audi / ATM Pay integration</li>
                </ul>
              </div>
            </div>

            <div className="rounded-[3rem] bg-black p-10 text-white">
              <h2 className="text-4xl font-black">Recommended Next Step</h2>
              <p className="mt-5 max-w-3xl text-white/65">
                Confirm Phase 1 scope, approve the website/product direction, prepare Figma screens and proposal documentation, then begin backend architecture and mobile app wireframes before development starts.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}