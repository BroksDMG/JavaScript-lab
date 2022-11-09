export default class NotesView{
    constructor (root,{onNoteSelect,onNoteAdd,onNoteEdit,onNoteDelete}={}){
        this.root=root;
        this.onNoteSelect=onNoteSelect;
        this.onNoteAdd=onNoteAdd;
        this.onNoteEdit=onNoteEdit;
        this.onNoteDelete=onNoteDelete;
        this.root.innerHTML=`
        <div class="notes__sidebar">
            <button class="notes__add" type="button">Add Note</button>
            <div class="notes__list"></div>
        </div>
        <div class="notes__preview">
            <input class="notes__title" type="text" placeholder="New note..">
            <textarea class="notes__body">Your note..</textarea>
            <div class="btnscolor">
                <button class="btncolor whitebttn" type="button"></button>
                <button class="btncolor redbtn" type="button"></button>
                <button class="btncolor bluebtn" type="button"></button>
                <button class="btncolor greenbtn" type="button"></button>
                <button class="btncolor orangebtn" type="button"></button>
            </div>
        </div>
        `;
        const btnscolor =this.root.querySelectorAll(".btncolor");
        const btnAddNote= this.root.querySelector(".notes__add");
        const inpTitle= this.root.querySelector(".notes__title");
        const inpBody= this.root.querySelector(".notes__body");

        btnAddNote.addEventListener('click',()=>{
            this.onNoteAdd();
        });
        [inpTitle,inpBody].forEach(inputField=>{
            inputField.addEventListener('blur',()=>{
                const updateTitle=inpTitle.value.trim();
                const updateBody=inpBody.value.trim();

                this.onNoteEdit(updateTitle,updateBody);
            });
        });
        this.updateNotePreviewVisibility(false);
        // console.log(this._createListItemHtml(300,"hey","Yeah mate",new Date()));
    }

    _createListItemHTML(id,title,body,updated){
        const MaxBodyLength=60;

        return `
        <div class ="notes__list-item" data-note-id="${id}">
            <div class="notes__small-title">${title}</div>
            <div class="notes__small-body">
                ${body.substring(0,MaxBodyLength)}
                ${body.length >MaxBodyLength ? "...":""}
                
            </div>
            <div class="notes__small-updated">
                ${updated.toLocaleString(undefined,{dateStyle:"full",timeStyle: "short"})}
            </div>
        </div>
        '`;
    }

    updateNoteList(notes){
        const notesListContainer= this.root.querySelector(".notes__list");

        //empty list
        notesListContainer.innerHTML= "";
        for(const note of notes){
            const html = this._createListItemHTML(note.id, note.title, note.body, new Date(note.updated));

            notesListContainer.insertAdjacentHTML("beforeend", html);
        }
        notesListContainer.querySelectorAll('.notes__list-item').forEach(noteListItem=>{
            noteListItem.addEventListener('click',()=>{
                this.onNoteSelect(noteListItem.dataset.noteId);
            });
            // btnscolor.addEventListener('click',()=>{
            //     noteListItem.classList.add
            // })
            noteListItem.addEventListener('dblclick',()=>{
                const doDelete = confirm("Are you sure you wont delete this note?");

                if(doDelete){
                    this.onNoteDelete(noteListItem.dataset.noteId);
            
                }
            });
        });

    }
    updateActiveNote(note){
        this.root.querySelector(".notes__title").value = note.title;
        this.root.querySelector(".notes__body").value = note.body;
        
        this.root.querySelectorAll(".notes__list-item").forEach(noteListItem=>{
            noteListItem.classList.remove("notes__list-item--selected");
            
        });

        this.root.querySelector(`.notes__list-item[data-note-id="${note.id}"]`).classList.add("notes__list-item--selected");
    }
    updateNotePreviewVisibility(visibile){
        this.root.querySelector(".notes__preview").style.visibility=visibile?"visible":"hidden";
    }
}