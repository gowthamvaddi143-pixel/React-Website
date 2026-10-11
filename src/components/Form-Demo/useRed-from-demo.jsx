import { useRef } from "react"

export function FormUseRef(){
     let IdRef = useRef(null)
     let NameRef = useRef(null)
     let CategoryRef = useRef(null)
     let PayRef = useRef(null)

     function handleSubmit(e){
        e.prevent.Defalut();

        console.log({id:parseInt(IdRef.current.value),Name:NameRef.current.value,Category:CategoryRef.current.value,paymothed:PayRef.current.value})
     }


    
    return(

        <div className="container-fluid">

            <h3>Register</h3>

            <form onSubmit={handleSubmit}>

                <dl>

                    <dt>Id</dt>

                    <dd><input type="number" ref={IdRef} name="Id" /></dd>

                    <dt>Name</dt>

                    <dd><input type="text" ref={NameRef}  name="Name" /></dd>

                    <dt>Category</dt>

                    <dd>

                        <select name="Category" ref={CategoryRef}>

                            <option>Select Category</option>

                            <option>Electronics</option>

                            <option>Fashion</option>

                        </select>

                    </dd>

                    <dt>Payment</dt>

                    <dd>

                        <input type="radio" ref={PayRef} name="Pay" value="Cash" /> <label>Cash</label>

                        <input type="radio" ref={PayRef}  name="Pay" value="UPI" /> <label>UPI</label>

                        <input type="radio" ref={PayRef} name="Pay" value="Credit Card" /> <label>Credit Card</label>

                    </dd>

                </dl>

                <button type="submit">Register</button>

            </form>

        </div>

    )

}

