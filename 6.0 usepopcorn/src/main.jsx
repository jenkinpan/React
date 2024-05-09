import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

import StarRating from "./StarRating";

function Test() {
  const [rate, setRate] = useState(0);

  return (
    <div>
      <StarRating maxRating={10} size={36} onSetRate={setRate} />
      <p>{`This movie is rated ${rate} ${rate > 1 ? "stars" : "star"}.`}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StarRating
      maxRating={5}
      size={36}
      message={["bad", "ok", "good", "very good", "excellent"]}
      defaultRating={3}
    />

    <Test />
  </React.StrictMode>,
);
