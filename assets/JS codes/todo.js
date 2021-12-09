let tasklist = [];

function submitHandler(){
    event.preventDefault();

    let firstTask = document.getElementById("TaskAdding").value;
    console.log(firstTask);
    
    tasklist.push(firstTask);
    console.log(tasklist);
  
    const tasklistInString = JSON.stringify(tasklist);
    localStorage.setItem("Tasks" , tasklistInString);

    renderLists();
}


function renderLists(){
              

    const taskInString = localStorage.getItem("Tasks");
    const taskInArray = JSON.parse(taskInString);

    tasklist = taskInArray;
    let noOfTask = taskInArray.length;
         console.log(noOfTask);

    let liTags = "";
         
    for(i=0;i<taskInArray.length;i++){
        const li = "<li>"+taskInArray+"</li>";
        liTags = liTags + li;

    }
    const ul = document.getElementById("MyUl");
    ul.innerHTML = liTags;

}
    

         renderLists();
