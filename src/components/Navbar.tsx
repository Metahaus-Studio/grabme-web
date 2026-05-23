"use client";

import { useState } from "react";
import { Download, Globe2, Menu, X } from "lucide-react";
import { Button } from "./Button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Features", "/features"],
    ["Ride Types", "/ride-types"],
    ["Students", "/students"],
    ["Airport", "/airport"],
    ["Connect", "/grabme-connect"],
    ["Corporate", "/corporate"],
    ["About", "/about"],
    ["Proposal", "/proposal"],
    ["Roadmap", "/roadmap"],
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/65 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-black">
            <span className="text-xl font-black text-[#7AC943]">⚡</span>
          </div>

          <div>
            <div className="text-xl font-black tracking-tight text-white">
              GRABME
            </div>
            <div className="text-xs font-semibold tracking-[0.35em] text-[#7AC943]">
              E-TAXI
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-white/70 xl:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <button className="flex items-center gap-2 rounded-2xl border border-white/15 px-4 py-3 text-sm text-white/80">
            <Globe2 size={16} />
            EN
          </button>

          <Button href="/#download">
            Download App <Download size={16} />
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 text-white xl:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black px-6 pb-6 pt-2 xl:hidden">
          <nav className="grid gap-2">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-white/75 hover:bg-white/10 hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="mt-4 grid gap-3">
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-2xl border border-white/15 px-4 py-3 text-center text-white/80"
            >
              Contact
            </a>

            <a
              href="/#download"
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-[#7AC943] px-4 py-3 text-center font-bold text-black"
            >
              Download App
            </a>
          </div>
        </div>
      )}
    </header>
  );
}