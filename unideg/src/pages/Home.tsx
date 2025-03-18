import React from "react";
import Header from "../components/layouts/header/Header";
import Hero from "../components/hero/Hero";
import Features from "../components/features/Features";
import Coverage from "../components/coverage/Coverage";
import Footer from "../components/footer/Footer";

const Home: React.FC = () => {
  return (
    <>
      {/* <Header />
      <Hero />
      <Features /> */}
      <Coverage />
      <Footer />
    </>
  );
};
export default Home;
