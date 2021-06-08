import React from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Background from './Image/Background.jpeg';
import Logedin from './Image/Logedin.jpg';
import Forgeted from './Image/Forgeted.jpg';
import { NavLink, useHistory } from 'react-router-dom';
import SignIn from './SignIn';
// import Button from '@material-ui/core/Button';
const Signin = ()=>{
    return(<>
      <SignIn/>
    </>)
}
const OtpPage=()=>{
    const history =  useHistory();
    return(<><div className = "otp_enter">
          <h3 style={{marginBottom:"45px",textAlign:"center"}} >Validation</h3>
          <lable>Enter your OTP*</lable><br/>
         <input type="text" required/> <input type="text" required/> <input type="text" required/> <input type="text" required/>
         <button className="otp_btn" class="btn btn-info" onDoubleClick={()=> history.push('/Login')} ><span style= {{color:'white'}}>Verify</span> </button>
         <br/>
         <NavLink exact to ='/forgetpassword/otppage'>Resend OTP*</NavLink>
      </div>
      <footer style={{marginTop:"190px", textAlign:"center"}} >copyright © 2021, LearnTech</footer>
    </>)
}
const Forget =()=>{
    return(<>
           <div style={{backgroundColor:"transparent"}} className="forget_password">
           <img src ={Forgeted} alt ="background" width ="100%" height="575px"/>
           
             <div className ="forget_pass_box">
              <label>Reset Your Password</label><br/>
               <input type="email" placeholder ="Your Email*" required/>
               <br/>
               <span style={{textAlign:"center",color:"black", display:"inline-block",fontSize:"25px"}}>or</span>
               <br/>
               <span></span>
               <input type="text" placeholder="Enter Mobile Number*"></input>
               <br/>  
               <button className ="btn btn-outline-dark" ><NavLink excat to ='/forgetpassword/otppage' ><span className="Butt" style={{color:"white", display:"inline-block", textDecoration:"none",fontWeight:"bold"}}>Get OTP</span></NavLink></button>
               
               </div>
               <footer style={{textAlign:"center",color:"black"}} >copyright © 2021, LearnTech</footer>
           </div>
    </>)
}


const Login =()=>{
    return(<>
     <img src = {Logedin}  alt="img"  width = "100%" height="575px" />  
     <div className="login_form">
          <form>
          <lable>User Login</lable><br/>
              <input type="text" placeholder="User Id*" required/>
              <br/>
              <input type ="password" placeholder ="Password*" required/>
              <br/>
              <br/>
              <button  class="btn btn-outline-secondary">Login</button>
          </form>
               <NavLink  exact to ='/signin' ><span style={{display:"inline-block",fontSize:"18px",marginRight:"50px", color:"blue",textDecoration:"underline",textDecorationColor:"blue"}}>sign in</span></NavLink>
              <NavLink exact to ='/forgetpassword' ><span style={{display:"inline-block",fontSize:"18px", color:"#E71E18",textDecoration:"underline",textDecorationColor:"red"}}>forget password*</span></NavLink>
    </div>
    <footer  style={{color:"black", textAlign:"center",marginTop:"160px"}}>copyright © 2021, LearnTech</footer>
    </>)
              
}

export default Login;
export {Signin,Forget,OtpPage};