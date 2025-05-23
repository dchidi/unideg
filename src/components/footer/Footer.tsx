import React from "react";
import styles from "./Footer.module.css";
import { Column, Row } from "../layouts/row_column/RowColumn";
import { AppInfo, MenuList, SocialMediaHandle } from "../../config/constants";
import Button from "../ui/Button";
import { MdOutlineMail } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import useMenu from "../../hooks/useMenu";
import { useAppState } from "../../store/AppContext";

interface FooterProps {
  className?: string;
}
const Footer: React.FC<FooterProps> = ({ className }) => {
  const activeSocialMedia = SocialMediaHandle.filter((item) => item.isActive);
  const { menuUpdateHandler } = useMenu();
  const { dispatch } = useAppState();

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
                  {menu.name}
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
                onClick={() => dispatch({ type: "contact_us", payload: true })}
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
              onClick={() => dispatch({ type: "login", payload: true })}
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
                dispatch({ type: "privacy_policy", payload: true })
              }
            >
              Privacy Policy
            </span>
            <span
              onClick={() =>
                dispatch({ type: "terms_conditions", payload: true })
              }
            >
              Terms of Service
            </span>
            <span onClick={() => dispatch({ type: "cookies", payload: true })}>
              Cookies Policy
            </span>
          </div>
        </Row>
      </Column>
    </>
  );
};

export default Footer;
