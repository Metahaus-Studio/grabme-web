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
    <section className="bg-[#050505] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 font-semibold text-[#7AC943]">APP EXPERIENCE</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
            A real product system, not just a taxi booking screen.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/60">
            GRABME is designed as a complete mobility ecosystem: passenger
            rides, airport flows, student plans, memberships, and premium
            vehicle categories.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {screens.map(([label, type]) => (
            <div
              key={label}
              className="rounded-[3rem] border border-white/10 bg-white/[0.035] p-4 sm:p-6"
            >
              <div className="mb-5 flex items-center justify-between">
                <p className="font-bold">{label}</p>
                <span className="rounded-full bg-[#7AC943]/15 px-3 py-1 text-xs font-bold text-[#7AC943]">
                  UI
                </span>
              </div>

              <div className="flex justify-center overflow-hidden">
                <div className="origin-top scale-[0.86] sm:scale-100">
                  <AppScreen type={type} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[3rem] border border-white/10 bg-[#7AC943]/10 p-8 text-center">
          <h3 className="text-3xl font-black">Ready for proposal mode.</h3>
          <p className="mx-auto mt-3 max-w-2xl text-white/60">
            These screens will be used to prepare the client proposal, product
            scope, and Figma confirmation file before full development starts.
          </p>

          <p className="mt-3 text-sm text-white/40">
  Example prices shown in USD. LBP conversion can be displayed using 1 USD ≈ 89,000 LBP.
</p>
        </div>
      </div>
    </section>
  );
}