
import React from "react";

export class Toolbar extends React.Component{
   constructor(){
    super();

   }
   render(){
    return(
        <nav className="border border-3 border-primary p-2 fs-2 fw-bold m-3">
            <span>{this.props.title}</span>
        </nav>
    )
   }
}