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

function ColumnPicker() {
  const [selectedColumns, setSelectedColumns] = useState([]);

  const columns = [
    { key: "happiness_score", title: "Happiness Score" },
    { key: "freedom", title: "Freedom" },
    { key: "gdp_per_capita", title: "GDP per Capita" },
  ];
  const handleSelectChange = (event) => {
    const options = [...event.target.selectedOptions];
    const values = options.map((o) => o.value);

    setSelectedColumns(values);
  };

  return (
    <div>
      <label>
        Pick columns you want to see:
        <br />
        <select
          name="selectedColumns"
          value={selectedColumns}
          multiple={true}
          onChange={handleSelectChange}
        >
          {columns.map((column, index) => {
            return (
              <option key={index} value={column.key}>
                {column.title}
              </option>
            );
          })}
        </select>
      </label>
      <p>Selected options: {selectedColumns.join("-")}</p>
    </div>
  );
}

function TestTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/table/Country-happiness_score/")
      .then((res) => res.json())
      .then(setData);
  }, []);

  const getTable = () => {};

  const layout = {
    title: "Preview The Data",
  };

  if (data === undefined) {
    console.log("API data is undefined, unable to build table");
    return "No table is available";
  }

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
  return (
    <div>
      {ColumnPicker()}
      {TestTable()}
    </div>
  );
}

export default App;
