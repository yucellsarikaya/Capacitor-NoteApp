import React from "react";
import Note from "./Note";

const NoteList = ({
  notes,
  ListeyiYenile,
}: {
  notes: any;
  ListeyiYenile: () => void;
}) => {
  return (
    <div className="note-list">
      <h2>Notes</h2>

      <ul>
        {notes.map((note: any, index: any) => (
          <Note
            key={index}
            note={{ id: note.id, title: note.title, contents: note.contents }}
            ListeyiYenile={function () {
              ListeyiYenile();
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
