import { Button } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ModalComponent from "./ModalComponent";
import { NotesStore as Store } from "../Store/NotesStore";

interface NoteItemProps {
  note: { id: string; title: string; contents: string };
  ListeyiYenile: () => void;
}

const Note: React.FC<NoteItemProps> = ({ note, ListeyiYenile }) => {
  const [open, setOpen] = React.useState(false);
  const [openDurum, setOpenDurum] = React.useState<
    "duzenle" | "ekle" | "goruntule"
  >("goruntule");

  return (
    <>
      <li>
        <tr>
          <th
            onClick={async function () {
              setOpenDurum("goruntule");
              setOpen(true);
            }}
          >
            {note.title}&nbsp;&nbsp;
          </th>
          <th>
            <Button
              color="secondary"
              variant="contained"
              size="small"
              startIcon={<EditIcon />}
              onClick={function () {
                setOpenDurum("duzenle");
                setOpen(true);
              }}
            >
              Edit
            </Button>
          </th>
          <th>
            <Button
              color="error"
              variant="contained"
              size="small"
              startIcon={<DeleteIcon />}
              onClick={async function () {
                Store.NotSil({
                  id: note.id,
                  title: note.title,
                  contents: note.contents,
                });
                await ListeyiYenile();
                setOpen(false);
              }}
            >
              Delete
            </Button>
          </th>
        </tr>

        {/* <div style={{ display: "inline-flex" }}></div> */}
      </li>

      <ModalComponent
        show={open}
        showOff={async function () {
          await ListeyiYenile();
          setOpen(false);
        }}
        note={{ id: note.id, title: note.title, contents: note.contents }}
        durum={openDurum}
      />
    </>
  );
};

export default Note;
