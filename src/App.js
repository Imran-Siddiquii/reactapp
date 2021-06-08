import React, { useState } from 'react'
import {Route , Switch} from 'react-router-dom';
import Login from './Login';
import Chat from './Chat';
import ListContact from './ListContact';
import AddContact from './AddContact';
import Menu from './Menu';
import {Forget,OtpPage,Signin} from './Login';
import ContactDetails from './ContactDetails';

const App=()=> {

  const Error=()=>`Opps! page not Found :🐍`
  return(<>
        <Menu/>
        
      <Switch>
        <Route exact path ='/login' component ={Login} />
        <Route exact path ='/chat' component={Chat} />
        <Route exact path ='/listcontact' component={()=><ListContact/>}/>
        {/* <Route exact path ='/addcontact' render={()=><AddContact/>}/> */}
        <Route exact path ='/forgetpassword' component = {Forget}/>
        <Route exact path ='/forgetpassword/otppage' component = {OtpPage}/>
        <Route exact path ='/signin' component = {Signin}/>
        <Route component= {Error}/>
        
      </Switch>
  </>)
}

export default App;
