import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import {
  Banknote,
  Car,
  CheckCircle2,
  Clock,
  Code2,
  CreditCard,
  LayoutDashboard,
  MapPinned,
  Smartphone,
  Wifi,
} from "lucide-react";

const phases = [
  {
    phase: "Phase 1",
    price: "$15K–$20K",
    title: "MVP Launch Foundation",
    text: "Core ride-hailing platform with passenger app, driver app, admin dashboard, live tracking, booking flow, ride categories, and Bank Audi / ATM Pay payment setup.",
  },
  {
    phase: "Phase 2",
    price: "$15K–$20K",
    title: "Commercial Expansion",
    text: "Airport rides, student plans, corporate subscriptions, memberships, loyalty, enhanced reporting, support workflows, and operational scaling tools.",
  },
  {
    phase: "Phase 3",
    price: "$15K–$20K+",
    title: "Smart Mobility Ecosystem",
    text: "Grab-Me Connect, in-car screens, advertising, advanced safety layers, voice booking, AR concepts, charging station integrations, and future scale features.",
  },
];

const mvpScope = [
  "Passenger mobile app",
  "Driver mobile app",
  "Admin dashboard",
  "Ride booking system",
  "Live maps and driver tracking",
  "Standard, Priority, Premium, and Luxury ride categories",
  "Bank Audi / ATM Pay payment integration",
  "Cash payment option if required",
  "Driver onboarding and approval",
  "Ride history and basic analytics",
  "Website and proposal presentation system",
];

const stack = [
  ["Website", "Next.js, TypeScript, Tailwind CSS"],
  ["Mobile Apps", "React Native / Expo"],
  ["Backend", "Node.js + TypeScript"],
  ["Database", "PostgreSQL + Prisma"],
  ["Real-Time Tracking", "Socket.IO / WebSockets"],
  ["Maps", "Google Maps API"],
  ["Notifications", "Firebase Cloud Messaging"],
  ["Payments", "Bank Audi / ATM Pay integration"],
];

const future = [
  "Grab-Me Connect in-car screens",
  "Student memberships",
  "Corporate subscriptions",
  "Airport ride workflows",
  "Loyalty points and gift cards",
  "Charging station partnerships",
  "Siri / Alexa booking",
  "AR vehicle experience",
  "Advertising inside vehicle screens",
];

export default function ProposalPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="PROPOSAL"
          title="GRABME electric mobility platform proposal."
          text="A phased build plan for launching Lebanon’s smart electric ride platform with fair pricing, electric cars, premium ride categories, corporate subscriptions, student mobility, airport rides, Bank Audi payments, and future smart cabin features."
        />

        <section className="bg-[#F7F7F7] px-6 py-24 text-black">
          <div className="mx-auto max-w-7xl space-y-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <p className="mb-3 font-semibold text-[#7AC943]">
                  PROJECT OVERVIEW
                </p>
                <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
                  From taxi app to smart electric mobility ecosystem.
                </h2>
                <p className="mt-6 text-lg leading-8 text-black/65">
                  GRABME will start as an Uber-style electric taxi platform for
                  Lebanon, positioned around fairer pricing, local accessibility,
                  premium ride options, electric vehicles, and a modern app
                  experience. The long-term vision expands into corporate
                  subscriptions, student plans, airport rides, loyalty programs,
                  elderly shopping assistance, charging station partnerships,
                  and Grab-Me Connect in-car screens.
                </p>
              </div>

              <div className="rounded-[3rem] bg-black p-8 text-white">
                <Banknote className="mb-6 text-[#7AC943]" size={40} />
                <h3 className="text-3xl font-black">Commercial Structure</h3>
                <p className="mt-4 text-white/65">
                  Recommended project pricing is structured phase-by-phase at
                  $15K–$20K per phase, allowing scope to remain controlled while
                  the platform grows progressively.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {phases.map((item) => (
                <div key={item.phase} className="rounded-[2rem] bg-white p-8 shadow-sm">
                  <p className="font-semibold text-[#7AC943]">{item.phase}</p>
                  <h3 className="mt-3 text-3xl font-black">{item.price}</h3>
                  <p className="mt-3 text-xl font-black">{item.title}</p>
                  <p className="mt-4 leading-7 text-black/60">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <Smartphone className="mb-5 text-[#7AC943]" size={36} />
                <h2 className="text-3xl font-black">Phase 1 MVP Scope</h2>
                <ul className="mt-6 space-y-3 text-black/65">
                  {mvpScope.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-[#7AC943]" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] bg-black p-8 text-white shadow-sm">
                <Code2 className="mb-5 text-[#7AC943]" size={36} />
                <h2 className="text-3xl font-black">Technology Stack</h2>
                <div className="mt-6 space-y-4">
                  {stack.map(([label, value]) => (
                    <div key={label} className="rounded-2xl bg-white/5 p-4">
                      <p className="font-bold text-white">{label}</p>
                      <p className="mt-1 text-sm text-white/60">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["Passenger App", "Booking, ride selection, tracking, payments, history.", Smartphone],
                ["Driver App", "Availability, ride requests, navigation, earnings.", Car],
                ["Admin Dashboard", "Drivers, rides, payments, analytics, support.", LayoutDashboard],
                ["Live Tracking", "Real-time maps, driver movement, ETA, trip status.", MapPinned],
              ].map(([title, text, Icon]) => (
                <div key={title as string} className="rounded-[2rem] bg-white p-7 shadow-sm">
                  <Icon className="mb-5 text-[#7AC943]" size={32} />
                  <h3 className="text-xl font-black">{title as string}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/60">{text as string}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[3rem] bg-white p-8 shadow-sm">
              <CreditCard className="mb-5 text-[#7AC943]" size={38} />
              <h2 className="text-4xl font-black">Payment Integration</h2>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-black/65">
                Phase 1 includes payment infrastructure for Visa, Mastercard, Wish Money,
and cash ride handling, while Bank Audi / ATM systems can later support
driver cash-outs, settlement operations, and payout management.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] bg-black p-8 text-white">
                <Clock className="mb-5 text-[#7AC943]" size={36} />
                <h2 className="text-3xl font-black">Estimated Timeline</h2>
                <ul className="mt-6 space-y-3 text-white/65">
  <li>• Discovery, UX flows, and architecture: completed / in progress</li>
  <li>• Backend and database foundation: 3–4 weeks</li>
  <li>• Passenger app development: 4–5 weeks</li>
  <li>• Driver app development: 4–5 weeks</li>
  <li>• Admin dashboard and Bank Audi setup: 3–4 weeks</li>
  <li>• Testing, deployment, and pilot preparation: 2–3 weeks</li>
  <li>• Phase 1 MVP delivery target: 3 months</li>
</ul>
              </div>

              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <Wifi className="mb-5 text-[#7AC943]" size={36} />
                <h2 className="text-3xl font-black">Future Features</h2>
                <ul className="mt-6 space-y-3 text-black/65">
                  {future.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-[3rem] bg-black p-10 text-white">
              <h2 className="text-4xl font-black">Recommended Next Step</h2>
              <p className="mt-5 max-w-3xl text-white/65">
                Confirm Phase 1 scope, approve the current website/product
                direction, prepare final Figma screens and proposal PDF, then
                begin backend architecture, database planning, and mobile app
                wireframes before development starts.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}