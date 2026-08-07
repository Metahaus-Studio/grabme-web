"use client";

import Link from "next/link";
import { useState } from "react";
import { Download, Menu, X } from "lucide-react";

const links = [
  ["Ride", "/ride-types"],
  ["Drive", "/drivers"],
  ["Operate", "/mission-control"],
  ["Business", "/corporate"],
  ["Connect", "/grabme-connect"],
  ["Airport", "/airport"],
  ["Students", "/students"],
  ["About", "/about"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/88 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" aria-label="GRABME home"><img src="/grabme-logo.png" alt="GRABME" className="h-14 w-auto object-contain md:h-16" /></Link>
        <nav className="hidden items-center gap-5 text-sm font-bold text-white/64 xl:flex">
          {links.map(([label, href]) => <Link key={label} href={href} className="transition hover:text-white">{label}</Link>)}
        </nav>
        <Link href="/#download" className="hidden items-center gap-2 rounded-2xl bg-[#53e36a] px-5 py-3 text-sm font-black text-black transition hover:bg-white xl:flex">Download App <Download size={16}/></Link>
        <button type="button" aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 text-white xl:hidden">{open ? <X size={22}/> : <Menu size={22}/>}</button>
      </div>
      {open && <div className="border-t border-white/10 bg-black px-6 pb-6 pt-3 xl:hidden"><nav className="grid gap-1">{links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-bold text-white/72 hover:bg-white/10 hover:text-white">{label}</Link>)}</nav><Link href="/#download" onClick={() => setOpen(false)} className="mt-4 block rounded-2xl bg-[#53e36a] px-4 py-3 text-center font-black text-black">Download App</Link></div>}
    </header>
  );
}
