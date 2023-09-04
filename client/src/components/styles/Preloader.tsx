import styled from "styled-components";

const PreloaderLayout = styled.div`
  margin: auto;
`;

const PreloaderSpinner = styled.img`
  height: calc(64 / 1080 * 100svh);
  aspectRatio: 1 / 1;
`;

const LoaderSeparatorLayout = styled.div`
  position: fixed;
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

export {
  PreloaderLayout,
  PreloaderSpinner,
  LoaderSeparatorLayout
};