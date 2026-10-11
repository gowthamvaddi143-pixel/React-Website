
import { useCaptch } from '../../hooks/captch';
import './login.css';


export function Login(){

    let code = useCaptch()
    return(
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <form className='form alert alert-dismissible alert-primary' >
                <h2 className='bi bi-person-fill'> User Login</h2>
                <button className='btn btn-close' data-bs-dismiss='alert'></button>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" className='form-control'/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className='form-control' /></dd>
                  <dd>email </dd>
                  <dd>{code}</dd>
                </dl>
                <button className='btn btn-warning w-100'>Login</button>
            </form>
        </div>
    )
}  
