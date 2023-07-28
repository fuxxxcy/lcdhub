import UserContext from "@utils/context/UserContext";
import { useState } from "react";

interface UserContextProviderProps {
  children: string | JSX.Element[] | JSX.Element;
};

const UserContextProvider = ({children}: UserContextProviderProps) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const updateUser = (newUser: User) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
