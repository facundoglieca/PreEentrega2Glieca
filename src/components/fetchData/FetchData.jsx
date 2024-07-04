import { useState, useEffect } from "react";

const FetchData = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const getProducts = fetch("https://fakestoreapi.com/products");

    getProducts.then((res) => res.json()).then((res) => setProductos(res));
  }, []);
  const deleteProduct = (id) => {
    fetch("https://fakestoreapi.com/products/${id}"),
      {
        method: "DELETE",
        header: {
          //informacion para el backend
          //autenticacion
          //tipos de dato a trasnferir
        },
        body: JSON.stringify(newProduct),
      };
  };

  return (
    <div>
      {productos.map((producto) => (
        <h1 key={producto.title}>{producto.title}</h1>
      ))}
    </div>
  );
};
export default FetchData;
