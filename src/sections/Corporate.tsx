import { BarChart3, Building2, FileText, Users } from "lucide-react";

export function Corporate() {
  const items = [
    ["Company Accounts", "Centralized ride control for teams.", Building2],
    ["Monthly Billing", "Simplified billing and ride summaries.", FileText],
    ["Executive Travel", "Premium and luxury rides for business needs.", Users],
    ["Analytics", "Reports for rides, usage, and spend.", BarChart3],
  ];

  return (
    <section id="corporate" className="bg-[#F7F7F7] px-6 py-24 text-black">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 font-semibold text-[#7AC943]">CORPORATE</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
            Smart transportation for modern businesses.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-black/60">
            Corporate ride plans, premium transport, centralized billing, and
            reliable mobility for teams, executives, and partners.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map(([title, text, Icon]) => (
            <div key={title as string} className="rounded-[2rem] bg-white p-7 shadow-sm">
              <Icon className="mb-5 text-[#7AC943]" size={30} />
              <h3 className="font-black">{title as string}</h3>
              <p className="mt-2 text-sm leading-6 text-black/60">{text as string}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}