import CounterContainer from "../../components/counter/CounterContainer";

const ItemDetail = ({ item }) => {
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <h2>{item.title}</h2>

          <div>
            {" "}
            <img src={item.img} alt={item.title} />
          </div>
          <div>{item.description}</div>
        </div>
        <CounterContainer />
      </div>
    </>
  );
};

export default ItemDetail;
