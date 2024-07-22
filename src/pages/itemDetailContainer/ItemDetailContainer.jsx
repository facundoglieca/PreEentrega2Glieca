import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { products } from "../../products.js";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    let product = products.find((product) => product.id === +id);
    if (product) {
      setItem(product);
    }
  }, [id]);

  //INFORMACION DEL PRODUCTO
  //CUANTAS UNIDADES

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
