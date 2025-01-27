import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "677b4e262ffcfd91b581fda9",
      user: "6779ff6d0ff7889835364661",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2025-01-06T03:21:10.821Z",
      __v: 0,
    },
    {
      _id: "677b4c273ffcfd91b581fdab",
      user: "6779ff6d0ff7889835364661",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2025-01-06T03:21:10.957Z",
      __v: 0,
    },
    {
      _id: "677b4c261ffcfd91b582fdab",
      user: "6779ff6d0ff7889835364661",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2025-01-06T03:21:10.957Z",
      __v: 0,
    },
    {
      _id: "677b4c265ffcfd91b581fcab",
      user: "6779ff6d0ff7889835364661",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2025-01-06T03:21:10.957Z",
      __v: 0,
    },
    {
      _id: "677b4c268ffcfd91b481fdab",
      user: "6779ff6d0ff7889835364661",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2025-01-06T03:21:10.957Z",
      __v: 0,
    },
    {
      _id: "677b4c289ffcfd81b581fdab",
      user: "6779ff6d0ff7889835364661",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2025-01-06T03:21:10.957Z",
      __v: 0,
    },
    {
      _id: "677b4c221ffcfd91c581fdab",
      user: "6779ff6d0ff7889835364661",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2025-01-06T03:21:10.957Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
