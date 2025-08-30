import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from "./pages/Home";
import BookDetail from "./components/BookDetail";
import './App.css';


function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/book/:id" element={<BookDetail/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;