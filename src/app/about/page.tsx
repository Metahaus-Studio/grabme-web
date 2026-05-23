import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="ABOUT"
          title="Building the future of electric mobility in Lebanon."
          text="GRABME is designed as a next-generation e-taxi platform connecting reliable rides, electric vehicles, premium experiences, and business transportation."
        />

        <section className="bg-[#F7F7F7] px-6 py-24 text-black">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
            {[
              ["Mission", "Modernize transportation with reliable, tech-enabled electric rides."],
              ["Sustainability", "Support cleaner urban movement through an EV-first fleet strategy."],
              ["Technology", "Use real-time tracking, smart booking, secure payments, and scalable infrastructure."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-black">{title}</h2>
                <p className="mt-4 leading-7 text-black/60">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}