export default function NoteCard({note, key}) {

  return (
    <div>{note.content} ${note.budget}.00</div>
  );
}