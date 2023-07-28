import { Loader } from "@utils/types/Loader";
import axios from "axios";

const UserLoader = async ({link, token}: Loader & {token: string | null}) => {
  try {
    const { data } = await axios.post<User>(
      `${link}/user`,
      { token }
    );

    return { data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
};

export default UserLoader;