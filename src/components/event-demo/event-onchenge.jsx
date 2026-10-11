import { useState } from "react"

export function EvenetOnChenge(){
const [uname,setUname]=useState("john")
function NameChenge(e){
    setUname(e.target.value);

}



    return(
        <div className="container-fluid">
            <input type="text" value={uname} onChange={NameChenge}/>
        
        <p>hello ! {uname}</p>
        </div>

    )
}