import { Navbar } from "./components/Navbar/Navbar.jsx";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer.jsx";
import FetchData from "./components/fetchData/FetchData.jsx";
import ItemDetailContainer from "./pages/itemDetailContainer/ItemDetailContainer.jsx";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import Posts from "./pages/Posts.jsx";

function App() {
  return (
    <>
      {}
      <h1>USUARIOS</h1>
      <Users />
      <h1>TODOS</h1>
      <Todos />
      <h1>POSTS</h1>
      <Posts />
    </>
  );
}

export default App;
