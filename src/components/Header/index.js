import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket} from 'react-icons/md' //importação dos icones

import { Container, Cart } from './styles';

import logo from '../../assets/images/logorocket.svg'; // forma de acessar a logo e utiliza-la
// import cart from '../../store/modules/cart/reducer';

function Header({   cartSize   }) {
    // console.log(cart)

    return(
        <Container>
            <Link to="/">
                <img src={logo} alt='Rocketshoes'/>
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>{cartSize} itens</span>
                </div>
                <MdShoppingBasket size={36} color={"#FFF"}/>
            </Cart>
        </Container>
    );  
}

export default connect(state => ({
    cartSize: state.cart.length,
}))(Header);