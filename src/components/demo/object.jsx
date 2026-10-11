import { useEffect, useState } from "react"

export function OptionalChaining(){
    const [product] = useState({title:"Bike", price:170000,rating:{rate:10.9}})

    useEffect(()=>{

    })
    return(
        <div className="container-fluid">
            <dl>
                <dt>title</dt>
                <dd>{product.title}</dd>
                <dt>Price</dt>
                <dd>{product.price}<br/>
                    {product.rating.rate}</dd>
            </dl>

        </div>

    )
}