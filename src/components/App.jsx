import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./NotFound";
import PokeDetails from "./pokePages/PokeDetails";
import { Provider } from "react-redux";
import { store } from "../store/store";

export default function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" Component={Layout} />
          <Route path="/pokemon/:id" Component={PokeDetails} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </Provider>
    </Router>
  );
}
