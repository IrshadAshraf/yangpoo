import AboutUs from "@/components/AboutUs";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Courses from "@/components/Courses";
import FAQs from "@/components/FAQs";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Statistics from "@/components/Statistics";
import StayRelevant from "@/components/StayRelevant";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

function Home() {
  return (
    <>
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="stay-relevant">
        <StayRelevant />
      </section>

      <section id="partners">
        <Partners />
      </section>

      <section id="featured-programs">
        <FeaturedPrograms />
      </section>

      <section id="statistics">
        <Statistics />
      </section>

      <section id="about-us">
        <AboutUs />
      </section>

      <section id="courses">
        <Courses />
      </section>

      <section id="why-choose-us">
        <WhyChooseUs />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="faqs">
        <FAQs />
      </section>

      <section id="articles">
        <Articles />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default Home;
