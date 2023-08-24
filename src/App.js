import React, { useState } from 'react';

const ImageHandler = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const minSize=1*1024;
  const maxSize=1*1024*1024;
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const allowedFormats = ['image/jpeg', 'image/png'];
      if (!allowedFormats.includes(file.type)) {
        alert('Only JPG and PNG formats are allowed.');
        return;
      }
      if(file.size>=minSize && file.size<=maxSize){
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      }
      else if(file.size>=maxSize){
        alert('Maximum allowed size is 1Mb');
      }
      else{
        alert('Mininum file size will be 1Kb');
      }
    }
  };

  return (
    <div>
      {selectedImage && (
        <div >
          <img src={selectedImage} alt="Selected" />
        </div>
      )}
      <input
        type="file"
        accept=".jpg, .jpeg, .png"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ImageHandler;