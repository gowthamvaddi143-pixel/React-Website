import { useEffect,useState } from "react"

export function Databinding(){

    const [price,setPrice] = useState(560000.80);
    const [windspeed,setWindSpeed] = useState(130);
    const [likes,setLikes] = useState(878354546 );

    useEffect(()=>{

    })
    return(
    <div className="container-fluid">
        <h1>Data Binding</h1>
        <p>
            {price.toLocaleString('en-in',{style:'currency',currency:'INR'})}
        </p>
        <p>
            Wind Speed{windspeed.toLocaleString('en-in',{style:'unit',unit:'kilometer-per-hour'})}
        </p>
        <p>
            <span className="bi bi-hand-thumbs-up"> {likes.toLocaleString('en-us',{notation:'compact'})}   LIKES </span>
        </p>

    </div>
    )
 }