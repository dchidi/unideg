import React, { useState } from "react";
import Menu from "../../menu/Menu";
import Button from "../../ui/Button";
import { Column, Row } from "../row_column/RowColumn";
import { AppInfo, MenuList } from "../../../config/constants";
import styles from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  className?: string;
}
const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMenToggled, setIsMenuToggled] = useState(false);
  const toggleMenu = () => {
    setIsMenuToggled(!isMenToggled);
  };

  const navigate = useNavigate();

  return (
    <>
      <Row className={`${styles.root} ${className}`}>
        <Row className={styles.menu}>
          <div className={styles.logo} onClick={() => navigate("/home")}>
            {AppInfo.name}
          </div>
          <Menu />
        </Row>
        <Row className={styles.actions}>
          {/* <Button label="EN" onClick={() => {}} /> */}
          <Row className={styles.hideOnMobile}>
            <Button label="Sign In" onClick={() => {}} />
            <Button label="Get Started" onClick={() => {}} color="dark" />
          </Row>
          <Button
            onClick={toggleMenu}
            color="dark"
            className={`${styles.showOnMobile} ${styles.navBtn}`}
            iconRight={<GiHamburgerMenu size={25} />}
          />
        </Row>
        {/* <Row className={styles.actions}> */}

        {/* </Row> */}
      </Row>
      {isMenToggled && (
        <Column className={styles.mobileMenu}>
          <Button
            onClick={toggleMenu}
            color="dark"
            className={`${styles.showOnMobile} ${styles.navBtnClose}`}
            iconRight={<MdOutlineClose size={25} />}
          />
          <ul className={styles.mobileMenuList}>
            {MenuList.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
            <li>
              <Button label="Get Started" onClick={() => {}} color="primary" />
            </li>
          </ul>
        </Column>
      )}
    </>
  );
};

export default Header;
