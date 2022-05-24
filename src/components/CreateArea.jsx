import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  

  function handleChange(event) {
    const {name, value} = event.target;
    setNote(prevNote => {
     return {
       ...prevNote,
      [name]: value
    };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault(); 
  }

  const [isDone, setIsDone] = useState(false);
  function expand(event) {
     setIsDone(true);
  }

  return (
    <div>
      <form className="create-note">
        <input onChange={handleChange} type={!isDone ? "hidden" : null} value={note.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} onClick={expand} value={note.content} name="content" placeholder="Take a note..." rows={isDone ? "3" : "1"} />
      <Zoom in={isDone ? true : false}>
        <Fab onClick={submitNote}>
        <AddIcon />
        </Fab>
      </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
