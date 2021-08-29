var pageContentEl = document.querySelector("#page-content");

var tasksInProgressEl = document.querySelector("#tasks-in-progress");
var tasksCompletedEl = document.querySelector("#tasks-completed");

var taskIdCounter = 0;

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {

    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;

    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }

    formEl.reset();

    var isEdit = formEl.hasAttribute("data-task-id");

    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    if (isEdit) {
        var taskId = formEl.getAttribute("data-task-id");
        completeEditTask(taskNameInput, taskTypeInput, taskId);
    }

    else {
        var taskDataObj = {
            name: taskNameInput,
            type: taskTypeInput
        };

        createTaskEl(taskDataObj);

    }

};

var completeEditTask = function(taskName, taskType, taskId) {
    
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");

    taskSelected.querySelector("h3.task-name").textContent = taskName;
    taskSelected.querySelector("span.task-type").textContent = taskType;

    alert("Task Updated!");

    formEl.removeAttribute("data-task-id");
    document.querySelector("#save-task").textContent = "Add Task";
};

var createTaskEl = function(taskDataObj) {

    var listItemEl = document.createElement("li"); //creates li in ul
    listItemEl.className = "task-item"; 

    listItemEl.setAttribute("data-task-id", taskIdCounter);

    var taskInfoEl = document.createElement("div"); //creates div to hold task info and add to list item 
    taskInfoEl.className = "task-info"; //gives div a class name
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";//add HTML content to div - which is really cool though I don't quite understand it all yet 

    listItemEl.appendChild(taskInfoEl);

    var taskActionsEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionsEl);
    
    tasksToDoEl.appendChild(listItemEl); //add entire list item to list

    taskIdCounter++;

};

var createTaskActions = function(taskId) {

    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";

    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id",taskId);

    actionContainerEl.appendChild(editButtonEl);

    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(deleteButtonEl);

    var statusSelectEl = document.createElement("select");
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);

    var statusChoices = ["To Do", "In Progress", "Completed"];

    for (var i = 0; i < statusChoices.length; i++) {

        var statusOptionEl = document.createElement("option");
        statusOptionEl.textContent = statusChoices[i];
        statusOptionEl.setAttribute("value",statusChoices[i]);

        statusSelectEl.appendChild(statusOptionEl);

    }

    actionContainerEl.appendChild(statusSelectEl);

    return actionContainerEl;
};

var taskButtonHandler = function(event) {
    var targetEl = event.target;

    if (targetEl.matches(".edit-btn")) {
        var taskId = targetEl.getAttribute("data-task-id");
        editTask(taskId);
    }
    else if (targetEl.matches(".delete-btn")) {
      // get the element's task id
      var taskId = targetEl.getAttribute("data-task-id");
      deleteTask(taskId);
    }
  };

  var editTask = function(taskId) {

      var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");

      var taskName = taskSelected.querySelector("h3.task-name").textContent;

      var taskType = taskSelected.querySelector("span.task-type").textContent;
        document.querySelector("input[name='task-name']").value = taskName;
        document.querySelector("select[name='task-type']").value = taskType;
        document.querySelector("#save-task").textContent = "Save Task";

        formEl.setAttribute("data-task-id", taskId);

  };

  var deleteTask = function(taskId) {
      var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
      taskSelected.remove();
  };

  var taskStatusChangeHandler = function(event) {
    var taskId = event.target.getAttribute("data-task-id");
    var statusValue = event.target.value.toLowerCase();
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");

    if (statusValue === "to do") {
        tasksToDoEl.appendChild(taskSelected);
    }
    else if (statusValue === "in progress") {
        tasksInProgressEl.appendChild(taskSelected);
    }
    else if (statusValue === "completed") {
        tasksCompletedEl.appendChild(taskSelected);
    }
  };

formEl.addEventListener("submit",taskFormHandler);

pageContentEl.addEventListener("click", taskButtonHandler);

pageContentEl.addEventListener("change", taskStatusChangeHandler);

//You can create DOM objects without editing the html directly - i.e. that is, you can do it dynamically from js. 

//<script>
// var listEL = document.querySelector("#villains");  ASSIGNS VARIABLE THE HTML ELEMENT THAT DOMINATES THE QUERYSELECTOR ARGUMENT
// var villainListeEL = document.createElement("li"); CREATEELEMENT METHOD PROBABLY CREATES AN ELEMENT, HERE WE ASSIGN THE ELEMENT TO THE VARIABLE VILLAINLISTEL
//villainlistEL.textContent = "Thanos";                 HERE WE USE THE TEXTCONTENT METHOD FOR ELEMENTS AND ASSIGN IT THE VALUE "THANOS"
//villainlistEL.className = "list-group-item";          HERE WE USE THE CLASSNAME METHOD TO ASSIGN THE HTML ELEMENT LI THE CLASS NAME LIST-GROUP (-ITEM IS A SUFFIX) SO THAT OUR CSS CATCHES IT
//HTMLDataListElement.appendChild(villainListEL);       NOT EXACLTY SURE WHAT KIND OF OBJECT OR ARRAY HTMLDATALISTELEMENTIS, BUT WE'RE GIVING APPENDCHILD(VILLAINLISTEL) ARGUMENT, SO I SUPPOSE THIS INTRODUCES A SISTER NODE IN THE TREE
//</script>