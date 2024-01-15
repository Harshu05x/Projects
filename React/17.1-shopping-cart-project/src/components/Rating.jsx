import React from 'react';
import { BsFillStarFill , BsStar} from 'react-icons/bs';
import { BsStarHalf} from 'react-icons/bs'

function Rating({rating}) {
    console.log(rating);
    const Stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
        Stars.push(<BsFillStarFill key={i} />);
    }
    Stars.push(<BsStarHalf />);
    for (let i = 1; i < 5 - Math.floor(rating); i++) {
        Stars.push(<BsStar key={i} />);
    }
    return (
        <div className=' flex text-slate-900'>
            {
                Stars
            }        
        </div>
    );
}

export default Rating;