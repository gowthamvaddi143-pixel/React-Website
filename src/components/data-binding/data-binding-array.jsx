import { useEffect,useState } from "react";

export function DataBindingArray(){

const[categories] =useState(['All','Electronics','fashion','kid','man']);
useEffect(()=>{

})

    return(

        <div className="container-fluid">
            <header className="border border-2 d-flex justify-content-between my-4 p-3 bg-light">
                <span className="fs-4 fw-bold bi bi-amazon">Amazon</span>
                <nav>{
                    categories.map((category)=><span key={category} className="mx-4"><a href={`${category}.html`}>{category}</a></span>)
                    }
                    </nav>
            </header>
            <select > 
                {
                    categories.map(category=><option key={category}>{category}</option>)
                }
            </select>
          
                <ol>
                    {
                        categories.map(category=><li key={category}>{category}</li>)
                    }
                </ol>
                <ul className="list-group w-50">
                    {
                        categories.map(category=><li key={category}className="form-switch"><input type="checkbox" className="form-check-input" /><label>{category}</label></li>)
                    }
                </ul>

            

        </div>
    )
}