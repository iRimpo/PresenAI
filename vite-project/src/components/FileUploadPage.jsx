import React, { useState } from 'react';
import './FileUploadPage.css';
import { Link } from 'react-router-dom';

function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    // Handle the selected file here
  };

  const handleSubmit = () => {
    // Handle the submission of the selected file here
    // Redirect to the new page
  };

  return (
    <div className="file-upload-container">
      <label htmlFor="fileInput" className="file-upload-label">
        <i className="fas fa-cloud-upload-alt"></i>
        <span>Drag & Drop or Click to Upload</span>
      </label>
      <input
        type="file"
        id="fileInput"
        className="file-upload-input"
        onChange={handleFileChange}
      />

      {selectedFile && (
        <div className="selected-file">
          <p>Selected File:</p>
          <p>{selectedFile.name}</p>
        </div>
      )}

      <button className="submit-button" onClick={handleSubmit}>
        <Link to="/new-page" className="submit-button">
          Submit
        </Link>
      </button>
    </div>
  );
}

export default FileUploadPage;
