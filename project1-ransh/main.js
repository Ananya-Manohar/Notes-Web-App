const addBox = document.querySelector(".add-box"), 
popupBox = document.querySelector(".popup-box"), 
closeIcon = document.querySelector(".headerp i"),
TitleTag = document.querySelector("input"),
DescTag = document.querySelector("textarea"),
addBtn = document.querySelector(".popup button");

const months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const notes = JSON.parse(localStorage.getItem("notes") || "[]");

function showNotes() {
    document.querySelectorAll(".note").forEach(note => note.remove());
    notes.forEach((notes) => {
        let litag =`<li class="note">
                        <div class="details">
                            <p>${notes.Title}</p> <span>${notes.Description}</span> 
                        </div>
                        <div class="bottom-content"> <span>${notes.Date}</span>
                            <div class="settings"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                        </div>
                    </li>`;
        addBox.insertAdjacentHTML("afterend",litag)
    });   
}

addBox.addEventListener( "click", () => {
    popupBox.classList.add("show");
});

closeIcon.addEventListener("click" , () => {
    TitleTag.value = "";
    DescTag.value = "";
    popupBox.classList.remove("show");
});

addBtn.addEventListener("click" , e => {
    e.preventDefault();
    let noteTitle = TitleTag.value,
    noteDesc = DescTag.value;

    if(noteTitle || noteDesc){
        let dateObj = new Date(),
        month = months[dateObj.getMonth()],
        date = dateObj.getDate()
        year = dateObj.getFullYear();

        let noteinfo = {
            Title: noteTitle , Description: noteDesc , 
            Date:`${month} ${date}, ${year}`
        }
        notes.push(noteinfo);
        localStorage.setItem("notes",JSON.stringify(notes));
        closeIcon.click();
        showNotes();

    }
});

