import React from 'react';
import {NavLink} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Chatapp from './Image/Chatapp1.jpg';

const PageAsIt=(hel)=>{
return ("hhello");
}



const SignIn=()=>{
    return(<>
         <div>
          <div className ="singIn_page">
              <form>
                  <h2 style={{fontSize:"25px",textAlign:"center" }} >Create Your Account </h2>
                  <br/>
                  <input type="text" placeholder ="Enter your first name*"  required/>  <input type ="text" placeholder ="Enter your last name" />
                  <br/>
                  <input type ="text" placeholder ="Username*" required/>
                  <br/>
                  
                  <label style={{}} >Gender </label><br/> 
                  <input type="radio" id="male" name="gender" value ="male" required /><label for ="male">Male </label> <input type="radio" id="male" name="gender" value ="female" required /><label for ="male">Female</label>
                  <br/>
                  <input type="email" id="email" pattern=".+@gmail.com" size="25" placeholder="Enter your Email*" required/> <br/>
                  <input type="password" placeholder ="Create your password*" minLength ="8" required/>
                 <br/>
                 <input type ="checkbox" required id="check" /> <span>I accept all the term and conditions*</span>
                 <br/>
                 <button class="btn btn-outline-info" onClick={PageAsIt} > Sign in</button>
              </form>
              <NavLink exact to ='/login' >Already have an account?</NavLink>   
          </div>
     <div>
     <img src={Chatapp}  alt="Chat image logo" width="300px" style={{marginTop:"25px", marginLeft:"200px", marginBottom:"20px"}} />

     <p className="about1" >Messaging apps are the most widely used smartphone apps, 
     Some examples of popular messaging apps include WhatsApp, Facebook Messenger, China's WeChat and QQ Messenger, Telegram, Viber, Line, and Snapchat. The popularity of certain apps greatly differ between different countries. Certain apps have emphasis on certain uses - for example Skype focuses on video calling, Slack focuses on messaging and file sharing for work teams, and Snapchat focuses on image messages. Some social networking services offer messaging services as a component of their overall platform, such as Facebook's Facebook Messenger, while others have a direct messaging function as an additional adjunct component of their social networking platforms, like Instagram, Reddit, Tumblr, TikTok, Clubhouse and Twitter, either directly or through chat rooms.</p>
     </div>

     <footer className="footer">copyright © 2021, LearnTech</footer>
     </div>
    </>)
}
export default SignIn;