import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignInScreen from './screens/SignInScreen';



function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin; 
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout()); 
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
            <div className="brand">
                <Link to="/">Curry&Proud</Link>
            </div>
            <div className="">
                <Link to="/cart">
                  <i className="fas fa-shopping-cart"></i>
                  {cartItems.length > 0 && (
                    <span className="badge">{cartItems.length}</span>
                  )}
                </Link>
                {
                  userInfo ? (
                    <div className="dropdown">
                      <Link to="#" >{userInfo.name} <i className="fas fa-caret-down"></i>{ ' ' } 
                      </Link>
                      <ul className="dropdown-content">
                        <Link to="#signout" onClick={signoutHandler}>
                          Sign Out
                        </Link>
                      </ul>
                    </div>
                  ) :
                  (
                    <Link to="/signin">Sign In</Link>
                  )
                }
                
            </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SignInScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">Developed <a href="https://www.paliemmanuel.com" target="_blank" rel='noreferrer'><span>Emmanuel Pali</span></a> All rights reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
