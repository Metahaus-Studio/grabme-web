import { Download, Globe2 } from "lucide-react";
import { Button } from "./Button";

export function Navbar() {
  const links = ["Features", "Ride Types", "Drivers", "Corporate", "About"];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-black">
            <span className="text-xl font-black text-[#7AC943]">⚡</span>
          </div>
          <div>
            <div className="text-xl font-black tracking-tight">GRABME</div>
            <div className="text-xs font-semibold tracking-[0.35em] text-[#7AC943]">
              E-TAXI
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/75 lg:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="hover:text-white">
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="flex items-center gap-2 rounded-2xl border border-white/15 px-4 py-3 text-sm text-white/80">
            <Globe2 size={16} />
            EN
          </button>
          <Button href="#download">
            Download App <Download size={16} />
          </Button>
        </div>
      </div>
    </header>
  );
}