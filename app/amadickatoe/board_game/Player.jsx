import React from "react";

const Player = (props) => {
  const { winner, player } = props;

  return (
    <div
      className={` flex flex-col justify-center item-center w-40 h-20 rounded overflow-hidden`}
    >
      {winner == "tie" ? (
        <div className="flex justify-center item-center w-full h-full bg-stone-200">
          <p className="m-auto font-bold text-black text-center p-2">
            TIE YOU
            <br />
            BIIIIIIIIIITJH !!!!!!
          </p>
        </div>
      ) : (
        <div
          className={`${
            winner ? "bg-green-500" : "bg-rose-500"
          } flex flex-col justify-center item-center w-full h-full`}
        >
          <div className="flex justify-center item-center flex-1 text-center">
            <h3 className="m-auto font-bold">
              {winner ? "YOU WIN !!!" : "Current Player"}
            </h3>
          </div>
          <div className="flex justify-center item-center flex-1 bg-white m-2 rounded-lg">
            <h2
              className={`${
                winner ? "text-green-500" : "text-rose-500"
              } m-auto font-bold text-xl`}
            >
              {winner ? winner : `${player.name}(${player.value})`}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Player;
