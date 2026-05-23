import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { BadgePercent, Gift, HeartHandshake, Megaphone, Star, Trophy } from "lucide-react";

const items = [
  ["Loyalty Points", "Reward repeat riders with points, ride credits, and future tier upgrades.", Trophy],
  ["Gift Cards", "Ride credit gifts for friends, families, students, and corporate rewards.", Gift],
  ["Student Discounts", "Membership layers for student pricing and verified campus ride offers.", BadgePercent],
  ["Corporate Benefits", "Business ride credits, employee rewards, and monthly subscription packages.", HeartHandshake],
  ["Blogger Promos", "Influencer campaigns, referral codes, and launch promotions.", Megaphone],
  ["Premium Tiers", "Future premium benefits for priority rides, airport pickups, and luxury cars.", Star],
];

export default function MembershipPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="GRABME MEMBERSHIP"
          title="Rewards, loyalty, gift cards, and smart ride benefits."
          text="GRABME Membership is the future loyalty engine of the platform, built for repeat riders, students, corporate clients, bloggers, and premium customers."
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