$(document).ready(function() {
  //Search click button action
  $('#search').click(function() {
    var searchSubject = $('#searchSubject').val();
    //API code for searchSubect
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchSubject + "&format=json&callback=?";

    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data) {

        //  console.log(data[1][0]);
        //  console.log(data[2][0]);
        //  console.log(data[3][0]);
        $("#output").html(" ");
        for (var i = 0; i < data[1].length; i++) {
          $("#output").append("<li><a href= " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
        }
        $("#searchSubject").val(" ");
      },
      error: function(errorMessage) {
        alert("Error");
      }
    });

  });
  $("#searchSubject").keypress(function(e) {
    if (e.which == 13) {
      $("#search").click();
    }
  });
});
