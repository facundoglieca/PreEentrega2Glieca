export const Counter = ({ restar, contador, sumar }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        justifyContent: "center",
      }}
    >
      <button onClick={restar}>Restar</button>
      <h2> {contador} </h2>
      <button onClick={sumar}>Sumar</button>
    </div>
  );
};
