import { useState } from "react"

export function ConditionSignin(){
     const [username,setUserName] =useState('')

     function handleNameChenge(e){
        setUserName(e.target.value);

     }

     function handleSigninClick(){
        sessionStorage.setItem('uname',username)
        location.reload();
     }

     function handleSignout(){
        sessionStorage.removeItem('uname');
        location.reload()
     }
     
    return(
        <div className="container-fluid">
            <header className="d-flex justify-content-between p-3 bg-dark text-white">
                <div className="fs-4 fw-bold "> Amazon </div>
                <div>
                    {
                        (sessionStorage.getItem('uname')===null)?
                        

                    <div className="input-group">
                        <input type="text" className="form-control " onChange={handleNameChenge} placeholder="User Name" />
                        <button onClick={handleSigninClick} className="btn btn-danger">Signin</button>
                        
                    </div>
                    :
                    <div>
                        <span className="mx-3 bi bi-person-fill">{sessionStorage.getItem('uname')}</span>
                        <button className="btn btn-warning" onClick={handleSignout}>SignOut</button>
                    </div>
                      }
                </div>

            </header>

        </div>
    )
}