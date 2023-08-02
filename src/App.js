import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import "./App.css";

function ListCountries() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/countries")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      {typeof data.countries === "undefined" ? (
        <p>Loading...</p>
      ) : (
        data.countries.map((list, i) => <p key={i}>{list}</p>)
      )}
    </div>
  );
}

function TestTable(title, headers, rows) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/happiness_scores")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  const layout = {
    title: "Sample Table",
  };

  const columns = Object.keys(data);
  const tableRows = Object.values(data);

  const tableData = [
    {
      type: "table",
      header: {
        values: columns,
        align: "center",
        line: { width: 1, color: "black" },
        fill: { color: "grey" },
        font: { family: "Arial", size: 12, color: "white" },
      },
      cells: {
        values: tableRows,
        align: "center",
        line: { color: "black", width: 1 },
        font: { family: "Arial", size: 11, color: ["black"] },
      },
    },
  ];

  return <Plot data={tableData} layout={layout} />;
}

function App() {
  return TestTable();
}

export default App;
