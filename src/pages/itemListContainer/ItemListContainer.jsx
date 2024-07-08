import ItemList from "./itemList.jsx";
import { products } from "../../products.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  // una peticion que me traiga los productos del backend
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});
  const { name } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      let arrayFiltered = products.filter(
        (product) => product.category === name
      );
      if (x) {
        resolve(name ? arrayFiltered : products);
      } else {
        reject({ message: "error", codigo: "404" });
      }
    });
    //manejar la promesa
    getProducts
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        setError(error);
      });
  }, [name]);

  return <ItemList items={items} />;
};
export default ItemListContainer;
