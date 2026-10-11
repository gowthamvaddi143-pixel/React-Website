import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function FakestoreHome(){
    const [categories,setCategories] =useState([])

    function LoadCategories(){
        axios.get(`https://fakestoreapi.com/products/categories`)
        .then(response=>{
            setCategories(response.data)
        })
    }
    useEffect(()=>{
        LoadCategories();
    },[])
    return(
        <div className="container-fluid">
            <h3>FAKESTORE HOME</h3>
            <ul className="list-group w-25">
                {
                    categories.map(category=>
                    <li key={category} className="list-group-item list-group-item-danger my-3 "> <Link to={`products/${category}`}>{category.toUpperCase()}</Link> </li>)
                }

            </ul>
            <Link to="/search" className="bi bi-search btn btn-warning">Search</Link>

        </div>
    )
}