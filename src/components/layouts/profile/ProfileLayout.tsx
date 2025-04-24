import React from "react";
import { Outlet } from "react-router-dom";
import { Column, Row } from "../row_column/RowColumn";
import { ProfileMenu } from "../../menu/Menu";

const ProfileLayout: React.FC = () => {
  return (
    <Row>
      {/* This will render the nested routes*/}
      <Column>
        <ProfileMenu />
      </Column>
      <Column>
        <Row>head</Row>
        <Outlet />
      </Column>
    </Row>
  );
};

export default ProfileLayout;
