import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Howtoplay from "./components/Howtoplay";
import Main from "./components/Main";
import Nav from "./components/Nav";
import ScrollToTop from "./ScrollToTop";
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

function App() {
  const cards = [
    {
      value: 10,
      name: "",
      image: GiCardKingClubs,
    },
  ];
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
  return (
    <div className="flooring">
      <BrowserRouter>
        <Nav />
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Main
              cards={cards}
              playerCards={playerCards}
              dealerCards={dealerCards}
            />
          </Route>
          <Route exact path="/howtoplay" component={Howtoplay} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
