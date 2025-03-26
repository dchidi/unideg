import { useState } from "react";
const useTestimonials = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const usersReview = [
    {
      name: "Chidi Duru",
      degree: "Computing",
      school: "Griffith College Dublin",
      ratings: 5,
      country: "Ireland",
      comment: `This platform helped me to find the school of my dream without any
          hassle. Thanks Unidezk`,
    },
    {
      name: "Ify Duru",
      degree: "Statistics",
      school: "Dublin City College",
      ratings: 4,
      country: "Ireland",
      comment: `I love the platform but the school wasn't that great`,
    },
    {
      name: "Nkechi Duru",
      degree: "Mechanical Engineering",
      school: "University College, Dublin",
      ratings: 5,
      country: "Ireland",
      comment: `Unidezk thank you for bringing my dream to life.`,
    },
  ];

  const totalReviewCount = usersReview.length - 1;
  const nextReview = () =>
    setCurrentReviewIndex(
      currentReviewIndex < totalReviewCount
        ? currentReviewIndex + 1
        : totalReviewCount
    );
  const prevReview = () =>
    setCurrentReviewIndex(currentReviewIndex > 0 ? currentReviewIndex - 1 : 0);
  const userReview = usersReview[currentReviewIndex];
  return {
    userReview,
    nextReview,
    prevReview,
    currentReviewIndex,
    totalReviewCount,
  };
};
export default useTestimonials;
