import React, {useState, useEffect} from 'react'
import ProductDetails from '../components/product/Products'
import { Comments, categoriesLink } from '../components/api/gets'
import styles from './Pages.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFileImage,  faInbox} from '@fortawesome/free-solid-svg-icons'
import { addComment } from '../components/api/posts'
import { Loading } from '../components/Tools/Loads'


const Product = (props) =>{
    var prodId = props.match.params.id

    const [comments, setComments]           = useState([])

    const [commentVal, setCommentVal]       = useState({
        "id":prodId,
        "content":"",
        "image":null,
        "user_image": "/media/defaults/user-icon.png",
        "username": "bo_0dy"

    })
    const handleComments = (data) => setComments(data)
    
    useEffect(()=>{Comments(prodId,handleComments)},[prodId])
    
    const handleComment = (e) =>{

        
        setCommentVal({...commentVal, [e.target.name]:e.target.value})
    }
    
  

    const handleSubmit = (event) => {
        event.preventDefault();

        addComment(commentVal)
        setComments([...comments, commentVal])
        setCommentVal({
            "id":prodId,
            "content":"",
            "image":'',
            "user_image":null,
            "username": ""
        
        })
      }



    const handleKeyDown = (e)=> {
        e.target.style.height = 'inherit';
        e.target.style.height = e.target.scrollHeight+"px"; 
      }
      const myData = [].concat(comments)

    return(
            <div className="bg-white h-100">
                <ProductDetails selectedLink={prodId} main_page={true} />
            
                <div className="container" style={{padding:"0px 0px 10rem"}}>
                    <h3 className="my-5">Comments</h3>
                    
                    <div className="row">
                    <div className={styles.addComment}  style={{height:"fit-content"}}>
                            <form className={styles.CommentInputCont + " d-flex"} onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="col-10">
                                    <textarea rows="1" onKeyDown={handleKeyDown} placeholder="write comment ..." className={styles.CommentInput + " col-10"} type="text" id="content" name="content" onChange={handleComment} value={commentVal.content} />
                                    
                                </div>
                                <div className={" col-2 "} style={{position:"relative"}}>
                                    <div className={styles.AddCommentButtons + " col-12"}>
                                    
                                        <div className="col-5"></div>
                                        <div className={styles.CommentButton  + " col-3 text-center"}>

                                            <label className={styles.FileLabel}  htmlFor="commentImage"><FontAwesomeIcon icon={faFileImage} /></label>
                                            <input className={styles.CommentFile  } id="commentImage" type="file" name="image" onChange={handleComment}  />
                                        </div>

                                        <div className="col-1"></div>
                                        <button type="submit" className={styles.CommentButton + " col-3 text-center " + styles.SendButton}><i  className={"las la-paper-plane"}></i></button>

                                    </div>
                                </div>
                            </form>
                            <div className="previewProfilePic">
                              <img className="playerProfilePic_home_tile" src={commentVal.image} alt={commentVal.image} />
                            </div>
                        </div>
                        {
                            comments !== undefined?
                            comments.length > 0?
                            myData.sort((a, b) => a.itemM > b.itemM ? 1 : -1).map(comment=>(
                            <div key={comment.content+comment.prod+comment.user} className="col-9 my-4">
                                <div>
                                    <div className={styles.comment}>
                                    <Link to="/">
                                        <div>
                                            <img src={categoriesLink+"/"+comment.user_image} alt="" />
                                            <h5>{comment.username}</h5>
                                        </div>
                                    </Link>
                                    <div className={styles.commentContent}>{comment.content}</div>
                                </div>
                                {
                                    comment.image !== null?
                                    <div className={styles.commentImage}>
                                        <img src={categoriesLink+"/"+comment.image} alt="" />
                                    </div>
                                    :null
                                }
                                </div>
                            </div>
                            ))
                            :
                            <div className="text-center">
                                <h3>No Comments</h3>
                                <FontAwesomeIcon icon={faInbox} style={{fontSize:"100px", color:"#333"}} />
                            </div>
                            :<Loading/>

                        }

                        
                    </div>
                </div>
            </div>
            
    )
    
}

export default Product