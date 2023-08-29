import { apiLink } from "@/AppRoutes";
import UserContext from "@utils/context/UserContext";
import { UserLoader } from "@utils/loaders";
import { useMemo, useRef, useState } from "react";

interface UserContextProviderProps {
  children: string | JSX.Element[] | JSX.Element;
};

const UserContextProvider = ({children}: UserContextProviderProps) => {
  const [user, setUser] = useState<User>();
  const userRef = useRef<User | undefined>(user);

  const updateUser = (newUser: User | undefined) => {
    setUser(newUser);
  };

  useMemo(async () => {
    if (!userRef.current) {
      const token = localStorage.getItem('jwtToken');
      const newUser = await UserLoader({ link: apiLink, token });
      if (typeof newUser !== "string") {
        userRef.current = newUser;
        updateUser(userRef.current);
      }
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
