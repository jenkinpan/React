import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Pizza />
    </div>
  );
}

function Pizza() {
  return <h2>Pizza</h2>;
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before v18
// React.render(<App />, document.getElementById("root"));
