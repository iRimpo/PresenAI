import React, { useState } from 'react';

function FileUploadPage() {
  const changeHandler = (event) => {
    // Handle file input change here
    const file = event.target.files[0];
    // You can perform actions with the selected file here
  };

  const handleSubmission = () => {
    // Handle submission here
    // You can use the data collected from the file input in this function
  };

  return (
    <div>
      <input type="file" name="file" onChange={changeHandler} />
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  );
}

export default FileUploadPage;