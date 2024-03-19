/*let todole=document.getElementById("taskinfo")
let tasklist=document.getElementById("tasklist")
document.getElementById("add").onclick=function(){
    if(todole.value.length==0)(
        alert("enter any task")
    )
    else{
        tasklist.innerHTML=tasklist.innerHTML+
       <div class="task">
        <span id="work">${todole.value}</span>
        <button class="del"><i class='bx bxs-message-x'></i></button>
       </div>
       let altasks=document.querySelectorAll('.del')
       for (i=0; i<altasks.length;i++){
        altasks[i].onclick=function(){
            this.parentNode.remove()
        }

       }
    }
}*/
let todole = document.getElementById("taskinfo");
let tasklist = document.getElementById("tasklist");

document.getElementById("add").onclick = function () {
    if (todole.value.length == 0) {
        alert("Enter any task");
    } else {
        tasklist.innerHTML =
            tasklist.innerHTML +
            `<div class="task">
                <span id="work">${todole.value}</span>
                <button class="del"><i class='bx bxs-message-x'></i></button>
             </div>`;
        
        let altasks = document.querySelectorAll('.del');
        for (let i = 0; i < altasks.length; i++) {
            altasks[i].onclick = function () {
                this.parentNode.remove();
            };
        }
    }
};
