import { ProductCard } from "../../components/productCard/ProductCard";
const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginTop: "20px",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {items.map((elemento) => {
        return (
          <ProductCard
            key={elemento.id}
            title={elemento.title}
            description={elemento.description}
            price={elemento.price}
            id={elemento.id}
            image={elemento.img}
          />
        );
      })}
    </div>
  );
};
export default ItemList;
