import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { Features } from "@/sections/Features";
import { RideTypes } from "@/sections/RideTypes";
import { Corporate } from "@/sections/Corporate";
import { Drivers } from "@/sections/Drivers";
import { DownloadCTA } from "@/sections/DownloadCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <RideTypes />
        <Corporate />
        <Drivers />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}