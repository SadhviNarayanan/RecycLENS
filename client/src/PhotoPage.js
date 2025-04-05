// App.js
import React from 'react';
import UploadImage from './UploadImage';
import Gallery from './Gallery';

const PhotoPage = () => {
  return (
    <div>
      <h1>Firebase Image Upload & Gallery</h1>
      <UploadImage />
      <Gallery />
    </div>
  );
};

export default PhotoPage;
