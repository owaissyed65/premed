import React from "react";

const Heading = ({
  labelOne,
  labelTwo,
  para,
}: {
  labelOne: string;
  labelTwo?: string;
  para?: string;
}) => {
  return (
    <div>
      <h1 className="text-[55px] font-extrabold text-center">
        The <span className="labelOne not-select"> {labelOne}</span> {labelTwo}
      </h1>
      <p className="font-medium text-2xl text-center leading-[31.2px]">{para}</p>
    </div>
  );
};

export default Heading;
