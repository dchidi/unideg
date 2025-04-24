// import React from "react";

import React, { useRef, useState, useEffect } from "react";
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
          {[...new Array(5).values()].map((_, index) =>
            index < ratings ? (
              <FaStar key={index} />
            ) : (
              <FaStar key={index} className={styles.emptyStar} />
            )
          )}
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

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null); // Changed to number for browser environment

  // Auto-rotation interval in milliseconds
  const ROTATION_INTERVAL = 10000;
  const minSwipeDistance = 50;

  const handleNextReview = () => {
    if (currentReviewIndex >= totalReviewCount) {
      // If at the end, go back to the first testimonial
      // You'll need to modify your useTestimonials hook to include a resetToFirst function
      // Or call nextReview() which should handle the loop internally
      nextReview(); // Assuming your hook already handles looping
    } else {
      nextReview();
    }
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    pauseAutoRotation();
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      resumeAutoRotation();
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNextReview();
    } else if (isRightSwipe) {
      prevReview();
    }

    resumeAutoRotation();
  };

  const startAutoRotation = () => {
    // Clear any existing timer first
    pauseAutoRotation();

    timerRef.current = window.setInterval(() => {
      handleNextReview();
    }, ROTATION_INTERVAL);
  };

  const pauseAutoRotation = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resumeAutoRotation = () => {
    if (!timerRef.current) {
      startAutoRotation();
    }
  };

  // Initialize and clean up timer
  useEffect(() => {
    startAutoRotation();

    return () => {
      pauseAutoRotation();
    };
  }, []);

  // Reset timer whenever the review changes
  useEffect(() => {
    if (timerRef.current) {
      pauseAutoRotation();
      startAutoRotation();
    }
  }, [currentReviewIndex]);

  return (
    <>
      <h3 className={styles.title}>Testimonials</h3>
      <Row className={styles.root}>
        <Column
          className={styles.testimonials}
          ref={testimonialsRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseEnter={pauseAutoRotation}
          onMouseLeave={resumeAutoRotation}
        >
          <UserReview {...userReview} />

          <Row className={styles.navigator}>
            <RxCaretLeft
              className={styles.navBtnLeft}
              onClick={() => {
                prevReview();
                pauseAutoRotation();
                startAutoRotation();
              }}
            />
            {[...Array(totalReviewCount + 1)].map((_, index) => (
              <div
                className={`${styles.indicator} ${
                  currentReviewIndex === index ? styles.active : ""
                }`}
                key={index}
              ></div>
            ))}
            <RxCaretRight
              className={styles.navBtnRight}
              onClick={() => {
                handleNextReview();
                pauseAutoRotation();
                startAutoRotation();
              }}
            />
          </Row>
        </Column>
      </Row>
    </>
  );
};
export default Testimonials;
