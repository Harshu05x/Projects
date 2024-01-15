
import React from 'react';
import { useId } from 'react';

function Select({
    lable,
    options,
    className = "",
    ...props
},ref) {
    
    const id = useId();
    return (
        <div className=' w-full'>
            {
                lable &&
                <lable htmlfor={id} ></lable>
            }

            <select
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            id={id}
            ref={ref}
            {...props}
            >
                {
                    options?.map( (option,index) => (
                        <option
                            key={index}
                            value={option}
                        >
                            {option}
                        </option>
                    ))
                }
            </select>
        </div>
    );
}

export default React.forwardRef(Select);