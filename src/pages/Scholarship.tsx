import React from "react";
import useHeader from "../hooks/useHeader";
import Header from "../components/layouts/header/Header";
import Footer from "../components/footer/Footer";

const Scholarship: React.FC = () => {
  const { scrolled } = useHeader();
  return (
    <>
      <Header className={`${scrolled ? "scrolled" : ""}`} />
      <div></div>
      <Footer />
    </>
  );
};
export default Scholarship;
