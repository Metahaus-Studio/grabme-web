import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="ABOUT GRABME"
          title="Building Lebanon’s smart electric mobility ecosystem."
          text="GRABME is designed to go beyond ride-hailing: electric rides, fair pricing, smart in-car technology, airport mobility, student access, elderly assistance, loyalty, corporate subscriptions, and future connected vehicles."
        />

        <section className="bg-[#F7F7F7] px-6 py-24 text-black">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
            {[
              ["Mission", "Make electric transportation more accessible, affordable, and reliable for Lebanese locals."],
              ["Sustainability", "Support cleaner mobility through EV rides, future charging partnerships, and go-green positioning."],
              ["Technology", "Build a secure platform with booking, tracking, payments, smart screens, memberships, and scalable APIs."],
              ["Local Focus", "Serve Lebanese everyday riders, students, elderly customers, corporate employees, airport travelers, and premium clients."],
              ["Future Vision", "Expand into Grab-Me Connect, charging stations, AR vehicle experiences, voice booking, and smart cabin tools."],
              ["Security", "Treat cybersecurity as a core layer for payments, live location, user accounts, and corporate mobility data."],
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