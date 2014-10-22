$(function(){

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

  $("body").on("submit", "form#complete-task", postTaskDataToServer);

});
