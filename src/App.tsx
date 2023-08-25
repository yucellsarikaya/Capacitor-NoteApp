import React from 'react';
import './App.css';
import Header from './Components/Header';
import NoteList from './Components/NoteList';

function App() {
  const notes = [
    'Bugün toplantı saat 14:00\'te',
    'Alışveriş listesi: süt, ekmek, yumurta',
    'Spor yapmayı unutma!'
  ];
  return (
    <div>
      <Header/>
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
