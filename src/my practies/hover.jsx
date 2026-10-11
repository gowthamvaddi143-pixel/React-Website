 import './hover.css'

export function Hover(){
return(
    
       <div className='wrapper w-100 d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
        <div className='card bg-warning '>
            <h2 className='bi bi-person-badge-fill h2text bg-primary '>GowthaM</h2>
        </div>

          <div className='card'>
            <h2 className='bi bi-file-richtext-fill bg-danger'>FRIEND</h2>
        </div>
          <div className='card bg-primary'>
            <h2 className='bi bi-person-raised-hand bg-success'>PavaN</h2>
        </div>

       </div>
  
)
}