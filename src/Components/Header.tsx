import React from "react";
import "./Header.css";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <Button
            color="secondary"
            variant="contained"
            startIcon={<NoteAddIcon />}
          >
            Note Add
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
