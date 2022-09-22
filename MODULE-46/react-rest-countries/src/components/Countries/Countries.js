import React from 'react';
import { useState, useEffect } from "react";
// import Countries from './Countries';
const Countries = () => {
    const [countries, setCountries] = useState();
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data => console.log(data));
    }, [])
    return (
        <div>
            <h2>I am from countries</h2>
        </div>
    );
};

export default Countries;