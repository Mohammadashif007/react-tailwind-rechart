import React, { useEffect, useState } from "react";
import PriceCart from "../PriceCart/PriceCart";
import Dashbord from "../Dashbord/Dashbord";
import PhoneBar from "../PhoneBar/PhoneBar";

const PriceList = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch("price.json")
            .then((res) => res.json())
            .then((data) => setPrices(data));
    }, []);
    return (
        <div className="mx-12">
            <h1 className="text-5xl text-center bg-purple-300 p-6 font-bold">
                Price List
            </h1>
            <div className="grid md:grid-cols-3 gap-4">
                {prices.map((cartPrice, xid) => (
                    <PriceCart
                        key={xid}
                        cartPrice={cartPrice}
                    ></PriceCart>
                ))}
            </div>
            <Dashbord></Dashbord>
            <PhoneBar></PhoneBar>
        </div>
    );
};

export default PriceList;
