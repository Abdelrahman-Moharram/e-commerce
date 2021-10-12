import React,{Fragment, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styles from './product.module.css'
import { Loading, Spinner } from '../Tools/Loads'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes, faHandPointRight} from '@fortawesome/free-solid-svg-icons'

var categoriesLink = "http://127.0.0.1:8000"





const Prod = ({ prod , prodShop, prodfeatures, subProdShop, handleProdDetailsToggler, images}) =>{

    const [image, setImage] = useState(null)

    const MakeStar = () =>{
        var stars = []
        var flag = true
        
        for (var i = 0; i < Math.trunc(prod.avg); i++){
            
                stars.push(<i className="las la-star"  key={i} style={{fontSize:"23px", color:"#FFD75F"}}></i>)
        }
        for (var y = 6, x = Math.trunc(prod.avg); x < 5 ; y++, x++){
            if  ((Math.round(prod.avg) - Math.trunc(prod.avg) >= .5) && flag){
                flag = false
                stars.push(<i className="las la-star-half-alt"  style={{fontSize:"23px", color:"#FFD75F"}} key={x}></i>)
            }else{
                stars.push(<i className="lar la-star"  key={y} style={{fontSize:"23px", color:"#FFD75F"}}></i>)
                
            }
        }
        return stars
    }

    const makeLink = (name, id) =>{
        var n = '' ;
        if (name === undefined)
            return <Spinner />
        for(var i = 0; i < name.length; i++){
            if (name[i] === " "){
                n += '_'
            }
            else{
                n += name[i]
            }
        }
        return   n + "_" + id
    }

    
    const handleImages = (id=null) =>{
        if ( images === undefined  || images.length === 0){
            return <Spinner />
        }
        else{
            var img = null
            if (id === null)
            {
                img = images.filter(el=>el.is_main)[0]
                setImage(categoriesLink+img.image)
            }
            else {
                img = images.filter(el=>el.id === id)[0]
                setImage(categoriesLink+images.filter(el=>el.id === id)[0].image)
            }
        }
    }
    
    useEffect(handleImages,[images])


    
    return (

        <Fragment>
          

            <div className="row justify-content-center"  style={{margin:"0px", padding:"0px", boxSizing:"border-box", boxShadow: "0px 0px 10px #000", borderRadius:"10px"}}>
                    <div className={"col-lg-6 col-md-6 col-sm-12 col-12 m-0 p-lg-5 p-md-4 p-sm-3 p- "+ styles.prodImgCont}>
                        {
                            image?
                                <img className="img-responsive w-100" style={{boxShadow:' 0px 0px 10px #000'}} src={image} alt={"description here"} />
                            : 
                                <Loading />
                        }
                    </div>

                    <div className={"bg-white col-lg-6 col-md-6  col-sm-12 col-12  m-0 " + styles.detailsSide}>
                        <div className={styles.btn10} onClick={handleProdDetailsToggler}>
                            <FontAwesomeIcon icon={faTimes} className={styles.exitIcon + " d-block"} />
                        </div>

                        <Link to={"/products/"+prod.id} className={styles.btn12 + " btn-warning"} onClick={handleProdDetailsToggler}>
                            <div>see product details</div><FontAwesomeIcon icon={faHandPointRight} />
                        </Link>
                        <div className={styles.prodName}>
                            {
                                <h4 style={{margin:"0px"}}>{
                                    prod.name !== undefined ?
                                    prod.name
                                    :
                                        <div className={"text-notfound"}>
                                            <div></div>
                                        </div>
                                    
                                    }</h4>
                            }
                            <Link className={"mx-2"} to={"/shops/" + makeLink(prodShop.name, prodShop.id)}>{prodShop.name}</Link>
                        </div>
                        <div>
                        <div className={"d-inline-block p-3 mx-3"} style={{borderRadius:"10px"}}>
                            <MakeStar key={prod.id} />
                        </div>
                            <span>{prod.avg} {prod.ratings_num  === 0 ?"(" + prod.ratings_num + ") be the first one rate this product " :prod.ratings_num > 1 ? "("+ prod.ratings_num+ ") people ratings" : "("+ prod.ratings_num+ ") one person rate this"}  </span>

                        
                        </div>
                        

                        <div>
                        <div style={{fontWeight:"bold", margin:"10px 0px"}}>
                            Description
                        </div>
                        <div className="px-3">
                            {prod.desc}
                        </div>
                        </div>

                        <div className="my-4">
                            <div style={{fontWeight:"bold", margin:"5px 0px"}}>Colors</div>
                            <div className={styles.colorsContainer}>
                                
                                
                                {images.map(curimage=>(
                                    <div  key={curimage.id} onClick={() => handleImages(curimage.id)} className={styles.prodColors}><div style={{backgroundColor:curimage.color, boxShadow:"0px 0px 10px rgba(0,0,0,0.6)"}} className={styles.innerProdColors + " " + ((categoriesLink+curimage.image) === image? styles.prodColorsActive:null)}></div></div>
                                ))}

                            </div>
                        </div>

                        
                    </div>

                    <div className={styles.featuresSide + " col-lg-12 p-3 text-dark row justify-content-center p-3"}>
                    {
                        
                        prodfeatures.length === 0?
                            <div>
                                Not features added yet
                            </div>
                        :
                            prodfeatures.map(feature=>(
                                <div key={feature.id} className={styles.featuresContainer + " col-lg-3 col-md-4 col-sm-4 col-10 my-3"}>
                                    <div className={styles.featureTitle + " text-center my-2"}>{feature.feature}</div>

                                    {
                                        subProdShop.length === 0?
                                            <div>
                                                Not added yet
                                            </div>
                                            :
                                        <ul className={styles.subFeaturesContainer + "  my-1"}>
                                            {subProdShop[feature.id-1].map(el=><li key={el.id}>{el.desc}</li>)}
                                        </ul>
                                    }

                                </div>                        
                            )
                            )
                        
                        
                    }
                    {/* <div key={feature.id} className={styles.featureTitle}>
                                {feature.feature}
                                
                                
                                
                            </div> */}
                        
                    </div>
                
                    <div className={"col-lg-4 col-md-5 col-sm-7 col-8 my-5 " + styles.addToCard}>
                        <div>
                            <h5 className={styles.addToCardWord}>{prod.name}</h5>
                            <div className={ styles.AddToList + " btn-info"} style={{float: "right"}}>
                                add to list
                            </div>
                        </div>
                    </div>

                    

                </div>

            
        </Fragment>
    )
    

}

export default Prod