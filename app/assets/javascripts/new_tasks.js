$(function(){
  var newTaskForm = $("form#new_task");

  var postTaskDataToServer = function(){
    var taskData = newTaskForm.serialize();
    var conversation = $.ajax({url: "/tasks", type: "POST", data: taskData });
    conversation.done(addTaskToList);
    conversation.fail(onFailure);
    resetForm();
    return false;
  };

  var onFailure = function(ajaxObject){
    var html = ajaxObject.responseText;
    $("#errors").html(html)
  }

  var resetForm = function(){
    newTaskForm.find("#task_title, #task_description").val("");
    newTaskForm.find("#task_title").focus();
  };

  var addTaskToList = function(task) {
    $("#errors").html("");
    var taskList = $("ul#incomplete-task-list");
    taskList.prepend(task);
  };

  newTaskForm.submit(postTaskDataToServer);

});
