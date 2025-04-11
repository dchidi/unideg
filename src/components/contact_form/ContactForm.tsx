import React from "react";
import { Column } from "../layouts/row_column/RowColumn";

import styles from "./ContactForm.module.css";
import { Input, TextArea } from "../ui/Input";
import Button from "../ui/Button";
import { TfiEmail } from "react-icons/tfi";

const ContactForm: React.FC = () => {
  return (
    <Column className={styles.root}>
      <h2>Contact Us</h2>
      <Input label="Name" type="text" />
      <Input label="Email" type="email" />
      <TextArea label="Message" />
      <Button
        onClick={() => {}}
        label="SEND MESSAGE"
        color="dark"
        iconLeft={<TfiEmail />}
        className={styles.btn}
      />
    </Column>
  );
};
export default ContactForm;
