import { useState, useEffect } from "react";

const FetchData = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const getProducts = fetch("https://fakestoreapi.com/products");

    getProducts.then((res) => res.json()).then((res) => setProductos(res));
  }, []);
  const createNewProduct = () => {
    let newProduct = {
      id: 2,
      title: "Linea TEKNA",
      price: 245000,
      description: "Linea TEKNA",
      img: "https://res.cloudinary.com/dx1uxwqlq/image/upload/v1719447003/terminaciones_bahia_logo_tvzalk.png",
      rating: {
        rate: 4.1,
        count: 259,
      },
    };
  };
  const deleteProduct = (id) => {
    fetch("https://fakestoreapi.com/products/${id}"),
      {
        method: "DELETE",
        header: {
          //informacion para el backend
          //autenticacion
          //tipos de dato a transferir
        },
        body: JSON.stringify(newProduct),
      };
  };
  const updateProduct = (id) => {
    fetch("https://fakestoreapi.com/products/${id}"),
      {
        method: "patch",
        header: {
          //informacion para el backend
          //autenticacion
          //tipos de dato a transferir
        },
        body: JSON.stringify({ title: "nuevo title" }),
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
