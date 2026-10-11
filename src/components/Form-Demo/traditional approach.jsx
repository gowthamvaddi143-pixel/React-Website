import { useState } from "react"

export function FormDemo(){
    const [id, setId] = useState(0)
    const [ name ,setName] = useState("")
    const [category,setCategory]= useState("")

    function handleIdChenge(e){
        setId(e.target.value)

    }
    function handleNameChenge(e){
        setName(e.target.value)

    }
    function handleCategoryChenge(e){
        setCategory(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log({id:parseInt(id),name:name,category:category})
    }

    
    return(
        <div className="container-fluid">
            <h3>Register</h3>
            <form onSubmit={handleSubmit} >
                <dl>
                    <dt>ID</dt>
                    <dd><input type="number"onChange={handleIdChenge}  name="id"/></dd>
                    <dt>NAME</dt>
                    <dd><input type="text" onChange={handleNameChenge} /></dd>
                    <dt>CATEHORY</dt>
                    <dd>
                        <select onChange={handleCategoryChenge}>
                            <option >Select Category</option>
                            <option >Electronics</option>
                            <option > FASHION</option>
                        </select>
                    </dd>
                </dl>
                <button type="submit">REGISTER</button>
            </form>

        </div>
    )
}