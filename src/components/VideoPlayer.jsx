import { useState } from 'react';

function VideoPlayer({videoSource}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        autoPlay
        loop
        muted
        src={videoSource} 
        style={{
          width: '300px', 
          height: 'auto', 
        }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;