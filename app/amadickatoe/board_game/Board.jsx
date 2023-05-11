"use client";
import React, { useState } from "react";
import Square from "./Square";

const Board = (props) => {
  const { size, dataList, winnerRules, handleChange } = props;
  const squareList = dataList.map((data, index) => (
    <Square
      key={data.id}
      size={size}
      id={data.id}
      greenId={winnerRules.includes(index)}
      value={data.value}
      handleChange={handleChange}
    />
  ));

  return (
    <div
      className="border-solid border-4 border-white flex flex-wrap bg-stone-600"
      style={{ width: `${size * 100}px`, height: `${size * 100}px` }}
    >
      {squareList}
    </div>
  );
};

export default Board;
