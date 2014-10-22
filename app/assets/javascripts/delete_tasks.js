$(function(){

  var deleteButton = $("form.button_to");

  var postTaskDataToServer = function() {
    var taskData = $(this).serialize();
    var conversation = $.ajax({
      type: "DELETE",
      url: $(this).attr("action"),
      data: taskData
    });
    $(this).parent().fadeOut("slow");
    return false;
  };

  $("body").on("submit", "form.button_to", postTaskDataToServer);

});
