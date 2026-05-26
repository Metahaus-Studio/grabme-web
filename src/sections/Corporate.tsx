import { BarChart3, Building2, FileText, Users } from "lucide-react";

export function Corporate() {
  const items = [
    ["Company Accounts", "Centralized ride control for teams.", Building2],
    ["Monthly Billing", "Simplified billing and ride summaries.", FileText],
    ["Executive Travel", "Premium and luxury rides for business needs.", Users],
    ["Analytics", "Reports for rides, usage, and spend.", BarChart3],
  ];

  return (
    <section
      id="corporate"
      className="bg-[#F7F7F7] px-6 pt-20 pb-16 text-black"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="mb-5 text-sm font-black uppercase tracking-wide text-[#7AC943]">
            CORPORATE
          </p>

          <h2 className="max-w-xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-black md:text-6xl">
            Smart transportation for modern businesses.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-black/60">
            Corporate ride plans, premium transport, centralized billing,
            and reliable mobility for teams, executives, and partners.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid auto-rows-fr gap-6 sm:grid-cols-2">
          {items.map(([title, text, Icon]) => (
            <div
              key={title as string}
              className="
                flex
                min-h-[190px]
                flex-col
                justify-start
                rounded-[2rem]
                border
                border-black/5
                bg-white
                p-8
                shadow-sm
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-md
              "
            >
              <Icon
                className="mb-7 text-[#7AC943]"
                size={32}
              />

              <h3 className="text-2xl font-black leading-tight text-black">
                {title as string}
              </h3>

              <p className="mt-4 text-base leading-7 text-black/55">
                {text as string}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}