import React from "react";

const TeamHeading = () => {
  return (
    <React.Fragment>
      {" "}
      <h1 className="text-[50px] font-extrabold ">
        {"<"} The Pre<span className="text-premed-Theme">M</span>ed{" "}
        <span className="font-medium">Team</span>
      </h1>
      <h1 className="gradient-textNew tracking-tight flex-shrink-0 -ml-3 -mt-3 not-select">
        The Tech Fam
      </h1>
      <p className="w-[70%] text-[45px] font-medium -mt-3">
        Of course, they can’t fix a computer!
      </p>
    </React.Fragment>
  );
};

export default TeamHeading;
