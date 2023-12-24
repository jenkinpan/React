import PropTypes from "prop-types";
import "./App.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  const numOfPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numOfPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza
              key={pizza.name}
              name={pizza.name}
              photoName={pizza.photoName}
              price={pizza.price}
              ingredients={pizza.ingredients}
            />
          ))}
        </ul>
      ) : (
        <p>We are still working for our menu, please come back later :)</p>
      )}
    </main>
  );
};

Pizza.propTypes = {
  photoName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

function Pizza({ photoName, name, ingredients, price }) {
  return (
    <li className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  );
}

const Footer = () => {
  const hour = new Date().getHours();
  const open = 12;
  const closed = 22;
  const isOpen = hour >= open && hour <= closed;

  console.log(isOpen);

  // * If the hour is less than the open time or greater than the closed time, then we're closed
  // if (hour >= open && hour <= closed) alert("We're currently open!");
  // else alert("We're currently closed!");

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We&apos;re open in {open}:00 to {closed}:00. Come visit us or order
            online.
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We&apos;re happy to welcome you between {open}:00 and {closed}:00.
        </p>
      )}
    </footer>
  );
};

export default App;
