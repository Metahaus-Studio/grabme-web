import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import {
  Camera,
  GraduationCap,
  LocateFixed,
  ShieldCheck,
  ShoppingBag,
  TabletSmartphone,
  UserRoundCheck,
  Wifi,
} from "lucide-react";

const items = [
  ["In-Car Wi-Fi Screens", "Future passenger screens for ride tools, offers, tracking, and entertainment.", Wifi],
  ["User Login / Logout", "Passenger profile access for personalized rides and smart cabin experiences.", UserRoundCheck],
  ["Kids Features", "Future child-friendly content and safer ride visibility for families.", GraduationCap],
  ["Live Tracking UI", "In-car trip progress, route visibility, driver info, and arrival details.", LocateFixed],
  ["Camera & Safety Layer", "Future camera-supported safety, incident review, and cabin visibility tools.", Camera],
  ["Lost Items", "Ride-linked tools to help identify and recover forgotten belongings.", TabletSmartphone],
  ["Elderly Assistance", "Support for grocery assistance, pickup help, and accessible ride services.", ShoppingBag],
  ["Cybersecurity", "Security-first planning for user accounts, camera data, payments, and live location.", ShieldCheck],
];

export default function GrabMeConnectPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="GRAB-ME CONNECT"
          title="The future smart cabin layer for connected electric rides."
          text="Grab-Me Connect is the future in-car technology layer: Wi-Fi screens, passenger login, live ride tracking, kids features, safety tools, camera support, lost item recovery, and smart mobility services."
        />

        <section className="bg-[#050505] px-6 py-24 text-white">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {items.map(([title, text, Icon]) => (
              <div key={title as string} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
                <Icon className="mb-5 text-[#7AC943]" size={32} />
                <h2 className="text-xl font-black">{title as string}</h2>
                <p className="mt-3 text-sm leading-6 text-white/60">{text as string}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}