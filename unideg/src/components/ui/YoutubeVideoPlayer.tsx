import React from "react";
import YouTube from "react-youtube";

interface YoutubeVideoPlayerProps {
  className: string;
  videoId: string;
}

const YoutubeVideoPlayer: React.FC<YoutubeVideoPlayerProps> = ({
  videoId = "cqTu-lmBVko",
  className,
}) => {
  // Define options for the player
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0, // Set to 1 to autoplay
      // Additional parameters can be added here
    },
  };

  // Event handler for when the player is ready
  const handleReady = (event) => {
    console.log("Player is ready:", event.target);
    // You can access the player here via event.target
  };

  // Event handler for state changes (optional)
  const handleStateChange = (event) => {
    // You can check event.data for the state of the player (e.g., playing, paused)
    console.log("Player state changed:", event.data);
  };

  return (
    <div className={className}>
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={handleReady}
        onStateChange={handleStateChange}
      />
    </div>
  );
};

export default YoutubeVideoPlayer;
