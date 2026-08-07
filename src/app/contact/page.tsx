import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ArrowRight, Building2, CarFront, GraduationCap, Plane, TabletSmartphone, Users } from "lucide-react";

const paths = [
  ["Ride with GRABME", "Explore the passenger journey and available electric ride experiences.", "/ride-types", CarFront],
  ["Drive with GRABME", "Apply through the live driver onboarding form and submit required driver information.", "/drivers#driver-application", Users],
  ["GRABME Business", "Explore company accounts, employee mobility, billing visibility, and reporting.", "/corporate", Building2],
  ["GRABME Students", "Learn how verified student mobility works inside the passenger experience.", "/students", GraduationCap],
  ["GRABME Airport", "Explore the dedicated airport journey and travel-ready EV experience.", "/airport", Plane],
  ["GRABME Connect", "See the current connected-cabin experience available inside supported GRABME vehicles.", "/grabme-connect", TabletSmartphone],
];

export default function ContactPage(){return <><Navbar/><main><PageHero eyebrow="START WITH GRABME" title="Choose the GRABME experience you need." text="Passenger mobility, driver onboarding, business programs, student access, airport journeys, and the connected cabin all have a dedicated launch path."/>
<section className="bg-[#F7F7F7] px-6 py-24 text-black"><div className="mx-auto max-w-7xl"><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{paths.map(([title,text,href,Icon]) => <a key={title as string} href={href as string} className="group rounded-[2rem] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="flex items-start justify-between"><Icon className="text-[#53e36a]" size={32}/><ArrowRight className="text-black/30 transition group-hover:text-black" size={22}/></div><h2 className="mt-7 text-2xl font-black">{title as string}</h2><p className="mt-3 leading-7 text-black/60">{text as string}</p></a>)}</div></div></section>
</main><Footer/></>}
