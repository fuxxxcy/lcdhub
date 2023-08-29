import { createContext } from "react";

type UserContextType<T> = {
  user?: T | undefined;
  updateUser?: (newUser: T | undefined) => void;
};
  
const UserContext = createContext<UserContextType<User>>({});

export default UserContext;
