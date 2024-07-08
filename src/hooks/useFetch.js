import { useEffect, useState } from "react";
export const useFetch = (endpoint, valorInicial) => {
  const [data, setData] = useState(valorInicial);
  useEffect(() => {
    let getData = fetch(endpoint);
    getData.then((res) => res.json()).then((res) => setData(res));
  }, [endpoint]);
  return data;
};

//no retorna jsx.... por eso no es un comoponente
//porque permite usar cosas de react no es una funcion comun de js ( custom hook)

//useFetch("post");
