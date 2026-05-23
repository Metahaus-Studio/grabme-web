import { Camera, LocateFixed, ShieldCheck, TabletSmartphone, Wifi } from "lucide-react";

const items = [
  ["Wi-Fi Screens", "Future in-car screens for rider login, content, and trip tools.", Wifi],
  ["Live Tracking", "Trip status, car tracking, driver info, and ride visibility.", LocateFixed],
  ["Safety Tools", "Child, elderly, and passenger safety features for future rollout.", ShieldCheck],
  ["Lost Items", "Support for forgotten items through ride-linked cabin records.", Camera],
];

export function GrabMeConnect() {
  return (
    <section className="bg-[#050505] px-6 py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 font-semibold text-[#7AC943]">GRAB-ME CONNECT</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
            The future smart cabin experience.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
            Grab-Me Connect is the future in-car digital layer: Wi-Fi screens,
            login/logout, live trip visibility, kids features, safety support,
            lost item tools, and personalized mobility services.
          </p>
        </div>

        <div className="rounded-[3rem] border border-white/10 bg-white/[0.04] p-6">
          <div className="rounded-[2.5rem] bg-black p-5 shadow-2xl">
            <div className="rounded-[2rem] border border-[#7AC943]/30 bg-[radial-gradient(circle_at_70%_20%,rgba(122,201,67,0.24),transparent_30%),#101410] p-8">
              <TabletSmartphone className="mb-8 text-[#7AC943]" size={46} />
              <h3 className="text-3xl font-black">In-Car Smart Screen</h3>
              <p className="mt-3 text-white/60">
                Passenger login, trip tracking, safety, offers, airport tools,
                kids content, and future ad placements.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {items.map(([title, text, Icon]) => (
                  <div key={title as string} className="rounded-2xl bg-white/5 p-5">
                    <Icon className="mb-4 text-[#7AC943]" size={24} />
                    <h4 className="font-bold">{title as string}</h4>
                    <p className="mt-2 text-xs leading-5 text-white/50">{text as string}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}