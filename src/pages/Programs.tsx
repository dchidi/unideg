import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/layouts/header/Header";
import useHeader from "../hooks/useHeader";
import styles from "./css/Programs.module.css";
import { Column, Row } from "../components/layouts/row_column/RowColumn";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Button from "../components/ui/Button";

const Programs: React.FC = () => {
  const { scrolled } = useHeader();
  const programs = [
    {
      id: 1,
      name: "All Programs",
      link: "all-programs",
      subMenu: [
        {
          id: 1,
          title: "Medical Sciences",
          description:
            "Conduct original research at the highest level, contributing to advancements in medical knowledge and healthcare practice.",
          duration: "3-4 Years",
          highlights: [
            "Independent research project",
            "Advanced methodological training",
            "Academic publication and presentation",
          ],
        },
      ],
    },
    { id: 2, name: "Bachelor's Degree", link: "bachelor-degree" },
    { id: 3, name: "Master's Degree", link: "master-degree" },
    { id: 4, name: "Doctoral Degree", link: "doctorate-degree" },
  ];
  return (
    <>
      <Header className={`${scrolled ? styles["scrolled"] : ""}`} />
      <Column className={styles.root}>
        <a href="/home" className={styles.backLink}>
          <FaLongArrowAltLeft /> Back to Home
        </a>
        <h1>Medical Programs</h1>
        <p className={styles.msg}>
          Explore our comprehensive range of academic programs designed to
          prepare you for a successful carer in the medical field
        </p>

        <Row className={styles.links}>
          {programs.map((item, _) => (
            <Button
              label={item.name}
              onClick={() => {}}
              key={item.id}
              color="dark"
              className={item.id - 1 === 0 ? styles.active : ""}
            />
          ))}
        </Row>
      </Column>
      <Row>content</Row>
      <Footer />
    </>
  );
};
export default Programs;
