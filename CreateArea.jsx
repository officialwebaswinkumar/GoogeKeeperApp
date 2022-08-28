import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
function CreateArea(props) {
  const [isExpanded ,  setExpanded]=useState(false);
  const [notes, updatenotes] = useState({
    title: "",
    content: ""
  });
  function text(event) {
    const { name, value } = event.target;
    updatenotes((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  function submitNotes(event) {
    props.onAdd(notes);
    updatenotes({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function expand(){
    setExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && <input
          name="title"
          onChange={text}
          value={notes.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onClick={expand}
          onChange={text}
          value={notes.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
        <button onClick={submitNotes}>
          <AddIcon />
        </button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
