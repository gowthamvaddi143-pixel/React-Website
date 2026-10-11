 import { useState } from "react";
import { DataGrid } from "../Controlled-components/data-grid";
  

 export function ControlledDemo(){
    const [products] = useState([{Name:"tv",Price:45372,Rating:4.2},{Name:"Mobile",price:990009 , Rating:4.8}]);
    const [employees] =useState([{FirstName:'Raj',LastName:'KUMaRR',Designation:'Manager',Salary:546637}]);

    return(
        <div className="container-fluid">
            <h2>Controlled DEMO</h2>
            <DataGrid caption="Products Details "data={products}/>
            <DataGrid caption="EMpolyees" data={employees}/>

        </div>
    )
 }