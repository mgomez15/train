console.log("text")
var database = firebase.database();

var config = {
    apiKey: "AIzaSyCL1E9mzoDoRvPoXcjY3vJNzwRb-Nyo_uA",
    authDomain: "trainproject-5d965.firebaseapp.com",
    databaseURL: "https://trainproject-5d965.firebaseio.com",
    projectId: "trainproject-5d965",
    storageBucket: "trainproject-5d965.appspot.com",
    messagingSenderId: "124867468008"
};
firebase.initializeApp(config);

$("#addTrain").on("click", function (event) {
    event.preventDefault();
    var trainName = $("#trainName").val().trim();
    var destination = $("#destination").val().trim();
    var trainTime = $("#trainTime").val().trim();
    var frequency = $("#frequency").val().trim();
    var newTrain = {
        trainName: trainName,
        destination: destination,
        trainTime: trainTime,
        frequency: frequency,
    }
    firebase.database().ref().push(newTrain)
});

var tFrequency = 3;

// Time is 3:30 AM
var firstTime = "03:30";

// First Time (pushed back 1 year to make sure it comes before current time)
var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
console.log(firstTimeConverted);

// Current Time
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

// Difference between the times
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);

// Time apart (remainder)
var tRemainder = diffTime % tFrequency;
console.log(tRemainder);

// Minute Until Train
var tMinutesTillTrain = tFrequency - tRemainder;
console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

// Next Train

console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

// $("#new-train").append("<tr><td>" + snapshot.val().trainName + "</td>" +
// "<td>" + snapshot.val().destination + "</td>" + 
// "<td>" + "Every " + snapshot.val().frequency + " mins" + "</td>" + 
//"<td>" + snapshot.val().nextArrival + "</td>" +
// "<td>" + snapshot.val().minutesAway + " mins until arrival" + "</td>" +
// "<td><button class='delete btn btn-default btn-sm' data-index='" + index + "'><span class='glyphicon glyphicon-trash'></span></button> " + 
// "<button type='button' class='btn btn-default btn-sm'><span class='glyphicon glyphicon-edit'></span></button>" +
// "</td></tr>");

database.on("child_added", function (snapshot) {
    var trainName = snapshot.val().trainName;
    //var nextTrain = moment().add(tMinutesTillTrain, "minutes");

    $("tbody").append()
    var newRow = $("<tr>").append(
        $("<td>").text(trainName),

    );

    $("tbody").append(newRow);


})