import React from 'react'
import {Link} from 'react-router-dom'
import './liststyles.css'
const ProductsList = ({products, toLink}) =>{
    const makeLink = (name, id) =>{
        var n = '' ;
        for(var i = 0; i < name.length; i++){
            if (name[i] === " "){
                n += '_'
            }
            else{
                n += name[i]
            }
        }
        return toLink +  n + "_" + id
    }

    return(
        <div style={{marginLeft:'0px'}} className="col-12 row prods-container">

        {
            products.map((product) => (                                    
                <Link  key={product.id} to={makeLink(product.name, product.id)} className="cards col-lg-4 col-md-6 col-sm-6 col-8 p-lg-2 p-md-2 p-sm-4 my-3 bg-light mx-2">
                <div className="col-12 card-img-container d-table">
                    <img className="card-image col-12" src={product.image} alt="here"/>

                    <div className="get-right-arrow">
                        <i className="las la-angle-double-right"></i>
                    </div>
                </div>
                <div className="card-title">
                    {product.name}
                </div>
                <div className="discount-price bg-primary">{product.dprice}</div>
                <div className="original-price">{product.oprice}</div>
                <div className="card-desc">
                    {/* {product.desc} */} some details here
                </div>
                
                <div>
                </div>
                        
                    <div className="col-12 my-0" style={{borderRadius:"0px 0px 10px 10px", overflow:"hidden"}}>
                        <div className="btn btn-dark col-6" style={{borderRadius:'0px'}}>
                            add list
                            <i  style={{marginLeft:'10px',fontSize:'17px'}} className="las la-plus-circle"></i>
                        </div>
                        <div className="btn btn-primary col-6" style={{borderRadius:'0px'}}>
                            add list
                            <i style={{marginLeft:'10px', fontSize:'17px'}} className="las la-shopping-cart"></i>
                        </div>
                    </div>
                </Link>
                
                    ))
                }
            
        </div>
           
    )
}
export default ProductsList