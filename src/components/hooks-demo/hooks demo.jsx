import { useEffect, useInsertionEffect, useLayoutEffect, useState } from "react"




export function Login(){

const [id] =useState(2)
     


    useEffect(()=>{
        console.log('Login Mounted');
        return()=>{
            console.log('Login unmounted')
        }
    },[])

     useEffect(()=>{
        console.log(' Mounte again when ID chenges')
     },[id])


    return(
        <div>
            <h1>Login</h1>
        </div>
    )
}

export function Register(){

    

    useEffect(()=>{
        console.log('register Mounted');
        return()=>{
            console.log(" register unMounted")
        }
    },[])

    useLayoutEffect(()=>{

        console.log('layOut Effect')
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log(
                `
                Latitude : ${position.coords.latitude}\n
                longitude : ${position.coords.longitude}
                `
            )
        })
        
    },[])

        useInsertionEffect(()=>{
            var style = document.createElement("style");
            style.innerHTML = `
                h2{
                color: red;
                border: 10px solid black;
                padding : 10px;
               text-align: center;
                }
                `;
                document.querySelector("head").appendChild(style);
                console.log("user insertion Effect")
            
        },[])


    return(
        <div>
            <h2>Register</h2>
        </div>
    )
}

export function HooksDemo(){

    const [view,setView] = useState('')


    function LoginClick(){
        setView(<Login/>)
    }

    function RegisterClick(){
        setView(<Register/>)
    }


    return(
        <div className="container-fluid">
            <button className="m-4" onClick={LoginClick}>Login</button>
            <button className="m-4" onClick={RegisterClick}>Register</button>

            <hr />
            {
                view
            }

        </div>
    )
}