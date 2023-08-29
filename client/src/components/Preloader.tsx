import anime, { AnimeParams } from "animejs";
import { useRef, useEffect } from "react";

const Preloader = () => {
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
  }, [])

  return (
    <div id="preloader">
      <img ref={imageRef} src="/assets/loader.png" style={{height: 64 / 1080 * window.innerHeight, aspectRatio: "1 / 1"}} alt="" />
    </div>
  );
};

export default Preloader;