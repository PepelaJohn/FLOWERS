import React, { useEffect, useState } from "react";

const Carousel = ({ tab, images }) => {
  return (
    <div className="absolute top-0 h-full z-0 overflow-hidden left-0 right-0 bottom-0">
      <div
        style={{
          left: `-${tab * 100}%`,
        }}
        className="h-full relative min-w-full flex easeinOut overflow-visible"
      >
        {images.map((image, i) => (
          <div key={i} className="min-w-full  h-full ">
            <img
              className="min-w-full mix-blend-exclusion  object-center object-cover min-h-full"
              src={image}
              alt="flowerImage"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
