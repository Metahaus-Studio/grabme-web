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
  driver_license_file: string | null;
public_license_file: string | null;
id_document_file: string | null;
selfie_file: string | null;
  experience_years: string | null;
  availability: string | null;
  current_occupation: string | null;
  previous_platforms: string | null;
  notes: string | null;
  recruiter_notes: string | null;
  status: string | null;
  created_at: string;
};

export default function AdminDriversPage() {
  const [drivers, setDrivers] = useState<DriverApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [evFilter, setEvFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [selectedDriver, setSelectedDriver] = useState<DriverApplication | null>(null);
  const [savingNotes, setSavingNotes] = useState(false);
  const [documentUrls, setDocumentUrls] = useState<Record<string, string>>({});
  const whatsappNumber =
selectedDriver?.whatsapp ||
selectedDriver?.phone ||
"";


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

  async function updateStatus(id: string, status: string) {
  const { error } = await supabase
    .from("driver_applications")
    .update({ status })
    .eq("id", id);

  if (error) {
    console.error(error);
    return;
  }

  setDrivers((current) =>
    current.map((driver) =>
      driver.id === id ? { ...driver, status } : driver
    )
  );
}

async function updateRecruiterNotes(id: string, recruiter_notes: string) {
  setSavingNotes(true);

  const { error } = await supabase
    .from("driver_applications")
    .update({ recruiter_notes })
    .eq("id", id);

  setSavingNotes(false);

  if (error) {
    console.error(error);
    return;
  }

  setDrivers((current) =>
    current.map((driver) =>
      driver.id === id ? { ...driver, recruiter_notes } : driver
    )
  );

  if (selectedDriver?.id === id) {
    setSelectedDriver({ ...selectedDriver, recruiter_notes });
  }
}

function getStoragePath(fileUrl: string | null) {
  if (!fileUrl) return "";

  const marker = "/driver-documents/";
  const index = fileUrl.indexOf(marker);

  if (index === -1) return fileUrl;

  return fileUrl.slice(index + marker.length);
}

async function loadDocumentUrls(driver: DriverApplication) {
  const files = {
    driver_license_file: getStoragePath(driver.driver_license_file),
    public_license_file: getStoragePath(driver.public_license_file),
    id_document_file: getStoragePath(driver.id_document_file),
    selfie_file: getStoragePath(driver.selfie_file),
  };

  const signedUrls: Record<string, string> = {};

  for (const [key, path] of Object.entries(files)) {
    if (!path) continue;

    const { data, error } = await supabase.storage
      .from("driver-documents")
      .createSignedUrl(path, 60 * 60);

    if (!error && data?.signedUrl) {
      signedUrls[key] = data.signedUrl;
    }
  }

  setDocumentUrls(signedUrls);
}

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
      "Recruiter Notes",
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
      driver.recruiter_notes,
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

  if (!authorized) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] px-4 text-white">
      <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.035] p-8">
        <p className="mb-2 font-bold text-[#7AC943]">GRABME ADMIN</p>
        <h1 className="text-4xl font-black">Admin Access</h1>
        <p className="mt-3 text-white/60">
          Enter password to view driver applications.
        </p>

        <form
          className="mt-8 grid gap-4"
          onSubmit={(e) => {
            e.preventDefault();

            if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
              setAuthorized(true);
              setPasswordError("");
            } else {
              setPasswordError("Wrong password.");
            }
          }}
        >
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-2xl border border-white/10 bg-black/40 p-4 outline-none focus:border-[#7AC943]"
          />

          {passwordError && (
            <p className="text-sm text-red-400">{passwordError}</p>
          )}

          <button className="rounded-2xl bg-[#7AC943] px-6 py-4 font-black text-black">
            Access Dashboard
          </button>
        </form>
      </div>
    </main>
  );
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
                  <tr
  key={driver.id}
  onClick={() => {
  setSelectedDriver(driver);
  loadDocumentUrls(driver);
}}
  className="cursor-pointer border-t border-white/10 transition hover:bg-white/[0.04]"
>
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
  <select
    value={driver.status || "new"}
    onChange={(e) => updateStatus(driver.id, e.target.value)}
    className="rounded-full border border-white/10 bg-black px-3 py-2 text-xs font-bold text-[#7AC943] outline-none"
  >
    <option value="new">New</option>
    <option value="contacted">Contacted</option>
    <option value="interview">Interview</option>
    <option value="approved">Approved</option>
    <option value="rejected">Rejected</option>
  </select>
</Td>
                    <Td>{new Date(driver.created_at).toLocaleDateString()}</Td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selectedDriver && (
  <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm">
    <div className="h-full w-full max-w-xl overflow-y-auto border-l border-white/10 bg-[#050505] p-6 text-white shadow-2xl">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-[#7AC943]">DRIVER PROFILE</p>
          <h2 className="mt-2 text-3xl font-black">
            {selectedDriver.full_name || "Unnamed Driver"}
          </h2>
          <p className="mt-1 text-white/50">
            Submitted{" "}
            {new Date(selectedDriver.created_at).toLocaleDateString()}
          </p>
        </div>

        <button
          onClick={() => setSelectedDriver(null)}
          className="rounded-full border border-white/10 px-4 py-2 text-white/70 hover:bg-white/10"
        >
          Close
        </button>
      </div>

      <div className="mb-6 grid gap-3 sm:grid-cols-2">
        {selectedDriver.phone && (
          <a
            href={`tel:${selectedDriver.phone}`}
            className="rounded-2xl bg-[#7AC943] px-5 py-4 text-center font-black text-black"
          >
            Call Driver
          </a>
        )}

       {whatsappNumber && (
  <a
    href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
`Hello ${selectedDriver.full_name || ""},

This is the GRABME team.

Thank you for applying to become a GRABME driver. We have successfully received your application and would like to contact you regarding the next onboarding steps.

Best regards,
GRABME Team

مرحباً ${selectedDriver.full_name || ""}،

معك فريق GRABME.

شكراً لتقديم طلب الانضمام كسائق معنا. لقد استلمنا طلبك بنجاح ونود التواصل معك بخصوص الخطوات التالية لاستكمال إجراءات الانضمام.

فريق GRABME`
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-2xl border border-[#7AC943]/40 bg-[#7AC943]/10 px-5 py-4 text-center font-black text-[#7AC943]"
  >
    WhatsApp
  </a>
)}


      </div>

     <div className="mb-6 rounded-[2rem] border border-white/10 bg-white/[0.035] p-5">
  <p className="mb-4 text-sm text-white/50">Application Status</p>

  <div className="grid grid-cols-2 gap-3">
    {[
      ["new", "New"],
      ["contacted", "Contacted"],
      ["interview", "Interview"],
      ["approved", "Approved"],
      ["rejected", "Rejected"],
    ].map(([value, label]) => {
      const active = (selectedDriver.status || "new") === value;

      return (
        <button
          key={value}
          type="button"
          onClick={() => {
            updateStatus(selectedDriver.id, value);
            setSelectedDriver({ ...selectedDriver, status: value });
          }}
          className={`rounded-2xl border px-4 py-3 text-sm font-black transition ${
            active
              ? value === "approved"
                ? "border-green-400 bg-green-400 text-black"
                : value === "rejected"
                ? "border-red-400 bg-red-400 text-black"
                : value === "interview"
                ? "border-orange-400 bg-orange-400 text-black"
                : value === "contacted"
                ? "border-yellow-400 bg-yellow-400 text-black"
                : "border-[#7AC943] bg-[#7AC943] text-black"
              : "border-white/10 bg-black/40 text-white/60 hover:border-[#7AC943]/50 hover:text-white"
          }`}
        >
          {label}
        </button>
      );
    })}
  </div>
</div>

      <div className="mb-6 rounded-[2rem] border border-white/10 bg-white/[0.035] p-5">
  <p className="mb-3 text-sm text-white/50">
    Recruiter Notes
  </p>

  <textarea
    defaultValue={selectedDriver.recruiter_notes || ""}
    placeholder="Called driver, interested in EV financing, interview Tuesday..."
    className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-[#7AC943]"
    onBlur={(e) =>
      updateRecruiterNotes(selectedDriver.id, e.target.value)
    }
  />

  <p className="mt-2 text-xs text-white/40">
    {savingNotes
      ? "Saving..."
      : "Notes save automatically."}
  </p>
</div>

<div className="mb-6 rounded-[2rem] border border-white/10 bg-white/[0.035] p-5">
  <p className="mb-4 text-sm text-white/50">Driver Documents</p>

  <div className="grid gap-3 sm:grid-cols-2">
    <DocumentButton label="Driver License" url={documentUrls.driver_license_file} />
    <DocumentButton label="Public Service License" url={documentUrls.public_license_file} />
    <DocumentButton label="ID / Passport" url={documentUrls.id_document_file} />
    <DocumentButton label="Selfie Photo" url={documentUrls.selfie_file} />
  </div>

  {documentUrls.selfie_file && (
    <img
      src={documentUrls.selfie_file}
      alt="Driver selfie"
      className="mt-4 max-h-72 w-full rounded-2xl border border-white/10 object-cover"
    />
  )}
</div>

      <div className="grid gap-4">
        <Info label="Phone" value={selectedDriver.phone} />
        <Info label="WhatsApp" value={selectedDriver.whatsapp} />
        <Info label="Email" value={selectedDriver.email} />
        <Info label="City" value={selectedDriver.city} />
        <Info label="Nationality" value={selectedDriver.nationality} />
        <Info label="Age" value={selectedDriver.age} />
        <Info label="Occupation" value={selectedDriver.current_occupation} />
        <Info label="Vehicle Type" value={selectedDriver.vehicle_type} />
        <Info
          label="Vehicle"
          value={[selectedDriver.vehicle_brand, selectedDriver.vehicle_model, selectedDriver.vehicle_year]
            .filter(Boolean)
            .join(" ")}
        />
        <Info label="Own Vehicle" value={selectedDriver.own_vehicle} />
        <Info label="Electric Vehicle" value={selectedDriver.electric_vehicle} />
        <Info label="Interested in GRABME EV" value={selectedDriver.interested_in_grabme_ev} />
        <Info label="Preferred EV Plan" value={selectedDriver.ev_purchase_plan_interest} />
        <Info label="Driving License" value={selectedDriver.driving_license} />
        <Info label="Public Service License" value={selectedDriver.public_service_license} />
        <Info label="Experience" value={selectedDriver.experience_years} />
        <Info label="Availability" value={selectedDriver.availability} />
        <Info label="Previous Platforms" value={selectedDriver.previous_platforms} />
        <Info label="Notes" value={selectedDriver.notes} />
      </div>
    </div>
  </div>
)}
    </main>
  );
}

function DocumentButton({ label, url }: { label: string; url?: string }) {
  if (!url) {
    return (
      <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-white/40">
        {label}: Missing
      </div>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-2xl border border-[#7AC943]/30 bg-[#7AC943]/10 p-4 text-center font-black text-[#7AC943]"
    >
      View {label}
    </a>
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

function Info({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
      <p className="text-xs font-bold uppercase tracking-wide text-white/40">
        {label}
      </p>
      <p className="mt-2 break-words text-white/80">{value || "-"}</p>
    </div>
  );
}