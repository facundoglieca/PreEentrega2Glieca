export const ProductCard = ({ title, description, price }) => {
  //    const{ tittle, descrption, price}=props;

  return (
    <div style={{ border: "2px solid black" }}>
      <h2>{title}</h2>
      <h3>{description}</h3>
      <h3>{price}</h3>
    </div>
  );
};
