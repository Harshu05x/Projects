import React from 'react';
import { useState,useEffect } from 'react';
import { currency_list } from '../assets/data';

function useCurrencyInfo(currency) {
    const API_URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
    
    const [currencyInfo, setCurrencyInfo] = useState({});
    const [currencyOptions, setCurrencyOptions] = useState(currency_list);

    async function fetchCurrency(currency){
        try{
            const res = await fetch(API_URL);
            const data = await res.json();
            setCurrencyInfo(data[`${currency}`]);
        }
        catch(error){
            alert(error.message);
        }
    }

    useEffect(() => {
        fetchCurrency(currency);
    },[currency]);

    return {currencyInfo,currencyOptions,setCurrencyInfo};

}

export default useCurrencyInfo;