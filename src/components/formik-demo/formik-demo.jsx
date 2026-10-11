import { useFormik } from "formik"
import * as yup from "yup"


export function FormikDemo(){

    const formik = useFormik({
        initialValues :{
           UserId:null,
            Name:'',
            Mobile:''
        },
        validationSchema:yup.object({
            UserId:yup.number().required("id Required"),
            Name:yup.string().required("Name Required").min(4,"Name is Short"),
            Mobile:yup.string().required('Mobile Required').matches(/^\+91\d{10}$/,'invalid mobile number')
        }),
        onSubmit:(user)=>{
            console.log(user)
        }
    })
    

    return(

        <div className="container-fluid">
            <div>
                <h1>LOGIN PAGE</h1>
            </div>
            <form onSubmit={formik.handleSubmit} >
                <dl>
                    <dt>UserId</dt>
                    <dd><input type="number" onChange={formik.handleChange} name="UserId"/></dd>
                    <dd className="text-danger" >{formik.errors.UserId}</dd>
                    <dt>Name</dt>
                    <dd><input type="text"onChange={formik.handleChange} name="Name" /></dd>
                    <dd className="text-danger" >{formik.errors.Name}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="Mobile" /></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                </dl>
                <button disabled={(!formik.isValid)?true:false} type="submit">SUBMIT</button>
                <button className={(formik.dirty)?'d-inline mx-3':'d-none'}>SAVE</button>

                <div className={`mt-3 ${(!formik.isValid)?'d-block':'d-none'}`}>
                    <div className="text-danger">
                        <h2>Check The Folloing errors</h2>
                        <ul>
                            {
                                Object.values(formik.errors).map(value=>
                                    <li key={value}>{value}</li>
                                )
                            }
                        </ul>
                    </div>

                </div>
            </form>
            
        </div>
    )
}