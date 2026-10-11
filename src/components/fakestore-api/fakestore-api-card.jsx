import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
export function FakeStoreApiCard(){
    const [products, setProducts] = useState([{id:0, title:'',price:0,image:'',category:'',descroption:'',rating:{rate:0,count:0}}])
    const [categories,setCategories] =useState()

    function LoadProducts(){
        axios.get(`https://fakestoreapi.com/products`)
        .then(respones=>{
            setProducts(respones.data)
        })
    }
    function LoadCategories(){
        axios.get(`https://fakestoreapi.com/products/categories`)
        .then(respones=>{
            setCategories(respones.data)
        })
    }
    useEffect(()=>{
        LoadProducts()
        LoadCategories()
    })
    

    return(
        <div className="container-fluid">
            <header className="bg-light d-flex flex-row justify-content-between p-3 align-items-center">
                <span className="fw-bold fs-2 text-primary bi bi-bag-fill"> Shop Direct</span>
                <div>
                    <div className="input-group">
                        <button className="btn bi bi-search"></button>
                        <input type="text"placeholder="search:brands,tites" className="form-control" />
                    </div>
                </div>
                <div>
                    <span className="bi bi-cart"></span>
                    <span className="bi bi-bell mx-3"></span>
                    <span className="bi bi-person-fill"></span>
                </div>

            </header>
            <main className="row mt-3">
                <nav className="col-2">
                    <div className="fw-bold text-primary fs-4 ">WelCome Back </div>
                    <div>Manage your Shopping</div>
                    <ul className="list-group mt-4">
                        <li className="list-group-item list-group-item-warning"><span className="bi bi-house-door-fill"></span>HOME</li>
                         <li className="list-group-item my-3 list-group-item-dark"><span className="bi bi-ticket-fill"></span>Categories</li>
                        
                         <li className="list-group-item list-group-item-warning"><span className="bi bi-gear-fill"></span>Settings</li>
                        
                        

                    </ul>

                </nav>
                <section className="col-10">
                    <div className="row">
                        <div className="col-3">
                            <div className="card p-3 m-3">
                                <div className="card-header d-flex justify-content-between">
                                    <span className="fw-bold ">Filter</span>
                                    <span className="text-primary">Clear All</span>
                                </div>
                                <div className="card-body">
                                    <dl className="mt-3">
                                        <dt>Categories</dt>
                                        <dd className="mt-3">
                                            {
                                          categories && categories.map((category)=><div key={ category}><input type="checkbox" className="form-check-input" /><label style={{fontSize:'12px'}}>{category.toUpperCase()}</label></div>)
                                        }
                                        </dd>
                                        <dt>Top BRANDS</dt>
                                        <dd  className="mt-3">
                                            <button className="btn btn-warning w-100">Sumsung</button>
                                            <button className="btn btn-primary my-4 w-100"> leeCooper</button>
                                        </dd>
                                    </dl>

                                </div>
                               
                            </div>

                        </div>
                        <div className="col-9">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">SHOP</li>
                                <li className="breadcrumb-item active">Dashboard</li>

                            </ul>
                            <div className="fw-bold fs-3 "> Explore Products</div>
                            <div className="d-flex flex-wrap overflow-auto" style={{height:'500px'}}>
                                {
                                    products.map(product=>
                                        <div key={product.id}className="card m-3 p-2 "style={{width:'200px'}}>
                                            <img src={product.image} className="card-img-top" height="110"/>
                                            <div className="card-header overflow-auto" style={{height:'100px'}}>
                                            {product.title}
                                            </div>
                                            <div className="card-body">
                                                <dl>
                                                    <dt>Price</dt>
                                                    <dd>{product.price}</dd>
                                                    <dt>Rating</dt>
                                                    <dd>{product.rating.rate}<span className="bi bi-star-fill text-success"></span></dd>
                                                </dl>

                                            </div>
                                            <div  className="card-footer"> 
                                                <button className="btn btn-warning w-100 bi bi-cart4"> Add to Cart</button>
                                            </div>
                                            </div>
                                    )
                                }
                                </div>
                            

                        </div>
                        


                    </div>
                </section>
            </main>

        </div>
    )
}
