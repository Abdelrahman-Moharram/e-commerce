import React, {Fragment} from 'react'
import Overlay from './Overlay'
import styles from './overlay.module.css';

const OverlayWithPOP = (props) =>{
    return (<Fragment>
        {
            props.toggleOverlay ?
            <Overlay handleToggler={props.handleToggler} />
            :null}
            <div className="container">
                <div className="row justify-content-center">
                    <div className={ ( props.toggleOverlay ?  styles.activate : styles.deactivate) + " " + styles.popup + " col-lg-6 col-md-6 col-sm-10 col-11 "}>
                        {props.children}
                    </div> 
                </div> 
            </div>
        
    </Fragment>)

}
export default OverlayWithPOP