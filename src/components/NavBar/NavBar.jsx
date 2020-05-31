import React from 'react';
import './NavBar.scss';
import {
  Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../../icons/logo';
import { ReactComponent as Cart } from '../../assets/cart.svg';
import { toggleCart } from '../../store/actions/cart';

function NavBar({ toggleCartDispatch }) {
  return (
    <div className="NavBar">
      <div className="logo">
        <Logo />
      </div>

      <ul className="main-nav">
        <Link to="/">HOME</Link>
      </ul>

      <ul className="right-nav">
        <li>
          <Cart onClick={toggleCartDispatch} />
        </li>
      </ul>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartDispatch: () => dispatch(toggleCart()),
});

export default connect(null, mapDispatchToProps)(NavBar);
