import React, { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import './UploadImage.css'; // CSS file for styling

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploadedUrl, setUploadedUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data2, setData2] = useState(''); // classification result as string

  const handleUpload = () => {
    if (!file) {
      setError('Please select a file first');
      return;
    }

    setData2(''); // Clear previous classification result
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

        const filePath = `/Users/ishitajain/Downloads/${file.name}`;
        console.log('File path:', filePath);

        // POST image path
        fetch('http://localhost:5001/post/image/path', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ data: filePath })
        })
          .then(response => {
            if (response.ok) {
              console.log('Data sent successfully');
              // Now fetch classification
              return fetch('http://localhost:5001/get/image/classification');
            } else {
              console.error('Failed to send data');
              throw new Error('POST failed');
            }
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch classification');
            }
            return response.json();
          })
          .then(jsonData => {
            setData2(jsonData); // This is the classification string
            console.log('Classification result:', jsonData);
          })
          .catch(error => {
            console.error('Error:', error);
          });
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
        <div className="result-container">
          <p>Image uploaded successfully!</p>
          <img src={uploadedUrl} alt="Uploaded" className="uploaded-image" />
          {data2 && (
            <div className={`classification-bubble ${data2.toLowerCase()}`}>
                {data2}
            </div>
            )}
        </div>
      )}
    </div>
  );
};

export default UploadImage;
