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
    var element = $(taskHTML).hide();
    $("#complete-task-list").prepend(element);
    element.fadeIn("slow");
  }

  $("body").on("submit", "form#complete-task", postTaskDataToServer);

});
