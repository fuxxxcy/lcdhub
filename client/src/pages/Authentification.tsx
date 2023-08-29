import { apiLink } from "@/AppRoutes";
import LoaderSeparator from "@components/LoaderSeparator";
import UserContext from "@utils/context/UserContext";
import { TokenLoader, UserLoader } from "@utils/loaders";
import { useContext, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface AuthentificationProps {
  type: "discord"
};

const Authentification = ({type}: AuthentificationProps) => {
  const { user, updateUser } = useContext(UserContext);
  const userRef = useRef<User | undefined>(user);
  const navigate = useNavigate();
  
  useMemo(async () => {
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];
    
    const response = await TokenLoader({link: apiLink, accessToken, tokenType, type});
    if (typeof response === 'string')  return;

    const { token } = response.data;
    localStorage.setItem('jwtToken', token);
    navigate("/");
  }, [type, navigate]);
  
  useMemo(async () => {
    if (!userRef.current) {
      const token = localStorage.getItem('jwtToken');
      const newUser = await UserLoader({ link: apiLink, token });
      
      if (typeof newUser !== "string") {
        userRef.current = newUser;
        updateUser!!(userRef.current)
        navigate("/");
      }
    }
  }, [navigate, updateUser]);

  return (
    <LoaderSeparator data={user}>
      <div>
        {user && <img src={user.img} alt="" />}

        <h1>{user?.name}</h1>
      </div>
    </LoaderSeparator>
  );
};

export default Authentification;