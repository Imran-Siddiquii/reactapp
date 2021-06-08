import React from 'react';
import './index.css';

const Text =(props)=>{
    var time1 = new Date().toLocaleTimeString();

    return(<>
         <div className="chat_bar">
         <div className="chat_show">
            <h6>{props.title} 👍 </h6>
         </div>
         </div>
         {/* <h6>{time1}</h6> */}
    </>)
}
export default Text;