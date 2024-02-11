import React from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg"; // Corrected the import for img2

const Blog = () => {
  const images = [
    {
      original: img1,
      description: "Image 1 description",
    },
    {
      original: img2,
      description: "Image 2 description",
    },
    // Add more images as needed
  ];

  // Custom render method to display images and descriptions side by side
  const customRenderItem = (item) => (
    <div className="gallery-image">
      <img src={item.original} alt={item.description} />
      <p className="image-description">{item.description}</p>
    </div>
  );

  // Custom CSS styles for the gallery container
  const customStyles = `
    .custom-gallery-container {
      overflow-x: auto;
      white-space: nowrap;
      scrollbar-width: thin;
      scrollbar-color: dark gray light gray;
    }

    .custom-gallery-container::-webkit-scrollbar {
      width: 12px;
    }

    .custom-gallery-container::-webkit-scrollbar-thumb {
      background-color: dark gray;
    }

    .custom-gallery-container::-webkit-scrollbar-track {
      background-color: light gray;
    }
  `;

  return (
    <div className="bg-black pt-4">
      <style>{customStyles}</style>
      <div className="title flex">
        <hr className="bg-white h-1 w-[200px] mt-6 mr-auto w-28 " />
        <h1 className="font-bold text-2xl bg-white p-2 w-[200px]">Blog</h1>
      </div>
      <div className="custom-gallery-container">
        <Gallery items={images} renderItem={customRenderItem} />
      </div>
    </div>
  );
};

export default Blog;
