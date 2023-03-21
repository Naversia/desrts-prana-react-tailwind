import React from "react";
import { router } from "./Router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { RouterProvider } from "react-router";

function App() {
  return (
    <div>
      <Navbar />
      <div className="page">
       </div>
      <Footer />
    </div>
  );
}

export default App;
