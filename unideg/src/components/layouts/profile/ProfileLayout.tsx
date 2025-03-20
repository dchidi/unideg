import React from "react";
import { Outlet } from "react-router-dom";

const ProfileLayout: React.FC = () => {
  return (
    <div>
      {/* This will render the nested routes*/}
      <Outlet />
    </div>
  );
};

export default ProfileLayout;
