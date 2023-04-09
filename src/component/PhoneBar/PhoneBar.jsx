import React, { useEffect, useState } from "react";

import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

import axios from "axios";

const PhoneBar = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data));
        axios
            .get(
                "https://openapi.programming-hero.com/api/phones?search=iphone"
            )
            .then((data) => {
                const loadedData = data.data.data;
                console.log(loadedData);
                const phonesData = loadedData.map((phone) => {
                    const parse = phone.slug.split("-");

                    const phoneInfo = {
                        price: parseInt(parse[1]),
                        name: phone.phone_name,
                    };
                    return phoneInfo;
                });
                setPhones(phonesData);
            });
    }, []);
    return (
        <div>
            {/* <ResponsiveContainer width="100%" height="100%"> */}
                <BarChart width={650} height={400} data={phones}>
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey="name"></XAxis>
                    <YAxis dataKey="price"></YAxis>
                    <Tooltip></Tooltip>
                    <Cell></Cell>
                    <CartesianGrid></CartesianGrid>
                    <Legend></Legend>
                </BarChart>
            {/* </ResponsiveContainer> */}
        </div>
    );
};

export default PhoneBar;
