import React from 'react';

function ColorChanger({setColor}) {
    const colors = [
        "red",
        "green",
        "blue",
        "yellow",
        "gray",
        "cyan",
        "pink",
        "purple",
        "lavender",
    ]   

    return (
        <div className=' flex justify-center items-center px-6 py-4 gap-x-4 bg-white rounded-3xl'>
            {
                colors.map( (color , index) => (
                    <button key={index} onClick={() => setColor(color)} 
                    className={`text-black text-lg rounded-xl px-4  py-2 capitalize`} 
                    style={
                        {
                            backgroundColor: `${color}`,
                        }
                    }>
                        {color}
                    </button>
                ))
            }
        </div>
    );
}

export default ColorChanger;