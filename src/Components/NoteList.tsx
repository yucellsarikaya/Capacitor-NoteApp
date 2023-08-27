import React from "react";
import Note from "./Note";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const NoteList = ({
  notes,
  ListeyiYenile,
}: {
  notes: any;
  ListeyiYenile: () => void;
}) => {
  return (
    <div className="note-list">
      <h2>Notlar</h2>

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
