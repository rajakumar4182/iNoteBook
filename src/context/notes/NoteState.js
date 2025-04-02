import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5001";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  //Get All Notes
  const getNotes = async () => {
    //API calls
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc3OWZmNmQwZmY3ODg5ODM1MzY0NjYxIn0sImlhdCI6MTczNjA0ODUzMn0.tVLEIxj4XfmI2HIIzWUVT_PCuMVd4lLAROSC__c1FpA",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //Add a Note
  const addNote = async (title, description, tag) => {
    //toDo Api call
    //API calls
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc3OWZmNmQwZmY3ODg5ODM1MzY0NjYxIn0sImlhdCI6MTczNjA0ODUzMn0.tVLEIxj4XfmI2HIIzWUVT_PCuMVd4lLAROSC__c1FpA",
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

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
  const deleteNote = async (id) => {
    //toDo Api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc3OWZmNmQwZmY3ODg5ODM1MzY0NjYxIn0sImlhdCI6MTczNjA0ODUzMn0.tVLEIxj4XfmI2HIIzWUVT_PCuMVd4lLAROSC__c1FpA",
      },
    });
    const json = response.json();
    console.log(json);
    console.log("delete the node of id " + id);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API calls
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc3OWZmNmQwZmY3ODg5ODM1MzY0NjYxIn0sImlhdCI6MTczNjA0ODUzMn0.tVLEIxj4XfmI2HIIzWUVT_PCuMVd4lLAROSC__c1FpA",
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));

    //Logic to edit in Client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
