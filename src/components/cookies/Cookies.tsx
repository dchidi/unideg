import React, { useCallback } from "react";
import { Column, Row } from "../layouts/row_column/RowColumn";
import Button from "../ui/Button";
import styles from "./Cookies.module.css";
import { useLocalStorage } from "../../hooks/useHelpers";

const Cookies: React.FC<{ callbackFn: () => void }> = ({ callbackFn }) => {
  const { localStore, updateLocalStore } = useLocalStorage();

  const handleCookieConsent = useCallback(
    (consent: boolean) => {
      updateLocalStore({ acceptCookies: consent });
      callbackFn();
    },
    [updateLocalStore, callbackFn]
  );

  return (
    <Row className={styles.root}>
      <Column className={styles.content}>
        <h3 className={styles.title}>
          This website uses cookies to enhance your experience.
        </h3>
        <p>
          Dear visitor, to provide tailored services and personalize your
          browsing experience, we utilize cookies while protecting your personal
          information. You can adjust your preferences anytime by clicking
          'Change Settings' in the Privacy Policy.
        </p>
      </Column>
      <Column className={styles.action}>
        {localStore.acceptCookies ? (
          <Button
            onClick={() => {
              console.log("settings clicked");
              callbackFn();
            }}
            label="Settings"
            className={styles.settings}
          />
        ) : (
          <Button
            onClick={() => handleCookieConsent(true)}
            label="Accept"
            className={styles.accept}
          />
        )}
        <Button
          onClick={() => handleCookieConsent(false)}
          label="Reject"
          className={styles.reject}
        />
      </Column>
    </Row>
  );
};
export default Cookies;
