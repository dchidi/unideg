import React from "react";
import Button from "../ui/Button";

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
    <div>
      <div>
        <img src={pics_url} loading="lazy" alt={name} />
        <h3>{name}</h3>
        <p>{`${degree} ${school}`}</p>
        <div>{ratings}</div>
        <div>{country}</div>
      </div>
      <div></div>
    </div>
  );
};

const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  const UsersReview = [
    {
      pics_url: "",
      name: "",
      degree: "",
      school: "",
      ratings: 5,
      country: "",
    },
  ];
  return (
    <div className={`${className}`}>
      <div>
        {UsersReview.map((item, index) => (
          <UserReview {...item} key={index} />
        ))}
      </div>
      <Button label="Find A School" />
    </div>
  );
};

export default Testimonials;
