import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FileUploadPage from './components/FileUploadPage';
import NewPage from './components/NewPage';

function App() {
  return (
    <div>
      <h1>PresenAI</h1>
    <Router>
      <Routes>
        <Route path="/" element={<FileUploadPage />} />
        <Route path="/new-page" element={<NewPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
