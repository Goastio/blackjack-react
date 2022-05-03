import { BrowserRouter, Route, Switch } from "react-router-dom";
import Howtoplay from "./components/Howtoplay";
import Main from "./components/Main";
import Nav from "./components/Nav";
import ScrollToTop from "./ScrollToTop";
import Data from "./Wrappers/Data";


function App() {

  return (
    <div className="flooring">
      <BrowserRouter basename="/blackjack">
        <Nav />
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Data />
          </Route>
          <Route exact path="/howtoplay" component={Howtoplay} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
