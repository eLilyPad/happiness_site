import React, { useState, useEffect } from "react";
// import Plotly from "plotly.js";
// import createPlotlyComponent from "react-plotly.js/factory";
import Plot from "react-plotly.js";
import "./App.css";
import { Data } from "plotly.js";

// const Plot = createPlotlyComponent(Plotly);

// function ListCountries() {
//   const [data, setData] = useState([{}]);

//   useEffect(() => {
//     fetch("/countries")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//         console.log(data);
//       });
//   }, []);
//   return (
//     <div>
//       {typeof data.countries === "undefined" ? (
//         <p>Loading...</p>
//       ) : (
//         data.countries.map((list, i) => <p key={i}>{list}</p>)
//       )}
//     </div>
//   );
// }

function ColumnPicker() {
  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);

  const columns = [
    { key: "happiness_score", title: "Happiness Score" },
    { key: "freedom", title: "Freedom" },
    { key: "gdp_per_capita", title: "GDP per Capita" },
  ];
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("/table/Country-happiness_score/")
      .then((res) => res.json())
      .then(setTableData);
  }, []);

  const layout = {
    title: "Preview The Data",
  };

  if (tableData === undefined) {
    console.log("API data is undefined, unable to build table");
    return "No table is available";
  }

  const columns = Object.keys(tableData);
  const tableRows = Object.values(tableData);

  const data = [
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

  // TODO: Plot table does not work with type script
  // return <Plot data={data} layout={layout} />;
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
