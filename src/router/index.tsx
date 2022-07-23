import * as React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MyRouter = () => {
  const [mode, setMode] = useState("day");
  return (
    <Router>
      <Header setMode={setMode} />
      <Routes>
        <Route path="/">
          <Homepage mode={mode} />
        </Route>
      </Routes>
      <Footer mode={mode} />
    </Router>
  );
};
export default MyRouter;
