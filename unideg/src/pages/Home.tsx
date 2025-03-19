import React from "react";
import Header from "../components/layouts/header/Header";
import Hero from "../components/hero/Hero";
import Features from "../components/features/Features";
import Coverage from "../components/coverage/Coverage";
import Footer from "../components/footer/Footer";
import Testimonials from "../components/testimonials/Testimonials";

const Home: React.FC = () => {
  return (
    <>
      {/* <Header />
      <Hero />
      */}
      <div>
        <Features />
        <Coverage />
        <Testimonials />
      </div>
      <Footer />
    </>
  );
};
export default Home;
