 
 import {  useFormik } from "formik"
 import { NavBar } from "../../Controlled-components/navbar"



   
export function FormikValidations(){

    function ValidateProduct(product){
        let errors = {}
        

        if(product.Id===0){
            errors.Id ="Product Id REQUIRED"
        }


        if(product.Name.lenght===0){
            errors.Name="REQUIRED NAME"
        }else{
            if(product.Name.length<4){
                errors.Name="NAME IS SHORT"
            }
        }

        if(product.Category==="-1"){
            errors.Category="PLEASE SELECT A CATEGORY"
        }


        if(product.Pay===""){
            errors.Pay="SELECT PEY MOOD"
        }


        if(
            product.Mobile===""){
                errors.Mobile="REQUIRED MOBILE NUMBER"
            }else{
                if(!product.Mobile.match(/^\+91\d{10}$/)){
                    errors.Mobile="invalid Mobile +91/ (10 digits)"
                }

            }
            return errors;
    }

     const formik = useFormik({
        initialValues:{
            Id:0,
            Name:"",
            Category:'-1',
            Pay:'',
            Mobile:''
            
        }, 
        validate:ValidateProduct,
        onSubmit :(data)=>{
            console.log(data)
        }
    })



    return(
        
       <div>
          <NavBar theme="bg-danger text-white" brandLogo='bi bi-bag-fill' brandName='Shopping' menuItems={['Home','Kids','Men','Women','Offers']} searchString="eg:brands, products" />

          <div className="d-flex">
             <NavBar layout='sidebar' brandLogo="bi bi-cloud" brandName='Weather App' menuItems={['Your City','international','Local','Aechives']} searchString="eg :city,date"  />


         <div className=" container-fluid border border-2 border-dark  d-flex justify-content-center  align-items-center bg-primary text-light "style={{height:'520px' ,width:'340px',marginTop:'100px',borderRadius:'30px'}}>
            
            <form onSubmit={formik.handleSubmit} >
                <div className=" fw-bold fs-1 mb-3 text-black "> REGISTER </div>
                <dl>
                    <dt>USER ID</dt>
                    <dd><input type="number"  onBlur={formik.handleBlur} onChange={formik.handleChange} name="Id" className="rounded  rounded-3"/></dd>
                    <dd className="text-danger"> {formik.touched.Id && formik.errors.Id}</dd>
                    <dt>NAME</dt>
                    <dd><input type="text" onChange={formik.handleChange}name="Name" onBlur={formik.handleBlur} className="rounded  rounded-3" /></dd>
                    <dd className="text-danger" >{formik.touched.Name && formik.errors.Name}</dd>
                    <dt>Category</dt>
                    <dd>
                        <select name="Category" onBlur={formik.handleBlur} onChange={ formik.handleChange} className="rounded  rounded-3">
                            <option value="-1">Select Category</option>
                        <option value="jewelery">jewelery</option>
                        <option value='Electronice'> Electronice</option>
                        <option value='Fashion'>Fashion</option>
                        </select></dd>
                        <dd className="text-danger">{formik.touched.Category&& formik.errors.Category}</dd>
          
                <dt>PAY</dt>

                <dd><input type="radio" onChange={formik.handleChange} onBlur={formik.handleBlur} name="Pay" value="Cash"/>CASH</dd>
                <dd><input type="radio"  onChange={formik.handleChange} onBlur={formik.handleBlur} name="Pay" value="UPI" />UPI</dd>
                <dd><input type="radio" onChange={formik.handleChange} onBlur={formik.handleBlur} name="Pay" value="CREDIT_CARD" />CREDIT_CARD</dd>
                <dd className="text-danger">{formik.touched.Pay && formik.errors.Pay}</dd>

                <dt>MOBILE</dt>
                <dd><input type="text" onBlur={formik.handleBlur}  name="Mobile" onChange={formik.handleChange} className="rounded  rounded-3 bg-body-secondary" /></dd>
                <dd className="text-danger">{formik.touched.Mobile && formik.errors.Mobile}</dd>
 
      </dl>
      <button disabled={(formik.isValid)?false:true}type="submit" className="rounded  rounded-3 float-md-end w-100 bg-warning mouse::hover" >SUBMIT</button>
            </form>
        
        </div>

       </div>
          </div>
           
    )
}