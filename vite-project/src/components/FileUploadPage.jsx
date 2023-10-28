import React from 'react';
import './FileUploadPage.css';

function FileUploadPage() {
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    // Handle the selected file here
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
    </div>
  );
}

export default FileUploadPage;