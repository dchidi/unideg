import { useNavigate } from "react-router-dom";

const useMenu = () => {
  const navigate = useNavigate();
  const menuUpdateHandler = (
    e: React.MouseEvent<HTMLLIElement>,
    callbackFn?: () => void
  ) => {
    // console.log(e.currentTarget.dataset.label);
    navigate(`/${e.currentTarget.dataset.label}`);

    // Scroll to the top of the page with smooth behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    if (callbackFn) callbackFn();
  };
  return { menuUpdateHandler };
};
export default useMenu;
