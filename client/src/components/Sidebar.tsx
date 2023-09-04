import UserContext from "@utils/context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import OAuthButton from "./OAuthButtin";

const SidebarLayout = styled.div`
  position: fixed;
  left: 100vw;
  top: 55px;
  height: calc(100svh - 55px);
  width: 150px;

  background-color: var(--background);
  transition: 300ms;
  z-index: 2;
`;

interface SidebarProps {
  isVisible: boolean;
};

const Sidebar = ({ isVisible }: SidebarProps) => {
  const { user, updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem('jwtToken');
    updateUser!!(undefined);
    navigate("/");
  };

  return (
    <SidebarLayout style={{transform: isVisible ? "translateX(-100%)" : "translateX(0%)"}}>
      {user ? (
        <div>
          <img src={user.img} alt="" width="50px" height="50px" />
          <h5>{user.name}</h5>

          <button onClick={onLogout}>Выйти</button>
          <button onClick={() => navigate('/fillbalance')}>Пополнить баланс</button>
        </div>
      ) :
        <OAuthButton type="Discord" />
      }
    </SidebarLayout>
  );
};

export default Sidebar;