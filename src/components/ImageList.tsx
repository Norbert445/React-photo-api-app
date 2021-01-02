import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

interface ImageListProps {
  images: any[];
}

const ImageList = (props: ImageListProps) => {
  return (
    <div className="image-list">
      {props.images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageList;
