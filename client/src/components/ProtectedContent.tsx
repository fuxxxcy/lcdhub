import { useState } from "react";
import styled from "styled-components";

const ProtectLayout = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
`;

const Protect = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(45px);
  z-index: 1;

  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const ProtectIcon = styled.div`
  width: 25px;
  height: 25px;
  object-align: center;
  object-fit: cover;
  background-color: var(--text);
  -webkit-mask-image: url(/assets/img/Lock.svg);
  mask-image: url(/assets/img/Lock.svg);
`;

interface ProtectedContentProps {
  children?: string | JSX.Element | JSX.Element[];
  isOpen: boolean;
};

const ProtectedContent = ({children, isOpen}: ProtectedContentProps) => {
  const [isOpenState, setIsOpenState] = useState(isOpen);
  const openProject = () => {
    setIsOpenState(true);
  };

  return (
    <ProtectLayout>
      {isOpenState || <Protect onClick={openProject}>
        <ProtectIcon />
        <div>You need to pay to open it.</div>
      </Protect>}
      {children}
    </ProtectLayout>
  );
};

export default ProtectedContent;