import React from "react";
import { Column, Row } from "../layouts/row_column/RowColumn";

import styles from "./Registration.module.css";
import { Input } from "../ui/Input";
import Button from "../ui/Button";
import { FaLongArrowAltRight } from "react-icons/fa";

export const Registration: React.FC<{
  retrievePwdFn: () => void;
  loginFn: () => void;
}> = ({ retrievePwdFn, loginFn }) => {
  return (
    <Column className={styles.root}>
      <h2>Create an account</h2>
      <Input label="Name" type="text" />
      <Input label="Email" type="email" />
      <Input label="Password" type="password" />
      <Input label="Repeat Password" type="password" />
      <Button
        onClick={() => {}}
        label="CREATE ACCOUNT"
        color="dark"
        iconRight={<FaLongArrowAltRight />}
        className={styles.btn}
      />
      <Row className={styles.action}>
        <Button color="default" onClick={loginFn} label="Login" />
        <span className={styles.hideOnMobile}>|</span>
        <Button
          color="default"
          onClick={retrievePwdFn}
          label="Forgot password?"
        />
      </Row>
    </Column>
  );
};
