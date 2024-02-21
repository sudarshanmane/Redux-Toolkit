import logo from "./logo.svg";
import "./App.css";
import CustomerComponent from "./Components/customer/CustomerComponent";

function App() {
  return (
    <div className="App">
      <header>
        <h1>react-redux</h1>
      </header>
      <main>
        -------------------
        <CustomerComponent></CustomerComponent>
        -------------------
      </main>
    </div>
  );
}

export default App;
