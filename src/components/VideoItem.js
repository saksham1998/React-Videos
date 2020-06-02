import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video ,videoSelect}) => {
  return (
      <div className="video-item item" title="Click to watch the video" onClick={()=>videoSelect(video)}>
        <img
          className="ui image"
          alt="image_src"
          src={video.snippet.thumbnails.medium.url}
        ></img>
        <br></br>
        <div className="content">
          <div className="header"><p>{video.snippet.title}</p></div>
        </div>
      </div>
  );
};

export default VideoItem;
