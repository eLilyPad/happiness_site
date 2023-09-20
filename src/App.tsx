import { Route, Routes } from "react-router-dom";
import React from "react";

import "./App.scss";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import Overview from "./Pages/Overview";
import Charts from "./Pages/Charts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
    // <div>
    //   {ColumnPicker()}
    //   {TestTable()}
    // </div>
  );
}

export default App;
