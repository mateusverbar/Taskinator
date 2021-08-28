var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};

buttonEl.addEventListener("click",createTaskHandler);



//<script>
// var listEL = document.querySelector("#villains");  ASSIGNS VARIABLE THE HTML ELEMENT THAT DOMINATES THE QUERYSELECTOR ARGUMENT
// var villainListeEL = document.createElement("li"); CREATEELEMENT METHOD PROBABLY CREATES AN ELEMENT, HERE WE ASSIGN THE ELEMENT TO THE VARIABLE VILLAINLISTEL
//villainlistEL.textContent = "Thanos";                 HERE WE USE THE TEXTCONTENT METHOD FOR ELEMENTS AND ASSIGN IT THE VALUE "THANOS"
//villainlistEL.className = "list-group-item";          HERE WE USE THE CLASSNAME METHOD TO ASSIGN THE HTML ELEMENT LI THE CLASS NAME LIST-GROUP (-ITEM IS A SUFFIX) SO THAT OUR CSS CATCHES IT
//HTMLDataListElement.appendChild(villainListEL);       NOT EXACLTY SURE WHAT KIND OF OBJECT OR ARRAY HTMLDATALISTELEMENTIS, BUT WE'RE GIVING APPENDCHILD(VILLAINLISTEL) ARGUMENT, SO I SUPPOSE THIS INTRODUCES A SISTER NODE IN THE TREE
//</script>