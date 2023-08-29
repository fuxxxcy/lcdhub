// import Panel from "/assets/img/Panel.svg";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderLayout = styled.header`
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  height: 55px;
  padding: 0px 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--background);
  filter: var(--drop-shadow-big);
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
  width: 140px;
  height: 100%;
  object-fit: cover;
`;

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const navigate = useNavigate()

  return (
    <>
      <HeaderLayout>
        <HeaderItem>
          <Logo src={process.env.PUBLIC_URL + "/site-logo.svg"} onClick={() => navigate("/")}/>
        </HeaderItem>
        <HeaderItem onClick={() => setSidebarVisible(!sidebarVisible)}>
          <img src="/assets/img/Panel.svg" alt="" />
        </HeaderItem>
      </HeaderLayout>
      <Sidebar isVisible={sidebarVisible} />
    </>
  );
};

export default Header;