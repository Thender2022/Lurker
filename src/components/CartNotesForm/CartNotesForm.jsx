import { useState } from "react"

export default function CartNotesForm() {
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

    function handleSubmit(evt) {
        evt.preventDefault();
        
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