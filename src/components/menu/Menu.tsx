import React from "react";
import { MenuList } from "../../config/constants";
import useMenu from "../../hooks/useMenu";

interface MenuProps {
  className?: string;
}
const Menu: React.FC<MenuProps> = ({ className }) => {
  const { menuUpdateHandler } = useMenu();
  return (
    <ul className={`${className}`}>
      {MenuList.map((menu, index) => (
        <li key={index} onClick={menuUpdateHandler} data-label={menu.label}>
          {menu.name}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
