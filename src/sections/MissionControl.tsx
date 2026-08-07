import { Activity, Building2, CarFront, Command, GraduationCap, Plane, UsersRound } from "lucide-react";

const capabilities = [
  ["Live operations", Activity],
  ["Driver management", CarFront],
  ["Passenger management", UsersRound],
  ["Corporate programs", Building2],
  ["Student mobility", GraduationCap],
  ["Airport operations", Plane],
];

export function MissionControl() {
  return (
    <section id="mission-control" className="relative overflow-hidden bg-[#080a08] px-6 py-28 text-white md:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_40%,rgba(122,201,67,0.16),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#53e36a]/25 bg-[#53e36a]/10 text-[#53e36a]">
            <Command size={28} />
          </div>
          <p className="font-bold text-[#53e36a]">GRABME MISSION CONTROL</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.055em] md:text-6xl">Every ride. One command center.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/58">
            The operational layer behind GRABME brings mobility programs, ride lifecycle, drivers, passengers, and dispatch visibility into one control experience.
          </p>
        </div>

        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.035] p-5 md:p-7">
          <div className="rounded-[2rem] border border-white/10 bg-black/60 p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div><p className="text-xs font-bold tracking-[0.18em] text-[#53e36a]">OPERATIONS</p><p className="mt-1 text-xl font-black">Mobility overview</p></div>
              <span className="rounded-full bg-[#53e36a]/12 px-3 py-1 text-xs font-bold text-[#78ef87]">Live platform</span>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {capabilities.map(([label, Icon]) => (
                <div key={label as string} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                  <Icon size={19} className="text-[#53e36a]" />
                  <span className="text-sm font-semibold text-white/80">{label as string}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
