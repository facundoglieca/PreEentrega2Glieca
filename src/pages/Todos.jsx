import { useFetch } from "../hooks/useFetch";
import { usePaginate } from "../hooks/usePaginate";

const todos = () => {
  const todos = useFetch("https://jsonplaceholder.typicode.com/todos", []);
  const { currentData, nextPage, prevPage, totalPages, currentPage } =
    usePaginate(todos, 10);

  return (
    <div>
      <h1>Aca van a ir los todos</h1>

      {currentData.map((todo) => {
        return <h2 key={todo.id}>{todo.title}</h2>;
      })}
      <button onClick={prevPage} disabled={currentPage === 1}>
        anterior
      </button>
      <button onClick={nextPage} disabled={currentPage === totalPages}>
        siguiente
      </button>
    </div>
  );
};

export default todos;
