import { createContext } from "react";

type UserContextType = {
  user?: User | undefined;
  updateUser?: (newUser: User) => void;
};
  
const UserContext = createContext<UserContextType>({});

export default UserContext;

// export const UserProvider = ({children}: any) => {
//   return (
//     <UserContext.Provider value={{}}>
//       {children}
//     </UserContext.Provider>
//   )
// }

