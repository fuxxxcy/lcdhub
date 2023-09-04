import styled from "styled-components";

const GuideCardsLayout = styled.div`
  max-width: 1200px;
  width: min-content;
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;

  @media (1100px >= width > 768px) {
    grid-template-columns: 1fr 1fr;
    width: fit-content;
  }

  @media (width > 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
    width: fit-content;
  }
`;

const GuideCardWrapLayout = styled.div`
  margin: auto;
  border-radius: 1em;
`;

const NoContentInfo = styled.div`
  padding: 1rem;
`;

export {
  GuideCardsLayout,
  GuideCardWrapLayout,
  NoContentInfo
};