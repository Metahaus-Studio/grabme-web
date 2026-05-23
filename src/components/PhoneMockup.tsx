import { MapPin, Search, ShieldCheck, Star } from "lucide-react";

export function PhoneMockup() {
  return (
    <div className="relative mx-auto h-[620px] w-[310px] rounded-[3rem] border border-white/20 bg-[#0B0F0D] p-4 shadow-2xl shadow-[#7AC943]/20">
      <div className="absolute left-1/2 top-3 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />

      <div className="h-full overflow-hidden rounded-[2.3rem] bg-[#101411]">
        <div className="relative h-full bg-[radial-gradient(circle_at_40%_30%,rgba(122,201,67,0.24),transparent_30%),linear-gradient(135deg,#151515,#050505)] p-5">
          <div className="mt-10 flex items-center rounded-2xl bg-white/10 p-4 backdrop-blur">
            <Search size={18} className="text-[#7AC943]" />
            <span className="ml-3 text-sm text-white/90">Where to?</span>
          </div>

          <div className="absolute left-10 top-48 h-40 w-1 rotate-[-35deg] rounded-full bg-[#7AC943]" />
          <div className="absolute left-24 top-52 h-4 w-4 rounded-full bg-blue-500 ring-8 ring-blue-500/20" />
          <div className="absolute right-16 top-40 h-5 w-5 rounded-full bg-[#7AC943] ring-8 ring-[#7AC943]/20" />

          <div className="absolute bottom-5 left-4 right-4 rounded-[2rem] border border-white/10 bg-black/70 p-5 backdrop-blur-xl">
            <p className="text-xs text-white/50">Choose your ride</p>

            <div className="mt-4 space-y-3">
              {[
                ["Standard", "4 min away", "LL 85,000"],
                ["Premium", "6 min away", "LL 140,000"],
                ["Luxury", "8 min away", "LL 220,000"],
              ].map(([name, eta, price], index) => (
                <div
                  key={name}
                  className={`flex items-center justify-between rounded-2xl p-3 ${
                    index === 1
                      ? "border border-[#7AC943] bg-[#7AC943]/10"
                      : "bg-white/5"
                  }`}
                >
                  <div>
                    <div className="font-semibold">{name}</div>
                    <div className="text-xs text-white/50">{eta}</div>
                  </div>
                  <div className="text-sm font-bold">{price}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/5 p-3">
              <span className="flex items-center gap-2 text-xs text-white/70">
                <ShieldCheck size={14} className="text-[#7AC943]" />
                Verified drivers
              </span>
              <span className="flex items-center gap-1 text-xs">
                <Star size={14} className="text-[#7AC943]" /> 4.9
              </span>
            </div>
          </div>

          <MapPin className="absolute right-10 top-64 text-[#7AC943]" />
        </div>
      </div>
    </div>
  );
}