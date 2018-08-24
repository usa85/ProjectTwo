// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

//Create an on click function for taking the values for searching for trainers
$("#trainerSubmit").on("click", function(event) {
  event.preventDefault();
  console.log("here");
  var newTrainer = {
    trainerName: $("#trainerName")
      .val()
      .trim(),
    trainerEmail: $("#trainerEmail")
      .val()
      .trim(),
    trainerPhone: $("#trainerPhone").val(),
    trainerAvailability: $("#trainerAvailability option:selected").val(),
    trainerAbout: $("#trainerAbout")
      .val()
      .trim()
  };
  $.ajax("/api/trainers", {
    type: "POST",
    data: newTrainer
  }).then(function() {
    $.ajax({
      method: "GET",
      url: "/api/clients/" + $("#trainerAvailability option:selected").val()
    }).then(function(data) {
      console.log(data);
    });
  });
});

//Create an on click funciton for taking the values for seaching for clients
$("#clientSubmit").on("click", function(event) {
  event.preventDefault();
  
  var newClient = {
    clientName: $("#clientName")
      .val()
      .trim(),
    clientEmail: $("#clientEmail")
      .val()
      .trim(),
    clientPhone: $("#clientPhone").val(),
    clientAvailability: $("#clientAvailability option:selected").val(),
    clientAbout: $("#clientAbout")
      .val()
      .trim()
  };
  //console.log(newClient);
  $.ajax("/api/clients", {
    type: "POST",
    data: newClient
  }).then(function() {
    //console.log("second ajax call");

    $.ajax({
      method: "GET",
      url: "/api/trainers/" + $("#clientAvailability option:selected").val()
    }).then(function(data) {
      console.log(data);
    });
  });
});






















// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};


// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);

