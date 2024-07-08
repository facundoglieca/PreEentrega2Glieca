import "./Navbar.css";
import { CarWidget } from "../cartWidget/CarWidget";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <>
        <div className="navBarcontainer">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dx1uxwqlq/image/upload/v1719447003/terminaciones_bahia_logo_tvzalk.png"
              alt=""
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
              }}
            />
          </Link>

          <ul className="categories">
            <Link to="/">Todo</Link>
            <Link to="/category/LineaGema">Linea GEMA</Link>
            <Link to="/category/LineaTekna">Linea TEKNA</Link>
          </ul>

          <CarWidget />
        </div>
      </>
    </div>
  );
};
