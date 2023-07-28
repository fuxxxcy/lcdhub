import UserContext from "@utils/context/UserContext";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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

const DiscordButton = styled.a`
  display: block;
  width: 90%;
  height: 50px;
  border: 3px solid var(--primarly);
  color: var(--text);
  border-radius: 2em;
`;

interface SidebarProps {
  isVisible: boolean;
};

const Sidebar = ({ isVisible }: SidebarProps) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem('jwtToken')
    navigate("/")
  }

  useEffect(() => {
    console.log(user)
  }, [])

  return (
    <SidebarLayout style={{transform: isVisible ? "translateX(-100%)" : "translateX(0%)"}}>
      {user ? (
        <div>
          <img src={user.img} alt="" width="50px" height="50px" />
          <h5>{user.name}</h5>
          <h4>Баланс: {user.wallet}</h4>

          <button onClick={onLogout}>Выйти</button>
          <button onClick={() => navigate('/fillbalance')}>Пополнить баланс</button>
        </div>
      ) :
        <DiscordButton href="https://discord.com/api/oauth2/authorize?client_id=1133384664560705566&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fdiscord&response_type=token&scope=identify">connect discord</DiscordButton>
      }
    </SidebarLayout>
  );
};

export default Sidebar;