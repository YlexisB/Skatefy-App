import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./Pages/Home";
import PrivateLessons from "./Pages/PrivateLessons";
import VideoCoaching from "./Pages/VideoCoaching";
import BeyondBeginner from "./Pages/BeyondBeginner";

const App = () => {
  return (
    // <HashRouter>
    //   <Routes>
    //     <Route></Route>
    //   </Routes>
    // </HashRouter>
    <>
      {/* <Home /> */}
      <PrivateLessons />
      <VideoCoaching />
      <BeyondBeginner />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
