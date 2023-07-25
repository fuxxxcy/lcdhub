import styled from "styled-components";
import Preloader from "./Preloader";
import { useEffect, useRef, useState } from "react";
import anime, { AnimeParams } from "animejs";

const LoaderSeparatorLayout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 6;
  background-color: var(--background);

  video {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 7;
  }
`;

interface LoaderSeparatorProps {
  data: {} | undefined;
  children?: string | JSX.Element | JSX.Element[];
};

const LoaderSeparator = ({data, children}: LoaderSeparatorProps) => {
  const [showVideo, setShowVideo] = useState(true);
  const loaderRef =useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animeParams: AnimeParams = {
      targets: loaderRef.current,
      opacity: 0,
      scale: 0,
      duration: 1500,
      delay: 1000,
      easing: 'easeOutExpo',
      borderRadius: '50%',
      filter: 'blur(200px)',
      complete: () => {
        setShowVideo(false);
      }
    };

    data && anime(animeParams);
  }, [data]);

  return (
    <>
      {showVideo && (<LoaderSeparatorLayout ref={loaderRef}>
        <Preloader />
        {data &&
        <video controls={false} autoPlay muted loop={false}>
          <source src="/nextloader.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>}
      </LoaderSeparatorLayout>)}
      {children}
    </>
  );
};

export default LoaderSeparator;
