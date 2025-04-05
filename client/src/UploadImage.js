import React, { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import './UploadImage.css'; // Import the CSS file

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploadedUrl, setUploadedUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleUpload = () => {
    if (!file) {
      setError('Please select a file first');
      return;
    }

    const storage = getStorage();
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    setLoading(true);
    setError('');
    setProgress(0);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(prog.toFixed(0));
      },
      (error) => {
        setError('Upload failed');
        setLoading(false);
        console.error(error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setUploadedUrl(downloadURL);
        setLoading(false);
        console.log('Upload complete:', downloadURL);
      }
    );
  };

  return (
    <div className="upload-container">
      <h2>Upload an Image</h2>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} disabled={loading || !file}>
        {loading ? 'Uploading...' : 'Upload'}
      </button>

      {progress > 0 && (
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
      )}

      {error && <p className="error">{error}</p>}

      {uploadedUrl && (
        <div>
          <p>Image uploaded successfully!</p>
          <img src={uploadedUrl} alt="Uploaded" />
        </div>
      )}
    </div>
  );
};

export default UploadImage;
