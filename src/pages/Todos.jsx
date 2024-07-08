import { useFetch } from "../hooks/useFetch";

const todos = () => {
  const todos = useFetch("https://jsonplaceholder.typicode.com/todos", []);
  return (
    <div>
      <h1>Aca van a ir los todos</h1>

      {todos.map((todo) => {
        return <h2 key={todo.id}>{todo.title}</h2>;
      })}
    </div>
  );
};

export default todos;
