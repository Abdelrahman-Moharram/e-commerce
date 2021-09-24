import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import styles from './product.module.css'

import goldStar from '../../images/rating-star-icon-19-256.png'
import whiteStar from '../../images/outline-star-icon-19-256.png'
import haifAndHaif from '../../images/half_star.png'

const Prod = ({ prod , prodShop, prodfeatures}) =>{
    const MakeStar = () =>{
        var stars = []
        var flag = true
        
        for (var i = 0; i < Math.trunc(prod.avg); i++){
                stars.push(<img key={i} style={{width:"20px"}} src={goldStar} alt="NOT HERE" />)
        }
        for (var y = 6, x = Math.trunc(prod.avg); x < 5 ; y++, x++){
            if  ((Math.round(prod.avg) - Math.trunc(prod.avg) >= .5) && flag){
                flag = false
                stars.push(<img key={y} style={{width:"20px"}} src={haifAndHaif} alt="NOT HERE" />)
            }else{
                stars.push(<img key={x} style={{width:"20px"}} src={whiteStar} alt="NOT HERE" />)
            }
        }
        return stars
    }

    const makeLink = (name, id) =>{
        var n = '' ;
        if (name === undefined)
            return 0
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


    
    return (

        <Fragment>
            <div className="row justify-content-center"  style={{margin:"0px", padding:"0px", boxSizing:"border-box", boxShadow: "0px 0px 10px #000", borderRadius:"10px"}}>
                    <div className={"col-lg-6 col-md-6 col-sm-12 col-12 m-0 p-lg-5 p-md-4 p-sm-3 p- "+ styles.prodImgCont}>
                        <img className="img-responsive w-100" src={prod.image} alt={"description here"} />
                    </div>

                    <div className={"bg-white col-lg-6 col-md-6  col-sm-12 col-12  m-0 " + styles.detailsSide}>
                        <div className={styles.btn10 + " btn-warning"}>
                            <i className={"las la-long-arrow-alt-left " + styles.backArrow}></i>
                            <div className={styles.backToCollectionWord}>Back To Collections</div>
                        </div>
                        <div className={styles.prodName}>
                            <h4 style={{margin:"0px"}}>{prod.name}</h4>
                            <Link className={"mx-2"} to={"/shops/" + makeLink(prodShop.name, prodShop.id)}>{prodShop.name}</Link>
                        </div>
                        <div>
                        <div className={"d-inline-block p-3 mx-3"} style={{borderRadius:"10px"}}>
                            <MakeStar key={prod.id} />
                        </div>
                            <span>{prod.avg} {prod.ratings_num  === 0 ?"(" + prod.ratings_num + ") be the first one rate this product " :prod.ratings_num > 1 ? "("+ prod.ratings_num+ ") people ratings" : "("+ prod.ratings_num+ ") one person rate this"}  </span>

                        
                        </div>
                        <div className="my-4">
                            <div style={{fontWeight:"bold", margin:"5px 0px"}}>Colors</div>
                            <div className={styles.colorsContainer}>
                                <div className={styles.prodColors}><div style={{backgroundColor:"#d41191"}} className={styles.innerProdColors + " " + styles.prodColorsActive}></div></div>
                                <div className={styles.prodColors}><div style={{backgroundColor:"#c04e99"}} className={styles.innerProdColors}></div></div>
                                <div className={styles.prodColors}><div style={{backgroundColor:"#fc466b"}} className={styles.innerProdColors}></div></div>
                            </div>
                        </div>

                        <div>
                        <div style={{fontWeight:"bold", margin:"10px 0px"}}>
                            Description
                        </div>
                        <div className="px-3">
                            {prod.desc}
                        </div>
                        </div>

                        
                    </div>

                    <div className={styles.featuresSide + " col-lg-12 p-3 text-dark"}>
                    {
                        prodfeatures.map(feature=><div key={feature.id} className={styles.featureTitle}>{feature.feature}</div>)
                    }
                        
                    </div>
                
                    <div className={"col-lg-4 col-md-5 col-sm-7 col-8 my-5 " + styles.addToCard}>
                        <div>
                            <h5 className={styles.addToCardWord}>{prod.name}</h5>
                            <div className={ styles.btn10 + " btn-info"} style={{float: "right"}}>
                                add to list
                            </div>
                        </div>
                    </div>

                    

                </div>
           
        </Fragment>
    )
    

}

export default Prod