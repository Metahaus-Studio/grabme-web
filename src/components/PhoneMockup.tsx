import {
  BatteryCharging,
  Car,
  CreditCard,
  GraduationCap,
  MapPin,
  Plane,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Wifi,
} from "lucide-react";

export function PhoneMockup() {
  const rides = [
    ["Standard", "3 min", "LL 85,000", Car],
    ["Priority", "2 min", "LL 110,000", Sparkles],
    ["Luxury", "7 min", "LL 240,000", Star],
  ];

  return (
    <div className="relative mx-auto h-[640px] w-[318px] rounded-[3.2rem] border border-white/20 bg-[#0B0F0D] p-4 shadow-2xl shadow-[#7AC943]/20">
      <div className="absolute left-1/2 top-3 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />

      <div className="h-full overflow-hidden rounded-[2.4rem] bg-[#101411]">
        <div className="relative h-full overflow-hidden bg-[#07100A] p-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_24%,rgba(122,201,67,0.22),transparent_24%),radial-gradient(circle_at_82%_36%,rgba(122,201,67,0.12),transparent_25%),linear-gradient(135deg,#172016,#030403)]" />

          {/* Map grid */}
          <div className="absolute inset-0 opacity-25">
            <div className="absolute left-10 top-0 h-full w-px bg-white/20" />
            <div className="absolute left-28 top-0 h-full w-px bg-white/10" />
            <div className="absolute right-16 top-0 h-full w-px bg-white/10" />
            <div className="absolute top-28 h-px w-full bg-white/10" />
            <div className="absolute top-52 h-px w-full bg-white/20" />
            <div className="absolute bottom-48 h-px w-full bg-white/10" />
          </div>

          {/* Route */}
          <div className="absolute left-20 top-40 h-64 w-1 rotate-[-35deg] rounded-full bg-[#7AC943]/80 shadow-[0_0_24px_rgba(122,201,67,0.8)]" />
          <div className="absolute left-23 top-36 h-4 w-4 rounded-full bg-blue-500 ring-8 ring-blue-500/20" />
          <div className="absolute right-16 top-56 h-5 w-5 rounded-full bg-[#7AC943] ring-8 ring-[#7AC943]/20" />

          {/* Cars */}
          <div className="absolute left-10 top-72 flex h-8 w-8 rotate-[-24deg] items-center justify-center rounded-xl bg-white text-black shadow-lg">
            <Car size={16} />
          </div>
          <div className="absolute right-12 top-36 flex h-8 w-8 rotate-[18deg] items-center justify-center rounded-xl bg-[#7AC943] text-black shadow-lg">
            <Car size={16} />
          </div>

          {/* Top status */}
          <div className="relative z-10 mt-8 flex items-center justify-between">
            <div>
              <p className="text-xs text-white/45">Good evening</p>
              <p className="text-lg font-black">Where are we going?</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
              <BatteryCharging size={18} className="text-[#7AC943]" />
            </div>
          </div>

          {/* Search */}
          <div className="relative z-10 mt-5 flex items-center rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur-xl">
            <Search size={18} className="text-[#7AC943]" />
            <span className="ml-3 text-sm text-white/90">Enter destination</span>
          </div>

          {/* Quick chips */}
          <div className="relative z-10 mt-3 flex gap-2 overflow-hidden">
            {[
              ["Airport", Plane],
              ["Students", GraduationCap],
              ["Connect", Wifi],
            ].map(([label, Icon]) => (
              <div
                key={label as string}
                className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] text-white/70"
              >
                <Icon size={12} className="text-[#7AC943]" />
                {label as string}
              </div>
            ))}
          </div>

          {/* Bottom sheet */}
          <div className="absolute bottom-5 left-4 right-4 z-10 rounded-[2rem] border border-white/10 bg-black/75 p-5 shadow-2xl backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-white/45">Choose your ride</p>
                <p className="font-black">Nearby electric cars</p>
              </div>
              <div className="rounded-full bg-[#7AC943]/15 px-3 py-1 text-xs font-bold text-[#7AC943]">
                3 min
              </div>
            </div>

            <div className="space-y-3">
              {rides.map(([name, eta, price, Icon], index) => (
                <div
                  key={name as string}
                  className={`flex items-center justify-between rounded-2xl p-3 transition ${
                    index === 1
                      ? "border border-[#7AC943] bg-[#7AC943]/10"
                      : "bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                      <Icon size={18} className="text-[#7AC943]" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">{name as string}</div>
                      <div className="text-xs text-white/45">{eta as string} away</div>
                    </div>
                  </div>
                  <div className="text-sm font-black">{price as string}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/5 p-3">
              <span className="flex items-center gap-2 text-xs text-white/70">
                <ShieldCheck size={14} className="text-[#7AC943]" />
                Secure ride
              </span>
              <span className="flex items-center gap-1 text-xs">
                <CreditCard size={14} className="text-[#7AC943]" /> Bank Audi
              </span>
            </div>
          </div>

          <MapPin className="absolute right-10 top-72 z-10 text-[#7AC943]" />
        </div>
      </div>
    </div>
  );
}