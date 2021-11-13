import { useState } from "react";

const samplePortfolioList = [
  {
    name: "My sample Portfolio",
    assets: ["amzn", "goog", "atvi"],
  },
  {
    name: "Another Portfolio",
    assets: ["amzn", "goog", "atvi"],
  },
  {
    name: "Portfolio #3",
    assets: ["amzn", "goog", "atvi"],
  },
];

const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <div className="portfolio__wrapper">
        {samplePortfolioList.map((portfolio, index) => (
          <div className="portfolio">
            <h3 className="portfolio__title">{portfolio.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
