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

  //Add a Note
  const addNote = (title, description, tag) => {
    //toDo Api call
    console.log("adding a newNote");
    const note = {
      _id: "677b4c221ffcfd91c581fdab",
      user: "6779ff6d0ff7889835364661",
      title: title,
      description: description,
      tag: tag,
      date: "2025-01-06T03:21:10.957Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete A Note
  const deleteNote = (id) => {
    //toDo Api call
    console.log("delete the node of id " + id);
    const newNote = notes.filter((note) => {
      return note._id != id;
    });
    setNotes(newNote);
  };

  // Edit a Note
  const editNote = (id, title, description, tag) => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
