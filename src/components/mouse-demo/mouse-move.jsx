import { useState } from "react"

export function MouseMove(){
    const [ photo, setPhoto] = useState({position:'',top:'',left:''})
    function handleMove(e){
setPhoto({position:'fixed',top:e.clientY +'px',left:e.clientX +'px'})
    }
    


    return(
        <div className="continer-fluid d-flex justify-content-center align-items-center " style={{height:'100vh'}} onMouseMove={handleMove}>
            <img src="favicon.svg" width="100" height="100" style={photo}/>
             
             
        </div>
    )
}