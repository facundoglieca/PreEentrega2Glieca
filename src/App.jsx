import { Navbar } from "./components/Navbar/Navbar.jsx";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer.jsx";
import FetchData from "./components/fetchData/FetchData.jsx";
function App() {
  return (
    <div>
      <Navbar />
      <FetchData />
    </div>
  );
}

export default App;
