import {useState} from "react";

const useBooksController = () => {
    const [debounceSearchTerm, setDebounceSearchTerm] = useState('');
    const [pageSize, setPageSizeSelected] = useState(10);
    const [displayCart, setDisplayCart] = useState(false);

    const handleDebounceSearchTerm = (term) => {
        setDebounceSearchTerm(term);
    }

    const handleDisplayCart = () => {
        setDisplayCart(prev => !prev);
    }

    const handlePageSizeClick = (e) => {
        setPageSizeSelected(e.target.value);
    }

    return {
        handleDebounceSearchTerm,
        handlePageSizeClick,
        handleDisplayCart,
        debounceSearchTerm,
        pageSize,
        displayCart
    };
}

export default useBooksController;