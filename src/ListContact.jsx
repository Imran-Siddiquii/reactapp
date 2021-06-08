import React, { useState } from 'react';
import './index.css';
import ContactDetails from './ContactDetails';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import HighlightOffSharpIcon from '@material-ui/icons/HighlightOffSharp';
import Tooltip from '@material-ui/core/Tooltip';

const ListContact =(props)=>{
  const[Txt,setTxt] =useState({
    title:" ",
    contact: " "
});
const [newTxt,upTxt]=useState([""]);
const [expnd,newExpnd]=useState(false);
const onEvent=(main)=>{
  console.log(setTxt);
  const{name, value} = main.target;

  setTxt((preData) => {
      return {
          ...preData,
          [name] : value, 
       };
    // console.log(setTxt);
  });
};   
const addCon=(even)=>{
 upTxt((kal)=>{
  return [
      ...kal,Txt]
  
})
   console.log(addCon);
 even.preventDefault();

setTxt({
title:" ",
contact: " "
});
}
const Expand=()=>{
  newExpnd(true);
}
const normal=()=>{
 newExpnd(false);
}
 const onDelete=(id)=>{
   upTxt((olddata)=>
     olddata.filter((cur,indx)=>{
      return indx !== id;
   })
   );    
 
 };

    return(<>
           <h6 style={{border:"0px solid red",width:"350px",marginLeft:"5px", textAlign:"center",marginTop:"5px"}} >Contact Details</h6>
           <div className="buttonAdd">
           <Tooltip title="Add Contact">
            <Button variant="contained" color="primary"  onClick={Expand}><AddIcon/></Button>
            </Tooltip>
            </div>
                      
            <div className="contList">
 {     newTxt.map((sel,index)=>{
        return(
          <ContactDetails
            key={index}
            id={index}
            Ammo={sel.title}
            Memmo={sel.contact}
            deleteItem={onDelete}
        />)}
)}  
</div>

      
           <div className = "addContact"  >
            <form  >
            {expnd?
            <div>
            <Tooltip title="Minimize">
            <Button onClick={normal} style={{backgroundColor:"none",marginLeft:"340px"}}><HighlightOffSharpIcon/></Button>
            </Tooltip>
            <br/><span>Enter details</span><br/>
                <label>Enter Name* </label>
                <input type="text" required 
                onChange={onEvent} 
                name="title"
                 value={Txt.title}
                 autoComplete="off"
               />
                <br/>
                <label>Enter Number*</label>
                 <input type="number" 
                  minLength="10"
                  required
                   onChange={onEvent}
                   name="contact"
                   value={Txt.contact} 
                />
                <br/><Tooltip title="Add">
                <Button variant="contained" color="primary" onClick={addCon}  >Add Contact</Button></Tooltip></div>:null}
            </form>
          
    </div>
             </>)
}
export default ListContact;