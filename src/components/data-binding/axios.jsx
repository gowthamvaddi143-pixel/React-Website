import axios from "axios";
import { useEffect, useState } from "react"

export function AxiosAjax(){
    const [product, setProduct] = useState({title:"",price:0,image:"",features:[],rating:{ratings:0,reviews:0,rate:0}});
    function LoadDataAxios(){
        axios.get('product-iphone-17.json')
        .then(respones=>{
            setProduct(respones.data)
        })
    }
    useEffect(()=>{
        LoadDataAxios()
    })
    return(
        <div className="container-fiuid">
            <div className="row mt-3" >
                <div className="col-4 " >
                    <img src={product.image} />

                </div>
                <div className="col-6 ">
                     <div className="fw-bold fs-5">{product.title}</div>
                  <div>
                       <span className="badge bg-success rounded ">{product.rating.rate}<span className="bi bi-star-fill"> </span></span>
                     <span className="fw-bold text-secondary mx-3">{product.rating.ratings.toLocaleString('en-in')} & rating {product.rating.reviews.toLocaleString('en-in')} reviews</span>
                  </div>
                     <div >
                        <ul className="mt-3 list-unstyled">
                            {product.features.map(feature=><li className="bi bi-dot ms-4" key={feature}>{feature}</li>)}

                        </ul>
                     </div>
                    


                </div>
                <div className="col-2">
                    <div className=" fs-2 fw-bold">{product.price.toLocaleString('en-in',{style:'currency',currency:'INR',minimumFractionDigits:0,maximumFractionDigits:0})}</div>
                   

                </div>

            </div>
          
        </div>


    )

}