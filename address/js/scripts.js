function Contact(firstName, lastName, age){
  this.firstName = firstName
  this.lastName = lastName
  this.age = age;
}

//----------------------------
$(document).ready(function(){
  $("#names").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#firstName").val();
    var inputtedLastName = $("input#lastName").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });

    $("input#firstName").val("");
    $("input#Lastname").val("");
    });
});
