import React from "react";
import Menu from "../../menu/Menu";
import Button from "../../ui/Button";

const Header: React.FC = () => {
  return (
    <div>
      <div>logo</div>
      <div>
        <Menu />
      </div>
      <div>
        <Button label="EN" />
        <Button label="Sign In" />
        <Button label="Get Started" />
      </div>
    </div>
  );
};

export default Header;
