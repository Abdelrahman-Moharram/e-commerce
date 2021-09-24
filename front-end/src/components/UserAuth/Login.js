import React from 'react';
import OverlayWithPOP from '../Overlay/OverlayWithPOP'


const Login = (props) =>{
    return (
        <OverlayWithPOP toggleOverlay={props.toggleOverlay}  handleToggler={props.handleToggler} >
          <form className="p-3">
            <div className="form-group my-4">
                <input className="form-control" type="text" name="name" placeholder="username"/>
            </div>
            
            
            
            <div className="form-group my-4">
                <input className="form-control" type="text" name="name" placeholder="password" />
            </div>

            <div className="form-group" style={{float: 'right'}}>
                <button className="btn btn-primary" type="submit">LOGIN</button>
            </div>
          </form>
        </OverlayWithPOP> 
    )
}
export default Login