import React, { useEffect, useState } from "react";
import Wrapper from "../Wrappers/Wrapper";
import BoardRules from "../images/blackjack_rules";

function Main({ cards }) {
  const [playerHand, setPlayerHand] = useState([]);
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [win, setWin] = useState(false);

  // populate playerHand with random cards from cards array in data.js
  const randomizer = () => {
    setWin(false);
    const random = Math.floor(Math.random() * cards.length);
    const randomCard = cards[random];
    setPlayerHand((oldArray) => [
      ...oldArray,
      { value: randomCard.value, image: randomCard.image },
    ]);
    if (playerHand[4]) {
      setGameActive(false);
      setScore(0);
      setPlayerHand([]);
    }
  };

  // function that starts game, sets 2 initial cards
  const initialize = () => {
    setGameActive(true);
    randomizer();
    randomizer();
  };

  // update score
  const updateScore = () => {
    if (playerHand[1]) {
      setScore(playerHand[0]?.value + playerHand[1]?.value);
    }
    if (playerHand[2]) {
      setScore((oldScore) => oldScore + playerHand[2].value);
    }
    if (playerHand[3]) {
      setScore((oldScore) => oldScore + playerHand[3].value);
    }
    if (playerHand[4]) {
      setScore((oldScore) => oldScore + playerHand[4].value);
    }
    if (playerHand[5]) {
      setScore((oldScore) => oldScore + playerHand[5].value);
    }
  };

  // updating score every time playerHand changes
  useEffect(() => {
    updateScore();
  }, [playerHand]);

  // questionable if belongs like this
  // searches playerHand for an ace, and subtracts 10 from score, then updates score
  if (score > 21) {
    let object = playerHand.find((o) => o.value === 11);
    if (object) {
      setScore((oldScore) => oldScore - 10);
    }
  }

  return (
    <Wrapper>
      <div className="flooring flex h-full w-full flex-col items-center justify-center gap-10 bg-black">
        {win && (
          <div className="text-8xl font-extrabold tracking-tight text-white">
            YOU WIN
          </div>
        )}
        <div className="flex h-80 w-[608px] items-center justify-center overflow-hidden rounded-lg">
          <div className="flex h-80 w-full justify-center rounded-b-full rounded-t-lg bg-[#2DA1FF] shadow-md">
            <div className="absolute left-0 right-0 mx-auto mb-24 w-5/6 self-center opacity-40">
              <img
                className="pointer-events-none mx-auto"
                src={BoardRules}
                alt="Rules"
              />
            </div>

            <div className="mb-5 flex self-end text-7xl text-white">
              {playerHand[0] && (
                <div className="flex min-w-[52px] items-center justify-center rounded-md border-y-4 border-white bg-white shadow-md">
                  <div className="-mx-3 flex h-[61.9px] w-[46.93px] items-center justify-center rounded-md border border-white bg-black">
                    <div>{playerHand[0].image}</div>
                  </div>
                </div>
              )}
              {playerHand[1] && (
                <div className="flex min-w-[52px] items-center justify-center rounded-md border-y-4 border-white bg-white shadow-md">
                  <div className="-mx-3 flex h-[61.9px] w-[46.93px] items-center justify-center rounded-md border border-white bg-black">
                    <div>{playerHand[1].image}</div>
                  </div>
                </div>
              )}
              {playerHand[2] && (
                <div className="flex min-w-[52px] items-center justify-center rounded-md border-y-4 border-white bg-white shadow-md">
                  <div className="-mx-3 flex h-[61.9px] w-[46.93px] items-center justify-center rounded-md border border-white bg-black">
                    <div>{playerHand[2].image}</div>
                  </div>
                </div>
              )}
              {playerHand[3] && (
                <div className="flex min-w-[52px] items-center justify-center rounded-md border-y-4 border-white bg-white shadow-md">
                  <div className="-mx-3 flex h-[61.9px] w-[46.93px] items-center justify-center rounded-md border border-white bg-black">
                    <div>{playerHand[3].image}</div>
                  </div>
                </div>
              )}
              {playerHand[4] && (
                <div className="flex min-w-[52px] items-center justify-center rounded-md border-y-4 border-white bg-white shadow-md">
                  <div className="-mx-3 flex h-[61.9px] w-[46.93px] items-center justify-center rounded-md border border-white bg-black">
                    <div>{playerHand[4].image}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex h-8 w-8 select-none items-center justify-center rounded-md bg-black text-white">
          {score}
        </div>
        <div className="flex gap-4">
          {!gameActive ? (
            <button
              onClick={initialize}
              className="w-28 rounded-lg bg-white bg-opacity-10 py-4 px-5 text-lg text-white transition hover:bg-opacity-[15%] active:bg-opacity-20"
            >
              DEAL
            </button>
          ) : (
            <button
              onClick={randomizer}
              className="w-28 rounded-lg bg-white bg-opacity-10 py-4 px-5 text-lg text-white transition hover:bg-opacity-[15%] active:bg-opacity-20"
            >
              {playerHand[4] ? "Reset" : "Hit"}
            </button>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default Main;
