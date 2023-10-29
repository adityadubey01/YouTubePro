import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 mt-4 w-80 shadow-lg">
      <img className="rounded-lg" alt="Thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-1">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
