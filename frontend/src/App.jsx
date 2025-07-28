import { useEffect, useState } from "react";
import axios from "axios";
import AddNoteForm from "./components/AddNoteForm";
import NoteCard from "./components/NoteCard";

function App() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:3000/api/notes");
    setNotes(res.data);
  };

  const addNote = async (title, content) => {
    await axios.post("http://localhost:3000/api/notes", { title, content });
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await axios.delete(`http://localhost:3000/api/notes/${id}`);
    fetchNotes();
  };

  useEffect(() => { fetchNotes(); }, []);

  return (
    <div className="min-h-screen bg-gray-600 p-6 flex justify-center flex-col">
      <h1 className="text-6xl text-white font-bold text-center mb-4">📝 Notes Memory Wall</h1>
      <AddNoteForm addNote={addNote} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {notes.map((note) => (
          <NoteCard key={note._id} note={note} deleteNote={deleteNote} />
        ))}
      </div>
    </div>
  );
}

export default App;
