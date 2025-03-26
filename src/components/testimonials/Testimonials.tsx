import React from "react";
import { FaStar } from "react-icons/fa6";
import { Column, Row } from "../layouts/row_column/RowColumn";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import styles from "./Testimonials.module.css";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import useTestimonials from "../../hooks/useTestimonials";

interface TestimonialsProps {
  className?: string;
}
interface UserReviewProps {
  name: string;
  degree: string;
  school: string;
  ratings: number;
  country: string;
  comment: string;
}

export const UserReview: React.FC<UserReviewProps> = ({
  name,
  degree,
  school,
  ratings,
  country,
  comment,
}) => {
  return (
    <Row className={styles.userReview}>
      <Column className={`${styles.item} ${styles.info}`}>
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
          {comment}
          <RiDoubleQuotesR />
        </p>
      </Column>
    </Row>
  );
};

const Testimonials: React.FC<TestimonialsProps> = () => {
  const {
    userReview,
    nextReview,
    prevReview,
    currentReviewIndex,
    totalReviewCount,
  } = useTestimonials();
  return (
    <>
      <h3 className={styles.title}>Testimonials</h3>
      <Row className={styles.root}>
        <Column className={styles.testimonials}>
          <UserReview {...userReview} />

          <Row className={styles.navigator}>
            <RxCaretLeft className={styles.navBtnLeft} onClick={prevReview} />
            {[...new Array(totalReviewCount + 1).values()].map((_, index) => (
              <div
                className={`${styles.indicator} ${
                  currentReviewIndex === index ? styles.active : ""
                }`}
                key={index}
              ></div>
            ))}
            <RxCaretRight className={styles.navBtnRight} onClick={nextReview} />
          </Row>
        </Column>
      </Row>
    </>
  );
};

export default Testimonials;
