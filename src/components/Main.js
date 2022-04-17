import React, { useEffect, useState } from "react";
import Wrapper from "../Wrappers/Wrapper";
import BoardRules from "../images/blackjack_rules";
import Data from "../Wrappers/Data";

function Main({ cards }) {
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [thirdCard, setThirdCard] = useState(null);
  const [fourthCard, setFourthCard] = useState(null);
  const [fifthCard, setFifthCard] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [userSum, setUserSum] = useState(0);

  const deal = () => {
    if (gameOver) {
      setThirdCard(false);
      setFourthCard(false);
      setFifthCard(false);
    }
    setGameOver(false);
    randomFirstCard();
    randomSecondCard();
  };

  const randomFirstCard = () => {
    const randomValue = Math.floor(Math.random() * 52);
    const getRandomCard = cards[randomValue];
    setFirstCard(getRandomCard);
  };

  const randomSecondCard = () => {
    const randomValue = Math.floor(Math.random() * 52);
    const getRandomCard = cards[randomValue];
    setSecondCard(getRandomCard);
  };

  const hitCard = () => {
    const randomValue = Math.floor(Math.random() * 52);
    const getRandomCard = cards[randomValue];
    if (!thirdCard) {
      setThirdCard(getRandomCard);
    }
    if (thirdCard && !fourthCard) {
      setFourthCard(getRandomCard);
    }
    if (fourthCard) {
      setFifthCard(getRandomCard);
    }
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      setUserSum(firstCard.value + secondCard.value);
    }
    if (firstCard && secondCard && thirdCard) {
      setUserSum(userSum + thirdCard.value);
    }
    if (firstCard && secondCard && thirdCard && fourthCard) {
      setUserSum(userSum + fourthCard.value);
    }
  }, [firstCard, secondCard, thirdCard, fourthCard]);
  console.log(userSum);

  useEffect(() => {
    if (fifthCard) {
      setGameOver(true);
    }
    if (userSum === 21) {
      setGameOver(true);
    }
  }, [fifthCard]);

  useEffect(() => {
    setGameOver(true);
  }, []);

  return (
    <Wrapper>
      <div className="flooring flex h-full w-full flex-col items-center justify-center gap-10 bg-black">
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
              {firstCard && (
                <div className="flex min-w-[52px] items-center justify-center rounded-md border-y-4 border-white bg-white shadow-md">
                  <div className="-mx-3 flex h-[61.9px] w-[46.93px] items-center justify-center rounded-md border border-white bg-black">
                    <div>{firstCard?.image}</div>
                  </div>
                </div>
              )}
              {secondCard && (
                <div className="flex min-w-[52px] items-center justify-center rounded-md border-y-4 border-white bg-white shadow-md">
                  <div className="-mx-3 flex h-[61.9px] w-[46.93px] items-center justify-center rounded-md border border-white bg-black">
                    <div>{secondCard?.image}</div>
                  </div>
                </div>
              )}

              {thirdCard && (
                <div className="flex min-w-[52px] items-center justify-center rounded-md border-y-4 border-white bg-white shadow-md">
                  <div className="-mx-3 flex h-[61.9px] w-[46.93px] items-center justify-center rounded-md border border-white bg-black">
                    <div>{thirdCard.image}</div>
                  </div>
                </div>
              )}

              {fourthCard && (
                <div className="flex min-w-[52px] items-center justify-center rounded-md border-y-4 border-white bg-white shadow-md">
                  <div className="-mx-3 flex h-[61.9px] w-[46.93px] items-center justify-center rounded-md border border-white bg-black">
                    <div>{fourthCard.image}</div>
                  </div>
                </div>
              )}

              {fifthCard && (
                <div className="flex min-w-[52px] items-center justify-center rounded-md border-y-4 border-white bg-white shadow-md">
                  <div className="-mx-3 flex h-[61.9px] w-[46.93px] items-center justify-center rounded-md border border-white bg-black">
                    <div>{fifthCard.image}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex h-8 w-8 select-none items-center justify-center rounded-md bg-black text-white">
          {userSum}
        </div>
        <div className="flex gap-4">
          {gameOver && (
            <button
              onClick={deal}
              className="w-28 rounded-lg bg-white bg-opacity-10 py-4 px-5 text-lg text-white transition hover:bg-opacity-[15%] active:bg-opacity-20"
            >
              DEAL
            </button>
          )}

          {!gameOver && (
            <button
              onClick={hitCard}
              className="w-28 rounded-lg bg-white bg-opacity-10 py-4 px-5 text-lg text-white transition hover:bg-opacity-[15%] active:bg-opacity-20"
            >
              HIT
            </button>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default Main;
