import queryString from "query-string";
import { useCallback, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const PageNumberLayout = styled.nav`
  width: 400px;
  height: 30px;
  margin: 20px;

  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const HrefBlock = styled.button<{ $active?: boolean | undefined }>`
  display: block;
  height: fit-content;
  width: 30px;

  text-align: center;
  background: none;
  font-size: 16px;
  border: none;
  
  ${({ $active }) => {return $active ? 
    `
      filter: drop-shadow(0px 0px 13px var(--secondary)); 
      color: var(--secondary);
    ` : `
      color: var(--text-aditional);
    `
  }}
`;

type PageNumberChangeProps = 
  | { type: "Next page", } 
  | { type: "Previous page", } 
  | { type: "Page by number", page: number };
  
interface PageNumberProps {
  maxPage: number;
}

const PageNumber = ({maxPage}: PageNumberProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const filterParams = queryString.parse(location.search) as FilterParams;
  const { filter, query } = filterParams;
  let { page } = filterParams;
  let currentPage = useRef(1);

  useCallback(() => {
    currentPage.current = page ? Number.parseInt(page) : 1
  }, [page]);
  
  const handlePageChange = (change: PageNumberChangeProps) => {
    switch (change.type) {
      case "Next page":
        currentPage.current >= maxPage || currentPage.current++;
        break;
      case "Previous page":
        currentPage.current <= 1 || currentPage.current--;
        break;
      case "Page by number":
        currentPage.current = (1 <= change.page && change.page <= maxPage) ? change.page : currentPage.current;
        break;
      default:
        break;
    }

    page = currentPage.current.toString();

    const queryParams = queryString.stringify({
      ...(filter && { filter }),
      ...(query && { query }),
      ...(page && { page }),
    },
    { encode: false });

    navigate(`/projects${queryParams && `?${queryParams}`}`, { replace: true }); 
  };

  return (
    <>
      {maxPage !== 1 &&
        <PageNumberLayout>
          <HrefBlock onClick={() => handlePageChange({type: "Previous page"})}>◀</HrefBlock>
          <HrefBlock 
            onClick={() => handlePageChange({type: "Page by number", page: 1})}
            $active={currentPage.current === 1}
          >1</HrefBlock>

          {currentPage.current >= 4 && <HrefBlock>···</HrefBlock>}
          {currentPage.current >= 3 && 
            <HrefBlock 
              onClick={() => handlePageChange({type: "Page by number", page: currentPage.current-1})}
            >{currentPage.current-1}</HrefBlock>
          }
          
          {currentPage.current !== 1 && currentPage.current !== maxPage && 
            <HrefBlock 
              onClick={() => handlePageChange({type: "Page by number", page: currentPage.current})}
              $active={currentPage.current !== 1 && currentPage.current !== maxPage}
            >{currentPage.current}</HrefBlock>
          }
          
          {currentPage.current <= maxPage - 2 && 
            <HrefBlock 
              onClick={() => handlePageChange({type: "Page by number", page: currentPage.current+1})}
            >{currentPage.current+1}</HrefBlock>}
          {currentPage.current <= maxPage - 3 && <HrefBlock>···</HrefBlock>}

          <HrefBlock 
            onClick={() => handlePageChange({type: "Page by number", page: maxPage})}
            $active={currentPage.current === maxPage}
          >{maxPage}</HrefBlock>
          
          <HrefBlock onClick={() => handlePageChange({type: "Next page"})}>▶</HrefBlock>
        </PageNumberLayout>
      }
    </>
  );
};

export default PageNumber;
