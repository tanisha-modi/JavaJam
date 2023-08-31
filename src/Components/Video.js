import React from 'react'
import "./Video.css";

function Video() {
  return (
    <div className="video-container">
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/QJ8ewfNxC1I?autoplay=1`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className="video"
    />
  </div>
  </div>
  )
}

export default Video
