import React from 'react'
import './Header.css'
import { Link, Redirect } from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from '../../StateProvider'

function Header() {
    const [{basket}] = useStateValue();

    return (
        <nav className="header">
            {/**logo on the left -> img*/}
            <Link to="">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" 
                    alt="Amazon Logo"
                />
                <Redirect to='/https://api.whatsapp.com/send?phone=Hola como estas?'  ></Redirect>
            </Link>

            {/**search box*/}
            <div className="header__search">
                <input type="text" className="header_searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            
            {/**3 links */}
            <div className="header__nav">
                {/*1st link*/}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello,</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>
                {/*2st link*/}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                {/*3st link*/}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                {/*4st link*/}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/* {Shipping basket icon} */}
                        <ShoppingBasketIcon />
                        {/* Number of items in the basket */}
                        <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
