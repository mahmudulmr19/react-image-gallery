import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-72 object-cover"
        src={image.webformatURL}
        alt="random pictures provide by unsplash"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views:&nbsp;</strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads:&nbsp;</strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes:&nbsp;</strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4 flex flex-wrap gap-1.5">
        {tags.map((tag, index) => (
          <span
            key={index}
            className=" cursor-pointer  bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 "
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
