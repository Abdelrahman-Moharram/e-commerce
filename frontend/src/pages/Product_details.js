import ProductDetails from '../components/product/Products'



const Product = (props) =>{
    console.log(props.match.params.id)

    return(
        <div>
            <ProductDetails selectedLink={props.match.params.id} main_page={true} />
        </div>
    )
    
}

export default Product