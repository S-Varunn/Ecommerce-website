import React from "react";
import Navbar from "./components/Navbar/navbar";
import Body from "./components/body";
import Footer from "./components/footer";
import "./App.css";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Body />
      <Footer />
    </React.Fragment>
  );
}
export default App;
