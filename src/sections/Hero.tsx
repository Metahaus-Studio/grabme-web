"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { AppScreen } from "@/components/AppScreen";
import {
  BatteryCharging,
  Car,
  CreditCard,
  MapPin,
  Plane,
  Sparkles,
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
    <section className="relative min-h-screen overflow-hidden bg-[#050505] px-6 pb-20 pt-44 text-white md:pt-52">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_24%,rgba(122,201,67,0.27),transparent_28%),radial-gradient(circle_at_18%_70%,rgba(122,201,67,0.11),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_36%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#050505] to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <div className="mb-6 inline-flex flex-wrap items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/80 backdrop-blur-xl">
            <span className="flex items-center gap-2">
              <Zap size={16} className="text-[#7AC943]" />
              100% Electric
            </span>
            <span className="h-1 w-1 rounded-full bg-[#7AC943]" />
            <span>Fairer than traditional ride apps</span>
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.06em] md:text-7xl xl:text-8xl">
            Lebanon’s Next Generation{" "}
            <span className="text-[#7AC943]">Electric Mobility</span> Platform.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            GRABME brings fair electric rides, premium cars, airport mobility,
            corporate subscriptions, student plans, Bank Audi payments, and a
            future smart in-car experience into one scalable platform.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="#download" icon>
              Download App
            </Button>
            <Button href="/drivers" variant="secondary">
              Become a Driver
            </Button>
            <Button href="/corporate" variant="outline">
              Corporate Plans
            </Button>
          </div>

          <div className="mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {stats.map(([label, Icon]) => (
              <div
                key={label as string}
                className="group rounded-3xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur transition hover:-translate-y-1 hover:border-[#7AC943]/40 hover:bg-[#7AC943]/10"
              >
                <Icon className="mb-3 text-[#7AC943]" size={23} />
                <p className="text-sm font-semibold leading-5 text-white">
                  {label as string}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.08 }}
          className="relative hidden min-h-[660px] lg:block"
        >
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7AC943]/20 blur-3xl" />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 z-20 -translate-x-1/2"
          >
            <AppScreen type="home" />
          </motion.div>

          <div className="absolute bottom-6 left-0 z-30 rounded-[2rem] border border-white/10 bg-black/75 p-5 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7AC943]/15">
                <Sparkles className="text-[#7AC943]" />
              </div>
              <div>
                <p className="text-sm text-white/50">Next feature</p>
                <p className="font-bold">Grab-Me Connect</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}