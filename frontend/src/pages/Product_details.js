import React, {useState, useEffect} from 'react'
import ProductDetails from '../components/product/Products'
import { Comments, categoriesLink } from '../components/api/gets'
import styles from './Pages.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInbox} from '@fortawesome/free-solid-svg-icons'



const Product = (props) =>{
    var prodId = props.match.params.id

    const [comments, setComments] = useState([])

    const handleComments = (data) => setComments(data)
    
    useEffect(()=>{Comments(prodId,handleComments)},[prodId])
    

    return(
            <div className="bg-white h-100">
                <ProductDetails selectedLink={prodId} main_page={true} />
            
                <div className="container" style={{padding:"0px 0px 10rem"}}>
                    <h3 className="my-5">Comments</h3>
                    <div className="row">
                        {
                            comments.length !== 0?
                            comments.map(comment=>(
                            <div key={comment.id} className="col-12 my-4">
                                <div className={styles.comment}>
                                    <Link to="/">
                                        <div>
                                            <img src={categoriesLink+"/"+comment.user_image} alt="" />
                                            <h5>{comment.username}</h5>
                                        </div>
                                    </Link>
                                    <div className={styles.commentContent}>{comment.content}</div>
                                </div>
                            </div>
                            ))
                            :
                            <div className="text-center">
                                <h3>No Comments</h3>
                                <FontAwesomeIcon icon={faInbox} style={{fontSize:"100px", color:"#333"}} />
                            </div>
                        }
                    </div>
                </div>
            </div>
            
    )
    
}

export default Product