import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { BarChart3, Building2, FileText, Users } from "lucide-react";

const items = [
  ["Business Profiles", "Dedicated company accounts for teams and executives.", Building2],
  ["Monthly Billing", "Centralized payment and invoice management.", FileText],
  ["Executive Travel", "Premium and luxury rides for business needs.", Users],
  ["Reporting", "Ride summaries, spend analytics, and usage visibility.", BarChart3],
];

export default function CorporatePage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="CORPORATE"
          title="Smart transportation for modern businesses."
          text="GRABME corporate mobility gives companies structured ride access, premium transportation, monthly billing, and usage reporting."
        />

        <section className="bg-[#F7F7F7] px-6 py-24 text-black">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
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