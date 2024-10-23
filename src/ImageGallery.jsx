import React from 'react';
import './ImageGallery.css'; // Import the CSS file for styling
import a from './a.jpg';

const ImageGallery = () => {
    const images = [
    {a},
    ]; // Add your image paths here

    return (
        <div className="image-gallery">
            {images.map((src, index) => (
                <img key={index} src={src} alt={`Image ${index + 1}`} />
            ))}
        </div>
    );
};

export default ImageGallery;
