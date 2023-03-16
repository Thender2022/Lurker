export default function CartNotesForm() {
    return (
        <>
            <div>CartNotesForm</div>
            <form>
                <input type="text" name="content" placeholder="Note..."></input>
                <input type="number" name="budget" placeholder="$$$"></input>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}