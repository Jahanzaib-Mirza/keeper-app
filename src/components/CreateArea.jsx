import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
    const [isExpanded,setIsExpanded]= useState(false)
    const [note,setNote]=useState({ 
        title:"",
        content:""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote((prev) => ({ ...prev, [name]: value }));
    }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input name="title" onChange={handleChange} placeholder="Title" value={note.title} />}
        
        <textarea name="content" onClick={()=> setIsExpanded(true)} onChange={handleChange} placeholder="Take a note..." rows={isExpanded ? 3:1} value={note.content} />
        <Zoom in={isExpanded}>
        <Fab onClick={(e)=>{
            props.click(note);
            setNote({title:"",content:""})
            e.preventDefault();
            }}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
