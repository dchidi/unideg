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
import Modal from "../modal/Modal";
import { Login, RetrievePassword } from "../../login/Login";
import { Registration } from "../../registration/Registration";

interface HeaderProps {
  className?: string;
}
type ModalStateProp = {
  login: boolean;
  register: boolean;
  forgotPassword: boolean;
};

const initState = {
  login: false,
  register: false,
  forgotPassword: false,
};

const Header: React.FC<HeaderProps> = ({ className }) => {
  const navigate = useNavigate();
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [isModalOpen, setModalOpen] = useState<ModalStateProp>(initState);

  const toggleMenu = () => {
    setIsMenuToggled(!isMenuToggled);
  };

  const { menuUpdateHandler } = useMenu();

  const menuHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    menuUpdateHandler(e, toggleMenu);
  };

  const toggleModal = (args: {}) => {
    setModalOpen({ ...initState, ...args });
  };

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
              onClick={() => setModalOpen({ ...initState, login: true })}
            />
            <Button
              label="Get Started"
              onClick={() => toggleModal({ register: true })}
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
        {/* <Row className={styles.actions}> */}

        {/* </Row> */}
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
            <li onClick={() => setModalOpen({ ...initState, login: true })}>
              Login
            </li>
            <li>
              <Button
                label="Get Started"
                onClick={() => toggleModal({ register: true })}
                color="primary"
              />
            </li>
          </ul>
        </Column>
      )}
      <Modal
        isOpen={isModalOpen.login}
        onClose={() => setModalOpen({ ...initState, login: false })}
        className={styles.login}
      >
        <Login
          retrievePwdFn={() => toggleModal({ forgotPassword: true })}
          registerFn={() => toggleModal({ register: true })}
        />
      </Modal>
      <Modal
        isOpen={isModalOpen.forgotPassword}
        onClose={() => setModalOpen({ ...initState, forgotPassword: false })}
        className={styles.login}
      >
        <RetrievePassword
          loginFn={() => toggleModal({ login: true })}
          registerFn={() => toggleModal({ register: true })}
        />
      </Modal>

      <Modal
        isOpen={isModalOpen.register}
        onClose={() => setModalOpen({ ...initState, register: false })}
        className={styles.login}
      >
        <Registration
          loginFn={() => toggleModal({ login: true })}
          retrievePwdFn={() => toggleModal({ forgotPassword: true })}
        />
      </Modal>
    </>
  );
};

export default Header;
