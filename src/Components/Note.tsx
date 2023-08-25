import { Button } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface NoteItemProps {
  note: string;
}

const Note: React.FC<NoteItemProps> = ({ note }) => {
  return (
    <li>
      {note}
      <Button color="secondary" variant="contained" startIcon={<EditIcon />}>
        Edit
      </Button>
      <Button color="error" variant="contained" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </li>
  );
};

export default Note;
