import { BadgePercent, GraduationCap, MapPinned, Users } from "lucide-react";

const items = [
  ["Student Pricing", "More affordable rides for university students.", BadgePercent],
  ["Campus Routes", "Future campus-focused pickup and drop-off zones.", MapPinned],
  ["Verified Profiles", "Student accounts and membership eligibility.", GraduationCap],
  ["Group Mobility", "Future shared rides and student commute options.", Users],
];

export function Students() {
  return (
    <section className="bg-[#050505] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 font-semibold text-[#7AC943]">GRABME STUDENTS</p>
        <h2 className="max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
          Affordable electric rides for students and campuses.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
          A dedicated future mobility layer for Lebanese students: lower-cost
          rides, verified profiles, campus routes, and student memberships.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map(([title, text, Icon]) => (
            <div key={title as string} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
              <Icon className="mb-5 text-[#7AC943]" size={32} />
              <h3 className="text-xl font-black">{title as string}</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">{text as string}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
  <a
    href="/students"
    className="inline-flex rounded-2xl bg-[#7AC943] px-6 py-4 text-sm font-bold text-black transition hover:bg-white"
  >
    Explore Student Rides
  </a>
</div>
      </div>
    </section>
  );
}