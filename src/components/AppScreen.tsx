import {
  BatteryCharging,
  Car,
  CreditCard,
  Gift,
  GraduationCap,
  Plane,
  Search,
  Sparkles,
  Star,
  User,
} from "lucide-react";

type AppScreenProps = {
  type: "home" | "rides" | "driver" | "airport" | "student" | "membership";
};

export function AppScreen({ type }: AppScreenProps) {
  const titleMap = {
    home: "Where are we going?",
    rides: "Choose your ride",
    driver: "Driver arriving",
    airport: "Airport pickup",
    student: "Student rides",
    membership: "GRABME Rewards",
  };

  return (
    <div className="relative h-[620px] w-[300px] overflow-hidden rounded-[3rem] border border-white/15 bg-[#0B0F0D] p-4 shadow-2xl shadow-[#7AC943]/10">
      <div className="absolute left-1/2 top-3 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />

      <div className="relative flex h-full flex-col overflow-hidden rounded-[2.35rem] bg-[#07100A] p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(122,201,67,0.22),transparent_26%),linear-gradient(135deg,#162016,#030403)]" />

        <div className="relative z-10 mt-8 flex items-start justify-between">
          <div className="max-w-[190px]">
            <p className="text-xs text-white/45">GRABME</p>
            <p className="text-lg font-black leading-tight text-white">
              {titleMap[type]}
            </p>
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10">
            <BatteryCharging size={18} className="text-[#7AC943]" />
          </div>
        </div>

        {type === "home" && <HomeScreen />}
        {type === "rides" && <RideScreen />}
        {type === "driver" && <DriverScreen />}
        {type === "airport" && <AirportScreen />}
        {type === "student" && <StudentScreen />}
        {type === "membership" && <MembershipScreen />}
      </div>
    </div>
  );
}

function MapBase() {
  return (
    <>
      <div className="absolute inset-0 opacity-25">
        <div className="absolute left-10 top-0 h-full w-px bg-white/20" />
        <div className="absolute left-28 top-0 h-full w-px bg-white/10" />
        <div className="absolute right-16 top-0 h-full w-px bg-white/10" />
        <div className="absolute top-28 h-px w-full bg-white/10" />
        <div className="absolute top-52 h-px w-full bg-white/20" />
        <div className="absolute bottom-48 h-px w-full bg-white/10" />
      </div>

      <div className="absolute left-20 top-40 h-64 w-1 rotate-[-35deg] rounded-full bg-[#7AC943]/80 shadow-[0_0_24px_rgba(122,201,67,0.8)]" />
      <div className="absolute left-24 top-36 h-4 w-4 rounded-full bg-blue-500 ring-8 ring-blue-500/20" />
      <div className="absolute right-16 top-56 h-5 w-5 rounded-full bg-[#7AC943] ring-8 ring-[#7AC943]/20" />

      <div className="absolute left-10 top-72 flex h-8 w-8 rotate-[-24deg] items-center justify-center rounded-xl bg-white text-black shadow-lg">
        <Car size={16} />
      </div>
      <div className="absolute right-12 top-36 flex h-8 w-8 rotate-[18deg] items-center justify-center rounded-xl bg-[#7AC943] text-black shadow-lg">
        <Car size={16} />
      </div>
    </>
  );
}

function HomeScreen() {
  return (
    <>
      <MapBase />

      <div className="relative z-10 mt-5 flex items-center rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur-xl">
        <Search size={18} className="text-[#7AC943]" />
        <span className="ml-3 text-sm text-white/90">Enter destination</span>
      </div>

      <div className="absolute bottom-5 left-4 right-4 z-10 rounded-[2rem] border border-white/10 bg-black/75 p-5 backdrop-blur-xl">
        <p className="text-xs text-white/45">Nearby electric cars</p>

        <div className="mt-4 space-y-3">
          {[
            ["Standard", "3 min", "$1.00", Car],
            ["Priority", "2 min", "$1.25", Sparkles],
            ["Luxury", "7 min", "$2.70", Star],
          ].map(([name, eta, price, Icon], index) => (
            <div
              key={name as string}
              className={`flex items-center justify-between rounded-2xl p-3 ${
                index === 1
                  ? "border border-[#7AC943] bg-[#7AC943]/10"
                  : "bg-white/5"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon size={18} className="text-[#7AC943]" />
                <div>
                  <p className="text-sm font-bold text-white">
                    {name as string}
                  </p>
                  <p className="text-xs text-white/45">{eta as string} away</p>
                </div>
              </div>
              <p className="text-sm font-black text-white">{price as string}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function RideScreen() {
  return (
    <div className="relative z-10 mt-8 flex h-[460px] flex-col">
      <div className="space-y-4">
        {[
          ["Standard EV", "Fair everyday ride", "$1.00", Car],
          ["Priority", "Faster pickup", "$1.25", Sparkles],
          ["Premium", "Comfort upgrade", "$1.70", Star],
          ["Luxury", "Executive cars", "$2.70", Car],
        ].map(([name, text, price, Icon], index) => (
          <div
            key={name as string}
            className={`rounded-3xl border p-4 ${
              index === 1
                ? "border-[#7AC943] bg-[#7AC943]/10"
                : "border-white/10 bg-white/5"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Icon size={22} className="text-[#7AC943]" />
                <div>
                  <p className="font-bold text-white">{name as string}</p>
                  <p className="text-xs text-white/45">{text as string}</p>
                </div>
              </div>
              <p className="text-sm font-black text-white">{price as string}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-auto w-full rounded-2xl bg-[#7AC943] py-4 text-sm font-black text-black">
        Confirm Ride
      </button>
    </div>
  );
}

function DriverScreen() {
  return (
    <>
      <MapBase />

      <div className="absolute bottom-5 left-4 right-4 z-10 rounded-[2rem] border border-white/10 bg-black/80 p-5 backdrop-blur-xl">
        <p className="text-xs text-white/45">Arriving in 3 minutes</p>

        <div className="mt-4 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
            <User className="text-[#7AC943]" />
          </div>
          <div>
            <p className="font-black text-white">Karim H.</p>
            <p className="text-xs text-white/45">Tesla Model 3 · 431B</p>
          </div>
          <div className="ml-auto flex items-center gap-1 text-sm text-white">
            <Star size={14} className="text-[#7AC943]" /> 4.9
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {["Call", "Share", "Cancel"].map((label) => (
            <button
              key={label}
              className="rounded-2xl bg-white/5 py-3 text-xs font-bold text-white/80"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

function AirportScreen() {
  return (
    <div className="relative z-10 mt-8 flex h-[460px] flex-col">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
        <Plane className="mb-5 text-[#7AC943]" size={34} />
        <p className="text-xs text-white/45">Flight</p>
        <p className="text-2xl font-black text-white">BEY Arrival</p>
        <p className="mt-2 text-sm text-white/55">Pickup window · 22:30</p>
      </div>

      <div className="mt-4 space-y-3">
        {["Terminal pickup", "Luggage-friendly car", "Live driver tracking"].map(
          (item) => (
            <div
              key={item}
              className="rounded-2xl bg-white/5 p-4 text-sm font-semibold text-white/75"
            >
              {item}
            </div>
          )
        )}
      </div>

      <button className="mt-auto w-full rounded-2xl bg-[#7AC943] py-4 text-sm font-black text-black">
        Book Airport Ride
      </button>
    </div>
  );
}

function StudentScreen() {
  return (
    <div className="relative z-10 mt-8 flex h-[460px] flex-col">
      <div className="rounded-[2rem] border border-[#7AC943]/30 bg-[#7AC943]/10 p-5">
        <GraduationCap className="mb-5 text-[#7AC943]" size={34} />
        <p className="text-xs text-white/45">Verified Student</p>
        <p className="text-2xl font-black text-white">Campus Ride</p>
        <p className="mt-2 text-sm text-white/55">
          Student pricing available
        </p>
      </div>

      <div className="mt-4 grid gap-3">
        {["University routes", "Group mobility", "Membership discount"].map(
          (item) => (
            <div
              key={item}
              className="rounded-2xl bg-white/5 p-4 text-sm font-semibold text-white/75"
            >
              {item}
            </div>
          )
        )}
      </div>

      <button className="mt-auto w-full rounded-2xl bg-[#7AC943] py-4 text-sm font-black text-black">
        View Student Plans
      </button>
    </div>
  );
}

function MembershipScreen() {
  return (
    <div className="relative z-10 mt-8 flex h-[460px] flex-col">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
        <Gift className="mb-5 text-[#7AC943]" size={34} />
        <p className="text-xs text-white/45">Available points</p>
        <p className="text-4xl font-black text-white">2,450</p>
        <p className="mt-2 text-sm text-white/55">
          Redeem for credits, gifts, and priority rides.
        </p>
      </div>

      <div className="mt-4 space-y-3">
        {[
          ["Gift card", "$3.35 ride credit"],
          ["Priority bonus", "Upgrade next ride"],
          ["Blogger code", "15% off"],
        ].map(([name, text]) => (
          <div
            key={name}
            className="flex items-center justify-between rounded-2xl bg-white/5 p-4"
          >
            <div>
              <p className="text-sm font-bold text-white">{name}</p>
              <p className="text-xs text-white/45">{text}</p>
            </div>
            <CreditCard size={18} className="text-[#7AC943]" />
          </div>
        ))}
      </div>
    </div>
  );
}