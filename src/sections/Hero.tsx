"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { BatteryCharging, Building2, CarFront, Command, Sparkles } from "lucide-react";

const pillars = [
  ["Ride", "Passenger", CarFront],
  ["Drive", "Driver", BatteryCharging],
  ["Operate", "Mission Control", Command],
  ["Connect", "In-car", Sparkles],
];

export function Hero() {
  return (
    <section className="relative min-h-[820px] overflow-hidden bg-[#050505] px-6 pb-24 pt-32 text-white md:min-h-[860px] md:pb-28 md:pt-40">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src="/hero-beirut-final.png"
          alt=""
          aria-hidden="true"
          className="absolute right-[-120px] top-[500px] h-[520px] w-auto max-w-none object-contain md:inset-y-0 md:right-0 md:top-auto md:h-full md:w-full md:max-w-full md:object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/94 via-55% to-[#050505]/25 md:inset-y-0 md:left-0 md:w-[58%] md:bg-gradient-to-r md:from-[#050505] md:via-[#050505]/92 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(83,227,106,0.08),transparent_30%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-[650px]"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#53e36a]/25 bg-[#53e36a]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#78ef87] backdrop-blur-xl">
            <BatteryCharging size={15} /> 100% electric mobility ecosystem
          </div>

          <h1 className="text-5xl font-black leading-[0.91] tracking-[-0.065em] sm:text-6xl lg:text-7xl xl:text-[5.7rem]">
            Electric mobility,
            <br />
            <span className="text-[#53e36a]">connected.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            One EV platform for passengers, drivers, operations, business mobility, and the connected cabin, all built around the same live ride.
          </p>

          <p className="mt-6 text-xs font-black uppercase tracking-[0.26em] text-white/65 md:tracking-[0.3em] md:text-white/45">
            Ride. Drive. Operate. Connect.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <div className="col-span-2 sm:contents"><Button href="/#download" icon>Get GRABME</Button></div>
            <Button href="/drivers" variant="secondary">Drive with GRABME</Button>
            <Button href="/corporate" variant="outline"><Building2 size={17} /> Business</Button>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-4">
            {pillars.map(([title, subtitle, Icon]) => (
              <div
                key={title as string}
                className="rounded-[1.35rem] border border-white/10 bg-black/48 p-4 backdrop-blur-xl"
              >
                <Icon size={19} className="mb-3 text-[#53e36a]" />
                <p className="text-sm font-black">{title as string}</p>
                <p className="mt-1 text-[11px] text-white/38">{subtitle as string}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}