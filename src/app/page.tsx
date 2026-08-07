import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { Ecosystem } from "@/sections/Ecosystem";
import { MissionControl } from "@/sections/MissionControl";
import { GrabMeConnect } from "@/sections/GrabMeConnect";
import { Airport } from "@/sections/Airport";
import { Students } from "@/sections/Students";
import { Corporate } from "@/sections/Corporate";
import { Membership } from "@/sections/Membership";
import { Drivers } from "@/sections/Drivers";
import { DownloadCTA } from "@/sections/DownloadCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ecosystem />
        <MissionControl />
        <GrabMeConnect />
        <Corporate />
        <Airport />
        <Students />
        <Membership />
        <Drivers />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
