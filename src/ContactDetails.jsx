import React from 'react';
import './index.css';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
const ContactDetails=(props)=>{
    const conDelete=()=>{
     props.deleteItem(props.id);
    }
    return(<>
        <div className="detailsCon">
            <h6> {props.Ammo}</h6>
            <p> {props.Memmo} </p></div><div className="delebtn"><Tooltip title="Delete Contact"><Button color="secondary" onClick={conDelete} ><DeleteIcon/>{props.delete}</Button>
            </Tooltip>     
            </div> 
    </>)
}
export default ContactDetails;


      