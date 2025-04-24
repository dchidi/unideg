// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../store/AppContext";

const useMenu = () => {
  const navigate = useNavigate();
  const { dispatch, state } = useAppState();
  // const [activeMenu, setActiveMenu] = useState<string | undefined>("home");
  const menuUpdateHandler = (
    e: React.MouseEvent<HTMLLIElement>,
    callbackFn?: () => void
  ) => {
    // e.preventDefault();
    // console.log(e.currentTarget.dataset.label);
    const menu = e.currentTarget.dataset.label;
    // setActiveMenu(menu);
    dispatch({ type: "active_menu", payload: menu || "home" });
    navigate(`/${menu}`);

    // Scroll to the top of the page with smooth behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    if (callbackFn) callbackFn();
  };
  return { menuUpdateHandler, activeMenu: state.active_menu };
};
export default useMenu;
