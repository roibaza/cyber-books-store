import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import TotalItems from "./TotalItems";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {deleteCartItem, deleteAllItems} from "../redux/slices/cart.slice";

const Cart = ({show, handleDisplayCart}) => {
    const state = useSelector((storeState) => storeState.cart);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(deleteCartItem({id:id}));
    }

    const handleSubmit = () => {
        handleClearAll();
        alert("Order Submitted Successfully");
    }

    const handleClearAll = () => {
        dispatch(deleteAllItems());
    }

    return (
        <Container $show={show}>
            <div className='exit' onClick={() => handleDisplayCart()}>X</div>
            <div className='clear-all'>
                <FontAwesomeIcon icon={faTrashCan} className='trash' onClick={() => handleClearAll()}/>
            </div>
            {
                Object.keys(state).length ? (
                    <>
                        {
                            Object.keys(state).map(id => (
                                <div className='wrapper'>
                                    <div className='cart-item'>
                                        <img alt={state[id].title} src={state[id].thumbnail} width='80px' height='80px'/>
                                        <TotalItems total={state[id].total}/>
                                        <div className='title'>{state[id].title.substring(0, 40) + "..."}</div>
                                    </div>
                                    <div className='remove'>
                                        <FontAwesomeIcon icon={faTrashCan} className='trash' onClick={() => handleRemove(id)}/>
                                    </div>
                                </div>
                            ))
                        }
                        <div className='submit' onClick={() => handleSubmit()}>Submit</div>
                    </>
                ) : (<div className='empty-cart'>Your Cart is empty</div>)
            }
        </Container>
    );
}

export default Cart;

const Container = styled.div`
  display:  ${p => p.$show ? 'flex': 'none'};
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0px;
  right: 0px;
  width: 200px;
  height: 100vh;
  padding-top: 20px;
  overflow-x: hidden;
  overflow-y: auto;
  border-left: 1px solid #ccc;
  box-sizing: border-box;
  background-color: #eee;

  .clear-all, .exit {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 5px;
    cursor: pointer;
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    
  }
  
  .clear-all {
    right: 5px;
    font-size: 14px;
    color: #EF7000;
  }
  
  .exit {
    left: 5px;
  }
  
  .cart-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 160px;
    padding: 0 10px;
    box-sizing: border-box;
  }

  .wrapper {
    width: 100%;
    height: 160px;
    &:hover {
      .remove {
        background-color: rgba(250,250,250, 0.7);
        visibility: visible;
      }
    }
  }
  
  .title {
    padding:5px 10px;
  }
  
  .remove {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    position: relative;
    visibility: hidden;
    top: -160px;
    left: calc(50% - 40px);
    z-index: 1;
    box-sizing: border-box;
  }
  
  .trash {
    cursor: pointer;
  }
  
  .submit {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    padding: 6px 8px;
    background-color: #EF7000;
    border-radius: 5px;
    color: white;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
  }
`;