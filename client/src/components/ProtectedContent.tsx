import { useState } from "react";
import { 
  ProtectLayout, 
  Protect, 
  ProtectIcon 
} from "./styles/ProtectedContent";

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