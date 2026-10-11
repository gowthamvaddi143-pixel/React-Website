import { ErrorMessage, Formik,Form,Field,useFormik } from "formik";
import * as yup from "yup"

export function FomikComponents(){
    
    return(
        <div className="container-fluid">
            <h4>Register</h4>


            <Formik initialValues={{Name:'',Mobile:''}} 
            validationSchema={yup.object({Name:yup.string().required("Name Required"),Mobile:yup.string().required("MOBILE REQUIRED")})}
            onSubmit={(data)=>{
                console.log(data)
            }}>
                {
                    form=>
              


            <Form>
                <dl>
                    <dt>Name</dt>
                    <dd><Field type="text" name="Name"/></dd>
                    <dd className="text-danger">
                        <ErrorMessage name="Name"/>
                    </dd>
                    <dt>Mobile</dt>
                    <dd> <Field  type="text" name="Mobile"/> </dd>
                    <dd className="text-danger">
                        <ErrorMessage name="Mobile"/>
                    </dd>
                </dl>
                <button type="submit"> Register </button>

                <div className="mt-2 text-danger d-none">
                    <h2>CHECK ALL ERRORS</h2>
                    <ul>
                        {
                            Object.values(form.errors).map(error=><li key={error}>{error}</li>)
                        }
                    </ul>

                </div>
            </Form>
             }
            </Formik>

        </div>
    )
}