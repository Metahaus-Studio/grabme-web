"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { PhoneMockup } from "@/components/PhoneMockup";
import { Car, CreditCard, MapPin, ShieldCheck, Zap } from "lucide-react";

export function Hero() {
  const stats = [
    ["Real-time Tracking", MapPin],
    ["Verified Drivers", ShieldCheck],
    ["100% Electric Fleet", Zap],
    ["Secure Payments", CreditCard],
    ["Premium Rides", Car],
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] px-6 pb-20 pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(122,201,67,0.26),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-[#050505] to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
              <Zap size={16} className="text-[#7AC943]" />
              100% Electric · Zero Emission
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white md:text-7xl">
              Lebanon’s Next Generation{" "}
              <span className="text-[#7AC943]">Electric Mobility</span>{" "}
              Platform.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">
              Smart rides, premium experiences, corporate transport, and secure
              payments — all in one modern mobility platform.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="#download" icon>
                Download App
              </Button>
              <Button href="#drivers" variant="secondary">
                Become a Driver
              </Button>
            </div>

            <div className="mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-5">
              {stats.map(([label, Icon]) => (
                <div
                  key={label as string}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
                >
                  <Icon className="mb-3 text-[#7AC943]" size={24} />
                  <p className="text-sm font-semibold text-white">{label as string}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7AC943]/20 blur-3xl" />
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}