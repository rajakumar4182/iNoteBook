import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "677b4c262ffcfd91b581fda9",
      user: "6779ff6d0ff7889835364661",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2025-01-06T03:21:10.821Z",
      __v: 0,
    },
    {
      _id: "677b4c262ffcfd91b581fdab",
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
