import React from "react";
import BoardGame from "./board_game";
import OfficialCounting from "./official_counting";

const Practice = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <OfficialCounting />
      <BoardGame />
    </div>
  );
};
export default Practice;
