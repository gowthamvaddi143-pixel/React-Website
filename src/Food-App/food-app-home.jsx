import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useFilter } from "../hooks/filter-data";

export function FoodAppHome(){

    const [electronics] = useState(['Sony Tv','PAVAN Tv', 'Gowtham Tv', 'Sony Speakers','apple i phone'])

     
    const [searchstring , setSearchString]= useState('')

    function handleSearchChange(e){
        setSearchString(e.target.value)
    }

    let filteredData = useFilter(searchstring,electronics)
    return(

        <div className="container">
            <h2>food App Home</h2>

            <input type="text" onChange={handleSearchChange} placeholder="search,products" />

            <ol>
                {
                    filteredData.map(item=><li key={item}> {item} </li>)
                }
            </ol>
            <Link to="list">GET LIST</Link>
            <hr />
            <Outlet/>
        </div>
    )
}