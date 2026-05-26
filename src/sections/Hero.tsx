"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import {
  BatteryCharging,
  Car,
  CreditCard,
  MapPin,
  Plane,
  Users,
  Zap,
} from "lucide-react";

export function Hero() {
  const stats = [
    ["Live Tracking", MapPin],
    ["EV Fleet", BatteryCharging],
    ["Bank Audi Pay", CreditCard],
    ["Airport Rides", Plane],
    ["Corporate", Users],
    ["Luxury Cars", Car],
  ];

  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 pb-6 pt-28 text-white md:min-h-screen md:pb-24 md:pt-40">
      <div className="absolute inset-0">
        <img
          src="/hero-phone.png"
          alt="GRABME Hero"
          className="
  absolute
  inset-0
  h-full
  w-full
  object-cover
  object-center
  opacity-40
  scale-[1.05]
  translate-x-[12%]
  translate-y-[-2%]
  md:opacity-100
  md:scale-[0.78]
  md:-translate-x-[2%]
  md:translate-y-[4%]
"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/92 via-[#050505]/65 to-[#050505]/15 md:from-[#050505]/86 md:via-[#050505]/48 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/35 md:from-black/10 md:to-black/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="max-w-[880px]"
        >
          <div className="mb-6 inline-flex max-w-full flex-wrap items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-white/80 backdrop-blur-xl">
            <span className="flex items-center gap-2">
              <Zap size={16} className="text-[#7AC943]" />
              100% Electric
            </span>
            <span className="h-1 w-1 rounded-full bg-[#7AC943]" />
            <span>Fairer than traditional ride apps</span>
          </div>

          <h1 className="max-w-[850px] text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-6xl xl:text-7xl">
            Lebanon’s Next <br />
            Generation <br />
            <span className="text-[#7AC943]">Electric Mobility</span> <br />
            Platform.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/76 md:text-lg">
            GRABME brings fair electric rides, premium cars, airport mobility,
            corporate subscriptions, student plans, Bank Audi payments, and a
            future smart in-car experience into one scalable platform.
          </p>

          <div className="mt-9 grid gap-4 sm:flex sm:flex-wrap">
            <Button href="/#download" icon>
              Download App
            </Button>

            <Button href="/drivers" variant="secondary">
              Become a Driver
            </Button>

            <Button href="/corporate" variant="outline">
              Corporate Plans
            </Button>
          </div>

          <div className="mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {stats.map(([label, Icon]) => (
              <div
                key={label as string}
                className="group rounded-3xl border border-white/10 bg-black/50 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#7AC943]/40 hover:bg-[#7AC943]/10"
              >
                <Icon className="mb-3 text-[#7AC943]" size={23} />
                <p className="text-sm font-semibold leading-5 text-white">
                  {label as string}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}