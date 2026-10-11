import { useState } from 'react';
import './mouse-demo.css';


export function MouseDown(){

    const [animations,setAnimations] = useState({animationName:"Spin",animationDuration:'5s',animationIterationCount:'infinite',animationTimingFunction:'linear'})
     

    function handleMouseDown(){
        setAnimations({animationDuration:"1s",animationName:'Spin',animationIterationCount:'infinite',animationTimingFunction:'linear'})


    }

    function handleMouseUP(){
        setAnimations({animationDuration:'5s',animationIterationCount:'infinite',animationName:'Spin',animationTimingFunction:'linear'})
    }
    return(
        <div className='d-flex justify-content-center align-items-center ' style={{height:'100vh'}}>
            <img src="react.svg" onMouseDown={handleMouseDown} onMouseUp={handleMouseUP} style={animations} width="200" height="200"/>
            
        </div>
    )
}