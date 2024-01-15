import './ProductItem.css'
import MfgDate from './MfgDate.js'

function ProductItem(props){
    return(
        <div className="ProductItem">
            <MfgDate date={props.item.date}></MfgDate>
            <div>
                <h2>{props.item.name}</h2>
            </div>
        </div>
    )
}

export default ProductItem;