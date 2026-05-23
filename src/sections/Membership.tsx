import { Gift, HeartHandshake, Megaphone, Trophy } from "lucide-react";

const items = [
  ["Loyalty Points", "Reward repeat riders and frequent customers.", Trophy],
  ["Gift Cards", "Ride credits and gifting options for future launch.", Gift],
  ["Bloggers & Promos", "Influencer campaigns and referral benefits.", Megaphone],
  ["Membership Plans", "Discounts for students, corporate users, and loyal riders.", HeartHandshake],
];

export function Membership() {
  return (
    <section className="bg-[#F7F7F7] px-6 py-24 text-black">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 font-semibold text-[#7AC943]">GRABME MEMBERSHIP</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
            Loyalty, rewards, gift cards, and community growth.
          </h2>
          <p className="mt-6 text-lg leading-8 text-black/60">
            Memberships can become a strong retention engine through ride
            credits, reward points, student plans, corporate discounts,
            influencer campaigns, and gift cards.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {items.map(([title, text, Icon]) => (
            <div key={title as string} className="rounded-[2rem] bg-white p-7 shadow-sm">
              <Icon className="mb-5 text-[#7AC943]" size={32} />
              <h3 className="text-xl font-black">{title as string}</h3>
              <p className="mt-3 text-sm leading-6 text-black/60">{text as string}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
  <a
    href="/membership"
    className="inline-flex rounded-2xl bg-black px-6 py-4 text-sm font-bold text-white transition hover:bg-[#7AC943] hover:text-black"
  >
    Explore Membership
  </a>
</div>
      </div>
    </section>
  );
}