import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "./CreateArea";

const App = () => {
    const [notes, setNotes] = useState([]);
    
    const submit = (note)=>{
        setNotes((prev)=> [...prev,note])
    }
    const deleteNote = (index)=>{
        setNotes((prev)=>{
            return prev.filter((item,i)=> {return index !== i})
        })
    }
    return <>
        <Header />
        <CreateArea click={submit} />
        {notes.map((val,i) => (<Note title={val.title} click={deleteNote} content={val.content} key={i} id={i} />))}
        <Footer />
    </>
}
export default App;