import React from "react";
import TimeLine from "../components/ui/TimeLine";

const HowItWorks: React.FC = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <TimeLine
        status="pending"
        title="Created application"
        description="Somethings goes in here. And other things"
        date="04/12/2025"
      />
      <TimeLine
        status="pending"
        title="Created application"
        description="Somethings goes in here. And other things"
        date=""
      />
    </div>
  );
};
export default HowItWorks;
