import axios from "axios";
export const getBooks = async (maxResults, startIndex) => {
    let response = await axios(
        `https://www.googleapis.com/books/v1/volumes?q=cyber&maxResults=${maxResults}&startIndex=${startIndex}`
    );
    return response.data;
};