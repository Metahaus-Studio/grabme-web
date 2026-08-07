import { ArrowUpRight, CarFront, Command, Radio, TabletSmartphone } from "lucide-react";

const experiences = [
  { eyebrow: "PASSENGER", title: "Ride", href: "/ride-types", icon: CarFront, text: "Search, select an EV category, choose now or schedule, confirm pickup, pay, match, and follow the live trip." },
  { eyebrow: "DRIVER", title: "Drive", href: "/drivers", icon: Radio, text: "Availability, ride requests, pickup, navigation, trip execution, earnings, ratings, and operational status." },
  { eyebrow: "OPERATIONS", title: "Mission Control", href: "/mission-control", icon: Command, text: "Rides, dispatch, drivers, passengers, payments, programs, support, and reporting in one operational layer." },
  { eyebrow: "CONNECTED CABIN", title: "Connect", href: "/grabme-connect", icon: TabletSmartphone, text: "Passenger login, active ride information, entertainment, Kids Mode, Work Mode, Wi-Fi, and ride-linked safety." },
];

export function Ecosystem() {
  return (
    <section className="bg-[#f4f5f1] px-6 py-28 text-black md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#428d37]">ONE PRODUCT FAMILY</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.055em] md:text-6xl">Four experiences. One GRABME journey.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-black/55 lg:justify-self-end">From booking a ride to managing operations and experiencing the connected cabin, GRABME brings every part of electric mobility into one seamless ecosystem.</p>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {experiences.map(({ eyebrow, title, text, href, icon: Icon }) => (
            <a key={title} href={href} className="group rounded-[1.7rem] border border-black/8 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-start justify-between">
                <div className="rounded-xl bg-[#53e36a]/12 p-2.5 text-[#428d37]"><Icon size={22} /></div>
                <ArrowUpRight className="text-black/25 transition group-hover:text-black" size={20} />
              </div>
              <p className="mt-6 text-[10px] font-black tracking-[0.18em] text-[#428d37]">{eyebrow}</p>
              <h3 className="mt-2 text-2xl font-black tracking-[-0.035em]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-black/56">{text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}