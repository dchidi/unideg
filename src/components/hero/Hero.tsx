import React from "react";
import Button from "../ui/Button";
import styles from "./Hero.module.css";
import { AppInfo } from "../../config/constants";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Column } from "../layouts/row_column/RowColumn";
import { useAppState } from "../../store/AppContext";
// import Header from "../layouts/header/Header";

interface HeroProps {
  className?: string;
}
const Hero: React.FC<HeroProps> = ({ className }) => {
  const { dispatch } = useAppState();
  return (
    <div className={`${styles.root} ${className}`}>
      {/* <Header /> */}
      <Column className={styles.frame}>
        <h2 className={styles.title}>{AppInfo.fullname}</h2>
        <p className={styles.description}>{AppInfo.heroShortNote}</p>
      </Column>

      <Button
        label="Apply Now"
        onClick={() => dispatch({ type: "login", payload: true })}
        color="dark"
        iconRight={<FaLongArrowAltRight />}
        className={styles.btn}
      />
    </div>
  );
};

export default Hero;
