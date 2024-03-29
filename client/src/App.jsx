import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
// import Header from "./components/Header";
import CreatePost from "./pages/CreatePost";
import FixedHeader from "./components/FixedHeader";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <FixedHeader />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/create-post" element={<CreatePost />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
