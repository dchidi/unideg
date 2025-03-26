import { FaLongArrowAltLeft } from "react-icons/fa";
import { Column, Row } from "../components/layouts/row_column/RowColumn";
import styles from "./css/Error404.module.css";
import { AppInfo } from "../config/constants";
const Error404 = () => {
  return (
    <Column className={styles.error}>
      <Row className={styles.center}>
        404 Error | <span className={styles.msg}>Page not found</span>
      </Row>
      <a href="/home" className={styles.link}>
        <FaLongArrowAltLeft /> BACK TO {AppInfo.name}
      </a>
    </Column>
  );
};
export default Error404;
