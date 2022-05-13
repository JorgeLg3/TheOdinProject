import ItemCard from "./ItemCard";
import styled from 'styled-components';

const Shop = (props) => {
    return (
      <div>
        <Grid>
            {props.items.map((item) => <ItemCard id={item.id} name={item.name} file={item.image} price={item.price} description={item.description} addToCart={props.addToCart}/>)}
        </Grid>
      </div>
    );
  };

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-auto-rows: calc(1.6*minmax(350px, 1fr));
  gap: 1rem;
  padding: 2rem;
`;

export default Shop;