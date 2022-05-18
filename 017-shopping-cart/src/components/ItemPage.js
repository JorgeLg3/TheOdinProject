import items from "../items";
import {useParams, useNavigate, Link} from 'react-router-dom';
import {useState} from 'react';
import styled from 'styled-components';

const ItemPage = (props) => {
    const {id} =useParams();
    const item = items.find(x => x.id === id);
    
    let navigate = useNavigate();
    const [number, setNumber] = useState(1);

    const onChangeHandler = event => {
      setNumber(event.target.value);
    }

    return (
      <PageContainer>
        <Img src={item.image} alt={item.name}></Img>
        <InfoContainer>
          <div>
          <Title>{item.name}</Title>
            <Description>{item.description}</Description>
            <Price>{item.price}$</Price>
          </div>
          <div>
          <ResumeBox>
            <p>x {number}</p>
            <p>{item.price*number}$</p>
          </ResumeBox>
          <BuyDiv>
              <Input type='number' value={number} onChange={onChangeHandler}></Input>
              <AddButton onClick={() => props.addToCart(id, item.name, item.price, number)}>ADD TO CART</AddButton>
            </BuyDiv>
            
            <BackLink to="/shop">Back Shop</BackLink>
          </div>
            
            
        </InfoContainer>
        
        </PageContainer>
    );
  };
  
  const Img = styled.img`
    height: 80vh;
    width: 56vh;
  `;

  const PageContainer = styled.div`
    display: flex;
    padding: 2rem 1rem;
    gap: 2rem;
    font-family: 'Roboto Condensed', sans-serif;
    flex-wrap: wrap;
    justify-content: center;
  `;

  const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  max-width: 40vh;
  justify-content: space-between;;
  `;

  const Title = styled.h1`
    font-size: 2rem;
  `;

  const Description = styled.p`
    font-size: 1rem;
  `

  const Price = styled.h2`
    font-size: 1.2rem;
    text-align: left;
    margin-top: 1rem;
  `;

  const ResumeBox = styled.div`
    display: flex;
    margin-top: 4rem;
    justify-content: flex-end;
    gap: 2rem;
    margin-right: 1rem;
  `;

  const BuyDiv = styled.div`
    display: flex;
    margin-top: 1rem;
    height: 2rem;
  `;

  const Input = styled.input`
    padding: 0rem 1rem;
    width: 3rem;
    font-family: 'Roboto Condensed', sans-serif;
  `;

  const AddButton = styled.button`
    flex: 1;
    color: #fff;
    background-color: #010;
    cursor: pointer;
    font-family: 'Roboto Condensed', sans-serif;
    border: none;

    :hover{
      background-color: #121;
    }

  `;

  const BackLink = styled(Link)`
   color: #232;
   display: flex;
   justify-content: flex-end;
   margin-top: 2rem;
   margin-right: 1rem;
  `;

  export default ItemPage;