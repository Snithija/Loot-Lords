import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ProductImages = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  // Product image database
  const productImages = {
    1: [
      "/images/img_frame_9.png",
      "/images/img_frame_9_1.png",
      "/images/img_frame_9_2.png",
      "/images/img_frame_9_3.png",
    ],
    2: [
      "/images/img_frame_9_294x248.png",
      "/images/img_frame_9_4.png",
      "/images/img_frame_9_5.png",
      "/images/img_frame_9_6.png",
    ],
    3: [
      "/images/img_frame_9_1.png",
      "/images/img_frame_9_7.png",
      "/images/img_frame_9_8.png",
      "/images/img_frame_9_9.png",
    ],
    101: [
      "/images/img_frame_9_11.png",
      "/images/img_frame_9_12.png",
      "/images/img_frame_9_13.png",
      "/images/img_frame_9_14.png",
    ],
    102: [
      "/images/img_frame_9_12.png",
      "/images/img_frame_9_15.png",
      "/images/img_frame_9_16.png",
      "/images/img_frame_9_17.png",
    ],
  };

  // Get current product images or fallback to default
  const images = productImages[id] || [
    "/images/img_frame_121.png",
    "/images/img_frame_123.png",
    "/images/img_frame_124.png",
    "/images/img_frame_9.png",
  ];

  return (
    <div className="flex flex-col w-full lg:w-[400px]">
      {/* Main Product Image */}
      <div className="mb-4 md:mb-5 relative">
        <img
          src={images?.[selectedImage]}
          alt={`Product view ${selectedImage + 1}`}
          className="w-full h-[280px] sm:h-[320px] md:h-[372px] object-cover rounded-lg shadow-md"
        />

        {/* Image Counter */}
        <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-2 py-1 rounded-md text-sm">
          {selectedImage + 1} / {images.length}
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() =>
                setSelectedImage(
                  selectedImage > 0 ? selectedImage - 1 : images.length - 1
                )
              }
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all"
            >
              <img
                src="/images/img_arrow_left.svg"
                alt="Previous"
                className="w-4 h-4"
              />
            </button>
            <button
              onClick={() =>
                setSelectedImage(
                  selectedImage < images.length - 1 ? selectedImage + 1 : 0
                )
              }
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all rotate-180"
            >
              <img
                src="/images/img_arrow_left.svg"
                alt="Next"
                className="w-4 h-4"
              />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Images */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2">
        {images?.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`flex-shrink-0 w-[70px] sm:w-[85px] md:w-[100px] h-[70px] sm:h-[85px] md:h-[100px] rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              selectedImage === index
                ? "border-black shadow-md scale-105"
                : "border-gray-200 hover:border-gray-400 hover:shadow-sm"
            }`}
          >
            <img
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
