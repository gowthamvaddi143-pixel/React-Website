import { useForm } from "react-hook-form"
import { NavBar } from "../../Controlled-components/navbar";

export function HookFormDemo(){
    const {register,handleSubmit,formState:{errors}} = useForm()

    const submit =(values)=>{
        console.log(values)

    }

    

    return(
        <div className="container-fluid ">

            <NavBar theme="bg-danger text-white" brandLogo='bi bi-bag-fill' brandName='Shopping' menuItems={['Home','Kids','Men','Women','Offers']} searchString="eg:brands,products" />
            <div className="d-flex">
                
            <NavBar layout='sidebar' brandLogo="bi bi-cloud" brandName='Weather App' menuItems={['Your City','international','Local','Aechives']} searchString="eg :city,date" />

            <div className=" fw-bold fs-1" > register</div>
            <form onSubmit={handleSubmit(submit)}>
                <dl>
                    <dt>IdName</dt>
                    <dd><input type="text" name="IdName"{...register("IdName",{required:true,minLength:3})} /></dd>
                    <dd className="text-danger">
                        {
                            (errors.IdName?.type==="required")?<span>hahaha</span>:<span></span> &&
                            (errors.IdName?.type==="minLength")?<span>hhh</span>:<span></span>
                           
                        }
                        
                    </dd>
                    <dt>Moblie</dt>
                    <dd><input type="text" name="Mobile" {...register("Mobile",{required:true,pattern:/^\+91\d{10}$/})} /></dd>
                    <dd className="text-danger">
                        {
                            (errors.Mobile?.type==="required")?<span>mobile in valid</span>:<span></span>&&
                            (errors.Mobile?.type==="pattern")?<span>Mobile required</span>:<span></span>
                        }
                    </dd>
                </dl>
                <button type="submit">login</button>
            </form>
            
            </div>


         </div>
    
    )
}