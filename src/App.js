import React, { useState, useEffect } from "react";
import { apiKey } from "../src/config/keys";
function App() {
  const [symbol, setSymbol] = useState("");
  const [errorState, setErrorState] = useState("");
  const [val, setVal] = useState(0);
  const [stockList, editStockList] = useState([]);
  const [pct, editPct] = useState([]);
  const limit = 100;

  const symbolLookup = () => {
    fetch(
      `https://financialmodelingprep.com/api/v3/quote/${symbol.toUpperCase()}?apikey=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data[0] && data[0].symbol) {
          editStockList(stockList.concat([symbol]));
          editPct(pct.concat([parseInt(val)]));
          setSymbol("");
          setVal(0);
        } else {
          setErrorState("Please enter a valid stock symbol");
        }
      });
  };

  const currentAllowance = pct.reduce((acc, value) => acc + value, 0);
  console.log(
    "Current Allowance: ",
    pct.reduce((acc, value) => acc + value, 0)
  );
  const invalidInput = () => !symbol || !val || val > limit - currentAllowance;

  return (
    <div className="App">
      <h1>Stock Portfolio Builder</h1>
      {stockList.length ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {stockList.map((stock, i) => (
            <li key={i}>
              {stock}: {pct[i]}
            </li>
          ))}
        </ul>
      ) : (
        <p>Portfolio is empty</p>
      )}
      <div>
        <h2>Current Maximum Allowance: {limit - currentAllowance}%</h2>
        <input
          type="text"
          placeholder="Enter Stock Symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          onFocus={() => setErrorState("")}
        />
        <input
          type="number"
          placeholder="Enter percentage amount"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          min={1}
          max={limit - currentAllowance}
        />
        <button disabled={invalidInput()} onClick={symbolLookup}>
          Submit
        </button>
        <p style={{ marginTop: 0, color: "red" }}>
          {errorState ? errorState : ""}
        </p>
      </div>
    </div>
  );
}

export default App;
