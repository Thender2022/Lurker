import { useState } from "react"
import { addNote } from "../../utilities/userCart-api"

export default function CartNotesForm({userCart}) {
    const [newNote, setNewNote] = useState({
        content: '',
        budget: 0
    })

    function handleChange(evt) {
        const newNoteForm = {
            ...newNote,
            [evt.target.name]: evt.target.value
        }
        setNewNote(newNoteForm)
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const submitNote = await addNote(newNote, userCart._id)
        setNewNote({
            content: '',
            budget: 0
        })
    }

    return (
        <>
            <div>CartNotesForm</div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="content" onChange={handleChange} value={newNote.content} placeholder="Note..."></input>
                <input type="number" name="budget" onChange={handleChange} value={newNote.budget} placeholder="$$$"></input>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}