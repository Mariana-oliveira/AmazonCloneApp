import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from "./StateProvider"


function Header() {

    const [ { basket } ] = useStateValue();

    console.log(basket)

    return (
        <nav className="header">
            {/* Logo on the left -> img */}
            <Link to="/">
                <img 
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                    alt="Amazon logo"
                />
            </Link>            
            {/* Search box */}
            <div className="header__search">
                <input className="header__searchInput" />
                <SearchIcon className="header__searchIcon"/>
            </div>

            {/* SignIn Link */}
            <div className="header__nav">
                {/* 1st link */}
                <Link to="/login"  className="header__link"> 
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Qazi</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>

                </Link>

                {/* Returns & Orders link */}
                <Link to="/"  className="header__link"> 
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>

                </Link>
                
                {/* Your Prime link */}
                <Link to="/"  className="header__link"> 
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>

                </Link>
                
                {/* Basket link */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/* Shopping Basket icon */}
                        <ShoppingBasketIcon/>
                        {/* Nº of items in the Basket*/}
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>


            </div>

            {/* Basket icon with number */}
        </nav>
    )
};

export default Header;
