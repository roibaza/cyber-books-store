import styled from "styled-components";

const TotalItems = ({total}) => {

    return (
      <Container className='cart-total-items'>{total}</Container>
    );
}

export default TotalItems;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 20px;
  height: 20px;
  top: -10px;
  left: -35px;
  border-radius: 50%;
  background-color: #F38A00;
  color: white;
  font-size: 12px;
  font-weight: bold;
`;