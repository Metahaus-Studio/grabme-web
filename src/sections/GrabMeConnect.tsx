import { Gamepad2, LogIn, MonitorPlay, Route, ShieldCheck, BriefcaseBusiness } from "lucide-react";

const items = [
  ["Passenger Session", "Sign in to the in-car experience and keep the cabin tied to the active GRABME ride.", LogIn],
  ["Live Ride Screen", "See route progress, destination, ETA, driver and vehicle information throughout the journey.", Route],
  ["Entertainment", "Access the current in-car entertainment experience from the connected cabin screen.", MonitorPlay],
  ["Kids Mode", "A simplified child-friendly cabin mode designed for family journeys.", Gamepad2],
  ["Work Mode", "A focused cabin experience for passengers who want a quieter, more work-oriented ride.", BriefcaseBusiness],
  ["Ride-Linked Safety", "Keep core safety and ride information connected to the authenticated trip session.", ShieldCheck],
];

export function GrabMeConnect() {
  return (
    <section className="bg-[#050505] px-6 py-28 text-white md:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-bold text-[#53e36a]">GRABME CONNECT</p>
          <h2 className="mt-4 max-w-xl text-5xl font-black leading-[0.92] tracking-[-0.055em] md:text-7xl">
            The journey continues inside the car.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/58">
            GRABME Connect extends the active ride into the cabin with passenger login, live journey information, entertainment, and dedicated in-car modes.
          </p>
          <a href="/grabme-connect" className="mt-8 inline-flex rounded-2xl bg-[#53e36a] px-6 py-4 text-sm font-black text-black transition hover:bg-white">
            Explore GRABME Connect
          </a>
          <p className="mt-5 text-xs text-white/34">Designed &amp; built by MetaHaus.</p>
        </div>

        <div className="rounded-[2.7rem] border border-white/10 bg-[#0b0e0b] p-6 md:p-8">
          <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-xs font-black tracking-[0.16em] text-[#53e36a]">ACTIVE RIDE</p>
              <h3 className="mt-2 text-2xl font-black">Your cabin, connected.</h3>
            </div>
            <MonitorPlay className="text-[#53e36a]" size={28} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.slice(0, 4).map(([title, text, Icon]) => (
              <div key={title as string} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <Icon className="mb-4 text-[#53e36a]" size={24} />
                <h4 className="font-black">{title as string}</h4>
                <p className="mt-2 text-sm leading-6 text-white/52">{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
