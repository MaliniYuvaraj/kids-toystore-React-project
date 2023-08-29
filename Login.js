import React,{useState,useEffect} from 'react';
import LoginImage from '../Images/loginform.jpg';
import './Form.css';
import axios from 'axios';
import {URL_API} from '../URL';
import {useNavigate,Link} from 'react-router-dom';
import UserIcon from '../Images/usericon.png'
import PasswordIcon from '../Images/passwordicon.png'
function Login()
{
    var loginnameregx=/([a-zA-Z]{5,15})/
    var loginpasswordregx=/([a-zA-Z0-9]{8,20})/
        const [apiData,setapiData]=useState([])
        const [loginname,setLoginname]=useState("")
        const [loginpassword,setLoginpassword]=useState("")
        const Navigate=useNavigate()
        const callAPI=async()=>{
            const resp=await axios.get(URL_API)
            setapiData(resp.data)
         }
    useEffect(()=>{
        callAPI()
    
    },[])
    const Login=()=>{
        apiData.map((e)=>{
            if(e.name===loginname && e.password===loginpassword)
            {  
                }
            })
     if(loginname==="" && loginpassword===""){
            return alert ("Please give input details")
        }
        else if(!loginnameregx.test(loginname)){
            return alert("username should be atleast 5 characters")
        }
       
        else if(!loginpasswordregx.test(loginpassword)){
            return alert("Password should be atleast 8 characters")
        }
        else
        {
            Navigate('/navcomponent')
        }
        
    }
    
    return(
        <div className="head">
        <div className="Form">
            <div className="container">
        <div  className="form">
                <h1>Login</h1>
                <div className="username">
                <label><img src={UserIcon}></img></label>
                <input type="text" name="username" placeholder="Username" value={loginname} 
                onChange={(e)=>setLoginname(e.target.value)}></input>
                </div>
                <div className="password">
                <label><img src={PasswordIcon}></img></label>
                <input type="text" name="password" placeholder="Passsword" value={loginpassword}
                onChange={(e)=>setLoginpassword(e.target.value)}></input>
                </div>
                <div className="label">
                    
                    <input type="checkbox"
                        className="custom-control-input"></input>
                     <label className="custom-control-label">Remember me</label>
                    </div>
                    <div  className="fogotpassword">
                    <a href="login.js">Forgot Password?</a>
                    </div>
                <div className="button">
                <button onClick={()=>Login()}>Login</button>
                </div>
                <div className="login">
                    <span>Don't have an account?</span><Link to="/">SignUp</Link>
                    
                    </div>
                </div>
                <div className="image">
                <img src={LoginImage} height={400} width={400}></img>
                
            </div>
            </div>
    </div>
    </div>
    )
}
export default Login;
