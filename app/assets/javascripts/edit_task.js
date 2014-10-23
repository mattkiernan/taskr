$(function(){

  $("body").on("click", ".title", function(){
    $(this).attr("contentEditable", true).focus();
    newTitle = $(this)
    console.log("You clicked title");

  $("body").on("keydown", function(event){
    if(event.keyCode===13){
      console.log("You cliked enter")   
    var conversation = $.ajax({
      type: "PATCH",
        url: "/tasks/" + newTitle.parent().data("id"),
        data: {task:{title: newTitle.text()}}
    });
  conversation.done(newTitle.highlight());
  $(this).attr("contenteditable", false);
  return false;
    };
  });
  });
});
