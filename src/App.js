import React, { useState, useEffect } from "react";
import { apiKey } from "../src/config/keys";
function App() {
  const [stockList, editStockList] = useState(["AAPL", "MSFT", "GOOG"]);
  const [stockData, editStockData] = useState([]);

  useEffect(() => {
    Promise.all(
      stockList.map((stock) =>
        fetch(
          `https://financialmodelingprep.com/api/v3/quote/${stock}?apikey=${apiKey}`
        )
      )
    ).then((results) =>
      Promise.all(results.map((res) => res.json())).then((stocks) => {
        editStockData(stocks);
      })
    );
  }, [stockList]);

  return (
    <div className="App">
      <h1>Stock App</h1>
    </div>
  );
}

export default App;
