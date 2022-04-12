import "./App.css";
import "./butterfly.css";
import "./index.css";
import AddStudent from "./component/AddStudent";
import ViewStudent from "./component/ViewStudent";
import EditStudent from "./component/EditStudent";
import Dashboard from "./component/Dashboard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./component/Navbar";
import React from "react";

function App(props) {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/viewstudent" element={<ViewStudent />} />
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/editstudent/:id" element={<EditStudent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
