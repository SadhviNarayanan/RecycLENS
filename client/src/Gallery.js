import React, { useState, useEffect } from 'react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';
import './Gallery.css';  // Importing the new CSS file

const Gallery = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      const listRef = ref(storage, 'images/');

      try {
        const res = await listAll(listRef);
        const urls = await Promise.all(
          res.items.map((itemRef) => getDownloadURL(itemRef))
        );
        setImageUrls(urls);
      } catch (error) {
        console.error('Error loading images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h2>Image Gallery</h2>
      {loading ? (
        <p>Loading images...</p>
      ) : imageUrls.length === 0 ? (
        <p>No images found.</p>
      ) : (
        <div className="gallery">
          {imageUrls.map((url, idx) => (
            <div key={idx} className="image-item">
              <img src={url} alt={`Uploaded ${idx}`} className="gallery-image" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
