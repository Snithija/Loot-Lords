import React, { useState } from "react";
import Button from "../../components/ui/Button";

const ProductVideos = () => {
  const [activeTab, setActiveTab] = useState("Videos");

  const tabs = ["Details", "Videos", "Reviews"];

  const videos = [
    {
      id: 1,
      thumbnail: "/images/img_image_2.png",
      duration: "8:26",
      title: "Product Overview",
    },
    {
      id: 2,
      thumbnail: "/images/img_frame_9.png",
      duration: "2:33",
      title: "Unboxing Experience",
    },
    {
      id: 3,
      thumbnail: "/images/img_frame_9_1.png",
      duration: "4:01",
      title: "Features & Details",
    },
    {
      id: 4,
      thumbnail: "/images/img_frame_9_2.png",
      duration: "3:15",
      title: "Style Guide",
    },
  ];

  return (
    <section className="w-full py-8 md:py-12">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-2 border-gray-200 rounded-t-2xl">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 md:gap-6 p-6 md:p-8 border-b-2 border-gray-200">
            {tabs?.map((tab) => (
              <Button
                key={tab}
                text={tab}
                onClick={() => setActiveTab(tab)}
                layout_width="auto"
                padding="px-6 py-3"
                position="relative"
                margin="0"
                variant="primary"
                size="medium"
                className={`px-6 py-3 rounded-3xl font-bold text-xl transition-colors ${
                  activeTab === tab
                    ? "bg-black text-white border-black"
                    : "bg-white text-green-800 border-gray-400 hover:bg-gray-50"
                }`}
              />
            ))}
          </div>

          {/* Content Area */}
          <div className="p-6 md:p-8">
            {activeTab === "Videos" && (
              <div className="space-y-6 md:space-y-8">
                <h2 className="text-2xl md:text-3xl font-bold text-black">
                  Product Videos
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {videos?.map((video) => (
                    <div
                      key={video?.id}
                      className="relative group cursor-pointer hover:transform hover:scale-105 transition-all duration-300"
                    >
                      <div className="relative w-full h-[180px] sm:h-[200px] md:h-[216px] rounded-2xl overflow-hidden bg-gray-100 shadow-md">
                        <img
                          src={video?.thumbnail}
                          alt={`${video?.title} - ${video?.duration}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          onError={(e) => {
                            e.target.src = "/images/img_frame_9.png"; // Fallback image
                          }}
                        />

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all">
                          <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 group-hover:scale-110 transition-all shadow-lg">
                            <svg
                              className="w-6 h-6 text-black ml-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>

                        {/* Duration Badge */}
                        <div className="absolute bottom-3 right-3 bg-black bg-opacity-80 text-white text-xs font-bold px-2 py-1 rounded">
                          {video?.duration}
                        </div>

                        {/* Video Title */}
                        <div className="absolute bottom-3 left-3 bg-black bg-opacity-80 text-white text-xs font-medium px-2 py-1 rounded max-w-[calc(100%-80px)]">
                          {video?.title}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "Details" && (
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-black">
                  Product Details
                </h2>
                <p className="text-gray-600">
                  Make every step unique. These kicks put a playful twist on a
                  hoops icon by doubling up on everything you love about the
                  AF-1. Layered materials like linen-evoking textiles and
                  synthetic leather pair with an exaggerated midsole and a pop
                  of pastels to bring you double the style. Benefits With 2 eye
                  stays, 2 mudguards and 2 Swoosh logos, you get a layered
                  aesthetic with double the branding. Stitched leather overlays
                  add durability and texture to the heritage look. Originally
                  designed for performance hoops, the Nike Air cushioning adds
                  lasting comfort. Product Details Foam midsole Color Shown:
                  Sail/Sea Coral/Indigo Haze/Coral Chalk Style: DV7449-101`;
                </p>
              </div>
            )}

            {activeTab === "Reviews" && (
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-black">
                  Customer Reviews
                </h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-lg font-bold text-black">Gabriel</h3>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">
                      These shoes offer the perfect blend of style, comfort, and
                      durability—making every step feel effortless
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-lg font-bold text-black">
                        Jimmy Smith
                      </h3>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">
                      These shoes are a perfect combination of comfort,
                      durability, and style. The cushioning provides excellent
                      support for all-day wear, while the high-quality materials
                      ensure long-lasting performance.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-lg font-bold text-black">
                        Sarah Johnson
                      </h3>
                      <div className="flex gap-1">
                        {[...Array(4)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">
                      Great quality product! The fit is perfect and the design
                      is exactly what I was looking for. Highly recommend!
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductVideos;
