import CatalogItem from "./CatalogItem";
import useBooksStore from "../hooks/useBooksStore";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Catalog = ({pageSize, debounceSearchTerm}) => {

    const {
        loading,
        isError,
        catalogData,
        updateStartIndex,
        handleFetch,
        setIsError
    } = useBooksStore({pageSize, debounceSearchTerm});

    const handleRetry = () => {
        handleFetch();
        setIsError(false);
    }

    return (
        <Container>
            {
                !isError ? (
                    <>
                        <FontAwesomeIcon className="arrow" icon={faAngleLeft} onClick={() => updateStartIndex(parseInt(0 - pageSize))}/>
                        <div className='catalog'>
                        {
                            (catalogData || []).map((item) => <CatalogItem key={item.id} data={item} loading={loading}/>)
                        }
                        </div>
                        <FontAwesomeIcon className="arrow" icon={faAngleRight} onClick={() => updateStartIndex(parseInt(pageSize))}/>
                    </>
                ): (
                    <>
                        Something Went Wrong &#128542; ...
                        <div
                            style={{color: '#126cc5', cursor: "pointer"}}
                            onClick={() => handleRetry()}
                        >
                            try again
                        </div>
                    </>)
            }
        </Container>
    );
}

export default Catalog;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  align-items: center;
  
  .catalog {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 1250px;
    padding: 0 10px;
    box-sizing: border-box;
    flex-wrap: wrap;
  }
  
  .arrow {
    cursor: pointer;
    width: 20px;
    height: 20px;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #CBCBCB;
    border-radius: 50%;
  }
`;
