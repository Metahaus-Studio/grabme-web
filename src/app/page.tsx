import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { Features } from "@/sections/Features";
import { RideTypes } from "@/sections/RideTypes";
import { Corporate } from "@/sections/Corporate";
import { Drivers } from "@/sections/Drivers";
import { DownloadCTA } from "@/sections/DownloadCTA";
import { GrabMeConnect } from "@/sections/GrabMeConnect";
import { Airport } from "@/sections/Airport";
import { Students } from "@/sections/Students";
import { Membership } from "@/sections/Membership";

export default function Home() {
  return (
    <>
      <Navbar />
     <main>
  <Hero />
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