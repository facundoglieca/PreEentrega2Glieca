import { ProductCard } from "../../components/productCard/ProductCard";
export const Home = () => {
  const productos = [
    {
      title: "Linea GEMA",
      price: 150.99,
      description:
        "Oblak presenta la tendencia del diseño contemporáneo alistonado en su nueva línea de puertas de interior GEMA, que se destaca por su sólida estructura, sus modelos con listones angostos o anchos y sus alturas de 2,00 m; 2,20 m y 2,40 m.",
    },
    {
      title: "Linea TEKNA ACERO",
      price: 249.99,
      description:
        "La familia de las puertas pivotantes de grandes dimensiones TEKNA incorpora diseños en acero cincado prepintado libres de mantenimiento, con terminaciones en color Cedro, Roble, y la novedosa terminación con textura al tacto Negro Embozado..",
    },
  ];

  return (
    <div>
      <ProductCard
        title={productos[0].title}
        description={productos[0].description}
        price={productos[0].price}
      />
      <ProductCard
        title={productos[1].title}
        description={productos[1].description}
        price={productos[1].price}
      />
    </div>
  );
};
