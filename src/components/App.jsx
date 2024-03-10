import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./NotFound";
import PokeDetails from './PokeDetails';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Layout} />
        <Route path="/pokemon/:id" Component={PokeDetails} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
  );
}
