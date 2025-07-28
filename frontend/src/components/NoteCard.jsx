export default function NoteCard({ note, deleteNote }) {
  return (
    <div className="bg-white p-4 rounded shadow relative mt-10">
      <h2 className="font-semibold font-black  text-red-500 text-lg mb-1">{note.title}</h2>
      <hr />
      <p className="text-gray-700 text-2xl">{note.content}</p>
      <p className="text-gray-700 text-sm">{note.createdAt}</p>
      <button
        onClick={() => deleteNote(note._id)}
        className="absolute top-2 right-2 text-red-500 hover:scale-[1.2] transition-all "
      >
        ✖
      </button>
    </div>
  );
}
