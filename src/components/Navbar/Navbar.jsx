import "./Navbar.css";
import { CarWidget } from "../cartWidget/CarWidget";
import { Outlet } from "react-router-dom";
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
            <li>Todo</li>
            <li>Puertas</li>
            <li>Terminaciones</li>
          </ul>

          <CarWidget />
        </div>
      </>
      <Outlet />
    </div>
  );
};
