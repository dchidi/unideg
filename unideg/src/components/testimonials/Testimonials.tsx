import React from "react";
import { FaStar } from "react-icons/fa6";
import { Column, Row } from "../layouts/row_column/RowColumn";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import styles from "./Testimonials.module.css";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

interface TestimonialsProps {
  className?: string;
}
interface UserReviewProps {
  pics_url: string;
  name: string;
  degree: string;
  school: string;
  ratings: number;
  country: string;
}

export const UserReview: React.FC<UserReviewProps> = ({
  pics_url,
  name,
  degree,
  school,
  ratings,
  country,
}) => {
  return (
    <Row className={styles.userReview}>
      <Column className={`${styles.item} ${styles.info}`}>
        {/* {pics_url ? (
          <img src={pics_url} loading="lazy" alt={name} />
        ) : (
          <FcLikePlaceholder />
        )} */}
        <h3>{name}</h3>
        <p className={styles.school}>{`${degree} at ${school}.`}</p>
        <Row className={styles.star}>
          {[...new Array(ratings).values()].map((_, index) => (
            <FaStar key={index} />
          ))}
        </Row>
        <div className={styles.country}>{country}</div>
      </Column>
      <Column className={styles.item}>
        <p className={styles.comment}>
          <RiDoubleQuotesL />
          This platform helped me to find the school of my dream without any
          hassle. Thanks Unidezk
          <RiDoubleQuotesR />
        </p>
      </Column>
    </Row>
  );
};

const Testimonials: React.FC<TestimonialsProps> = () => {
  const UsersReview = [
    {
      pics_url: "",
      name: "Chidi Duru",
      degree: "Computing",
      school: "Griffith College Dublin",
      ratings: 5,
      country: "Ireland",
    },
  ];
  return (
    <Row className={styles.root}>
      <Column className={styles.testimonials}>
        <div>
          {UsersReview.map((item, index) => (
            <UserReview {...item} key={index} />
          ))}
        </div>
        <Row className={styles.navigator}>
          <RxCaretLeft className={styles.navBtnLeft} />
          <div className={styles.indicator}></div>
          <div className={`${styles.indicator} ${styles.active}`}></div>
          <RxCaretRight className={styles.navBtnRight} />
        </Row>
      </Column>
    </Row>
  );
};

export default Testimonials;
