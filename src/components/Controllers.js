import styled from 'styled-components';
import Input from "./Input";
import DropDown from "./DropDown";
import {useDebounce} from "../hooks/useDebounce";
import CartLogo from "./CartLogo";

const Controllers = ({handleDebounceSearchTerm, handlePageSizeClick, handleDisplayCart}) => {

    return (
        <Container>
            <div className='controllers'>
                <Input
                    handleDebounceSearchTerm={handleDebounceSearchTerm}
                    useDebounce={useDebounce}/>
                <DropDown handlePageSizeClick={handlePageSizeClick} />
            </div>
            <StyledCartLogo className='cart' handleDisplayCart={handleDisplayCart}/>
        </Container>
    );
}

export default Controllers;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 0 10px;
  background-color: #FAFAFA;
  width: 1180px;
  height: 60px;
  border: 1px solid #E0E0E0;
  box-sizing: border-box;
  .controllers {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const StyledCartLogo = styled(CartLogo)`
  display: flex;
  justify-content: flex-end;
`;