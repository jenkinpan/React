import "./App.css";

function App() {
  return (
    <main>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </main>
  );
}

function Logo() {
  return <h1>🌴Far Away✈️</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
    </div>
  );
}
function PackingList() {}
function Stats() {}

export default App;
