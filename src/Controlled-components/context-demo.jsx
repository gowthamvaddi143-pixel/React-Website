import { createContext, useContext, useState } from "react";


let UserContext = createContext(null);

export function Level2(){
    let data = useContext(UserContext);



return(
    <div className="container p-5 bg-warning">
        <h2>Level-2 Heloo! {data}</h2>

    </div>
)
}

export function Level1(){


    let data = useContext(UserContext);
     return(
        <div className="container p-5 bg-dark text-white">
            <h3>Level-1 helo {data}</h3>
            <Level2/>

        </div>
     )


}

export function ContextDemo(){
     
    const [username, setUserName] = useState('')

    function handleNameChange(e){
        setUserName(e.target.value);
    }

    return(
        <div className="container-fluid bg-danger text-white p-5 ">
            <h2> Parent <input onChange={handleNameChange} type="text" placeholder="user name" /></h2>
            <p>hello !{username} </p>

            <UserContext value={username}> 
                <Level1/>
            </UserContext>


        </div>
    )
}