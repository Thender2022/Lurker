import { deleteNote } from "../../utilities/userCart-api";

export default function NoteCard({note, key}) {

async function handleButtonPress(evt) {
        evt.preventDefault();
        // const submitNote = await deleteNote(note._id)
    }

  return (
    <>
        <div>{note.content} ${note.budget}.00</div>
        <button onClick={handleButtonPress}>Delete</button><hr></hr>
        
    </>
  );
}