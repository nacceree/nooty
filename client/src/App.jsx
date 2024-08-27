import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './Pages/Auth/index.jsx';
import { NoteProvider } from "./context/Notes-contexts.jsx";
import './App.css'
import NoteList from "./Pages/Dashboard/NoteList.jsx";
import AddingNote from "./Pages/Dashboard/AddingNote.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import HomePage from "./Pages/Dashboard/Home.jsx";
import CustomNavbar from "./Pages/Dashboard/Navbar.jsx";
import SharedWithMe from "./Pages/Dashboard/SharedWithMe.jsx";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <CustomNavbar />
        <NoteProvider>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<ProtectedRoute><AddingNote /></ProtectedRoute>} />
            <Route path="/notes" element={<ProtectedRoute><NoteList /></ProtectedRoute>} />
            <Route path="/shared" element={<ProtectedRoute><SharedWithMe /></ProtectedRoute>} />
          </Routes>
        </NoteProvider>
      </div>
    </Router>
  );
}

export default App;