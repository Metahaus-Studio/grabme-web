import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="CONTACT"
          title="Start riding, driving, partnering, or building with GRABME."
          text="This page supports passenger interest, driver onboarding, corporate subscriptions, airport mobility, student plans, partnerships, and future Grab-Me Connect inquiries."
        />

        <section className="bg-[#F7F7F7] px-6 py-24 text-black">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-black">Contact GRABME</h2>
              <div className="mt-8 grid gap-4">
                <input className="rounded-2xl border border-black/10 p-4" placeholder="Full name" />
                <input className="rounded-2xl border border-black/10 p-4" placeholder="Email or phone" />
                <select className="rounded-2xl border border-black/10 p-4">
                  <option>Passenger inquiry</option>
                  <option>Driver application</option>
                  <option>Corporate subscription</option>
                  <option>Student plan</option>
                  <option>Airport rides</option>
                  <option>Shopping / elderly assistance</option>
                  <option>Grab-Me Connect partnership</option>
                  <option>Charging station partnership</option>
                </select>
                <textarea className="min-h-36 rounded-2xl border border-black/10 p-4" placeholder="Message" />
                <Button href="#">Submit Inquiry</Button>
              </div>
            </div>

            <div className="rounded-[2rem] bg-black p-8 text-white">
              <h2 className="text-3xl font-black">Launch priorities</h2>
              <ul className="mt-8 space-y-4 text-white/65">
                <li>• Passenger app early access</li>
                <li>• Driver onboarding and EV fleet setup</li>
                <li>• Bank Audi / ATM Pay integration</li>
                <li>• Corporate subscriptions for banks and employees</li>
                <li>• Student ride plans</li>
                <li>• Airport booking and car tracking</li>
                <li>• Grab-Me Shopping for elderly grocery support</li>
                <li>• Future Grab-Me Connect smart in-car screens</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}