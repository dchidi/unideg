const useMenu = () => {
  const menuUpdateHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    console.log(e.currentTarget.dataset.label);
  };
  return { menuUpdateHandler };
};
export default useMenu;
