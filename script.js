const input = document.querySelector(".inputField input");
const buttonadd = document.querySelector(".inputField button");
const datatodo = document.querySelector(".todoList");

input.onkeyup = () => {
    let userinput = input.value;
    if(userinput.trim() != 0){
        buttonadd.classList.add("active");
    }
    else{
        buttonadd.classList.remove("active");
    }
}

munculintodo();
buttonadd.onclick = () => {
    let inputuser = input.value;
    let storagelocal = localStorage.getItem("Todo list");
    if(storagelocal == null){
        todolist = [''];
    }
    else{
        todolist = JSON.parse(storagelocal);
    }
    todolist.push(inputuser);
    localStorage.setItem("Todo list", JSON.stringify(todolist));
    munculintodo();
}

function munculintodo(){
    let storagelocal = localStorage.getItem("Todo list");
    if(storagelocal == null){
        todolist = [];
    }
    else{
        todolist = JSON.parse(storagelocal);
    }
    let newtag = '';
    todolist.forEach((todo, index) =>{
        newtag += `<li>${todo}<span onclick="hapustodo(${index})"><i class="fas fa-trash"></i></span></li>`
    });
    datatodo.innerHTML = newtag;
    input.value ='';
}

function hapustodo(index){
    let storagelocal = localStorage.getItem("Todo list");
    todolist = JSON.parse(storagelocal);
    todolist.splice(index, 1);
    localStorage.setItem("Todo list", JSON.stringify(todolist));
    munculintodo();
}