import './Content.css'
import { useState } from 'react'

function Content(props){

    const [val,setVal] = useState(props.val);
    function minusBtnHandler(){
        setVal(val-1);
    }
    
    function plusBtnHandler(){
        setVal(val+1);
    }

    function btnClickHandler(){
        setVal(0);
    }


    return(
        <div className="content">
            <div className="contentDiv"> 
                <p onClick={() => { setVal(val-1) }} >-</p>
                <p className="middlePara" >{val}</p>
                <p onClick={() => { setVal(val+1) }}>+</p>
            </div>
            <button onClick={() => { setVal(0)} }>Reset</button>
        </div>
        
    )
}

export default Content;