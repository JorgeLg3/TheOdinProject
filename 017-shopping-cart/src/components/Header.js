import {useParams, useNavigate, Link} from 'react-router-dom';
import styled from 'styled-components';

const Header = (props) => {

    return (
      <HeaderBar>
        <nav>
            <NavLink to="/"> HOME </NavLink>
            <NavLink to="/shop"> SHOP </NavLink>
        </nav>
        <CartIcon className="material-icons" onClick={() => props.showEvent()}>{props.show === true ? 'close' : 'shopping_cart'}</CartIcon>
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
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-family: sans-serif;
  color: #ffffff;
  margin-right: 2rem;
  font-size: 1rem;
`

const CartIcon = styled.span`
  cursor: pointer;

  &:hover {
      color: #aaa;
  }
`;

export default Header;