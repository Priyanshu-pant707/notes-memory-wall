import { useState } from "react";

export default function AddNoteForm({ addNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addNote(title, content);
      setTitle("");
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-4 rounded shadow">
      <input
        type="text"
        placeholder="Title"
        className="border p-2 w-full mb-2 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        className="border p-2 w-full mb-2 rounded"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        Add Note
      </button>
    </form>
  );
}
