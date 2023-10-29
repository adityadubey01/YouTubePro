import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "./utils/config";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideosList();
  }, []);

  const getVideosList = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const jsonData = await data.json();
    setVideos(jsonData.items);
  };
  return (
    <div className="flex flex-wrap justify-between">
      {videos?.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
