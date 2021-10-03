import React, { useState, useEffect } from 'react'
import { drinkContext } from './../../App';
import SingleProducts from './../SingleProducts/SingleProducts';

const Products = () => {

    // fetching data
    const [data, setData] = useState([]);
    const [searchText, setsearchText] = useState("a");

    useEffect(() => {

        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchText}`)
            .then(res => res.json())
            .then(data => console.log(data));
    }, [searchText])

    const handleEvent = (e) => {
        const text = e.target.value;
        setsearchText(text);
    }

    return (
        <div>
            <div>
                <input type="text" onChange={handleEvent} placeholder="Search your favorite drink" />
            </div>
            <div>
                {
                    data.map(drink => <SingleProducts key={drink.idDrink} drink={drink} />)
                }
            </div>
        </div>
    )
}

export default Products
