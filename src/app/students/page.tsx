import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { GraduationCap, MapPinned, BadgePercent, Users } from "lucide-react";

const items = [
  ["Student Pricing", "Special student-friendly fares and future discounted memberships.", BadgePercent],
  ["University Routes", "Potential dedicated ride routes for universities, campuses, and student areas.", MapPinned],
  ["Student Profiles", "Verified student accounts for safer and more structured ride access.", GraduationCap],
  ["Group Mobility", "Future shared ride options for students commuting in similar areas.", Users],
];

export default function StudentsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="GRABME STUDENTS"
          title="Affordable electric rides for students."
          text="GRABME Students is planned as a dedicated mobility layer for university students, with lower-cost rides, memberships, verified profiles, and campus-focused transportation."
        />

        <section className="bg-[#F7F7F7] px-6 py-24 text-black">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {items.map(([title, text, Icon]) => (
              <div key={title as string} className="rounded-[2rem] bg-white p-8 shadow-sm">
                <Icon className="mb-5 text-[#7AC943]" size={34} />
                <h2 className="text-xl font-black">{title as string}</h2>
                <p className="mt-3 text-sm leading-6 text-black/60">{text as string}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}