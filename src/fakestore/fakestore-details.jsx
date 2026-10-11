import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export function FakestoreDetails(){

    const [product, setProduct] = useState({id:0,image:null,title:null, price:0 ,category:null,rating:{rate:0,count:0},description:null})
    let params = useParams()
    
    function LoadDetails(){
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(response=>{
            setProduct(response.data);
        })
    }
useEffect(()=>{
    LoadDetails();
},[params.id])
    return(
        <div className="container-fluid">
            <h3>DETAILS</h3>
            <dl>
                <img src={product.image} height="200" width="200" />
                <dt>Title</dt>
                <dd>{product.title}</dd>
                <dt>Price</dt>
                <dd>{product.price}</dd>
            </dl>
            <Link to={`/products/${product.category}`}>Back to Products</Link>

        </div>
    )
}