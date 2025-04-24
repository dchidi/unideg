import React from "react";
import Header from "../components/layouts/header/Header";
import useHeader from "../hooks/useHeader";
import Footer from "../components/footer/Footer";
import { Column, Row } from "../components/layouts/row_column/RowColumn";
import Button from "../components/ui/Button";
import styles from "./css/HowItWorks.module.css";
import { AppInfo } from "../config/constants";
import {
  FaCreditCard,
  FaEnvelopeOpenText,
  FaUpload,
  FaUserPlus,
} from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import { useAppState } from "../store/AppContext";
// import { useAppState } from "../store/AppContext";

export const HowItWorksCard: React.FC<{
  count: number;
  Icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
}> = ({ count, Icon, title, description, color = "" }) => {
  return (
    <Column className={`${styles.card} ${styles[color]}`}>
      <div className={styles.count}>{count}</div>
      <div className={styles.icon}>{Icon}</div>
      <h4>{title}</h4>
      <p>{description}</p>
    </Column>
  );
};

const HowItWorks: React.FC = () => {
  const { scrolled } = useHeader();
  const admissionSteps = [
    {
      count: 1,
      Icon: <FaUserPlus />, // icon for user creation
      title: "Create Your Profile",
      description: `Tell us a bit about yourself — your academic background, goals, and preferences. 
        This helps us match you with the best-fit medical schools.`,
      color: "one",
    },
    {
      count: 2,
      Icon: <FaGlobeAmericas />, // icon for global/country
      title: "Choose Your Destination",
      description: `Pick the country or region you’d love to study in. We’ll show you 
        medical schools that align with your budget, preferences, and qualifications.`,
      color: "two",
    },
    {
      count: 3,
      Icon: <FaUpload />, // icon for upload
      title: "Upload Required Documents",
      description: `Easily upload your transcripts, passport, and other documents. 
        We’ll review them and ensure everything is good to go before submission.`,
      color: "three",
    },
    {
      count: 4,
      Icon: <FaCreditCard />, // icon for payment
      title: "Pay Your Application Fee",
      description: `Secure your application by paying the processing fee. We’ll handle the 
        submission to the schools you’ve selected.`,
      color: "four",
    },
    {
      count: 5,
      Icon: <FaEnvelopeOpenText />, // icon for letter
      title: "Receive Your Admission Letter",
      description: `Sit back and relax while we await responses from your chosen schools. 
        Once admitted, we’ll notify you immediately and guide you on the next steps.`,
      color: "five",
    },
  ];

  const { dispatch } = useAppState();

  return (
    <>
      <Header className={`${scrolled ? "scrolled" : ""}`} />
      <Column className={styles.root}>
        <Column className={styles.center}>
          <Column className={styles.top}>
            <h1>
              Get Into Med School Anywhere in the World — Just 5 Easy Steps!
            </h1>
            <p>
              {`${AppInfo.name} takes the hassle out of med school applications. 
                Just follow 5 simple steps and get closer to your dream school — no stress, 
                no confusion.`}
            </p>
            <Row className={styles.actions}>
              <Button
                onClick={() => dispatch({ type: "login", payload: true })}
                label="Get Started"
                color="dark"
              />
              <Button
                onClick={() => dispatch({ type: "demoVideo", payload: true })}
                label="Watch Demo"
                color="light"
              />
            </Row>
          </Column>
        </Column>
        <h3>{`How ${AppInfo.name} Works`}</h3>
        <Row className={styles.steps}>
          {admissionSteps.map((item, index) => (
            <HowItWorksCard {...item} key={index} />
          ))}
        </Row>
      </Column>
      <Footer />
    </>
  );
};
export default HowItWorks;
