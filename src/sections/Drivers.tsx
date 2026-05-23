import { Button } from "@/components/Button";

export function Drivers() {
  return (
    <section id="drivers" className="bg-[#050505] px-6 py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] border border-white/10 bg-[radial-gradient(circle_at_80%_20%,rgba(122,201,67,0.25),transparent_30%),linear-gradient(135deg,#141414,#050505)] p-10 md:p-16">
        <div className="max-w-2xl">
          <p className="mb-3 font-semibold text-[#7AC943]">FOR DRIVERS</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
            Drive the future of mobility.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/60">
            Join Lebanon’s next-generation electric taxi network with fair ride
            opportunities, digital tools, and premium customer demand.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="#contact" icon>
              Apply as Driver
            </Button>
            <Button variant="outline">View Requirements</Button>
          </div>
        </div>
      </div>
    </section>
  );
}