import React ,{ Fragment , useState } from 'react'
// import {Link} from 'react-router-dom'
import './liststyles.css'
import ShopsDetails from '../product/Products'

const ProductsList = ({products}) =>{

    // const makeLink = (name, id) =>{
    //     var n = '' ;
    //     for(var i = 0; i < name.length; i++){
    //         if (name[i] === " "){
    //             n += '_'
    //         }
    //         else{
    //             n += name[i]
    //         }
    //     }
    //     return toLink +  n + "_" + id
    // }

    const [selectedLink, setSelectedLink] = useState(null)
    const [toggleProdDetails, setProdDetailsToggler] = useState(false)

    const handleProd = (id) =>{
        setSelectedLink(id)
        setProdDetailsToggler(!toggleProdDetails)
    }

    const handleProdDetailsToggler = ()=>{
        setProdDetailsToggler(!toggleProdDetails)
    }
    return(
        <Fragment >
            {
                <ShopsDetails selectedLink={selectedLink} toggleProdDetails={toggleProdDetails} handleProdDetailsToggler={handleProdDetailsToggler} />    
            }
        
        {
        products !== undefined?
        <div style={{marginLeft:'0px'}} className="col-12 row prods-container">

        {
            products.map((product) => (                                    
                <div onClick={()=>handleProd(product.id)} key={product.id} className="cards col-lg-4 col-md-6 col-sm-6 col-8 p-lg-2 p-md-2 p-sm-4 my-3 bg-light mx-2">
                <div className="col-12 card-img-container d-table">
                    <img className="card-image col-12" src={product.image} alt="here"/>

                    
                </div>
                <div className="card-title">
                    {product.name}
                </div>
                <div className="discount-price bg-primary">{product.dprice}</div>
                <div className="original-price">{product.oprice}</div>
                <div className="card-desc">
                    {product.desc}
                </div>
                
                <div>
                </div>
                        
                    <div className="col-12 my-0" style={{borderRadius:"0px 0px 10px 10px", overflow:"hidden"}}>
                        <div className="btn btn-dark col-6" style={{borderRadius:'0px'}}>
                            Save 
                            <i  style={{marginLeft:'10px',fontSize:'17px'}} className="las la-plus-circle"></i>
                        </div>
                        <div className="btn btn-primary col-6" style={{borderRadius:'0px'}}>
                            add list
                            <i style={{marginLeft:'10px', fontSize:'17px'}} className="las la-shopping-cart"></i>
                        </div>
                    </div>
                </div>
                
            ))
                }
            
        </div>
        
        :null
            }
        </Fragment>      
    )
}
export default ProductsList