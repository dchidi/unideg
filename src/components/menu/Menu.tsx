import React from "react";
import { MenuList, ProfileMenuList } from "../../config/constants";
import useMenu from "../../hooks/useMenu";
import styles from "./Menu.module.css";

interface MenuProps {
  className?: string;
}
const Menu: React.FC<MenuProps> = ({ className }) => {
  const { menuUpdateHandler, activeMenu } = useMenu();
  const menuData = MenuList.filter((item) => item.topMenu === true);
  return (
    <ul className={`${styles.root} ${className} ${styles.hideOnMobile}`}>
      {menuData.map((menu, index) => (
        <li
          key={index}
          onClick={menuUpdateHandler}
          data-label={menu.label}
          className={`${styles.menuItem} ${
            menu.label === activeMenu ? styles.active : ""
          }`}
          role="button"
        >
          {menu.name}
        </li>
      ))}
    </ul>
  );
};

export const ProfileMenu: React.FC<MenuProps> = ({ className }) => {
  const { menuUpdateHandler, activeMenu } = useMenu();
  return (
    <ul className={`${styles.profileMenu} ${className}`}>
      {ProfileMenuList.map((menu, index) => (
        <li
          key={index}
          onClick={menuUpdateHandler}
          data-label={menu.label}
          className={`${styles.menuItem} ${
            menu.label === activeMenu ? styles.active : ""
          }`}
          role="button"
        >
          {menu.name}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
