import { Link } from 'react-router-dom';
import cart from '../../imgs/Frame.svg';
import user from '../../imgs/Frame(1).svg';
import arrow from '../../imgs/Frame(2).svg';
import searchIcon from '../../imgs/Vector.svg';
import './header.css';
import { useState } from 'react';

export const Header = () => {
    const [open,setOpen] = useState(false);

    const handlerOpen =() => {
        setOpen(!open)
    }

    return (
        <header className='header'>
            <div>
                <Link to={'/'}><h2>SHOP.CO</h2></Link>
            </div>
            <div className='links'>
            <div onClick={handlerOpen} className='shopLinks'><p>Shop</p><img src={arrow} alt="" /></div>

            {
             open === true ? (<div className={`pageLinks`}>
                <Link to={'/'}><p>Home page</p></Link>
                <Link to={'/category'}><p>Category page</p></Link>
                <Link to={'/cart'}><p>Cart page</p></Link>
            </div>
            ) : ''   
            }
           




            <p><a href="#on-sale">On Sale</a></p>
            <p><a href="#on-newArrivals">New Arrivals</a></p>
            <p><a href="#on-brands">Brands</a></p>
            </div>
            <div className='inputSearch'>
            <img src={searchIcon} alt="" />
            <input type="text" placeholder='Search for products...'/>
            </div>
            <div className='icons'>
            <img src={cart} alt="" />
            <img src={user} alt="" />
            </div>
            
        </header>
    );
}