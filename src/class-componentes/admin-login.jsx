import React from "react";
import axios from "axios";
import { Toolbar } from "../Controlled-components/toolbar";
import { Weather } from "../components/data-binding/Weathe";

export class AdminLogin extends React.Component
 {
 constructor(){
    super();
    this.state = {
        title: 'Admin Login',
        categories:['all ','kids','mens'],
        msg:'',
        categories:[],
        products:[]
    }
    this.handleupdateClick = this.handleupdateClick.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this)
 }

 LoadCategories(){
    axios.get('https://fakestoreapi.com/products/categories')
    .then(response=>{
        this.setState({
            categories:response.data
        })
    })
 }


componentDidMount(){
    this.LoadCategories();
    this.setState({
        title:'Componet Title Changed'
    })
}
handleInsertClick(e){
    alert(`
         Id : ${e.target.id}\n
       
         X position : ${e.clientX}
        `)
}
 handleupdateClick(){
    this.setState({msg:'recored inserted successfully'})

 }
handleUpdateClick(){
    this.setState({ msg:'record updated successfully'})
}
handleDelectClick(){
    this.setState({msg:'record deleted Successfully'})
}



 render(){
    return(
        <div className="container-fluid">

<Toolbar title="AMAZON"/> 



            <h2>{this.state.title}</h2>


            <select >
                {
                    this.state.categories.map(category=><option key={category}>{category}</option>)
                }
            </select>
            <button onClick={this.handleInsertClick} id="btnInstert" className="btn btn-primary m-3 p-2 fw-bold fs-2">Insert</button>
             <br/>
            <p> {this.state.msg}</p>
        
             <button onClick={this.handleupdateClick}> insert</button>
             <button onClick={this.handleUpdateClick.bind(this)}>UPDATE</button>
             <button onClick={()=>this.handleDelectClick()}>Delect</button>

           <h1>API</h1>
           <select>
            {
                this.state.categories.map(category=><option key={category}>{category}</option>)
            }
           </select>

           <section>
            <Weather/>
           </section>

        </div>
        
    )
 }
    
}