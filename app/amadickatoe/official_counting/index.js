"use client";
import React, { useEffect, useState } from "react";

const OfficialCounting = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const official_date = new Date("2022-07-22");
    const interval = setInterval(() => {
      const current_date = new Date();
      const total = (current_date - official_date) / 1000;

      setDays(Math.floor(total / 3600 / 24));
      setHours(Math.floor((total / 3600) % 24));
      setMinutes(Math.floor((total / 60) % 60));
      setSeconds(Math.floor(total % 60));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const aping = (
    <img
      src={"/aping.png"}
      style={{ width: "130px", height: "130px" }}
      alt="aping"
    />
  );

  const alpat = (
    <img
      src={"/alpat.png"}
      style={{ width: "130px", height: "130px" }}
      alt="aping"
    />
  );

  return (
    <div className="flex rounded mb-16">
      <div className="flex flex-col justify-center item-center rounded outline outline-1 outline-white w-48 h-56 m-4 p-4">
        <p className="text-center m-auto font-bold text-7xl text-red-400">
          {days}
        </p>
        <h2 className="text-center m-auto font-bold text-xl">Days</h2>
      </div>
      <div className="flex flex-col justify-center item-center rounded outline outline-1 outline-white w-48 h-56 m-4 p-4">
        <p className="text-center m-auto font-bold text-7xl text-red-300">
          {hours}
        </p>
        <h2 className="text-center m-auto font-bold text-xl">Hours</h2>
      </div>
      <div className="flex flex-col justify-center item-center rounded outline outline-1 outline-white w-48 h-56 m-4 p-4">
        <p className="text-center m-auto font-bold text-7xl text-red-200">
          {minutes}
        </p>
        <h2 className="text-center m-auto font-bold text-xl ">Minutes</h2>
      </div>
      <div className="flex flex-col justify-center item-center w-48 h-56 m-4 p-4 rounded bg-red-100">
        {seconds == 20 ? (
          <div className="flex justify-center item-center">{aping}</div>
        ) : null}
        {seconds == 10 ? (
          <div className="flex justify-center item-center">{alpat}</div>
        ) : null}
        {seconds != 20 && seconds != 10 ? (
          <p className="text-center m-auto font-bold text-7xl text-red-400">
            {seconds}
          </p>
        ) : null}
        <h2 className="text-center m-auto font-bold text-xl text-red-400">
          Seconds
        </h2>
      </div>
    </div>
  );
};

export default OfficialCounting;
