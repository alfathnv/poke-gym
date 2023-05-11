import React from "react";
import BoardGame from "./board_game";
import OfficialCounting from "./official_counting";

const Practice = () => {
  return (
    <div className="flex flex-col justify-start items-center bg-black w-screen h-screen overflow-auto">
      <OfficialCounting />
      <BoardGame />
    </div>
  );
};
export default Practice;
