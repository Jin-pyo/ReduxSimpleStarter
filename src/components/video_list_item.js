import React from 'react';

const VideoListItem=({video, onVideoSelect})=>{
    //const video =props.video; 위에 파라미터를 
    //props말고 바로 video로 써서 이걸안써줘도됨
    const imageUrl=video.snippet.thumbnails.default.url;

    return (
    <li onClick={()=>onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imageUrl} />
            </div>

            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
        </div>
    </li>
    );
};

export default VideoListItem;