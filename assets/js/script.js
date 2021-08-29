var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;

    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    var listItemEl = document.createElement("li"); //creates li in ul
    listItemEl.className = "task-item"; 

    var taskInfoEl = document.createElement("div"); //creates div to hold task info and add to list item 
    taskInfoEl.className = "task-info"; //gives div a class name
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";//add HTML content to div - which is really cool though I don't quite understand it all yet 

    listItemEl.appendChild(taskInfoEl);

    tasksToDoEl.appendChild(listItemEl); //add entire list item to list

};

formEl.addEventListener("submit",createTaskHandler);

//You can create DOM objects without editing the html directly - i.e. that is, you can do it dynamically from js. 

//<script>
// var listEL = document.querySelector("#villains");  ASSIGNS VARIABLE THE HTML ELEMENT THAT DOMINATES THE QUERYSELECTOR ARGUMENT
// var villainListeEL = document.createElement("li"); CREATEELEMENT METHOD PROBABLY CREATES AN ELEMENT, HERE WE ASSIGN THE ELEMENT TO THE VARIABLE VILLAINLISTEL
//villainlistEL.textContent = "Thanos";                 HERE WE USE THE TEXTCONTENT METHOD FOR ELEMENTS AND ASSIGN IT THE VALUE "THANOS"
//villainlistEL.className = "list-group-item";          HERE WE USE THE CLASSNAME METHOD TO ASSIGN THE HTML ELEMENT LI THE CLASS NAME LIST-GROUP (-ITEM IS A SUFFIX) SO THAT OUR CSS CATCHES IT
//HTMLDataListElement.appendChild(villainListEL);       NOT EXACLTY SURE WHAT KIND OF OBJECT OR ARRAY HTMLDATALISTELEMENTIS, BUT WE'RE GIVING APPENDCHILD(VILLAINLISTEL) ARGUMENT, SO I SUPPOSE THIS INTRODUCES A SISTER NODE IN THE TREE
//</script>