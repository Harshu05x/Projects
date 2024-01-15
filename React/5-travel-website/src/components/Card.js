import {useState} from 'react'

function Card(props){
    const [readMore,setReadMore] = useState(false);
    
    function readMoreHandler(){
        setReadMore(!readMore);
    }
    
    const desc = readMore ? props.info : `${props.info.substring(0,200)}....`;
    return(
        <div className="card">
            <img src={props.image} className="image"></img>
            
            <div className='tour-info'>
                <div className="tourDetails">
                    <h4 className="tourPrice">₹ {props.price}</h4>
                    <h4 className="tourName">{props.name}</h4>
                </div>
            
                <div className="desc">
                    {desc}
                    <span onClick={readMoreHandler} className='readMore'>
                        {readMore ? `....Show Less` : `Read More`}
                    </span>
                </div>
            </div>

            <div className='btns'>
                <button onClick={() => props.addTour(props.id)} className='btn-red'>Interested</button>
                <button onClick={() => props.removeTour(props.id)} className='btn-red'>Not Interested</button>
            </div>            
        </div>
    )

}

export default Card;