const notesContainer =document.querySelector('.notes__sidebar')
const addBtn=document.querySelector('.notes__add')
const notesList =document.querySelector('.notes__lsit')

getNotes().forEach(note=>{
    const noteElement= createNoteElement(note.id,note.content);
    // notesContainer.insertBefore(noteElement,addBtn);
})

function getNotes(){
    return JSON.parse(localStorage.getItem("notes-container")||"[]");
}

function saveNotes(notes){
    localStorage.setItem("notes-container",JSON.stringify(notes))
}
function createNoteElement(id,content){
    const elementNoteList=document.createElement('div');
    const html=`
    <div class="notes__small-title">shoping note</div>
    <div  class="notes__small-body">${content}</div>
    <div class="notes__small-updated">date</div>`
    elementNoteList.classList.add('notes__list-item');
    elementNoteList.innerHTML=html;
    notesList.append(elementNoteList);


    elementNoteList.addEventListener("change",()=>{
        updateNote(id,elementNoteList.value);
    })

    elementNoteList.addEventListener("dblclick",()=>{
        const doDelete = confirm("Are u sure u wish to delete this note?")
        if(doDelete){
            deleteNote(id,elementNoteList)
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