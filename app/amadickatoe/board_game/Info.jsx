"use client";
import React from "react";

const Info = (props) => {
  const { summaries, handleReset } = props;
  const summaryList =
    summaries &&
    summaries.length &&
    summaries.map((elem, id) => (
      <li key={id} className="text-rose-500">
        {elem}
      </li>
    ));

  return (
    <div className="flex flex-col justify-start item-center bg-red-100 w-60 h-full rounded p-4">
      <h2 className="text-xl text-rose-500 font-bold text-center mb-2">
        Summary
      </h2>
      <ul className="flex-1">{summaryList}</ul>
      <div className="flex justify-center item-center">
        <button
          className="rounded-full bg-rose-500 px-8 py-1 hover:bg-rose-600 active:scale-90 ease-in-out duration-200"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Info;
