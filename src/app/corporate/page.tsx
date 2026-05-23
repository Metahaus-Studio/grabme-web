import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { BarChart3, Building2, CreditCard, FileText, ShieldCheck, Users } from "lucide-react";

const items = [
  ["Corporate Subscriptions", "Monthly ride plans for banks, companies, teams, and employees.", Building2],
  ["Employee Mobility", "Reliable transport for staff commuting, meetings, airport rides, and late shifts.", Users],
  ["Central Billing", "Company-level billing, Bank Audi payments, invoices, and transaction records.", CreditCard],
  ["Ride Reports", "Monthly summaries, usage reports, employee ride history, and cost visibility.", BarChart3],
  ["Admin Control", "Corporate dashboards for managing users, limits, departments, and ride permissions.", FileText],
  ["Security", "Cybersecurity-first structure for business accounts, payments, and location data.", ShieldCheck],
];

export default function CorporatePage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="GRABME CORPORATE"
          title="Electric mobility subscriptions for modern companies."
          text="GRABME Corporate is designed for banks, companies, executives, and employee transportation programs with subscription packages, reporting, and centralized billing."
        />

        <section className="bg-[#F7F7F7] px-6 py-24 text-black">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map(([title, text, Icon]) => (
              <div key={title as string} className="rounded-[2rem] bg-white p-8 shadow-sm">
                <Icon className="mb-5 text-[#7AC943]" size={34} />
                <h2 className="text-2xl font-black">{title as string}</h2>
                <p className="mt-3 leading-7 text-black/60">{text as string}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}