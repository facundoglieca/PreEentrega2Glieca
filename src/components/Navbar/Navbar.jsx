import "./Navbar.css";
import { CarWidget } from "../cartWidget/CarWidget";

export const Navbar = ({ children }) => {
  console.log(children);
  return (
    <div>
      <>
        <div className="navBarcontainer">
          <img
            src="https://res.cloudinary.com/dx1uxwqlq/image/upload/v1719447003/terminaciones_bahia_logo_tvzalk.png"
            alt=""
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
            }}
          />
          <ul style={{ display: "flex", gap: "10px" }}>
            <li style={{ listStyle: "none" }}>Todo</li>
            <li style={{ listStyle: "none" }}>Puertas</li>
            <li style={{ listStyle: "none" }}>Terminaciones</li>
          </ul>

          <CarWidget />
        </div>
      </>
      <h2>aca</h2>
      {children}
    </div>
  );
};
