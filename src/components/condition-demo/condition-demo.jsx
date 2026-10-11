import { useState } from "react"
import { Login } from "../login/login"
import { FormikDemo } from "../formik-demo/formik-demo";
import { FormikValidations } from "../Form-Demo/Formik";


export function ConditionDemo(){

      const [view,setView] = useState('')

      function LoadView(e){
        switch(e.target.id){
            case "login":
                setView(<Login/>);
                break;
                case "register":
                setView(<FormikValidations/>);
                break;
        }

      }

     return(
        <div className="container-fluid">
            <h2>HOME</h2>
            <nav>
                <button onClick={LoadView}  id="login"> LOGIN</button>
                <button onClick={LoadView} className=" mx-2" id="register">REGISTER</button>
            </nav>
            <hr />
            {view}

        </div>
     )

}