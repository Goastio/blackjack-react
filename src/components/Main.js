import React, { useEffect, useState } from "react";
import Wrapper from "../Wrappers/Wrapper";
import BoardRules from "../images/blackjack_rules";
import dealerImage from "../images/businesswoman.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Main({ cards }) {
  const [playerHand, setPlayerHand] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerHand, setDealerHand] = useState([]);
  const [dealerScore, setDealerScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);

  // populate playerHand with random cards from cards array in data.js
  const playerRandomizer = () => {
    const random = Math.floor(Math.random() * cards.length);
    const randomCard = cards[random];

    setPlayerHand((oldArray) => {
      const Score = [...oldArray, randomCard]
        .map((ace) => ace.value)
        .reduce((a, b) => a + b, 0);
      // oldArray = oldArray.map((val) => {
      // if (val.name.startsWith("Ace") && Score > 21) {
      //   val.value = 1;
      // }
      // return val;
      // });
      const currentHand = [
        ...oldArray,
        {
          value: randomCard.value,
          image: randomCard.image,
          name: randomCard.name,
        },
      ].map((val) => {
        if (val.name.startsWith("Ace") && Score > 21) {
          val.value = 1;
        }
        return val;
      });

      const newScore = currentHand
        .map((ace) => ace.value)
        .reduce((a, b) => a + b, 0);
      // if (newScore == 21) {
      // showOneDealer();
      // }
      if (newScore >= 21) {
        setGameActive(false);
        // showOneDealer();
      }
      return currentHand;
    });
  };

  // function that starts game, sets 2 initial cards
  const playerInitialize = () => {
    setPlayerScore(0);
    setPlayerHand([]);
    setDealerScore(0);
    setDealerHand([]);
    setGameActive(true);
    playerRandomizer();
    playerRandomizer();
    showOneDealer();
  };

  // update score
  const updatePlayerScore = () => {
    // if (playerHand[1]) {
    //   setScore(playerHand[0]?.value + playerHand[1]?.value);
    // }
    // if (playerHand[2]) {
    //   setScore((oldScore) => oldScore + playerHand[2].value);
    // }
    // if (playerHand[3]) {
    //   setScore((oldScore) => oldScore + playerHand[3].value);
    // }
    // if (playerHand[4]) {
    //   setScore((oldScore) => oldScore + playerHand[4].value);
    // }
    // if (playerHand[5]) {
    //   setScore((oldScore) => oldScore + playerHand[5].value);
    // }

    setPlayerScore(
      playerHand.map((score) => score.value).reduce((a, b) => a + b, 0)
    ); //shorthand for above
  };

  const showOneDealer = () => {
    const random = Math.floor(Math.random() * cards.length);
    const randomCard = cards[random];

    setDealerHand((oldArray) => {
      const Score = [...oldArray, randomCard]
        .map((ace) => ace.value)
        .reduce((a, b) => a + b, 0);
      oldArray = oldArray.map((val) => {
        if (val.name.startsWith("Ace") && Score > 21) {
          val.value = 1;
        }
        return val;
      });

      const currentHand = [
        ...oldArray,
        {
          value: randomCard.value,
          image: randomCard.image,
          name: randomCard.name,
        },
      ];
      return currentHand;
    });
  };

  const dealerRandomizer = () => {
    const random = Math.floor(Math.random() * cards.length);
    const randomCard = cards[random];

    setDealerHand((oldArray) => {
      const Score = [...oldArray, randomCard]
        .map((ace) => ace.value)
        .reduce((a, b) => a + b, 0);

      const currentHand = [
        ...oldArray,
        {
          value: randomCard.value,
          image: randomCard.image,
          name: randomCard.name,
        },
      ].map((val) => {
        if (val.name.startsWith("Ace") && Score > 21) {
          val.value = 1;
        }
        return val;
      });
      const newScore = currentHand
        .map((ace) => ace.value)
        .reduce((a, b) => a + b, 0);
      if (newScore < 17) {
        dealerRandomizer();
      }

      return currentHand;
    });
  };

  const updateDealerScore = () => {
    setDealerScore(
      dealerHand.map((ace) => ace.value).reduce((a, b) => a + b, 0)
    );
  };

  const whoWins = () => {
    const dealerBust = "Dealer busted. You win!";
    const playerBust = "You bust. Dealer wins!";
    const push = "Dealer push.";
    const playerWin = "You win!";
    const dealerWin = "Dealer wins!";
    let result;

    if (dealerScore > 21) {
      return dealerBust;
    }
    if (playerScore > 21) {
      return playerBust;
    }
    if (
      playerScore === dealerScore &&
      gameActive === false &&
      playerScore > 11
    ) {
      return push;
    }
    if (
      playerScore > dealerScore &&
      playerScore <= 21 &&
      dealerScore >= 12 &&
      dealerScore <= 21
    ) {
      return playerWin;
    }
    if (playerScore === 21) {
      return playerWin;
    }
    if (
      dealerScore > playerScore &&
      dealerScore <= 21 &&
      playerScore >= 12 &&
      playerScore <= 21
    ) {
      return dealerWin;
    }
    return result;
  };

  const stand = () => {
    if (playerScore) {
      setGameActive(false);
      dealerRandomizer();
    }
  };

  // updating score every time playerHand changes
  useEffect(() => {
    updatePlayerScore();
    updateDealerScore();
  }, [playerHand, dealerHand]);

  return (
    <Wrapper>
      <div className="flooring flex h-full flex-col items-center justify-center gap-10 bg-black py-3 md:w-full">
        <div className="text-white">
          <img
            src={dealerImage}
            alt=""
            className="-mb-10 h-[100px] md:h-[150px] md:w-[150px]"
          />
        </div>
        <div className="mt-5 flex h-8 w-8 select-none items-center justify-center rounded-md bg-black text-white">
          {dealerScore}
        </div>
        <div className="flex h-4 w-full justify-center text-2xl text-white">
          {whoWins()}
        </div>

        <div className="flex h-60 w-[400px] items-center justify-center rounded-lg md:h-80 md:w-[608px] md:overflow-hidden">
          <div className="flex h-60 w-full justify-center rounded-b-full rounded-t-lg bg-[#2DA1FF] shadow-md md:h-80">
            <div className="absolute">
              <div className="mb-50 relative z-10 flex self-start text-7xl text-white">
                {dealerHand[0] && (
                  <div
                    data-aos="fade-left"
                    className="flex min-w-[52px] items-center justify-center rounded-md border-y-4 border-white bg-white shadow-md"
                  >
                    <div className="-mx-3 flex h-[61.9px] w-[46.93px] items-center justify-center rounded-md border border-white bg-black">
                      <div>{dealerHand[0].image}</div>
                    </div>
                  </div>
                )}
                {dealerHand[1] && (
                  <div
                    data-aos="fade-left"
                    className="flex min-w-[52px] items-center justify-center rounded-md border-y-4 border-white bg-white shadow-md"
                  >
                    <div className="-mx-3 flex h-[61.9px] w-[46.93px] items-center justify-center rounded-md border border-white bg-black">
                      <div>{dealerHand[1].image}</div>
                    </div>
                  </div>
                )}
                {dealerHand[2] && (
                  <div
                    data-aos="fade-left"
                    className="flex min-w-[52px] items-center justify-center rounded-md border-y-4 border-white bg-white shadow-md"
                  >
                    <div className="-mx-3 flex h-[61.9px] w-[46.93px] items-center justify-center rounded-md border border-white bg-black">
                      <div>{dealerHand[2].image}</div>
                    </div>
                  </div>
                )}
                {dealerHand[3] && (
                  <div
                    data-aos="fade-left"
                    className="flex min-w-[52px] items-center justify-center rounded-md border-y-4 border-white bg-white shadow-md"
                  >
                    <div className="-mx-3 flex h-[61.9px] w-[46.93px] items-center justify-center rounded-md border border-white bg-black">
                      <div>{dealerHand[3].image} </div>
                    </div>
                  </div>
                )}
                {dealerHand[4] && (
                  <div
                    data-aos="fade-left"
                    className="flex min-w-[52px] items-center justify-center rounded-md border-y-4 border-white bg-white shadow-md"
                  >
                    <div className="-mx-3 flex h-[61.9px] w-[46.93px] items-center justify-center rounded-md border border-white bg-black">
                      <div>{dealerHand[4].image}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="absolute left-0 right-0 mx-auto mb-24 w-5/6 self-center opacity-40">
              <img
                className="pointer-events-none mx-auto"
                src={BoardRules}
                alt="Rules"
              />
            </div>

            <div className="mb-5 flex self-end text-7xl text-white">
              {playerHand[0] && (
                <div
                  data-aos="fade-down-left"
                  className="flex min-w-[52px] items-center justify-center rounded-md border-y-4 border-white bg-white shadow-md"
                >
                  <div className="-mx-3 flex h-[61.9px] w-[46.93px] items-center justify-center rounded-md border border-white bg-black">
                    <div>{playerHand[0].image}</div>
                  </div>
                </div>
              )}
              {playerHand[1] && (
                <div
                  data-aos="fade-down-left"
                  className="flex min-w-[52px] items-center justify-center rounded-md border-y-4 border-white bg-white shadow-md"
                >
                  <div className="-mx-3 flex h-[61.9px] w-[46.93px] items-center justify-center rounded-md border border-white bg-black">
                    <div>{playerHand[1].image}</div>
                  </div>
                </div>
              )}
              {playerHand[2] && (
                <div
                  data-aos="fade-down"
                  className="flex min-w-[52px] items-center justify-center rounded-md border-y-4 border-white bg-white shadow-md"
                >
                  <div className="-mx-3 flex h-[61.9px] w-[46.93px] items-center justify-center rounded-md border border-white bg-black">
                    <div>{playerHand[2].image}</div>
                  </div>
                </div>
              )}
              {playerHand[3] && (
                <div
                  data-aos="fade-down-right"
                  className="flex min-w-[52px] items-center justify-center rounded-md border-y-4 border-white bg-white shadow-md"
                >
                  <div className="-mx-3 flex h-[61.9px] w-[46.93px] items-center justify-center rounded-md border border-white bg-black">
                    <div>{playerHand[3].image}</div>
                  </div>
                </div>
              )}
              {playerHand[4] && (
                <div
                  data-aos="fade-down-right"
                  className="flex min-w-[52px] items-center justify-center rounded-md border-y-4 border-white bg-white shadow-md"
                >
                  <div className="-mx-3 flex h-[61.9px] w-[46.93px] items-center justify-center rounded-md border border-white bg-black">
                    <div>{playerHand[4].image}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex h-8 w-8 select-none items-center justify-center rounded-md bg-black text-white">
          {playerScore}
        </div>
        <div className="flex gap-4">
          {!gameActive ? (
            <button
              onClick={playerInitialize}
              className="w-28 rounded-lg bg-white bg-opacity-10 py-4 px-5 text-lg text-white transition hover:bg-opacity-[15%] active:bg-opacity-20"
            >
              DEAL
            </button>
          ) : (
            <>
              <button
                onClick={playerRandomizer}
                className="w-28 rounded-lg bg-white bg-opacity-10 py-4 px-5 text-lg text-white transition hover:bg-opacity-[15%] active:bg-opacity-20"
              >
                {gameActive && "Hit"}
              </button>

              <button
                onClick={stand}
                className="w-28 rounded-lg bg-white bg-opacity-10 py-4 px-5 text-lg text-white transition hover:bg-opacity-[15%] active:bg-opacity-20"
              >
                {gameActive && "Stand"}
              </button>
            </>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default Main;
