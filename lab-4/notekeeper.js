const notesContainer =document.querySelector('.notes__sidebar')
const addBtn=document.querySelector('.notes__add')
const notesList =document.querySelector('.notes__lsit')
const colorsbtns=document.querySelectorAll('.btncolor');
const notesBody= document.querySelector('.notes__body')
const notesTitle= document.querySelector('.notes__title')
getNotes().forEach(note=>{
    createNoteElement(note);
})

function getNotes(){
    return JSON.parse(localStorage.getItem("notes-container")||"[]");
}

addBtn.addEventListener("click",addNote);
function addNote(){
    const notes=getNotes();
    const noteObject={
        id:Math.floor(Math.random()*100000),
        content: notesBody.value,
        title:notesTitle.value,
        
    }
    createNoteElement(noteObject)
    notes.push(noteObject);
    saveNotes(notes)

}
function saveNotes(notes){
    localStorage.setItem("notes-container",JSON.stringify(notes))
}
function createNoteElement(noteObject){
    const maxBodyLength =60;
    console.log(noteObject.title);
    const elementNoteList=document.createElement('div');
    const html=`
    <div class="notes__list-item >
    <div class="notes__small-title">${noteObject.title}</div>
    <div  class="notes__small-body">
    ${noteObject.content.substring(0,maxBodyLength)}
    ${noteObject.content.length>maxBodyLength?"...":""}
    </div>
    <div class="notes__small-updated">date</div>
    </div>`
    elementNoteList.classList.add('notes__list-item');
    elementNoteList.innerHTML=html;
    notesList.append(elementNoteList);
    elementNoteList.addEventListener("change",()=>{
        updateNote(id,elementNoteList.value);
    })

    elementNoteList.addEventListener("dblclick",()=>{
        const doDelete = confirm("Are u sure u wish to delete this note?")
        if(doDelete){
            deleteNote(noteObject.id,elementNoteList)
        }
    })
    elementNoteList.addEventListener('click',()=>{
        elementNoteList.classList.toggle('notes__list-item--selected')

    })

    return elementNoteList

}

function updateNote(id,newKontent){
    const notes =getNotes();
    const targetNote=notes.filter(note=>note.id===id)[0];
    targetNote.content=newKontent
    saveNotes(notes);
}
function deleteNote(id,element){
    const notes = getNotes().filter(note=>note.id!==id);

    saveNotes(notes);
    notesList.removeChild(element)
}