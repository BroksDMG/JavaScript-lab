const notesContainer =document.getElementById('app')
const addBtn=document.querySelector('.notes__add')

function getNotes(){
    return JSON.parse(localStorage.getItem("notes-container")||"[]");
}

function saveNotes(notes){
    localStorage.setItem("notes-container",JSON.stringify(notes))
}
function createNoteElement(id,content){
    const elemtntNoteList=document.createElement('div')

    elemtntNoteList.classList.add('notes__list-item');
    elemtntNoteList.value=content;
    elemtntNoteList.placeHolder="notes__lsit"

    elemtntNoteList.addEventListener("change",function(){
        updateNote(id,Element.value);
    })

    elemtntNoteList.addEventListener("dblclick",function(){

    })

    return elemtntNoteList

}

function updateNote(id,content){

}