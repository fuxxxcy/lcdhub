import { createContext } from "react";

type UserContextType = {
  user?: User | undefined;
  updateUser?: (newUser: User) => void;
};
  
const UserContext = createContext<UserContextType>({});

export default UserContext;