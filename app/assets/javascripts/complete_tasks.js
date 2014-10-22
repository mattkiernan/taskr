$(function(){
  var completeButton = $("form.edit_task");

  var postTaskDataToServer = function(){
    var taskData = $(this).serialize();
    var conversation = $.ajax({
      type: "PATCH",
      url: $(this).attr("action"),
      data: taskData
    });
    conversation.done(onDone);
    $(this).parent().fadeOut("slow");
    return false;
  };

  function onDone(taskHTML){
    $("#complete-tasks").prepend(taskHTML);
  }

  $("body").on("submit", "form.edit_task", postTaskDataToServer);

});
