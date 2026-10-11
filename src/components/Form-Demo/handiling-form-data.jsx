export function FormDataGet(){


    function handleSubmit(e){
        e.preventDefault()
        let data = new FormData(e.target);

        console.log({id:parseInt(data.get("Id")),Name:data.get("Name"),Category:data.get("Category"),PaymentMode:data.get("Pay")})
    }
    return(
        <div className="container-fluid">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <dl>
                    <dt>USerId</dt>
                    <dd><input type="number" name="Id" /></dd>
                    <dt>Name</dt>
                    <dd><input type="text" name="Name" /></dd>
                    <dt>Category</dt>
                    <dd>

                        <select name="Category" >
                            <option >Select Category</option>
                            <option >Electronics</option>
                            <option >Fashion</option>
                            <option > jewelery</option>
                        </select>
                        

                    </dd> 
                    <dt> Payment</dt>
                    <dd>
                        <input type="radio" name="Pay" value="Cash" /><label> Cash </label>
                         <input type="radio" name="Pay" value="UPI" /><label> UPI </label>
                          <input type="radio" name="Pay" value="Credit-Card" /><label > Credit-Card </label>


                    </dd>
                </dl>
                <button className="submit"> LOGIN </button>
                
                
            </form>

        </div>
    )
}