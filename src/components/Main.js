import React from "react";
import Wrapper from "./Wrapper";
import BoardRules from "../images/blackjack_rules";

function Main({cards, playerCards, dealerCards}) {

    console.log(cards[0].value)
    
  return (
    <Wrapper>
      <div className="flooring flex h-full w-full bg-black items-center justify-center">
        <div className="flex w-[608px] justify-center items-center overflow-hidden rounded-lg">
          <div className="flex w-full h-80 bg-[#2DA1FF] rounded-b-full rounded-t-lg shadow-md justify-center">             
              <div className="self-center text-center mx-auto w-5/6 mb-24 opacity-40">
                <img className="pointer-events-none" src={BoardRules} alt="Rules" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Main;
