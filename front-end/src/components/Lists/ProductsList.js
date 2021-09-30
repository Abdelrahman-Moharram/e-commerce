import React ,{ Fragment , useState } from 'react'
// import {Link} from 'react-router-dom'
import './liststyles.css'
import ShopsDetails from '../product/Products'


function makedesc(text){
    return text.slice(0 ,75)   
}



const ProductsList = ({products, images}) =>{

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

    const get_image = (id)=>{
        if (images === undefined || images.length === 0)
            return 0 

        var img = images.filter(el=>el.prod === id && el.is_main)[0]
        return img.image
    }

    return(
        <Fragment >
            {
                <ShopsDetails selectedLink={selectedLink} toggleProdDetails={toggleProdDetails} handleProdDetailsToggler={handleProdDetailsToggler} />    
            }
        
        {
        products !== undefined?
        <div style={{marginLeft:'0px'}} className="col-12 row prods-container justify-content-lg-start justify-content-md-start justify-content-center">

        {
            products.map((product) => (                                    
                <div onClick={()=>handleProd(product.id)} key={product.id}  style={{height:"auto !important"}} className=" col-lg-4 col-md-5 col-sm-5 col-8  p-2 my-3">
                    <div className="cards p-2 bg-light" style={{height:"100%"}}>
                    <div className="col-12 card-img-container d-table">
                    
                        
                    <img className="card-image col-12" src={get_image(product.id)} alt="here"/>
                        
                    

                    
                </div>
                <div className="card-title">
                    {product.name}
                </div>
                <div className="discount-price bg-primary">{product.dprice}</div>
                <div className="original-price">{product.oprice}</div>
                <div className="card-desc">
                    {
                        product.desc.length > 75 ?  <div>{makedesc(product.desc)} <span style={{color: '#000'}}>...</span></div>:product.desc
                    }
                </div>
                
                <div>
                </div>
                        
                    <div className="col-12 my-0" style={{borderRadius:"0px 0px 10px 10px", overflow:"hidden"}}>
                        <div className="btn btn-dark col-6" style={{borderRadius:'0px',fontSize:'14px'}}>
                            Save 
                            <i  style={{marginLeft:'10px',fontSize:'17px'}} className="las la-plus-circle"></i>
                        </div>
                        <div className="btn btn-primary col-6" style={{borderRadius:'0px',fontSize:'14px'}}>
                            add list
                            <i style={{marginLeft:'10px', fontSize:'17px'}} className="las la-shopping-cart"></i>
                        </div>
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