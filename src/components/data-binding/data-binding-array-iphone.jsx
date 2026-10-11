import { useEffect, useState } from "react"
import moment from "moment"

export function Ajax(){
    const [product,setProduct] = useState({title:"",price:0,image:"",features:[],rating:{rating:0,reviews:0,rate:0}})
    function LoadData(){
        fetch("/product.json")
        .then(response=>response.json())
        .then(product=>{
            setProduct(product)
        })
    }
    useEffect(()=>{
        LoadData();
    })
    return(
        <div className="container-fluid">
            <div className="row m-4">
                <div className="col-3">
                   {product.image && <img src={product.image  } />}

                </div>
                <div className="col-7">
                    <div className="fw-bold fs-4">{product.title}</div>
                    <div>
                        <span className="badge bg-success rounded" >{product.rating.rate} <span className="bi bi-star-fill"></span></span>
                        <span className="fw-bold text-secondary mx-3"> {product.rating.ratings?.toLocaleString('en-in')} ratings & {product.rating.reviews.toLocaleString('en-in')} reviews</span>
                    </div>
                    <div>

                        <ul className="list-unstyled mt-3">
                            {
                                product.features.map(feature=><li className="bi bi-dot my-1" key={feature}>{feature}</li>)
                            }

                        </ul>
                    </div>

                </div>
                <div className="col-2">
                    <div className="fs-2 fw-bold" >{product.price.toLocaleString('en-in',{style:'currency',currency:'INR',minimumFractionDigits:0 , maximumFractionDigits:0})}</div>

                </div>
                
            </div>

        </div>

    )
}