export function NavBar(props){
   if(props.layout==="sidebar"){
    return(

        <nav style={{width:'250px',height:'677px'}} className={`d-flex flex-column p-3 justify-content-between border border-2 shadow shadow-lg`}>
            <div className="fw-blod fs-3">
                <span className={props.brandLogo}></span>
                <span className="fw-bold mx-1">{props.brandName}</span>
            </div>
            <div>
                <ul className="list-group">
                    {props.menuItems.map(item=><li key={item} className="list-group-item list-group-item-dark my-3"> {item.toUpperCase()} </li>)


                    }
                </ul>
            </div>
            <div>
                 <label className="form-label fw-bold"> Search </label>
                 <div>
                    <div className="input-group">
                        <input type="text" placeholder={props.searchString}className="form-control" />
                        <button className="btn btn-warning bi bi-search"></button>

                    </div>
                 </div>
            </div>
            <div>
                <button className={`${(props.theme==="bg-danger text-white")?'btn btn-light':'btn-warning'}bi bi-person-circle w-100 `}> Signin </button>
            </div>

        </nav>
    )

   }else{
     return(
        <nav className={`d-flex flex-row ${props.theme} p-2 align-items-center  justify-content-between border border-1`}>
            <div>
                <span className={`${props.brandLogo} fs-3 fw-bold`}></span>
                <span className="fw-blod mx-3 ">{props.brandName}</span>
            </div>
            <div>
                {
                    props.menuItems.map(item=><span className="mx-3" key={item}>{item.toUpperCase()}</span>)
                }
            </div>
            <div>
                <div className="input-group">
                    <input type="text" placeholder={props.searchString} className="form-control"/>
                    <button className="btn btn-warning bi bi-search"></button>

                </div>
            </div>
            <div>
                <button className={`${(props.theme==="bg-danger tex-white")?"btn btn-light":"btn-warning"}bi bi-person-circle`}>Signin</button>
            </div>

        </nav>
    )
   }
}