import axios from "axios";
import { useEffect, useState } from "react";

 

 export function useFetchApi(url){
    const [date,setDate] =useState([]);

    useEffect(()=>{
        axios.get(url)
        .then(response=>{
            setDate(response.data)
        })

    } ,[url])

    return date;
 }

 let ElectronicProducts = useFetchApi('https://fakestoreapi.com/products/category/electronics')