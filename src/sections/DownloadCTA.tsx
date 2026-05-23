import { Apple, Play } from "lucide-react";

export function DownloadCTA() {
  return (
    <section id="download" className="bg-[#F7F7F7] px-6 py-24 text-black">
      <div className="mx-auto max-w-7xl rounded-[3rem] bg-black p-10 text-white md:p-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-semibold text-[#7AC943]">DOWNLOAD</p>
            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
              Your ride, your way.
            </h2>
            <p className="mt-5 max-w-xl text-white/60">
              Passenger, driver, and corporate apps are designed as one unified
              electric mobility ecosystem.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 lg:justify-end">
            <button className="flex items-center gap-3 rounded-2xl border border-white/15 px-6 py-4">
              <Apple size={26} />
              <span>
                <span className="block text-xs text-white/50">Download on the</span>
                <span className="font-bold">App Store</span>
              </span>
            </button>
            <button className="flex items-center gap-3 rounded-2xl border border-white/15 px-6 py-4">
              <Play size={26} />
              <span>
                <span className="block text-xs text-white/50">Get it on</span>
                <span className="font-bold">Google Play</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}