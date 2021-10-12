import React, { useState } from 'react'

const FilterProds = ({handleSearchWord})=>{
    const [searchVal, setSearchVal] = useState('')
    const [checkbox, setCheckbox] = useState({
        "option1":false,        
        "option2":false,
        "option3":false,
        "option4":false,
        "option5":false
    })

    const handleSearchVal = (e)=>
    {
        setSearchVal(e.target.value)
        handleSearchWord(e.target.value)
    }

    const handleCheckBoxs = (e) =>{
        var key = e.target.name
        // var val = e.target.value
        setCheckbox((prev)=>setCheckbox({...prev,[key]:!checkbox[key]}))
        console.log(checkbox)
    }


    // const handleLimiter =(e)=>{
    //     console.log(e.target.value)
    // }

    return (
        <div>
            <form>
                <div className="form-group p-1">
                  <input type="text" className="form-control" placeholder="search..." value={searchVal} onChange={handleSearchVal}/>
                </div>

                <div className="px-2">
                    <div className="form-check form-check">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" onChange={handleCheckBoxs} name="option1" />
                        <label className="form-check-label" hmtlfor="inlineCheckbox1">Techs</label>
                    </div>

                    <div className="form-check form-check">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" onChange={handleCheckBoxs} name="option2" />
                        <label className="form-check-label" hmtlfor="inlineCheckbox2">Furnitures</label>
                    </div>
                    
                    <div className="form-check form-check">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" onChange={handleCheckBoxs} name="option3" />
                        <label className="form-check-label" hmtlfor="inlineCheckbox3">Make ups</label>
                    </div>
                    
                    <div className="form-check form-check">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox4" onChange={handleCheckBoxs} name="option4" />
                        <label className="form-check-label" hmtlfor="inlineCheckbox3">clothes</label>
                    </div>
                    
                    <div className="form-check form-check">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox5" onChange={handleCheckBoxs} name="option5" />
                        <label className="form-check-label" hmtlfor="inlineCheckbox3">fitness tools</label>
                    </div>
                </div>
                

                
            </form>
        </div>
    )
}

export default FilterProds


// <div>
//                     <div className="form-group my-4 d-block w-100">
//                         <label className="limit-label">1</label>
//                         <label className="limit-label right-limiter">1000000</label>
//                       <input type="range" className="form-control-range d-block w-100" id="formControlRange" onChange={handleLimiter} />
//                     </div>
//                 </div>