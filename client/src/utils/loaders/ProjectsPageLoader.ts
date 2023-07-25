import { Loader } from "@utils/types/Loader";
import axios from "axios";
import queryString from "query-string";

interface DataProps {
  projects: Project[];
  pageCount: number;
};

const ProjectsPageLoader = async ({link, filterParams}: Loader & { filterParams: FilterParams }) => {
  try {
    const queryParams = queryString.stringify(filterParams);

    const { data } = await axios.get<DataProps>(
      `${link}/projects${queryParams && `?${queryParams}`}`,
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