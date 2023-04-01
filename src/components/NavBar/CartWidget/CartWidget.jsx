import './cartWidget.css';
import cart from '../../../img/cart.png';


export const CartWidget = () => {
    return (
        <li className='cart_item'>
        <img src={cart} className='cartImg' alt='logo'/>
        <div className='number'>2</div>
    </li>
    );
}


