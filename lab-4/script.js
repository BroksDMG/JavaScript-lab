"use strict"
import NotesAPI from "./notesAPI.js"
import NotesView from "./notesView.js"

const app = document.getElementById('app');
const view =new NotesView(app,{
    onNoteAdd(){
        console.log("add new notes");
    },
    onNoteSelect(id){
        console.log("note selected:"+id);
    },
    onNoteDelete(id){
        console.log("note deleted:"+id);
    },
    onNoteEdit(newTitle,newBody){
        console.log(newTitle);
        console.log(newBody);

    },

})
const notes=NotesAPI.getAllNotes();
view.updateNoteList(notes);
view.updateActiveNote(notes[0])