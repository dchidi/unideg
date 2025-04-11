import React from "react";
import { Column } from "../layouts/row_column/RowColumn";

import styles from "./TermsConditions.module.css";

const TermsConditions: React.FC = () => {
  // source  :https://www.masterstudies.com/legal/privacy
  return (
    <Column className={styles.root}>
      <h3 className={styles.title}>Terms and Conditions</h3>
      <p>
        The following text describes the terms and conditions for use of this
        website and the services related to it, as created and operated by
        Keystone Education Group. Please read it carefully. By using this
        website, you indicate that you accept to be bound by these terms and
        conditions. Keystone Education Group may revise and update these terms
        and conditions at any time, so please visit this page periodically to
        review the text, as it is binding on you. The terms "You" and "User" are
        used throughout the text with reference to all individuals and/or
        entities accessing this website for any purpose or reasons.
      </p>
      <h4 className={styles.title}>Use of Content and Proprietary Rights</h4>
      <p>
        By using this website you acknowledge and agree that all content and
        material available on it, such as text, logos, graphics, images, and
        software, are protected under Norwegian and international copyright,
        trademark and other laws. All content and material are the property of
        Keystone Education Group or its content suppliers or clients. Keystone
        Education Group reserves the exclusive right to the compilation of the
        content of this website (meaning its collection, arrangement and
        display). This right is protected by Norwegian and international
        copyright laws. By using this website you agree not to capture, sell,
        license, distribute, publish, modify, adapt, edit, copy, reproduce, or
        reuse the content of this website in any other way for any public or
        commercial purpose. You are prohibited to copy or adapt the HTML code
        that Keystone Education Group creates and uses to generate its web
        pages. This code is also protected by the copyright. You are expressly
        prohibited to violate the security of this website (for example by way
        of, but not limited to, using any device, software or procedure that
        interferes or attempts to interfere with the proper functioning of this
        website; using any device or tool to navigate this website other than
        that provided by Keystone Education Group; attempting to decipher,
        decompile, disassemble or reverse engineer any of the software making up
        a part of the website; spreading or attempting to spread viruses,
        Trojans, worms, or any other devices that are designed or intended to
        disrupt, damage or interfere with any information, software, hardware or
        communication systems).
      </p>
      <h4 className={styles.title}>Conduct of Use</h4>
      <p>
        You are allowed to access the content of this website for your personal,
        non-commercial use, provided you do so without violation of copyright
        and other proprietary rights, and provided you do not use this website
        for any purpose that is unlawful or prohibited by these terms and
        conditions. You accept not to use this website in any way that is
        unlawful, abusive, threatening, harassing, obscene, libelous, hateful,
        or in any other way violating these terms and conditions. While using
        this website, you accept not to post any inaccurate or false information
        about yourself, or any information that is not a part of your own CV, or
        any unsolicited advertisements or business proposals, or chain letters
        and junk mail. As a user of this website and its service, you are
        responsible for your own communications and for the consequences of your
        posting.
      </p>
    </Column>
  );
};
export default TermsConditions;
