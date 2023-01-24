let placeholder_input = document.getElementById("input");
console.log(placeholder_input)
let submit_button = document.getElementsByClassName("submit")[0];
let todo_lists = document.getElementsByClassName("todo-lists")[0];
console.log(todo_lists.children)
console.log(todo_lists)
console.log(submit_button);
function addlists(){
    let list = document.createElement("div");
    list.className="lists";
    if (placeholder_input.value!=""){
        list.innerHTML=`
        <input type="checkbox" class="checkbox" onclick="workComplete()"><p>${placeholder_input.value}</p><i class="fa-solid fa-trash" onclick="deleteItem(this)"></i>
        
        `
        todo_lists.appendChild(list);
        placeholder_input.value="";
    }

} 
submit_button.addEventListener("click",addlists)

function workComplete(){
    var para = document.querySelectorAll("p");
    var checkbox = document.getElementsByClassName("checkbox");
    console.log(checkbox)
    for(i=0;i<checkbox.length;i++){
        if(checkbox[i].checked==false){
            para[i].style.textDecoration="none";
        }
        else if(checkbox[i].checked==true){
            para[i].style.textDecoration="line-through";
        }
    }
}


function deleteItem(e){
    e.parentElement.remove();
    // let todo_lists = document.getElementsByClassName("todo-lists")[0];
    // let del_button=document.querySelectorAll("i")
    // console.log(del_button)
    // del_button.forEach(button=>{
    //     button.addEventListener("click",()=>{
    //         button.parentElement.remove()
    //     })
    // })


}







