import Panel from "@/images/Panel";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import { useState } from "react";

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
  overflow: hidden;
`;

const HeaderItem = styled.div`
  width: fit-content;
  height: 100%;
  display: grid;
  align-items: center;
  overflow: hidden;
`;

const Logo = styled.img`
  width: 100px;
  height: 100%;
  object-fit: cover;
`;

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <>
      <HeaderLayout>
        <HeaderItem>
          <Logo src={process.env.PUBLIC_URL + "/site-logo.svg"} />
        </HeaderItem>
        <HeaderItem onClick={() => setSidebarVisible(!sidebarVisible)}>
          <Panel color="#FFFFFF" />
        </HeaderItem>
      </HeaderLayout>
      <Sidebar isVisible={sidebarVisible} />
    </>
  );
};

export default Header;