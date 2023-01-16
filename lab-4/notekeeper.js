const notesContainer =document.querySelector('.notes')
const addBtn=document.querySelector('.notes__add')

getNotes().forEach(note=>{
    const noteElement= createNoteElement(note.id,note.content);
    notesContainer.insertBefore(noteElement,addBtn);
})

function getNotes(){
    return JSON.parse(localStorage.getItem("notes-container")||"[]");
}

function saveNotes(notes){
    localStorage.setItem("notes-container",JSON.stringify(notes))
}
function createNoteElement(id,content){
    const elementNoteList=document.createElement('div')

    elementNoteList.classList.add('notes__list-item');
    elementNoteList.placeHolder="Empty note"
    elementNoteList.value=content

    elementNoteList.addEventListener("change",()=>{
        updateNote(id,elementNoteList.value);
    })

    elementNoteList.addEventListener("dblclick",()=>{
        const doDelete = confirm("Are u sure u wish to delete this note?")
        if(doDelete){
            deleteNote(note,elementNoteList)
        }
    })

    return elementNoteList

}

function updateNote(id,newKontent){
    console.log("updateing note..");
    console.log(id,newKontent);
}
function deleteNote(id,element){
    console.log("deleting note..");
    console.log(id,element);
}