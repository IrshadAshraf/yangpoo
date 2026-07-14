import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EmployeeConcern from "@/components/EmployeeConcern";
import Platform from "@/components/Platform";
import Features from "@/components/Features";
import Workforce from "@/components/Workforce";
import Workplace from "@/components/Workplace";
import FAQs from "@/components/FAQs";
import LatestNews from "@/components/LatestNews";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import { DrawerProvider } from "@/components/Drawer";

function Home() {
  return (
    <DrawerProvider>
      <Navbar />
      <Hero />
      <EmployeeConcern />
      <Platform />
      <Features />
      <Workforce />
      <Workplace />
      <FAQs />
      <LatestNews />
      <ContactUs />
      <Footer />
    </DrawerProvider>
  );
}

export default Home;
