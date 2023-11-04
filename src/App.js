import "./App.css";

import Appbar from "./components/Appbar";
import Filters from "./components/Filters";
import Items from "./components/Items";

function App() {
  return (
    <div>
      <Appbar />
      <Filters />
      <Items />
    </div>
  );
}

export default App;
