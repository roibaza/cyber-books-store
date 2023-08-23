import styled from 'styled-components';
import {useEffect, useState} from "react";

const Input = ({handleDebounceSearchTerm, useDebounce}) => {

    const [searchTerm, setSearchTerm] = useState('cyber');
    const debounceSearchTerm = useDebounce(searchTerm, 300);

    useEffect(() => {
        handleDebounceSearchTerm(debounceSearchTerm);
    }, [debounceSearchTerm])

    return (
        <Container
            className='input'
            value={searchTerm}
            placeholder='Search...'
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
}

export default Input;

const Container = styled.input`
  width: 150px;
  height: 30px;
  padding: 0 5px;
  margin: 0 5px;
  border-radius: 5px;
  border: 1px solid #CBCBCB;
  box-sizing: border-box;
  
  &:hover {
    border: 1px solid rgb(118, 118, 118);
  }
`;