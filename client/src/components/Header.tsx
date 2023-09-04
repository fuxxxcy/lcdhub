import Sidebar from "./Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  HeaderLayout, 
  HeaderItem, 
  Logo 
} from "./styles/Header";

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