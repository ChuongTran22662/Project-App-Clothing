import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import './cart-icon.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'></ShoppingIcon>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => {
    return ({
        toggleCartHidden: () => dispatch(toggleCartHidden())
    })
}

const mapStateToProps = (state) => {
    return ({
        itemCount: selectCartItemCount(state)
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);