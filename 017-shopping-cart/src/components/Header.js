import {useParams, useNavigate, Link} from 'react-router-dom';
import styled from 'styled-components';

const Header = (props) => {

    return (
      <HeaderBar>
        <nav>
            <NavLink to="/"> HOME </NavLink>
            <NavLink to="/shop"> SHOP </NavLink>
        </nav>
        <div>
          <CartIcon className="material-icons" onClick={() => props.showEvent()}>{props.show === true ? 'close' : 'shopping_cart'}</CartIcon>
          <CartCounter nItems={props.nItems} show={props.show}>{props.nItems}</CartCounter>
          
          
        </div>
        
      </HeaderBar>
    );
  };
  
const HeaderBar = styled.div`
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    color: #ffffff;
    position: sticky;
    top: 0;

    > div{
      position: relative;
    }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-family: sans-serif;
  color: #ffffff;
  margin-right: 2rem;
  font-size: 1rem;
`

const CartIcon = styled.div`
  cursor: pointer;
  position: relative;
  &:hover {
      color: #aaa;
  }
`;

const CartCounter = styled.div`
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: rgba(150,150,150, 0.8);
  position: absolute;
  right: -3px;
  top: -5px;
  border: solid 1px black;
  outline: solid 1px rgba(150,150,150, 0.8);
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  transition: 0.75s;
  opacity: ${(props) => ((props.show === false && props.nItems > 0) ? '1' : '0')};
`

export default Header;