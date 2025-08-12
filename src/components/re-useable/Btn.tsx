"use client";

import React from "react";
import { BtnProps } from "@/types/BtnProps";

const Btn: React.FC<BtnProps> = ({
  height,
  width,
  fontSize,
  color,
  back,
  borderRadius,
  text,
  className
}) => {
  return (
    <button
      className={className}
      style={{
        height,
        width,
        fontSize,
        color,
        backgroundColor: back,
        borderRadius,
      }}
    >
      {text}
    </button>
  );
};

export default Btn;
