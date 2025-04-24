import React, { useState } from "react";
import Menu from "../../menu/Menu";
import Button from "../../ui/Button";
import { Column, Row } from "../row_column/RowColumn";
import { AppInfo, MenuList } from "../../../config/constants";
import styles from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";

import { useAppState } from "../../../store/AppContext";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const navigate = useNavigate();
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const toggleMenu = () => {
    setIsMenuToggled(!isMenuToggled);
  };

  const { menuUpdateHandler } = useMenu();

  const menuHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    menuUpdateHandler(e, toggleMenu);
  };

  const { dispatch } = useAppState();

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
            <Button
              label="Login"
              onClick={() => dispatch({ type: "login", payload: true })}
            />
            <Button
              label="Get Started"
              onClick={() => dispatch({ type: "register", payload: true })}
              color="dark"
            />
          </Row>
          <Button
            onClick={toggleMenu}
            color="dark"
            className={`${styles.showOnMobile} ${styles.navBtn}`}
            iconRight={<GiHamburgerMenu size={25} />}
          />
        </Row>
      </Row>
      {isMenuToggled && (
        <Column className={styles.mobileMenu}>
          <Button
            onClick={toggleMenu}
            color="dark"
            className={`${styles.showOnMobile} ${styles.navBtnClose}`}
            iconRight={<MdOutlineClose size={25} />}
          />
          <ul className={styles.mobileMenuList}>
            {MenuList.map((item, index) => (
              <li key={index} data-label={item.label} onClick={menuHandler}>
                {item.name}
              </li>
            ))}
            <li onClick={() => dispatch({ type: "login", payload: true })}>
              Login
            </li>
            <li>
              <Button
                label="Get Started"
                onClick={() => dispatch({ type: "register", payload: true })}
                color="primary"
              />
            </li>
          </ul>
        </Column>
      )}
    </>
  );
};

export default Header;
