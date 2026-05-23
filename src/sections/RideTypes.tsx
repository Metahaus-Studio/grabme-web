const rides = [
  {
    name: "Standard",
    price: "Fair everyday rides",
    text: "Affordable electric rides for daily transportation.",
  },
  {
    name: "Premium",
    price: "Comfort upgrade",
    text: "Higher-end EVs with better comfort and priority service.",
  },
  {
    name: "Luxury",
    price: "Executive travel",
    text: "Special cars for airport transfers, VIPs, and events.",
  },
  {
    name: "Corporate",
    price: "Business rates",
    text: "Company accounts, monthly billing, and transport reporting.",
  },
];

export function RideTypes() {
  return (
    <section id="ride-types" className="bg-[#050505] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 font-semibold text-[#7AC943]">RIDE TYPES</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
            Choose your ride experience.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/60">
            From fair everyday rides to premium corporate transportation.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {rides.map((ride, index) => (
            <div
              key={ride.name}
              className={`rounded-[2rem] border p-7 ${
                index === 1
                  ? "border-[#7AC943] bg-[#7AC943]/10"
                  : "border-white/10 bg-white/[0.04]"
              }`}
            >
              <div className="mb-8 h-28 rounded-3xl bg-gradient-to-br from-white/15 to-white/5" />
              <h3 className="text-2xl font-black">{ride.name}</h3>
              <p className="mt-2 text-sm font-semibold text-[#7AC943]">
                {ride.price}
              </p>
              <p className="mt-4 text-sm leading-6 text-white/60">{ride.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}