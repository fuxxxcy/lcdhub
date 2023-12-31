import { FullProject } from "@utils/types/FullProject";
import { Loader } from "@utils/types/Loader";
import axios from "axios";

const ProjectPageLoader = async ({params, link}: Loader) => {
  try {
    const { data } = await axios.get<FullProject>(
      `${link}/project/${params!!.id}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
    // console.log(data);

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

export default ProjectPageLoader;