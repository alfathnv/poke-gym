import Image from "next/image";
import React from "react";

const FacePopup = (props) => {
  const { winner = "" } = props;
  if (!winner) return;
  return (
    <div className="flex justify-center item-center absolute top-0 right-0 bottom-0 left-0  m-auto w-1/5 h-2/5 z-10">
      {winner == "Alpat" ? (
        <Image src={"/alpat.png"} width={500} height={500} alt="alpat" />
      ) : null}
      {winner == "Aping" ? (
        <Image src={"/aping.png"} width={500} height={500} alt="aping" />
      ) : null}
      <h2 className="text-center m-auto text-9xl text-green-500">WIN</h2>
    </div>
  );
};

export default FacePopup;
