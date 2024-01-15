import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';

function Card(props){
    let review = props.review;
    return(
        <div className="flex flex-col md:relative">
            <div className='absolute top-[-7rem] z-[10]'>
                <img className='aspect-square rounded-full w-[140px] h-[140px] z-[25]' 
                src={review.image}></img>
                <div className='w-[140px] h-[140px] bg-violet-500 absolute top-[-6px] left-[10px] rounded-full z-[-10]' ></div>
            </div>

            <div className=' text-center mt-7'>
                <p className=' font-bold capitalize text-2xl tracking-wider'>{review.name}</p>
            </div>

            <div className=' text-center'>
                <p className=' text-sm text-violet-300 uppercase'>{review.job}</p>
            </div>


            <div className=' mx-auto text-violet-400 mt-5'>
                <FaQuoteLeft />
            </div>

            <div className=' text-center text-slate-500 mt-4'>
                {review.text}
            </div>

            <div className=' mx-auto text-violet-400 mt-5'>
                <FaQuoteRight />
            </div>
        </div>
    )
}

export default Card;