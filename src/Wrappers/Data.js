import {
  GiCard10Clubs,
  GiCard10Diamonds,
  GiCard10Hearts,
  GiCard10Spades,
  GiCard2Clubs,
  GiCard2Diamonds,
  GiCard2Hearts,
  GiCard2Spades,
  GiCard3Clubs,
  GiCard3Diamonds,
  GiCard3Hearts,
  GiCard3Spades,
  GiCard4Clubs,
  GiCard4Diamonds,
  GiCard4Hearts,
  GiCard4Spades,
  GiCard5Clubs,
  GiCard5Diamonds,
  GiCard5Hearts,
  GiCard5Spades,
  GiCard6Clubs,
  GiCard6Diamonds,
  GiCard6Hearts,
  GiCard6Spades,
  GiCard7Clubs,
  GiCard7Diamonds,
  GiCard7Hearts,
  GiCard7Spades,
  GiCard8Clubs,
  GiCard8Diamonds,
  GiCard8Hearts,
  GiCard8Spades,
  GiCard9Clubs,
  GiCard9Diamonds,
  GiCard9Hearts,
  GiCard9Spades,
  GiCardAceClubs,
  GiCardAceDiamonds,
  GiCardAceHearts,
  GiCardAceSpades,
  GiCardKingClubs,
  GiCardKingDiamonds,
  GiCardKingHearts,
  GiCardKingSpades,
  GiCardQueenClubs,
  GiCardQueenDiamonds,
  GiCardQueenHearts,
  GiCardQueenSpades,
  GiCardJackClubs,
  GiCardJackDiamonds,
  GiCardJackHearts,
  GiCardJackSpades,
} from "react-icons/gi";

import Main from "../components/Main";

const Data = ({}) => {
  const playerCards = [
    {
      value: 10,
      name: "",
      image: GiCardKingClubs,
    },
  ];
  const dealerCards = [
    {
      value: 10,
      name: "",
      image: GiCardKingClubs,
    },
  ];

  const cards = [
    {
      value: 10,
      name: "10Clubs",
      image: <GiCard10Clubs />,
    },
    {
      value: 10,
      name: "10Diamonds",
      image: <GiCard10Diamonds />,
    },
    {
      value: 10,
      name: "10Hearts",
      image: <GiCard10Hearts />,
    },
    {
      value: 10,
      name: "10Spades",
      image: <GiCard10Spades />,
    },
    {
      value: 2,
      name: "2Clubs",
      image: <GiCard2Clubs />,
    },
    {
      value: 2,
      name: "2Diamonds",
      image: <GiCard2Diamonds />,
    },
    {
      value: 2,
      name: "2Hearts",
      image: <GiCard2Hearts />,
    },
    {
      value: 2,
      name: "2Spades",
      image: <GiCard2Spades />,
    },
    {
      value: 3,
      name: "3Clubs",
      image: <GiCard3Clubs />,
    },
    {
      value: 3,
      name: "3Diamonds",
      image: <GiCard3Diamonds />,
    },
    {
      value: 3,
      name: "3Hearts",
      image: <GiCard3Hearts />,
    },
    {
      value: 3,
      name: "3Spades",
      image: <GiCard3Spades />,
    },
    {
      value: 4,
      name: "4Clubs",
      image: <GiCard4Clubs />,
    },
    {
      value: 4,
      name: "4Diamonds",
      image: <GiCard4Diamonds />,
    },
    {
      value: 4,
      name: "4Hearts",
      image: <GiCard4Hearts />,
    },
    {
      value: 4,
      name: "4Spades",
      image: <GiCard4Spades />,
    },
    {
      value: 5,
      name: "5Clubs",
      image: <GiCard5Clubs />,
    },
    {
      value: 5,
      name: "5Diamonds",
      image: <GiCard5Diamonds />,
    },
    {
      value: 5,
      name: "5Hearts",
      image: <GiCard5Hearts />,
    },
    {
      value: 5,
      name: "5Spades",
      image: <GiCard5Spades />,
    },
    {
      value: 6,
      name: "6Clubs",
      image: <GiCard6Clubs />,
    },
    {
      value: 6,
      name: "6Diamonds",
      image: <GiCard6Diamonds />,
    },
    {
      value: 6,
      name: "6Hearts",
      image: <GiCard6Hearts />,
    },
    {
      value: 6,
      name: "6Spades",
      image: <GiCard6Spades />,
    },
    {
      value: 7,
      name: "7Clubs",
      image: <GiCard7Clubs />,
    },
    {
      value: 7,
      name: "7Diamonds",
      image: <GiCard7Diamonds />,
    },
    {
      value: 7,
      name: "7Hearts",
      image: <GiCard7Hearts />,
    },
    {
      value: 7,
      name: "7Spades",
      image: <GiCard7Spades />,
    },
    {
      value: 8,
      name: "8Clubs",
      image: <GiCard8Clubs />,
    },
    {
      value: 8,
      name: "8Diamonds",
      image: <GiCard8Diamonds />,
    },
    {
      value: 8,
      name: "8Hearts",
      image: <GiCard8Hearts />,
    },
    {
      value: 8,
      name: "8Spades",
      image: <GiCard8Spades />,
    },
    {
      value: 9,
      name: "9Clubs",
      image: <GiCard9Clubs />,
    },
    {
      value: 9,
      name: "9Diamonds",
      image: <GiCard9Diamonds />,
    },
    {
      value: 9,
      name: "9Hearts",
      image: <GiCard9Hearts />,
    },
    {
      value: 9,
      name: "9Spades",
      image: <GiCard9Spades />,
    },
    {
      value: 11,
      name: "AceClubs",
      image: <GiCardAceClubs />,
    },
    {
      value: 11,
      name: "AceDiamonds",
      image: <GiCardAceDiamonds />,
    },
    {
      value: 11,
      name: "AceHearts",
      image: <GiCardAceHearts />,
    },
    {
      value: 11,
      name: "AceSpades",
      image: <GiCardAceSpades />,
    },
    {
      value: 10,
      name: "KingClubs",
      image: <GiCardKingClubs />,
    },
    {
      value: 10,
      name: "KingDiamonds",
      image: <GiCardKingDiamonds />,
    },
    {
      value: 10,
      name: "KingHearts",
      image: <GiCardKingHearts />,
    },
    {
      value: 10,
      name: "KingSpades",
      image: <GiCardKingSpades />,
    },
    {
      value: 10,
      name: "QueenClubs",
      image: <GiCardQueenClubs />,
    },
    {
      value: 10,
      name: "QueenDiamonds",
      image: <GiCardQueenDiamonds />,
    },
    {
      value: 10,
      name: "QueenHearts",
      image: <GiCardQueenHearts />,
    },
    {
      value: 10,
      name: "QueenSpades",
      image: <GiCardQueenSpades />,
    },
    {
      value: 10,
      name: "JackClubs",
      image: <GiCardJackClubs />,
    },
    {
      value: 10,
      name: "JackDiamonds",
      image: <GiCardJackDiamonds />,
    },
    {
      value: 10,
      name: "JackHearts",
      image: <GiCardJackHearts />,
    },
    {
      value: 10,
      name: "JackSpades",
      image: <GiCardJackSpades />,
    },
  ];

  return (
    <>
      <Main cards={cards} />
    </>
  );
};

export default Data;
