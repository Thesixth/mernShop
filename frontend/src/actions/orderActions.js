import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, PAY_ORDER_FAIL, PAY_ORDER_REQUEST, PAY_ORDER_SUCCESS } from "../constants/orderConstants";
import Axios from 'axios';
import { EMPTY_CART } from "../constants/cartConstants";

export const createOrder = (order) => async ( dispatch, getState ) => {
    dispatch({type: CREATE_ORDER_REQUEST, payload: order });
    try{
        const { userSignin: { userInfo }} = getState();
        const { data } = await Axios.post('/api/orders', order, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: data.order });
        dispatch({ type: EMPTY_CART });
        localStorage.removeItem('cartItems');
    } catch (error) {
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }
};

export const detailsOrder = (orderId) => async (dispatch, getState) => {
    dispatch({ type: ORDER_DETAILS_REQUEST, payload: orderId});
    const { userSignin: { userInfo }} = getState();
    try {
        const { data } = await Axios.get(`/api/orders/${orderId}`, 
        {headers: { Authorization: `Bearer ${userInfo.token}`}
        });
        dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data});
    } catch (error) {
        const message =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
            dispatch({
                type: ORDER_DETAILS_FAIL,
                payload: message}) 
    }
};

export const payOrder = (order, paymenResult) => async (dispatch, getState) => {
    dispatch({ type: PAY_ORDER_REQUEST, payload: { order, paymenResult } });
    const { userSignin : { userInfo }} = getState();
    try {
      const { data } = Axios.put(`/api/orders/${order._id}/pay`, paymenResult, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
      });
       dispatch({ type: PAY_ORDER_SUCCESS, payload: data }) 
    } catch (error) {
        const message =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
            dispatch({
                type: PAY_ORDER_FAIL,
                payload: message}) 
    }
}