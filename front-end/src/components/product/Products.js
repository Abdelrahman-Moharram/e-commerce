import React, {useState, useEffect} from 'react'
import styles from './product.module.css'
import Prod from './Prod'
import { getProd_subProd } from '../api/gets'

const ShopsDetails = ({selectedLink, handleProdDetailsToggler, toggleProdDetails}) =>{

    const [prod, setProduct] = useState([])
    const [prodShop, setProdShop ] = useState([])
    const [prodfeatures, setProdfeatures ] = useState([])
    const [subProdShop,set_subProdShop] = useState([])

    const handleProduct          = (prods) =>setProduct(prods)

    const handleProdFeatures     = (prod_feature) =>setProdfeatures(prod_feature)

    const handleProdShop         = (prod_shop) =>setProdShop(prod_shop)

    const handleProd_SubFeatures = (sub_fetures)=>set_subProdShop(sub_fetures)

    

    
    
    useEffect(()=>{
        getProd_subProd(selectedLink, handleProduct, handleProdFeatures, handleProdShop, handleProd_SubFeatures)
    },[selectedLink])
    
    
    return(
        
        <div className={styles.pageContainer + " " + (toggleProdDetails? styles.showProdDetails:styles.hideProdDetails)}>
           <div className={"container-fluid"} style={{margin:"0px", padding:"0px", boxSizing:"border-box"}}>
                <Prod prod={prod} prodShop={prodShop} prodfeatures={prodfeatures} subProdShop={subProdShop} handleProdDetailsToggler={handleProdDetailsToggler} />
           </div>
        </div>
    )
}

export default ShopsDetails