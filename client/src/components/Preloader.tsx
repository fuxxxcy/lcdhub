import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import { AnimeParams } from "animejs";
import { 
  LoaderSeparatorLayout, 
  PreloaderLayout, 
  PreloaderSpinner 
} from "./styles/Preloader";

interface PreloaderProps {
  data: {} | undefined;
  children?: string | JSX.Element | JSX.Element[];
};

const Preloader = ({data, children}: PreloaderProps) => {
  const [showVideo, setShowVideo] = useState(true);
  const loaderRef =useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const animeParams: AnimeParams = {
      targets: imageRef.current,
      rotate: '1turn',
      duration: 600,
      easing: 'linear',
      loop: true,
    };

    anime(animeParams);
  }, []);

  useEffect(() => {
    let animeParams: AnimeParams = {
      targets: loaderRef.current,
      opacity: 0,
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
        <PreloaderLayout id="preloader">
          <PreloaderSpinner 
            ref={imageRef} 
            src="/assets/loader.png"
            alt="" 
          />
        </PreloaderLayout>
        {data &&
        <video controls={false} autoPlay muted loop={false}>
          <source src="/assets/nextloader.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>}
      </LoaderSeparatorLayout>)}
      {children}
    </>
  );
};

export default Preloader;
