import React from 'react';
import styles from './overlay.module.css';
const Overlay = (props) =>{
    return(
        <div className={styles.overlay} onClick={props.handleToggler}>

        </div>
    )
}
export default Overlay