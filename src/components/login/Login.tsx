import React from "react";
import { Column, Row } from "../layouts/row_column/RowColumn";

import styles from "./Login.module.css";
import { Input } from "../ui/Input";
import Button from "../ui/Button";
import { FaLongArrowAltRight } from "react-icons/fa";

export const Login: React.FC<{
  retrievePwdFn: () => void;
  registerFn: () => void;
}> = ({ retrievePwdFn, registerFn }) => {
  return (
    <Column className={styles.root}>
      <h2>Login</h2>
      <Input label="Email" type="email" />
      <Input label="Password" type="password" />
      <Button
        onClick={() => {}}
        label="LOGIN"
        color="dark"
        iconRight={<FaLongArrowAltRight />}
        className={styles.btn}
      />
      <Row className={styles.action}>
        <Button color="default" onClick={registerFn} label="Open account" />
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

export const RetrievePassword: React.FC<{
  loginFn: () => void;
  registerFn: () => void;
}> = ({ loginFn, registerFn }) => {
  return (
    <Column className={styles.root}>
      <h2>Password Recovery</h2>
      <Input label="Email" type="email" />
      <Button
        onClick={() => {}}
        label="Request new password"
        color="dark"
        iconRight={<FaLongArrowAltRight />}
        className={styles.btn}
      />
      <Row className={styles.action}>
        <Button color="default" onClick={registerFn} label="Open account" />
        <span className={styles.hideOnMobile}>|</span>
        <Button color="default" onClick={loginFn} label="Login" />
      </Row>
    </Column>
  );
};
