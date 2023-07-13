import { FullProject } from "@utils/types/FullProject";
import { Loader } from "@utils/types/Loader";
import axios from "axios";

const ProjectsPageLoader = async ({link}: Loader) => {
  try {
    const { data } = await axios.get<FullProject>(
      `${link}/projects`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
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

export default ProjectsPageLoader;