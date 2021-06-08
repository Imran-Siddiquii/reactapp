import React, { useState } from 'react';
import Chatapp from './Image/Chatapp.png';
 import SendIcon from '@material-ui/icons/Send';
// import EmailIcon from '@material-ui/icons/Email';
 import Button from '@material-ui/core/Button';  
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Tooltip from '@material-ui/core/Tooltip';
import Text from './Text';
const Chat =()=>{
    const[text,setText] = useState("");
    const[newtext,updatetext] = useState([ ]);

    const onEvent=(main)=>{
     setText(main.target.value);
      console.log(setText);
    }

    
    const onSubmit=(event)=>{
      updatetext((even)=>{
         return [...even,text];
      })
     setText('');
      event.preventDefault();
    }
     
    return(<>
        <div className="chat_box">
         {/* <img src={Chatapp} alt ="background" width="100%" height="570px"/> */}
         <div className="Chat_head">
         <h2>Imran</h2>
         </div><br/>
         <div className="chat_area">
         <h5 style={{border:"0px solid red",textAlign:"center"}} >Conversation</h5>
       {  newtext.map((val,index)=>{
       return (<Text
         title={val}
         key={index}
         id={index}
         />);
     })}</div>
     
           <br/>
         <form>
         <input type="text" placeholder="Type a message" onChange={onEvent} value={text} required />
         <Tooltip title="send">
         <Button variant="solid" color="secondary" onClick={onSubmit} ><SendIcon/></Button>
      </Tooltip>     
         </form>
      
      
        {/* <Button variant="solid" color="secondary" onClick={onSubmit} ><SendIcon/></Button> */}
        
      {/* <Button
        variant="contained"
        color="primary"
        onClick={onSubmit}
        >
        <SendIcon/></Button>  */}
        </div>
    </>)
}
export default Chat;