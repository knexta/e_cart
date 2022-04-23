import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Layout from "./components/Layout";
import Auth from "./pages/Auth";
// import Home from "./pages/Home";
import routes from "./Routes";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Routes>
        
      </Routes> */}
      <Routes>
        {/* <Layout> */}
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={routes["home"]} />
        {/* <Route path="/product/:id" element={} /> */}
        {/* </Layout> */}
      </Routes>
    </div>
  );
};

export default App;
