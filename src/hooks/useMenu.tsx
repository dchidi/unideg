import { useNavigate } from "react-router-dom";

const useMenu = () => {
  const navigate = useNavigate();
  const menuUpdateHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    // console.log(e.currentTarget.dataset.label);
    navigate(`/${e.currentTarget.dataset.label}`);
  };
  return { menuUpdateHandler };
};
export default useMenu;
