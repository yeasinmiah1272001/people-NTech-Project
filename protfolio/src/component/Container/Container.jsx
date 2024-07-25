import React from "react";
import { twMerge } from "tailwind-merge";

const Container = ({ children, className, id }) => {
  const newClassName = twMerge(
    "max-w-screen-xl lg:mx-28    px-4 lg:px-0",
    className
  );

  return (
    <div id={id} className={newClassName}>
      {children}
    </div>
  );
};

export default Container;
