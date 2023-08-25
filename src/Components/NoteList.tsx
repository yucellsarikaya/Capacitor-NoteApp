import React from 'react';
import Note from './Note';

const NoteList = ({ notes}:{notes:any}) => {
  return (
    <div className="note-list">
      <h2>Notlar</h2>
      <ul>
        {notes.map((note:any, index:any) => (
          <Note key={index} note={note} />
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
