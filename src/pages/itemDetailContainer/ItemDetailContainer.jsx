import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { products } from "../../products.js";
const ItemDetailContainer = () => {
  let id = 2;
  const [item, setItem] = useState({});

  useEffect(() => {
    let product = products.find((product) => product.id === id);
    if (product) {
      setItem(product);
    }
  }, [id]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
