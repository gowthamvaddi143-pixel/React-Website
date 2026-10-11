import axios from "axios"
import { useEffect, useState } from "react"

export function KeyBoardDemo(){

    const [regEXP] = useState(/^(?=.*[A-Z])\w{4,15}$/)
    const [progressWidth,setProgressWidth]=useState({width:''})
    const [progressColor, setProgressColor]=useState('')
    const [progressMsg, setProgressMsg]=useState('')
    const [users ,setUsers] =useState([{user_id:''}])
    const [userMsg,setUserMsg]=useState('')
    const [errorClass,setErrorClass]=useState("")


    function UserLoad(){
        axios.get("users.json")
        .then(response=>{
            setUsers(response.data)
        })
    }

    useEffect(()=>{
        UserLoad();

    },[])

   function VerifyPassword(e){
    if(e.target.value.match(regEXP)){
        setProgressWidth({width:'100%'})
        setProgressColor("bg-success")
        setProgressMsg("STRONG PASSWORD")
    }else{
        if(e.target.value.length<4){
            setProgressWidth({width:'30%'})
            setProgressColor("bg-danger")
            setProgressMsg("POOR")
        }else{
            setProgressWidth({width:'70%'})
            setProgressColor('bg-warning')
            setProgressMsg("WEEK password ")
        }
    }
   }
       function VerifyUser(e){
        for(var user of users){
            if(user.user_id===e.target.value){
                setUserMsg('User Id Taken - Try Another');
                setErrorClass('text-danger');
                break;

        }else{
            setUserMsg("user id availble");
            setErrorClass("text-success");
        }
    }
   }


    return(
        <div className="conteiner-fluid p-3">
            <h2>REGISTER</h2> 
            <dl className="w-25">
                <dt>USER id</dt>
                <dd><input type="text" onKeyUp={VerifyUser}  className="form-control"/></dd>
                <dd className={errorClass}>{userMsg}</dd>
                <dt>PASSWORD</dt>
                <dd><input type="password"onKeyUp={VerifyPassword}  className="form-control"/></dd>
                <dd className="progress">
                    <div style={progressWidth} className={`progress-bar ${progressColor} progress-bar-striped progress-bar-animated`}>{progressMsg}</div>
                </dd>


            </dl>
        
        </div>
    )
}