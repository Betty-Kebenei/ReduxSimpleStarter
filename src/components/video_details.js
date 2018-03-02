import React from 'react';

const VideoDetails = ({video}) => {
    if (!video){
        return  <div>Loading....</div>
    }
    const VideoId = video.id.videoId;
    const URL = `https://www.youtube.com/embed/${VideoId}`;
    return (
        <div className="video-detail col-md8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={URL} > </iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
}

export default VideoDetails;