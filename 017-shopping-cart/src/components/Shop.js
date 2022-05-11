import ItemCard from "./ItemCard";


const Shop = (props) => {
    return (
      <div>
        <h1>Hello from Shop</h1>
        <div className="shop-grid">
            {props.items.map((item) => <ItemCard id={item.id} name={item.name} file={item.image} price={item.price} description={item.description}/>)}
        </div>
      </div>
    );
  };
  
  export default Shop;