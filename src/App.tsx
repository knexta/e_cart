import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
};

export default App;
