import React, {useState, useEffect} from 'react'
import styles from './product.module.css'
import Prod from './Prod'
import { decodeUrl } from '../api/gets'

const ShopsDetails = (props) =>{

    const [prod, setProduct] = useState([])
    const [prodShop, setProdShop ] = useState([])
    const [prodfeatures, setProdfeatures ] = useState([])

    const handleProduct = (prods) =>setProduct(prods)

    const handleProdFeatures = (prod_feature) =>setProdfeatures(prod_feature)

    const handleProdShop = (prod_shop) =>setProdShop(prod_shop)

    

    


    useEffect(()=>{
        decodeUrl(props.match.url, handleProduct, handleProdFeatures, handleProdShop)
    },[props.match.url])
    
    
    
    return(
        <div className={styles.pageContainer}>
           <div className={"container-fluid"} style={{margin:"0px", padding:"0px", boxSizing:"border-box"}}>
                <Prod prod={prod} prodShop={prodShop} prodfeatures={prodfeatures} />
           </div>
        </div>
    )
}

export default ShopsDetails