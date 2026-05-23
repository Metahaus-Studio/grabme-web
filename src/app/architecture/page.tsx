import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import {
  Bell,
  CreditCard,
  Database,
  LayoutDashboard,
  Lock,
  MapPinned,
  Server,
  Smartphone,
  UserCheck,
} from "lucide-react";

const layers = [
  ["Passenger App", "Booking, ride categories, live tracking, rider payments, history, and profile.", Smartphone],
  ["Driver App", "Availability, ride requests, navigation, ride status, earnings, and cash-out requests.", UserCheck],
  ["Admin Dashboard", "Driver approval, rides, payments, payouts, users, support, and analytics.", LayoutDashboard],
  ["Backend API", "Authentication, ride logic, pricing, rider payments, driver payouts, notifications, and permissions.", Server],
  ["Database", "Users, drivers, vehicles, rides, payments, payouts, ratings, and support tickets.", Database],
  ["Real-Time Tracking", "Live GPS updates, ride status sync, driver movement, and ETA updates.", MapPinned],
  ["Payments & Payouts", "Visa, Mastercard, Wish Money, cash ride handling, and driver payout infrastructure through Bank Audi / ATM systems.", CreditCard],
  ["Notifications", "OTP, ride updates, driver alerts, payment confirmations, and payout updates.", Bell],
  ["Security", "JWT auth, role permissions, API validation, payment protection, and encrypted sensitive data.", Lock],
];

const flows = [
  ["Ride Request Flow", "Passenger selects pickup/dropoff → ride category → fare estimate → request sent → nearby driver accepts → ride starts → tracking active → ride ends → payment/rating."],
  ["Driver Flow", "Driver logs in → goes online → receives ride request → accepts/rejects → navigates to pickup → starts trip → completes ride → earnings update → cash-out request if available."],
  ["Admin Flow", "Admin approves drivers → monitors live rides → handles support → reviews rider payments → manages driver payouts → manages users → tracks operational performance."],
  ["Payment Flow", "Passengers can pay by Visa, Mastercard, Wish Money, or cash. The backend records payment status, ride completion, and driver earnings."],
  ["Driver Payout Flow", "Driver balance accumulates from completed rides → driver requests cash-out → admin/system validates balance → Bank Audi / ATM infrastructure supports withdrawal or settlement."],
];

export default function ArchitecturePage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="ARCHITECTURE"
          title="GRABME technical architecture."
          text="A modular system structure for passenger apps, driver apps, admin dashboard, backend APIs, real-time tracking, rider payments, driver payouts, database management, and security."
        />

        <section className="bg-[#F7F7F7] px-6 py-24 text-black">
          <div className="mx-auto max-w-7xl space-y-16">
            <div>
              <p className="mb-3 font-semibold text-[#7AC943]">SYSTEM LAYERS</p>
              <h2 className="max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
                Built as a modular mobility platform.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {layers.map(([title, text, Icon]) => (
                <div key={title as string} className="rounded-[2rem] bg-white p-8 shadow-sm">
                  <Icon className="mb-5 text-[#7AC943]" size={34} />
                  <h3 className="text-2xl font-black">{title as string}</h3>
                  <p className="mt-3 leading-7 text-black/60">{text as string}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[3rem] bg-black p-10 text-white">
              <h2 className="text-4xl font-black">Core Data Modules</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[
                  "Users",
                  "Drivers",
                  "Vehicles",
                  "Rides",
                  "Rider Payments",
                  "Driver Payouts",
                  "Ratings",
                  "Support",
                  "Corporate Accounts",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-white/5 p-4 font-semibold text-white/80">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 font-semibold text-[#7AC943]">LOGIC FLOWS</p>
              <h2 className="max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
                How the platform operates.
              </h2>

              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {flows.map(([title, text]) => (
                  <div key={title} className="rounded-[2rem] bg-white p-8 shadow-sm">
                    <h3 className="text-2xl font-black">{title}</h3>
                    <p className="mt-4 leading-7 text-black/60">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[3rem] bg-white p-10 shadow-sm">
              <h2 className="text-4xl font-black">Security Priorities</h2>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-black/65">
                GRABME should be built with role-based permissions, validated API
                requests, secure authentication, protected payment and payout flows,
                location privacy controls, audit logs for admin actions, and careful
                handling of sensitive user, driver, corporate, ride, payment, and
                payout data.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}