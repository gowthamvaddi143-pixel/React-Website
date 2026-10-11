import { useState } from "react"

export function ButtonEvents(){
    const [pan,setPan] =useState("")

    function handlePanChange(e){
        setPan(e.target.value);
    }
    function handlePanBlur(){
        setPan(pan.toUpperCase())
    }
    return(
        <div className="container-fluid">
            <dl>
                <dt >PAN Number</dt>
                <dd> <input type="text" onChange={handlePanChange} onBlur={handlePanBlur} value={pan} className="form-control w-25"/></dd>
            </dl>


        </div>
    )
}