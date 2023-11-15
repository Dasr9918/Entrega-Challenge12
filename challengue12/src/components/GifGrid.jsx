import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const fetchedImages = await getGifs(category);
    console.log(fetchedImages);
    setImages(fetchedImages);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image, index) => (
          <GifItem key={index} {...image} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
