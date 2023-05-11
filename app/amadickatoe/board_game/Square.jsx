"use client";
import Image from "next/image";
import React, { useState } from "react";

const Square = (props) => {
  const { size, id, greenId = "", value, handleChange } = props;
  return (
    <button
      className={`w-1/4 h-1/4 flex justify-center items-center outline outline-2 ${
        greenId
          ? "border border-2 border-green-400 outline outline-2 outline-green-400 z-10"
          : "outline-white"
      }`}
      onClick={() => handleChange(id)}
    >
      {value == "X" ? (
        <Image src={"/alpat.png"} width={100} height={100} alt="alpat" />
      ) : null}
      {value == "O" ? (
        <Image src={"/aping.png"} width={100} height={100} alt="aping" />
      ) : null}
    </button>
  );
};

export default Square;
