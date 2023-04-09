import React from "react";

const PriceCart = ({ cartPrice }) => {
    const { name, price, features } = cartPrice;
    return (
        <div className="bg-indigo-400 mt-5 rounded-md p-4 my-6">
            <span className="text-purple-100 text-5xl font-extrabold text-center">
                {price}
            </span>
            <span className="text-2xl text-center">/mon</span>
            <p className="text-2xl font-bold ">{name}</p>
            <p>Features : </p>
            <div>
                {features.map((feature) => (
                    <li key={cartPrice.id}>{feature}</li>
                ))}
            </div>
        </div>
    );
};

export default PriceCart;
