import React from "react";
import Wrapper from "../Wrappers/Wrapper";

function Howtoplay() {
  return (
    <Wrapper>
      <div className="mt-16 flex w-full justify-center text-4xl font-extrabold tracking-tight text-white">
        BRANDON'S BLACKJACK RULES
      </div>
      <div className="mx-auto mt-16 flex w-full flex-col text-2xl  text-white">
        <div className="py-4">
          <li>
            Click the <i>deal</i> button to be dealt 2 random cards, and 1
            random face up card to the dealer.
          </li>
        </div>
        <div className="py-4">
          <li>
            Press the <i>hit</i> button if you'd like an additional card (if you
            go over 21 you bust!)
          </li>
        </div>
        <div className="py-4">
          <li>
            Press the <i>stand</i> button if you're satisfied with your current
            cards
          </li>
        </div>
        <div className="py-4">
          <li>
            Once you stand the dealer will then draw and stand on any 17 or
            17-21. If the dealer goes over 21 you win!
          </li>
        </div>
      </div>
      <div className="mt-32 text-white text-xl">
        <strong>DISCLAIMER:</strong> The content of this site is not intended to
        be a lure to gambling. Instead, the information I present is meant for
        nothing more than informational and entertainment purposes. If you or
        someone you know is struggling with a gambling addiction, consider
        calling 1-800-522-4700 (National Problem Gambling Helpline) to receive
        immediate help. I will also mention here that I will not be implementing
        a currency/fake money as I made this app for the sole purpose of
        demonstration/entertainment.
      </div>
    </Wrapper>
  );
}

export default Howtoplay;
