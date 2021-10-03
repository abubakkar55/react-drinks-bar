import React, { useContext } from 'react'
import { drinkContext } from '../../App'
import "./Featured.css"
const FeaturedPRoducts = () => {
    const data = useContext(drinkContext);
    return (
        <div className="px-20">
            <h1 className="text-5xl font-bold text-center py-14">FEATURED PRODUCTS </h1>
            <div className="grid grid-cols-4 gap-12">
                {
                    data.map(drink => {
                        return (
                            <div className="drink flex items-center justify-center flex-col">
                                <img className="drink-img w-52 rounded-full border-8 hover:border-green-500" src={drink.strDrinkThumb} alt={drink.strDrink} />
                                <h1 className="mt-6 text-xl font-semibold">{drink.strDrink} </h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FeaturedPRoducts
