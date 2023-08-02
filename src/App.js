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

function App() {
  return ListCountries();
}

// function TestTable() {
//   return (
//     <Plot
//       data={[
//         {
//           x: [1, 2, 3],
//           y: [2, 6, 3],
//           type: "scatter",
//           mode: "lines+markers",
//           marker: { color: "red" },
//         },
//         {
//           type: "bar",
//           x: [1, 2, 3],
//           y: [2, 6, 3],
//         },
//       ]}
//       layout={{
//         width: 320,
//         heigth: 240,
//         title: "A Fancy Plot",
//       }}
//     />
//   );
// }

export default App;
