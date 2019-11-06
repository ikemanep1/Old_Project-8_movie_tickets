// back end
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.addPrice = function() {
  var movieTicket = 50;
  if (this.movie.includes("Hereditary")) {
    movieTicket -= 45;
  };
  if (this.movie.includes("Emoji", "Star wars")) {
    movieTicket += 100;
  };
  if (this.age.includes("child", "Senior")) {
    movieTicket -= 5;
  };
  if (this.time.includes("Morning", "Noon")) {
    movieTicket -= 3;
  };
  if (this.time.includes("afternoon", "evening")) {
    movieTicket += 15;
  };
  this.movieTicket = movieTicket;
};
// front end
$(document).ready(function(){
  $("form#userForm").submit(function(event){
    event.preventDefault();
  var movie = $("#movies").val();
  var age = $("#age").val();
  var time = $("#Time").val();
  var ticketResults = new Ticket(movie, age, time)
  ticketResults.addPrice();

  $('p#results').text('Thank you for coming to watch ' + ticketResults.movie + ' your time is at ' + ticketResults.time + ' and cost is $' + ticketResults.movieTicket );
  console.log(ticketResults);

  })
})
