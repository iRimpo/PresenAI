import React, { useState } from 'react';
import './FileUploadPage.css';
import { Link } from 'react-router-dom';
import useMutation from "../hooks/useMutation";


const URL ="/image"

function FileUploadPage() {
  const {
    mutate: uploadImage,
    isLoading: uploading,
    error: uploadError,
  } = useMutation({ url: URL });
  const [selectedFile, setSelectedFile] = useState(null);

  const {
    data: imageUrls = [],
    isLoading: imagesLoading,
    error: fetchError,
  } = useQuery(URL, refetch);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    console.log(file);
    setSelectedFile(file);
    // Handle the selected file here

    if (!validFileTypes.find(type => type === file.type)) {
      setError("File must be an MP3 format");
      return;
    }

    const form = new FormData();
    form.append('image', file);

    await uploadImage(form);
    setTimeout(() => {
      setRefetch(s => s + 1);
    }, 1000);
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
