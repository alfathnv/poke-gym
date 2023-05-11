"use client";
import React, { useEffect, useState } from "react";
import Board from "./Board";
import Info from "./Info";
import game_data from "./game_data.yaml";
import Player from "./Player";
import { db } from "@/app/firebase";
import { onValue, ref, set, update } from "firebase/database";
import FacePopup from "./FacePopup";

const BoardGame = () => {
  const [dataList, setDataList] = useState([]);
  const [player, setPlayer] = useState(game_data.player[0]);
  const [moveCount, setMoveCount] = useState(0);
  const [isPlay, setIsPlay] = useState(true);
  const [winner, setWinner] = useState("");
  const [winnerRules, setWinnerRules] = useState([]);
  const [summaries, setSummaries] = useState([]);
  const size = 4;

  useEffect(() => {
    viewFirebaseData();
    return () => {
      setDataList([]);
    };
  }, []);

  function viewFirebaseData() {
    const boardRef = ref(db, "board/");
    const movesRef = ref(db, "moves/");
    const playerRef = ref(db, "player/");
    const isPlayRef = ref(db, "isPlay/");
    const winnerRef = ref(db, "winner/");
    const winnerRulesRef = ref(db, "winner_rules/");
    onValue(boardRef, (snapshot) => {
      const data = snapshot.val();
      return setDataList(data);
    });
    onValue(movesRef, (snapshot) => {
      const data = snapshot.val();
      return setMoveCount(data);
    });
    onValue(playerRef, (snapshot) => {
      const data = snapshot.val();
      return setPlayer(data);
    });

    onValue(isPlayRef, (snapshot) => {
      const data = snapshot.val();
      return setIsPlay(data);
    });
    onValue(winnerRef, (snapshot) => {
      const data = snapshot.val();
      return setWinner(data);
    });
    onValue(winnerRulesRef, (snapshot) => {
      const data = snapshot.val();
      return setWinnerRules(data);
    });
  }

  function updateFirebaseDataById(id, value) {
    set(ref(db, "board/" + id), {
      id: id,
      value: value,
    });

    const updates = {};
    updates["/moves/"] = moveCount + 1;

    if (player.value == "X") {
      updates["/player/"] = game_data.player[1];
    } else {
      updates["/player/"] = game_data.player[0];
    }

    update(ref(db), updates);
  }

  function updateFirebaseData(data) {
    set(ref(db, "/"), {
      board: data,
      moves: 0,
      isPlay: true,
      winner: "",
      player: game_data.player[0],
      winner_rules: "",
    });
  }

  const rules = game_data.rules;

  const checkWin = (player) => {
    if (moveCount < 4) return;
    if (moveCount == size * size - 1) {
      setSummaries([...summaries, `${moveCount + 1}: GAME TIE`]);

      const updates = {};
      updates["/winner/"] = "tie";
      update(ref(db), updates);
    }
    let dataListID = [];
    dataList.map((elem) => {
      if (elem.value) {
        return dataListID.push(elem.id);
      }
    });

    // onValue(
    //   starCountRef,
    //   (snapshot) => {
    //     const data = snapshot.val();
    //     console.log(data);
    //     data.map((elem) => {
    //       if (elem.value) {
    //         dataListID.push(elem.id);
    //       }
    //     });
    //   },
    //   {
    //     onlyOnce: true,
    //   }
    // );

    const dataListValue = dataList.map((elem) => elem.value);
    const first_rule = rules.map((rule) =>
      rule.every((elem) => dataListID.includes(elem))
    );

    if (first_rule) {
      let second_rule = [];
      first_rule.map((rule, index) => {
        let checkValue = [];
        if (rule) {
          rules[index].map((elem) => {
            checkValue.push(dataListValue[elem]);
          });

          if (checkValue.every((v) => v === checkValue[0])) {
            second_rule = rules[index];
          }
        }
      });

      if (second_rule.length) {
        // console.log(`${player} WIN !!!`);
        setSummaries([...summaries, `${moveCount + 1}: ${player} WIN`]);
        const updates = {};
        updates["/winner/"] = player;
        updates["/isPlay/"] = false;
        updates["/winner_rules/"] = second_rule;
        update(ref(db), updates);
      }
    }
  };

  const handleChange = (id) => {
    if (!isPlay) return;
    if (winner != "") return;
    const changes = dataList;
    if (changes[id].value) return;
    changes[id].value = player.value;

    updateFirebaseDataById(id, player.value);
    viewFirebaseData();

    setSummaries([
      ...summaries,
      `${moveCount + 1}: ${player.name} put ${player.value} in box ${id + 1}`,
    ]);
    checkWin(player.name);
  };

  const handleReset = () => {
    setSummaries([]);
    const remove = dataList;
    remove.map((data) => {
      data.value = "";
    });
    updateFirebaseData(remove);
  };

  return (
    <div className="flex">
      <div className="mr-8">
        <Player winner={winner} player={player} />
      </div>
      <div className="mr-8">
        <h1 className="text-2xl text-center font-bold text-rose-500">
          Ama Dicka Toe
        </h1>
        <h2 className="text-xl text-center mb-8">Tic Tac Toe Games</h2>
        <Board
          size={size}
          dataList={dataList}
          winnerRules={winnerRules}
          handleChange={handleChange}
        />
      </div>
      <div>
        <Info summaries={summaries} handleReset={handleReset} />
      </div>
      <FacePopup winner={winner} />
    </div>
  );
};

export default BoardGame;
