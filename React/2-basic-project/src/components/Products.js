import './Products.css'
import ProductItem from './ProductItem';

function Products(props){
    return(
        <div className="Products">
            <ProductItem item={props.items[0]}></ProductItem>
            <ProductItem item={props.items[1]}></ProductItem>
            <ProductItem item={props.items[2]}></ProductItem>
            <ProductItem item={props.items[3]}></ProductItem>
        </div>
    )
}

export default Products;