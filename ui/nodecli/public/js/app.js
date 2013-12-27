var app = function() {

  $("#cmd1").click(function(){
      $.get( "/cmd", function(data) {
          alert( "command was performed." + data );
      });
  });

}
