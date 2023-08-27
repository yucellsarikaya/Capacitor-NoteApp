import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import NoteList from "./Components/NoteList";
import { NotesStore as Store } from "./Operations/NotesStore";
function App() {
  const [notes, setNotes] = React.useState([]);
  useEffect(() => {
    async function fetchData() {
      listeyiYenile();
    }
    fetchData();
  }, []);
  const listeyiYenile = async () => {
    const notList = await Store.NotlariListele("notes");
    setNotes(notList);
  };
  return (
    <div>
      <Header
        ListeyiYenile={async function () {
          await listeyiYenile();
        }}
      />
      <NoteList
        notes={notes}
        ListeyiYenile={async function () {
          await listeyiYenile();
        }}
      />
    </div>
  );
}

export default App;
