// Gallery.js
import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const snapshot = await getDocs(collection(db, 'listings'));
      const imageData = snapshot.docs.map((doc) => doc.data());
      setImages(imageData);
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="gallery">
        {images.map((item, idx) => (
          <div key={idx} className="image-item">
            <img src={item.imageUrl} alt="Uploaded" style={{ width: '200px', height: '200px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
