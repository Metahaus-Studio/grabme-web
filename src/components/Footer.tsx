import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#050505] px-6 py-12 text-white/50">
      <div className="mx-auto max-w-7xl border-t border-white/10 pt-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <img src="/grabme-logo.png" alt="GRABME" className="h-12 w-auto" />
            <p className="mt-3 max-w-md text-sm leading-6 text-white/45">
              Electric mobility, connected. Built for passengers, drivers, businesses, and the journey inside the vehicle.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm">
            <Link href="/drivers">Drive</Link>
            <Link href="/corporate">Business</Link>
            <Link href="/grabme-connect">Connect</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs md:flex-row">
          <p>© 2026 GRABME. All rights reserved.</p>
          <p>EV-only mobility platform.</p>
        </div>
      </div>
    </footer>
  );
}
