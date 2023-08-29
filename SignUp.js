import React,{useState,useEffect} from 'react'
import LoginImage from '../Images/loginform.jpg'
import axios from 'axios'
import {URL_API} from '../URL'
import {NavLink,useNavigate} from 'react-router-dom';
import './Form.css';
import{
    BrowserRouter as Router,
    Switch,
    Link,
    Route,Routes
  } from 'react-router-dom';
  import UserIcon from '../Images/usericon.png'
  import EmailIcon from '../Images/emailicon.png'
  import PasswordIcon from '../Images/passwordicon.png'
function SignUp()
{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmpassword,setConfirmpassword]=useState("")
    const Navigate=useNavigate()

    var nameregx=/([a-zA-Z]{5,15})/
    var mailregx=/([a-zA-Z0-9]{3,15})+@+([a-zA-Z]{3,10})+\.+([a-zA-Z]{2,10})/
    var passwordregx=/([a-zA-Z0-9]{8,20})/

    const [apiData,setapiData]=useState([])
    const callAPI=async()=>{
        const resp=await axios.get(URL_API)
            setapiData(resp.data)
    }
    useEffect(()=>{
        callAPI()
    
    },[])


    const mychange=(e)=>{
        setName(e.target.value)
    }

    const postData=async()=>
    {
        apiData.map((e)=>{
            if(e.name===name){
               
            }
        })
        if(name==="" && password===""){
            return alert ("Please give input details")
        }
        else if(!nameregx.test(name)){
            return alert("username should be atleast 5 characters")
        }
        else if(!mailregx.test(email)){
            return alert("Invalid E-mail Id")
        }
        else if(!passwordregx.test(password)){
            return alert("Password should be atleast 8 characters")
        }
        else if(confirmpassword !== password){
            return alert("Password and confirm password deosn't match")
        }
        else
        {
        await axios.post(URL_API,{
            name,
            email,
            password,
            confirmpassword
        })
        
        Navigate('/login')}
    }
    
    return(
        <div className="head">
           <div className="Form">
            <div className="container">
            <div className="image">
           
                <img src={LoginImage} height={400} width={400}></img>
                
            </div>
            <div  className="form">
                <h1>Sign Up</h1>
                <div className="username">
                    <label><img src={UserIcon}></img></label>
                <input type="text" name="username" placeholder="Username" id="username"
                value={name}
                onChange={(e)=>mychange(e)}></input>
                </div>
                <div className="email">
                <label><img src={EmailIcon}></img></label>
                <input type="text" name="email" placeholder="E-mail"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div className="password">
                <label><img src={PasswordIcon}></img></label>
                <input type="text" name="password" placeholder="Passsword"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}></input>
                </div>
                <div className="confirm password">
                <label><img src={PasswordIcon}></img></label>
                <input type="text" name="confirmpassword" placeholder="Confirm password"
                value={confirmpassword}
                onChange={(e)=>setConfirmpassword(e.target.value)}></input>
                </div>
                <div className="label">
                    
                    <input type="checkbox"
                        className="custom-control-input"></input>
                     <label className="custom-control-label">I agree all statements in Terms of Service</label>
                    </div>
                
                <div className="button">
                <button onClick={()=>postData()}>Register Now</button>
                </div>
                <div className="login">
                    <span>Already registered user?</span><Link to="/login">Login</Link>
                    
                    </div>
            </div>
           
            </div>
            </div>
         </div>
    )
}
export default SignUp
