$(function(){
  var newTaskForm = $("form#new_task");

  var postTaskDataToServer = function(){
    var taskData = newTaskForm.serialize();
    var conversation = $.ajax({url: "/tasks", type: "POST", data: taskData });
    conversation.done(addTaskToList);
    resetForm();
    return false;
  };

  var resetForm = function(){
    newTaskForm.find("#task_title, #task_description").val("");
    newTaskForm.find("#task_title").focus();
  };

  var addTaskToList = function(task) {
    var taskList = $("ul");
    taskList.prepend(task);
  };

  newTaskForm.submit(postTaskDataToServer);

});
