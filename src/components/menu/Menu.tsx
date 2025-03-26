import React from "react";
import { MenuList } from "../../config/constants";
import useMenu from "../../hooks/useMenu";
import styles from "./Menu.module.css";

interface MenuProps {
  className?: string;
}
const Menu: React.FC<MenuProps> = ({ className }) => {
  const { menuUpdateHandler } = useMenu();
  const menuData = MenuList.filter((item) => item.topMenu === true);
  return (
    <ul className={`${styles.root} ${className} ${styles.hideOnMobile}`}>
      {menuData.map((menu, index) => (
        <li
          key={index}
          onClick={menuUpdateHandler}
          data-label={menu.label}
          className={styles.menuItem}
        >
          {menu.name}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
