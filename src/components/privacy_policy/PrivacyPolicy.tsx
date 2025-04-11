import React from "react";
import { Column } from "../layouts/row_column/RowColumn";

import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy: React.FC = () => {
  // source  :https://www.masterstudies.com/legal/privacy
  return (
    <Column className={styles.root}>
      <h3 className={styles.title}>Privacy Policy</h3>
      <p>
        {`This privacy policy applies for processing of personal data when
        Keystone Academic Solutions AS ("we"or "us") processes personal data in
        the capacity of data controller, for instance related to personal data
        about prospective students, visitors of our websites and contact
        information of contact persons at institutions and universities.`}
      </p>
      <h4 className={styles.title}>1. WHO WE ARE</h4>
      <p>
        {`We are a part of the Keystone Education Group (“Keystone”), which is
        trusted by more than 120 million unique prospective students every year
        to help them make one of the most important decisions of their
        lifetimes, namely, which educational program to attend. At Keystone, we
        help prospective students find the right education to pursue their
        dreams, whether they are seeking higher education, wanting to expand
        their knowledge through a course, or upskilling as a professional. As
        part of its services, Keystone offers distinct websites tailored to each
        level of study, assisting prospective students in exploring and
        discovering thousands of degree programs and institutions worldwide.
        These platforms provide detailed information and allows users to compare
        various educational programs. Additionally, Keystone facilitates the
        opportunity to connect and communicate directly with the admissions
        offices of relevant institutions, enabling prospective students to
        obtain the necessary information and assistance for their educational
        journey. Keystone also provides similar services for other individuals
        or representatives of businesses or organisations seeking to connect
        with various providers of activities and courses. For the purpose of
        this privacy policy, schools, universities, course providers, leisure
        activity providers, and other institutions, are jointly referred to as
        "education providers").`}
      </p>
      <h4 className={styles.title}>2. ABOUT THE PRIVACY POLICY</h4>
      <p>
        {`This privacy policy applies for processing of personal data when we
        processes personal data in the capacity of data controller, for instance
        related to personal data about prospective students, visitors of our
        websites and contact information of contact persons at education
        providers. This privacy policy does not cover instances where we act as
        a data processor, processing personal data on behalf of an education
        provider, or when the education provider itself act as a controller for
        the relevant processing of personal data. This is the case when the
        relevant education provider communicates with prospective students,
        enrols them into programs, courses or activities, or otherwise manages
        and stores their data using our CRM platform after we have facilitated
        the initial connection. In these situations, the respective education
        provider is the independent data controller, and we advise you to read
        the privacy policy of the respective education provider for details on
        their processing of personal data.`}
      </p>
      <h4 className={styles.title}>3. WHO WE PROCESS PERSONAL DATA ABOUT</h4>
      <p>
        {`The privacy policy governs the processing of personal data for the following persons:`}
      </p>
      <ol>
        <li>
          Prospective students and others submitting personal information
          through lead forms or by registering a user account
        </li>
        <li>
          Prospective students and others who send inquiries directly to us via
          our website's contact form or via e-mail
        </li>
        <li>Education provider representatives</li>
        <li>Visitors to our websites</li>
      </ol>
    </Column>
  );
};
export default PrivacyPolicy;
