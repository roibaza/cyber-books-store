import {useCallback, useEffect, useState} from "react";
import {getBooks} from "../api/api";

const useBooksStore = ({pageSize, debounceSearchTerm}) => {
    const [catalogData, setCatalogData] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const updateStartIndex = (num) => {
        if(num < 0 && startIndex === 0) {
            return;
        }
        if(startIndex + num >= 0 && startIndex + num < totalItems) {
            setLoading(true);
            setStartIndex(prev => prev + num);
        } else if(startIndex + num < 0) {
            setLoading(true);
            setStartIndex(0);
        }
    }

    const handleFetch = useCallback(async () => {
        try {
            const res = await getBooks(pageSize, startIndex);
            setTotalItems(res.totalItems);
            setCatalogData(res.items.map(item => {
                return {
                    id: item?.id,
                    thumbnail: item?.volumeInfo?.imageLinks?.thumbnail,
                    title: item?.volumeInfo?.title,
                    authors: item?.volumeInfo?.authors?.toString()
                }
            }));
            setLoading(false);
        } catch (e) {
            setIsError(true);
            setCatalogData([]);
        }
    }, [pageSize, debounceSearchTerm, startIndex])

    useEffect(() => {

        ( async() => {
            await handleFetch();
        })();

    }, [pageSize, debounceSearchTerm, startIndex]);

    return {
        loading,
        isError,
        catalogData,
        updateStartIndex,
        handleFetch,
        setIsError
    };
}

export default useBooksStore;