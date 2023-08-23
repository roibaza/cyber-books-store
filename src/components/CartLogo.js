import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";
import TotalItems from "./TotalItems";

const CartLogo = ({handleDisplayCart}) => {
    const total = useSelector((storeState) => storeState.total);

    return (
        <Container onClick={() => handleDisplayCart()} className='cart-icon'>
            <FontAwesomeIcon className="arrow" icon={faCartShopping} size='xl' />
            <TotalItems total={total}></TotalItems>
        </Container>
    );
}

export default CartLogo;

const Container = styled.div`
  display: flex;
  width: 50px;
  cursor: pointer;
`;
