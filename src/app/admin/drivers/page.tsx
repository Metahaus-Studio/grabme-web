"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Download, RefreshCw, Search } from "lucide-react";

type DriverApplication = {
  id: string;
  full_name: string | null;
  phone: string | null;
  whatsapp: string | null;
  email: string | null;
  nationality: string | null;
  age: string | null;
  city: string | null;
  vehicle_type: string | null;
  vehicle_brand: string | null;
  vehicle_model: string | null;
  vehicle_year: string | null;
  own_vehicle: string | null;
  electric_vehicle: string | null;
  interested_in_grabme_ev: string | null;
  ev_purchase_plan_interest: string | null;
  driving_license: string | null;
  public_service_license: string | null;
  experience_years: string | null;
  availability: string | null;
  current_occupation: string | null;
  previous_platforms: string | null;
  notes: string | null;
  status: string | null;
  created_at: string;
};

export default function AdminDriversPage() {
  const [drivers, setDrivers] = useState<DriverApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [evFilter, setEvFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  async function fetchDrivers() {
    setLoading(true);

    const { data, error } = await supabase
      .from("driver_applications")
      .select("*")
      .order("created_at", { ascending: false });

    

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    setDrivers(data || []);
    setLoading(false);
  }

  useEffect(() => {
    fetchDrivers();
  }, []);

  const filteredDrivers = useMemo(() => {
    return drivers.filter((driver) => {
      const searchable = [
        driver.full_name,
        driver.phone,
        driver.whatsapp,
        driver.city,
        driver.nationality,
        driver.current_occupation,
        driver.previous_platforms,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchable.includes(search.toLowerCase());

      const matchesEv =
        evFilter === "all" || driver.interested_in_grabme_ev === evFilter;

      const matchesStatus =
        statusFilter === "all" || driver.status === statusFilter;

      return matchesSearch && matchesEv && matchesStatus;
    });
  }, [drivers, search, evFilter, statusFilter]);

  function exportCSV() {
    const headers = [
      "Name",
      "Phone",
      "WhatsApp",
      "Email",
      "Nationality",
      "Age",
      "City",
      "Occupation",
      "Vehicle Type",
      "Vehicle Brand",
      "Vehicle Model",
      "Vehicle Year",
      "Own Vehicle",
      "Electric Vehicle",
      "Interested in GRABME EV",
      "Preferred EV Plan",
      "Driving License",
      "Public Service License",
      "Experience",
      "Availability",
      "Previous Platforms",
      "Notes",
      "Status",
      "Created At",
    ];

    const rows = filteredDrivers.map((driver) => [
      driver.full_name,
      driver.phone,
      driver.whatsapp,
      driver.email,
      driver.nationality,
      driver.age,
      driver.city,
      driver.current_occupation,
      driver.vehicle_type,
      driver.vehicle_brand,
      driver.vehicle_model,
      driver.vehicle_year,
      driver.own_vehicle,
      driver.electric_vehicle,
      driver.interested_in_grabme_ev,
      driver.ev_purchase_plan_interest,
      driver.driving_license,
      driver.public_service_license,
      driver.experience_years,
      driver.availability,
      driver.previous_platforms,
      driver.notes,
      driver.status,
      driver.created_at,
    ]);

    const csv = [headers, ...rows]
      .map((row) =>
        row
          .map((cell) => `"${String(cell || "").replace(/"/g, '""')}"`)
          .join(",")
      )
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "grabme-driver-applications.csv";
    link.click();

    URL.revokeObjectURL(url);
  }

  return (
    <main className="min-h-screen bg-[#050505] px-4 py-8 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm font-bold text-[#7AC943]">
              GRABME ADMIN
            </p>
            <h1 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
              Driver Applications
            </h1>
            <p className="mt-3 text-white/60">
              Manage applicants from the driver QR campaign.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={fetchDrivers}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-bold"
            >
              <RefreshCw size={18} />
              Refresh
            </button>

            <button
              onClick={exportCSV}
              className="inline-flex items-center gap-2 rounded-2xl bg-[#7AC943] px-5 py-3 font-bold text-black"
            >
              <Download size={18} />
              Export CSV
            </button>
          </div>
        </div>

        <div className="mb-6 grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 md:grid-cols-4">
          <div className="relative md:col-span-2">
            <Search className="absolute left-4 top-4 text-white/40" size={18} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, phone, city, occupation..."
              className="w-full rounded-2xl border border-white/10 bg-black/40 p-4 pl-11 outline-none focus:border-[#7AC943]"
            />
          </div>

          <select
            value={evFilter}
            onChange={(e) => setEvFilter(e.target.value)}
            className="rounded-2xl border border-white/10 bg-black/40 p-4 outline-none focus:border-[#7AC943]"
          >
            <option value="all">All EV Interest</option>
            <option value="yes">EV Yes</option>
            <option value="maybe">EV Maybe</option>
            <option value="no">EV No</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-2xl border border-white/10 bg-black/40 p-4 outline-none focus:border-[#7AC943]"
          >
            <option value="all">All Statuses</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="interview">Interview</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-4">
          <Stat title="Total" value={drivers.length} />
          <Stat
            title="EV Interested"
            value={drivers.filter((d) => d.interested_in_grabme_ev === "yes").length}
          />
          <Stat
            title="Need EV Info"
            value={drivers.filter((d) => d.interested_in_grabme_ev === "maybe").length}
          />
          <Stat
            title="Filtered"
            value={filteredDrivers.length}
          />
        </div>

        <div className="overflow-x-auto rounded-[2rem] border border-white/10 bg-white/[0.035]">
          <table className="w-full min-w-[1400px] text-left text-sm">
            <thead className="bg-white/5 text-white/50">
              <tr>
                <Th>Name</Th>
                <Th>Phone</Th>
                <Th>WhatsApp</Th>
                <Th>City</Th>
                <Th>Age</Th>
                <Th>Nationality</Th>
                <Th>Occupation</Th>
                <Th>Vehicle</Th>
                <Th>EV Interest</Th>
                <Th>EV Plan</Th>
                <Th>License</Th>
                <Th>Public License</Th>
                <Th>Platforms</Th>
                <Th>Status</Th>
                <Th>Date</Th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={15} className="p-8 text-center text-white/60">
                    Loading applications...
                  </td>
                </tr>
              ) : filteredDrivers.length === 0 ? (
                <tr>
                  <td colSpan={15} className="p-8 text-center text-white/60">
                    No applications found.
                  </td>
                </tr>
              ) : (
                filteredDrivers.map((driver) => (
                  <tr key={driver.id} className="border-t border-white/10">
                    <Td>{driver.full_name}</Td>
                    <Td>{driver.phone}</Td>
                    <Td>{driver.whatsapp}</Td>
                    <Td>{driver.city}</Td>
                    <Td>{driver.age}</Td>
                    <Td>{driver.nationality}</Td>
                    <Td>{driver.current_occupation}</Td>
                    <Td>
                      {[driver.vehicle_brand, driver.vehicle_model, driver.vehicle_year]
                        .filter(Boolean)
                        .join(" ")}
                    </Td>
                    <Td>{driver.interested_in_grabme_ev}</Td>
                    <Td>{driver.ev_purchase_plan_interest}</Td>
                    <Td>{driver.driving_license}</Td>
                    <Td>{driver.public_service_license}</Td>
                    <Td>{driver.previous_platforms}</Td>
                    <Td>
                      <span className="rounded-full bg-[#7AC943]/10 px-3 py-1 text-xs font-bold text-[#7AC943]">
                        {driver.status || "new"}
                      </span>
                    </Td>
                    <Td>{new Date(driver.created_at).toLocaleDateString()}</Td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

function Stat({ title, value }: { title: string; value: number }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-5">
      <p className="text-sm text-white/50">{title}</p>
      <p className="mt-2 text-3xl font-black text-[#7AC943]">{value}</p>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="whitespace-nowrap p-4 font-bold">{children}</th>;
}

function Td({ children }: { children: React.ReactNode }) {
  return <td className="whitespace-nowrap p-4 text-white/75">{children || "-"}</td>;
}