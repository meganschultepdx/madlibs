var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

$(document).ready(function() {
  $("#formOne").submit(function(event) {

      blanks.forEach(function(blank) {
        $("." + blank).text($("#" + blank).val());
      });

    $("#story").show();

    event.preventDefault();
  });
});
