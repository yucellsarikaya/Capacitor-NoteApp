import React from "react";
import "./Header.css";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { Button } from "@mui/material";
import ModalComponent from "./ModalComponent";

const Header = ({ ListeyiYenile }: { ListeyiYenile: () => void }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <Button
              color="secondary"
              variant="contained"
              startIcon={<NoteAddIcon />}
              onClick={function () {
                setOpen(true);
              }}
            >
              Note Add
            </Button>
          </div>
        </nav>
      </header>

      <ModalComponent
        show={open}
        showOff={async function () {
          ListeyiYenile();
          setOpen(false);
        }}
        durum="ekle"
      />
    </>
  );
};

export default Header;
