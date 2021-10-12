import React from 'react'

export const Spinner = ()=>{
    return(
        <div className="spinner">
            <div className="spinner-border d-block text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export const Loading = () =>{
    return (
        <div className={"w-100 image-notfound d-flex justify-content-center"}>                           
            <div className="spinner-grow text-dark" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-dark" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-dark" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}