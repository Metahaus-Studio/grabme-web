import { BadgePercent, GraduationCap, MapPinned, ShieldCheck } from "lucide-react";
const items = [
  ["Verified access", GraduationCap], ["Student programs", BadgePercent], ["Campus mobility", MapPinned], ["Structured safety", ShieldCheck],
];
export function Students() {
  return <section className="bg-[#050505] px-6 py-28 md:py-36 text-white"><div className="mx-auto max-w-7xl">
    <p className="font-semibold text-[#53e36a]">GRABME STUDENTS</p><h2 className="mt-3 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">Electric mobility built for student life.</h2>
    <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">Verified student access, campus-aware mobility, and student-oriented programs inside the GRABME ecosystem.</p>
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{items.map(([label, Icon]) => <div key={label as string} className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-6"><Icon className="mb-4 text-[#53e36a]" size={26}/><p className="font-black">{label as string}</p></div>)}</div>
    <a href="/students" className="mt-8 inline-flex rounded-2xl bg-[#53e36a] px-6 py-4 text-sm font-bold text-black">Explore student mobility</a>
  </div></section>;
}
