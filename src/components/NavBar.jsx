import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";

export const Navbar = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const navStyles = {
    color: "#fff",
    listStyle: "none",
    textDecoration: "none",
  };

  return (
    <nav>
      <Link to={"/"} style={navStyles}>
        <h2>Libreria</h2>
      </Link>
      <ul className="nav-list">
        <Link to={"/cart"} style={navStyles}>
          
          <li>
            
            Carrito: <span className="cart-count"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAN9JREFUSEvNlMsRAiEQRN9moploJnrVINQg9LpmoploJrptQRX7g1lWLOcK9KPnV1E4qsL6/BTwcm6ewBU4fcNd6MADvO4auM+FDKVoA9ROXJBZMQRYAA+nOtvFWJHlQE5yQ3Vc6vEYIHSRA0kCJHpr6rDKUW/eHH0XxubAFzuHofTIRXTQctOkGdr6X6Um+eDsTnEhcUE+kQLkuGhppgBTi91Kj8WB7qiT1FGW6A2mxYGELbXQ3uqtFivA8vvBO1bAGdgBF2DfUYqdJbvIa4WrvPup2JkZUNxB8Rr8L+ANp9smGcc+RUkAAAAASUVORK5CYII="/>{quantity}</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};
