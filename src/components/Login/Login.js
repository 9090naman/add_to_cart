import React, { useState,useEffect } from 'react'
import { Alert } from 'react-bootstrap';
import Home from '../Home.js';
import { Link} from 'react-router-dom';


function Login() {

    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");
    const [users,setUsers] = useState([]);

    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);

    useEffect(()=>{
        getVals()
    },[])
    


    const getVals = async(e) => {
       e.preventDefault();
        const data =  await localStorage.getItem('users');
        if(data){
            console.log(JSON.parse(data))
               setUsers([...users,JSON.parse(data)])
               console.log(users)
               let em = users[0].email;
               let pa = users[0].password;
             
            //    
               console.log(em);
               console.log(pa);
               console.log({emaillog,passwordlog})
               if(em === emaillog && pa === passwordlog){
                alert("user logged in")
                setHome(false)
               }
              
        }
    }

    






    return (
        
        <div>
            {home ? <form onSubmit={getVals}>
                <h3>LogIn</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={emaillog} onChange={(event) => setEmaillog(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={passwordlog} onChange={(event) => setPasswordlog(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
                <Link to='/register'>register</Link>

                {flag && <Alert color='primary' variant="warning" >
                    Fill correct Info else keep trying.
                        </Alert>}
            </form>
                : <Home />
            }

        </div>
    )
}

export default Login