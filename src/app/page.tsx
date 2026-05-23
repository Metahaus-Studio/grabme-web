import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { Hero } from "@/sections/Hero";
import { AppShowcase } from "@/sections/AppShowcase";
import { Features } from "@/sections/Features";
import { RideTypes } from "@/sections/RideTypes";
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
        <AppShowcase />
        <Features />
        <RideTypes />
        <GrabMeConnect />
        <Airport />
        <Students />
        <Corporate />
        <Membership />
        <Drivers />
        <DownloadCTA />
      </main>

      <Footer />
    </>
  );
}