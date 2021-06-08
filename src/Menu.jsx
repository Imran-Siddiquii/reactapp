import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu =()=>{
    return(<>
             <div className = "menu_bar">
            
            <NavLink exact to ='/login' activeClassName ="active_class"><span style={{color:"black", display:"inline-block", textDecoration:"none"}}>Login</span> </NavLink>
            <NavLink exact to ='/chat' activeClassName ="active_class"><span style={{display:"inline-block", textDecoration:"none"}}>Chat</span></NavLink>
            <NavLink exact to ='/listcontact' activeClassName ="active_class"><span style={{display:"inline-block", textDecoration:"none"}}>Contact List </span></NavLink>
            {/* <NavLink exact to ='/addcontact' activeClassName ="active_class"><span style={{display:"inline-block", textDecoration:"none"}}>Add Contact</span></NavLink> */}

            </div> 
    </>)
}
export default Menu;