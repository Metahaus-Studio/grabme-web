import { Button } from "@/components/Button";
import { CheckCircle2 } from "lucide-react";

const points = ["Go online and manage availability", "Receive and accept ride requests", "Navigate to pickup and contact the passenger", "Arrive, start, and complete the trip", "Track ride activity, earnings, and ratings"];

export function Drivers() {
  return (
    <section id="drivers" className="bg-[#050505] px-6 py-28 md:py-36 text-white">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] border border-white/10 bg-[radial-gradient(circle_at_80%_20%,rgba(122,201,67,0.25),transparent_30%),linear-gradient(135deg,#141414,#050505)] p-10 md:p-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 font-semibold text-[#53e36a]">FOR DRIVERS</p>
            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">A driver app built around the real trip.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">GRABME Driver keeps the primary ride action clear from request through pickup, live trip, completion, earnings, and ratings.</p>
            <div className="mt-9 flex flex-wrap gap-4"><Button href="/drivers#driver-application" icon>Apply as Driver</Button><Button href="/drivers" variant="outline">Explore Driver</Button></div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-black/35 p-7">
            <p className="text-xs font-black tracking-[0.16em] text-[#53e36a]">DRIVER LIFECYCLE</p>
            <div className="mt-6 space-y-4">{points.map(point => <div key={point} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-[#53e36a]" size={19}/><p className="text-sm leading-6 text-white/68">{point}</p></div>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
