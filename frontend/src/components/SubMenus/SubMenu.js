import React from 'react';
import styles from './Submenu.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'


const SubMenu = ({handleSubMenus, toggleSubMenu,elements, toLink, subTitle}) =>{

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
    return (
        <div className={styles.nestedSubMenu} onClick={handleSubMenus}>
            <div className={styles.subMenuButton + " " +( toggleSubMenu?styles.menuFontawesomeShow: styles.menuFontawesomeHide)}>
                <FontAwesomeIcon icon={faCaretRight} />
                
            </div>
                <div className={styles.subMenuText}  style={{marginLeft:"20px"}}>{subTitle}</div>
                <div style={{marginLeft:'5px', marginTop:'5px'}} className={ styles.submenu + " " +( toggleSubMenu?styles.showSubmenu: styles.hideSubmenu)}>
                {
                    elements.map(el=><Link to={makeLink(el.name, el.id)} key={el.id} className={styles.submenuLink}>{el.name}</Link>
                )}
            </div>
        </div>    
    )
}

export default SubMenu