// console.log("working");
// let task=document.getElementById("task").value;
// let add=document.getElementById("Add");
// let status=document.getElementById("status");

function run(){
        let container=document.getElementById("container");
        let task=document.getElementById("task");
        let add=document.getElementById("Add");
        let status=document.getElementById("status");     
        handleData(container,task,status);
        
}
function handleData(container,task,status){
        let work=document.createElement('div');
        let title=document.createElement('p');
        if(status.checked==true){
        title.style.color='green';      
        }
        else{
                title.style.color='red';        
        }
        title.className='divi';
        title.textContent= task.value;
        work.append(title);
        container.append(work);
         var todoData={
                 Name:task.value,
                 Status:status.checked,

         }
        localStorage.setItem("ToDo",JSON.stringify(todoData));
}