import { Link,useNavigate,useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import { useCookies } from "react-cookie"

export function FakestoreSearch(){
    const [cookies,setCookie, removeCookie] = useCookies(['uname']);
      
    let navigate = useNavigate()

    useEffect(()=>{
        if(!cookies['uname']){
            navigate('/login')
        }
    },[cookies])


    function handleSignout(){
        removeCookie('uname');
        navigate('/login');
    }

    return(
        <div className="container-fluid">
            <h3 className="d-flex justify-content-between"> <span>{cookies['uname']}</span>Search <button onClick={handleSignout} className="btn btn-danger">Signout</button></h3>
            <div className="w-25">
                <label className="form-label mx-2" > Search Products </label>
                <form action="/results" method="get" className="input-group">
                <input type="text" name="searchstring" className="form-control"placeholder="eg:search" />
                <button type="submit" className="btn btn-warning bi bi-search"></button>

                </form>

            </div>
            <Link to="/">BACK to Home</Link>

        </div>
    )
}