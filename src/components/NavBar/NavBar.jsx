import './navBar.css';
import logo from '../../img/logo.png'
import {MenuItems} from './MenuItems/MenuItems.jsx';
import {CartWidget} from './CartWidget/CartWidget.jsx';


export const NavBar = () => {
    return (
        <div className='navBar'>
            <img src={logo} alt="logo" className='logo'/>
            <MenuItems/>            
            <CartWidget/>            
        </div>
    );
}


