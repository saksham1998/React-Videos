import React from "react";

const VideoDetails = ({ video }) => {
  if (video == null) return <div></div>;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;
  return (
    <div className="ui container">
      <div className="ui embed">
        <iframe src={videoSrc}></iframe>
      </div>
      <div className="ui segment">
        <h2 className="ui header">{video.snippet.title}</h2>
        <h4>{video.snippet.description}</h4>
      </div>
    </div>
  );
};

export default VideoDetails;
