import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom"

export function FakestoreResult(){

    let [params] = useSearchParams();

    const [products,setProducts]= useState([{id:0, image:null,title:null,price:0,rating:{rate:0,count:0},description:null}])

    function LoadResults(){
        axios.get(`https://fakestoreapi.com/products/category/${params.get("searchstring")}`)
        .then(response=>{
            setProducts(response.data)
        })
    }
    useEffect(()=>{
        LoadResults()
    },[])

    return(
        <div className="container-fluid">
            <h3>RESULTS</h3>
            <div className="d-flex flex-wrap w-50">
                {
                    products.map(product=>
                    <div key={product.id} className="card m-3 p-3" style={{width:'100px'}}>
                        <img src={product.image} height="50"/>
                        <div className="card-footer">
                            <Link to={`/details/${product.id}`} >DETAILS</Link>

                        </div>

                    </div>)
                }

            </div>
            <Link to="/search">Back TO Search</Link>

        </div>
    )
}