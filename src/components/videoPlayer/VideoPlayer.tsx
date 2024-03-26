import { useRef, useEffect, useState } from "react";
import "./VideoPlayer.css";

interface VideoPlayerProps {
  src: string;
  className: string;
}

const VideoPlayer = ({ src, className }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnded = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };

    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnded);
      if (isPlaying) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnded);
      }
    };
  }, [isPlaying]);

  const handleVideoClick = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (!isPlaying) {
        videoElement.play();
      }
      setIsPlaying(!isPlaying);
    }
    
    // let setVideo = document.getElementById("myVideo");
    // setVideo?.setAttribute("controls", "true");
  };

  return (
    <video
      className={className}
      ref={videoRef}
      // onClick={() => {handleVideoClick(), addControls()}}
      onClick={handleVideoClick}
      id="myVideo"
      controls
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;
