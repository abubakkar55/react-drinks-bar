import React from 'react';
import Header from '../Header/Header';
import "./Home.css";
import innerBanner from "../../../src/images/bg_content.png";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import FeaturedPRoducts from '../FeaturedPRoducts/FeaturedPRoducts';

const Home = () => {
    const cart = <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
    return (
        <div>
            <div className="banner">
                <div className="flex h-screen items-center justify-center">
                    <div className="text-white">
                        <h1 className="text-5xl font-bold heading leading-tight"> DRINK FRESH <br /> FIGHT FOOD WASTE</h1>
                        <p className="text-gray-200 text-lg mt-3 mb-6"> We will share all the fresh drink, fruit and veg with you.</p>
                        <NavLink className="bg-black px-12 py-4 font-semibold hover:bg-green-600" to="/drinks"> {cart} Shop Now </NavLink>
                    </div>
                </div>
            </div>

            <main>
                <section className="py-16">
                    <FeaturedPRoducts />
                </section>

            </main>
        </div>
    )
}

export default Home
