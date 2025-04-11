import React, { useState } from "react";
import styles from "./Footer.module.css";
import { Column, Row } from "../layouts/row_column/RowColumn";
import { AppInfo, MenuList, SocialMediaHandle } from "../../config/constants";
import Button from "../ui/Button";
import { MdOutlineMail } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import Modal from "../layouts/modal/Modal";
import Cookies from "../cookies/Cookies";
import { useLocalStorage } from "../../hooks/useHelpers";
import TermsConditions from "../terms_conditions/TermsConditions";
import PrivacyPolicy from "../privacy_policy/PrivacyPolicy";
import ContactForm from "../contact_form/ContactForm";
import useMenu from "../../hooks/useMenu";

interface FooterProps {
  className?: string;
}
const Footer: React.FC<FooterProps> = ({ className }) => {
  const activeSocialMedia = SocialMediaHandle.filter((item) => item.isActive);

  const { menuUpdateHandler } = useMenu();

  const { localStore } = useLocalStorage();

  const [isModalOpen, setModalOpen] = useState<{
    terms_conditions: boolean;
    privacy_policy: boolean;
    cookies: boolean;
    login: boolean;
    contact_us: boolean;
  }>({
    terms_conditions: false,
    privacy_policy: false,
    cookies: !localStore.acceptCookies,
    login: false,
    contact_us: false,
  });

  const contactUsHandler = () => {
    setModalOpen((prev) => ({ ...prev, contact_us: true }));
  };
  const findSchoolHandler = () => {};

  return (
    <>
      <Column className={`${styles.footer} ${className}`}>
        <Row className={styles.footerTop}>
          <div className={styles.footerItem}>
            <h3 className={styles.footerTitle}>{AppInfo.name}</h3>
            <p>{AppInfo.footerShortNote}</p>
            <Row className={styles.socialIcons}>
              {activeSocialMedia.map((item, index) => {
                if (item.isActive)
                  return (
                    <a href={item.url} key={index}>
                      {item.icon}
                    </a>
                  );
              })}
            </Row>
          </div>
          <div className={styles.footerItem}>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <ul className={styles.footerQuickLinks}>
              {MenuList.map((menu, index) => (
                <li
                  key={index}
                  data-label={menu.label}
                  onClick={menuUpdateHandler}
                >
                  <a href={menu.label}>{menu.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${styles.contactInfo} ${styles.footerItem}`}>
            <h3 className={styles.footerTitle}>Contact Us</h3>
            <div className={`${styles.contactIcons} ${styles.location}`}>
              {AppInfo.address}
            </div>
            <div className={styles.contactIcons}>{AppInfo.phone}</div>
            <div className={styles.contactIcons}>{AppInfo.email}</div>

            <div>
              <Button
                label="Contact Us"
                onClick={contactUsHandler}
                iconLeft={<MdOutlineMail />}
                color="dark"
              />
            </div>
          </div>
          <div
            className={`${styles.footerFindASchoolBtn}  ${styles.footerItem}`}
          >
            <Button
              label="Apply Now"
              onClick={findSchoolHandler}
              color="primary"
              iconRight={<FaLongArrowAltRight />}
              className={styles.bigBtn}
            />
          </div>
        </Row>
        <Row className={styles.footerBottom}>
          <div className={styles.copyright}>
            &copy; 2025 {AppInfo.name}. All rights reserved.
          </div>
          <div className={styles.footerBottomAlignRight}>
            <span
              onClick={() =>
                setModalOpen((prev) => ({ ...prev, privacy_policy: true }))
              }
            >
              Privacy Policy
            </span>
            <span
              onClick={() =>
                setModalOpen((prev) => ({ ...prev, terms_conditions: true }))
              }
            >
              Terms of Service
            </span>
            <span
              onClick={() =>
                setModalOpen((prev) => ({ ...prev, cookies: true }))
              }
            >
              Cookies Policy
            </span>
          </div>
        </Row>
      </Column>
      <Modal
        isOpen={isModalOpen.privacy_policy}
        onClose={() =>
          setModalOpen((prev) => ({ ...prev, privacy_policy: false }))
        }
        className={styles.privacy_policy}
      >
        <PrivacyPolicy />
      </Modal>
      <Modal
        isOpen={isModalOpen.terms_conditions}
        onClose={() =>
          setModalOpen((prev) => ({ ...prev, terms_conditions: false }))
        }
        className={styles.terms_conditions}
      >
        <TermsConditions />
      </Modal>
      <Modal
        isOpen={isModalOpen.cookies}
        onClose={() => setModalOpen((prev) => ({ ...prev, cookies: false }))}
        hasCloseBtn={false}
        allowKeyCloseEvent={false}
      >
        <Cookies
          callbackFn={() =>
            setModalOpen((prev) => ({ ...prev, cookies: false }))
          }
        />
      </Modal>

      <Modal
        isOpen={isModalOpen.contact_us}
        onClose={() => setModalOpen((prev) => ({ ...prev, contact_us: false }))}
        className={styles.contactForm}
      >
        <ContactForm />
      </Modal>
    </>
  );
};

export default Footer;
