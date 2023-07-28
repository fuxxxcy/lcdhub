import { Loader } from "@utils/types/Loader";
import axios from "axios";

interface DiscordLoad {
    accessToken: string | null;
    tokenType: string | null;
    type: "discord";
}

const TokenLoader = async ({link, accessToken, tokenType, type}: Loader & DiscordLoad) => {
  try {
    const { data } = await axios.post<{token: string}>(
      `${link}/auth/${type}`,
      { accessToken, tokenType }
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

export default TokenLoader;