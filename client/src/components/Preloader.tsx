import anime, { AnimeInstance, AnimeParams } from "animejs";
import { useRef, useEffect } from "react";

const Preloader = () => {
  const animationRef = useRef<AnimeInstance | undefined>(undefined);

  useEffect(() => {
    const animeParams: AnimeParams = {
      targets: "#preloader g path",
      strokeDashoffset: [0, anime.setDashoffset, 0, anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 2000,
      delay: (element, index, length) => { return index * 250 },
      direction: "normal",
      loop: true
    };

    animationRef.current = anime(animeParams);
  }, [])

  return (
    <div id="preloader" style={{margin: "8%"}}>
      <svg width="206" height="206" viewBox="0 0 206 206" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_221_72)">
        <path d="M62.0056 102C61.683 81.7605 75.3845 62 101.999 62C128.613 62 142.388 81.7605 141.992 102C141.604 121.755 127.679 142 101.999 142C76.0219 142 62.3204 121.755 62.0056 102Z" stroke="#90F500" stroke-width="3"/>
        <path d="M49.0073 101.5C48.5839 74.9357 66.5671 49 101.498 49C136.429 49 154.51 74.9357 153.989 101.5C153.481 127.428 135.204 154 101.498 154C67.4037 154 49.4206 127.428 49.0073 101.5Z" stroke="#90F500" stroke-width="3"/>
        <path d="M37.009 102C36.4848 69.1109 58.7498 37 101.998 37C145.246 37 167.631 69.1109 166.986 102C166.357 134.101 143.728 167 101.998 167C59.7855 167 37.5207 134.101 37.009 102Z" stroke="#90F500" stroke-width="3"/>
        <path d="M24.0108 101.5C23.3858 62.286 49.9324 24 101.497 24C153.062 24 179.752 62.286 178.984 101.5C178.234 139.775 151.253 179 101.497 179C51.1674 179 24.6208 139.775 24.0108 101.5Z" stroke="#90F500" stroke-width="3"/>
        <path d="M12.0125 102C11.2867 56.4612 42.1151 12 101.997 12C161.879 12 192.874 56.4612 191.981 102C191.11 146.448 159.778 192 101.997 192C43.5492 192 12.721 146.448 12.0125 102Z" stroke="#90F500" stroke-width="3"/>
      </g>
        <defs>
          <filter id="filter0_d_221_72" x="-10" y="-10" width="220" height="220" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.564706 0 0 0 0 0.960784 0 0 0 0 0 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_221_72"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_221_72" result="shape"/>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Preloader;