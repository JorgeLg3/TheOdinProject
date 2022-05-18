import items from "../items";
import {useParams, useNavigate} from 'react-router-dom';
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
            <Title>{item.name}</Title>
            <Description>{item.description}</Description>
            <Price>{item.price}$</Price>
            <Input type='number' value={number} onChange={onChangeHandler}></Input>
            <button onClick={() => props.addToCart(id, item.name, item.price, number)}>Buy!</button>
            <button onClick={() => {navigate('/shop')}}>Back Market</button>
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
  `;

  const Title = styled.h1`
    font-size: 2rem;
  `;

  const Description = styled.p`
    font-size: 1rem;
  `

  const Price = styled.h2`
    font-size: 1.2rem;
    align-self: flex-end;
    margin-top: 1rem;
    padding: 0 0.5rem;
  `;

  const Input = styled.input`
    
  `;

  export default ItemPage;