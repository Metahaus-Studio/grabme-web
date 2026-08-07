import { Building2, CarFront, Command, Leaf, MapPinned, ShieldCheck } from "lucide-react";

const features = [
  { title: "EV-only mobility", text: "GRABME is designed around an electric-only fleet and an EV-native passenger experience.", icon: Leaf },
  { title: "Complete ride lifecycle", text: "Destination, ride choice, pickup, matching, live trip visibility, completion, and rating in one flow.", icon: CarFront },
  { title: "Live trip visibility", text: "Keep route, ETA, driver, vehicle, and trip state visible throughout the active journey.", icon: MapPinned },
  { title: "Verified operations", text: "Driver onboarding, vehicle review, profiles, ratings, and operational controls support a trusted network.", icon: ShieldCheck },
  { title: "Mission Control", text: "Operate rides, dispatch, drivers, passengers, programs, and reporting from one administrative layer.", icon: Command },
  { title: "Business programs", text: "Corporate, student, airport, and membership experiences are built into the same mobility platform.", icon: Building2 },
];

export function Features() {
  return <section id="features" className="bg-[#F7F7F7] px-6 py-24 text-black"><div className="mx-auto max-w-7xl"><div className="mb-12 max-w-3xl"><p className="font-bold text-[#5b982f]">PLATFORM FOUNDATION</p><h2 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-6xl">Built as a mobility platform, not a booking screen.</h2></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{features.map(({title,text,icon:Icon}) => <div key={title} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm"><Icon className="mb-6 text-[#53e36a]" size={34}/><h3 className="text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-black/60">{text}</p></div>)}</div></div></section>;
}
