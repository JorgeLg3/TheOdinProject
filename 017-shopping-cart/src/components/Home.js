import styled from 'styled-components';
import backgroundImg from '../assets/imgs/background.jpg';
import img1 from '../assets/imgs/img16.jpg';
import img2 from '../assets/imgs/img9.jpg';

const Home = () => {
  return (
    <HomeContainer>
      <Text>
        <Title>THE FASHION MOOD</Title>
        <SubTitle>"Fashion for Fashion"</SubTitle>
      </Text>
      <ShopDisplay>
        <Button>Start!</Button>
        <Card1></Card1>
        <Card2></Card2>
        <Card3></Card3>
      </ShopDisplay>
      
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  background: linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0)), url(${backgroundImg}) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
  z-index: -1;
  position: fixed;
  width: 100%;
  font-family: 'Roboto Condensed', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-top: 4rem;
  margin-left: min(50px, 20vw);
`;

const Title = styled.div`
  color: white;
  font-size: 5rem;
  text-align: left;
`;

const SubTitle = styled.div`
  color: white;
  text-align: right;
`;

const ShopDisplay = styled.div`
  align-self: flex-end;
  margin: 0rem 3rem 8rem 0;
  display: grid;
  gap: 0;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background-color: yellow;
  position: relative;
`;

const Button = styled.div`
  padding: 0.5rem 3rem;
  border-radius: 5px;
  border: 2px white solid;
  color: white;
  transition: 0.5s;
  font-size: 1.2rem;
  cursor: pointer;
  position: absolute;
  right: 330px;;
  bottom: 320px;
  z-index: 3;

  :hover{
    background-color: rgba(255,255,255, 0.2);
  }
`

const Card1 = styled.div`
  background-color: white;
  height: 400px;
  width: 300px;
  background: url(${img1});
  background-size: cover;
  grid-row: 1/3;
  grid-column: 2/3;
  border-radius: 3px;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 2;
`
const Card2 = styled.div`
  background-color: white;
  height: 200px;
  width: 300px;
  background: url(${img2});
  background-size: cover;
  border-radius: 3px;
  position: absolute;
  right: 310px;
  bottom: 100px;
  z-index: 1;
`

const Card3 = styled.div`
  background-color: black;
  height: 50px;
  width: 500px;
  border-radius: 3px;
  position: absolute;
  right: -30px;
  bottom: 40px;
  z-index: 1;
`