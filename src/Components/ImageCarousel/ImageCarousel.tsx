import "./ImageCarousel.scss";
import { useState } from "react";

interface ImageCarouselProps {
  images: string[];
}

function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="carousel">
      {/* Images */}
      <div className="image">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`${index === currentImageIndex ? "active" : ""}`}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>

      {/* Selectors */}
      <div className="selectors">
        {images.map((_, index) => (
          <div
            key={index}
            className={`selector ${index === currentImageIndex ? "active" : ""}`}
            onClick={() => changeImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
