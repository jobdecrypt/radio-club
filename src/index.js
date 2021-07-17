import React from "react";
import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import Navs from "./Navs";
import "bootstrap/dist/css/bootstrap.min.css";
// import App from "./App";
// import FooterPage from "./FooterPage";
// import reportWebVitals from "./reportWebVitals";

// import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <HashRouter>
      <Navs />
    </HashRouter>
  );
}
ReactDOM.render(<Home />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
