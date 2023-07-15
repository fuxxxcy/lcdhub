import Logo from "@/images/Logo";
import Panel from "@/images/Panel";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import { useState, MouseEvent } from "react";

const HeaderLayout = styled.header`
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  height: 36px;
  padding: 0px 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--background);
  filter: drop-shadow(0px 0px 40px rgba(0, 0, 0, 0.63));
  z-index: 5;
`;

const HeaderItem = styled.div`
  width: fit-content;
  height: 100%;
  display: grid;
  align-items: center;
`;

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleOnClick = (e: MouseEvent) => {
    !sidebarVisible ?
      setSidebarVisible(true) :
      setSidebarVisible(false);
    console.log(sidebarVisible)
  }
  return (
    <>
      <HeaderLayout>
        <HeaderItem>
          <Logo color="#7CD2B0" />
        </HeaderItem>
        <HeaderItem onClick={e => handleOnClick(e)}>
          <Panel color="#FFFFFF" />
        </HeaderItem>
      </HeaderLayout>
      <Sidebar isVisible={sidebarVisible} />
    </>
  );
};

export default Header;