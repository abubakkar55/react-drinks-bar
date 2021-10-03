import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const search = <FontAwesomeIcon icon={faSearch} />
    const user = <FontAwesomeIcon icon={faUser} />
    const heart = <FontAwesomeIcon icon={faHeart} />
    const shopping = <FontAwesomeIcon icon={faShoppingBag} />
    return (
        <div className="bg-white shadow-md h-20 px-16 flex justify-between items-center">
            <div className="w-56">
                <img src="https://www.thecocktaildb.com/images/logo.png" alt="logo" />
            </div>
            <div>
                <nav>
                    <ul className="flex items-center gap-12">
                        <li>
                            <NavLink to="/home" className="font-semibold" activeClassName="text-green-400 font-bold" >HOME </NavLink>
                        </li>
                        <li>
                            <NavLink className="font-semibold" activeClassName="text-green-400 font-bold" to="drinks">SHOP </NavLink>
                        </li>
                        <li>
                            <NavLink className="font-semibold" activeClassName="text-green-400 font-bold" to="featured">FEATURED </NavLink>
                        </li>
                        <li>
                            <NavLink className="font-semibold" activeClassName="text-green-400 font-bold" to="testimonials">TESTIMONIALS </NavLink>
                        </li>
                        <li>
                            <NavLink className="font-semibold" activeClassName="text-green-400 font-bold" to="/contact">CONTACT </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
            <ul className="flex items-center gap-5">
            <li className="text-xl hover:text-green-400">
                <NavLink to="/drinks"> {search}   </NavLink>
            </li>

            <li className="text-xl hover:text-green-400">
                <NavLink to="/drinks"> {user}   </NavLink>
            </li>

            <li className="text-xl hover:text-green-400">
                <NavLink to="/drinks"> {heart}   </NavLink>
            </li>

            <li className="text-xl hover:text-green-400">
                <NavLink to="/drinks"> {shopping}   </NavLink>
            </li>

            </ul>
            </div>
        </div>
    )
}

export default Header
