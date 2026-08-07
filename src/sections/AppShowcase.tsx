import { AppScreen } from "@/components/AppScreen";

const screens = [
  ["Passenger Home", "home"],
  ["Ride Selection", "rides"],
  ["Driver Arriving", "driver"],
  ["Airport", "airport"],
  ["Students", "student"],
  ["Membership", "membership"],
] as const;

export function AppShowcase() {
  return (
    <section className="border-t border-white/5 bg-[#050505] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 font-semibold text-[#53e36a]">APP EXPERIENCE</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
            A real product system, not just a taxi booking screen.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/60">
            GRABME is designed as a complete mobility ecosystem: passenger rides, driver operations, airport journeys, student programs, memberships, and premium electric ride categories.
          </p>
          <p className="mt-3 text-sm text-white/40">
            Example prices shown in USD. LBP conversion can be displayed using
            1 USD ≈ 89,000 LBP.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {screens.map(([label, type]) => (
            <div
              key={label}
              className="flex min-h-[760px] flex-col rounded-[3rem] border border-white/10 bg-white/[0.035] p-5 sm:p-7"
            >
              <div className="mb-5 flex items-center justify-between">
                <p className="font-bold">{label}</p>
                <span className="rounded-full bg-[#53e36a]/15 px-3 py-1 text-xs font-bold text-[#53e36a]">
                  UI
                </span>
              </div>

              <div className="flex flex-1 items-center justify-center overflow-hidden">
                <AppScreen type={type} />
              </div>
            </div>
          ))}
        </div>

    
      </div>
    </section>
  );
}