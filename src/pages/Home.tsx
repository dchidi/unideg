import React from "react";
import Header from "../components/layouts/header/Header";
import Hero from "../components/hero/Hero";
import Features from "../components/features/Features";
import Coverage from "../components/coverage/Coverage";
import Footer from "../components/footer/Footer";
import Testimonials from "../components/testimonials/Testimonials";
import useHeader from "../hooks/useHeader";
const Home: React.FC = () => {
  const { scrolled } = useHeader();

  return (
    <>
      <Header className={`${scrolled ? "scrolled" : ""}`} />
      <Hero />
      <Features />
      <Testimonials />
      <Coverage />
      <Footer />
    </>
  );
};
export default Home;
