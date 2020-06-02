import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props)=>{
    const videos = props.videos.map(video => <VideoItem video={video} videoSelect={props.onSelect} key={video.etag}/>)
    return (
        <div className="ui container relaxed divided list" style={{ marginTop: "15px" }}>
            {videos} 
        </div>
    )
}

export default VideoList