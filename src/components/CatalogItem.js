import styled from "styled-components";
import {useSelector, useDispatch} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import LoadingButton from '@mui/lab/LoadingButton';
import {addCartItem, updateCartItem, deleteCartItem} from "../redux/slices/cart.slice";


const CatalogItem = ({data, loading}) => {
    const dispatch = useDispatch();
    const state = useSelector((storeState) => storeState.cart);

    const {
        id,
        title,
        authors,
        thumbnail
    } = data;

    const handleAddToCart = () => {
        dispatch(addCartItem({id: id, title: title, authors: authors, thumbnail: thumbnail, total: 1}));
    }

    const updateTotal = (num) => {
        if(state[id].total + num > 0) {
            dispatch(updateCartItem({id: id, total: state[id].total + num}))
        } else {
            dispatch(deleteCartItem({id:id}));
        }
    }

    return (
        <>
            {
                !loading ? (
                    <Container className='container'>
                        {
                            !state[id] ?
                                <div className="add-to-cart" onClick={() => handleAddToCart()}>Add To Cart</div>
                                : (
                                    <div className='added'>
                                        <FontAwesomeIcon icon={faCircleCheck} color='green'/> Added to Cart
                                        <div className='controllers'>
                                            <div className='increment' onClick={() => updateTotal(1)}> + </div>
                                            <div className='total'>{state[id].total || ""}</div>
                                            <div className='decrement' onClick={() => updateTotal(-1)}> - </div>
                                        </div>
                                    </div>
                                )
                        }
                        <img alt={title} src={thumbnail}></img>
                        <div
                            className='title'
                            title={title}
                        >
                            {title && title.substring(0, 100).trim()}{title && title.length > 100 ? "..." : ""}
                        </div>
                        <div
                            className='author'
                            title={authors}
                        >
                            {authors && authors.substring(0, 60).trim()}{authors && authors.length > 60 ? "..." : ""}
                        </div>
                    </Container>
                ): (
                    <Container>
                        <div className='loader'><LoadingButton loading={true}/></div>
                    </Container>
                )
            }

        </>
    );
};
export default CatalogItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
  height: 300px;
  margin: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  
  &:hover {
    .add-to-cart {
      visibility: visible;
    }
  }
  
  img {
    width: 160px;
    height: 160px;
  }
  
  .title, .author {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    padding-top: 5px;
    
  }
  .title {
    font-size: 12px;
    font-weight: bold;
  }
  .author {
    margin-top: 5px;
    font-size: 12px;
  }
  
  .add-to-cart {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 30px;
    border-radius: 10px;
    background-color: #F9DA4C;
    color: #000;
    position: relative;
    top: 100px;
    visibility: hidden;
    cursor: pointer;
    font-weight: bold;
  }
  
  .added {
    display: flex;
    position: relative;
    top: 5px;
    left: 5px;
    width: 100%;
    height: 30px;
    font-size: 14px;
    color: green;
    
    .controllers {
      display: flex;
      color: #000;
      padding-left: 10px;
      
      .total {
        padding: 0 5px;
      }
      .increment, .decrement {
        cursor: pointer;
      }
    }
  }
  
`;
