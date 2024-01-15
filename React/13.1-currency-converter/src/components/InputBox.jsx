import React, { useState } from 'react';
import { currency_list } from '../assets/data';

function InputBox({lable,data,setData}) {
    
    function changeHandler(event){
        setData( prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <div className={`flex justify-between items-center mx-auto text-lg
        w-full bg-white p-3 rounded-lg mb-2`}>
            <div className=' flex flex-col gap-y-3'>
                <p className='text-black/40 capitalize'>{lable}</p>
                <input type="number" value={lable === 'form' ? data.formamount : data.toamount} onChange={changeHandler} 
                name={`${lable === 'form' ? "formamount" : "toamount"}`}
                className=' bg-transparent'/>
            </div>

            <div className=' flex flex-col gap-y-3'>
                <p className=' text-black/40'>Currency Type</p>
                <select value={lable === 'form' ? data.fromcurrencyType : data.tocurrencyType} 
                name={`${lable === 'form' ? "fromcurrencyType" : "tocurrencyType"}`}
                onChange={changeHandler}
                className=' bg-transparent rounded-lg px-1 py-1 bg-gray-200 cursor-pointer outline-none capitalize'>
                        {
                            currency_list.map((option) => (
                                <option key={option.code} value={option.code.toLowerCase()}
                                className=' bg-white/40 capitalize text-sm'
                                >{option.name.toLowerCase()}</option>
                            ))
                        }
                </select>
            </div>
        </div>
    );
}

export default InputBox;