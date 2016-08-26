//Business logic
function Customer(name) {
  this.nameInput = name;
  this.pizza = [];
}

function Pizza(toppings, size) {
  this.toppingsInput = toppings;
  this.sizeInput = size;
}
Pizza.prototype.pizzaPrice = function () {
  var price = 5;

  if (this.sizeInput === "medium") {
    price += 3;
  }
  else if (this.sizeInput === "large") {
    price += 5;
  }
  else if (this.sizeInput === "xl") {
    price += 7;
  }
  else if (this.sizeInput === "jumbo") {
    price += 10;
  }
  if (this.toppingsInput.length != 0) {
    price = price + (this.toppingsInput.length * .75);
  }
  return price;
};

// Front-end logic
$(document).ready(function() {
  $("#add-pizza").click(function () {
    $("#new-pizza").append ('<div class="new-pizza">' +
                              '<label for="movie">Please select a pizza size: </label>' +
                              '<select class="form-control" id="size">' +
                                '<option value="new-release">Small</option>' +
                                '<option value="new-release">Medium</option>' +
                                '<option value="old-release">Large</option>' +
                                '<option value="old-release">Extra large</option>' +
                                '<option value="old-release">Nick Special Jumbo</option>' +
                              '</select>' +
                              '<label for="toppings">Please select your toppings: </label><br>' +
                              '<input type="checkbox" name="topping" value="cheese">' +
                              'Cheese<br>' +
                              '<input type="checkbox" name="topping" value="pepperni">' +
                              'Pepperoni<br>' +
                              '<input type="checkbox" name="topping" value="mushrooms">' +
                              'Mushrooms<br>' +
                              '<input type="checkbox" name="topping" value="chicken">' +
                              'Chicken<br>' +
                              '</div>')
  });


  $("form#userInput").submit(function (event) {
    event.preventDefault();

    var inputtedName = $("input#userName").val();

    var newCustomer = new Customer(inputtedName);

    $(".new-ticket").each(function () {
      var inputtedAge = $(this).find("input#userAge").val();
        inputtedAge = parseInt(inputtedAge);
      var inputtedTime = $(this).find("#time").val();
      var inputtedMovie = $(this).find("#movie").val();
      var newTicket = new Ticket (inputtedAge, inputtedTime, inputtedMovie);
      newCustomer.tickets.push(newTicket);

      $("ul").append("<li>" + "Your ticket will cost you: " + "$"  + newTicket.ticketPrice() + "</li>");
      $("ul").append("<li>" + "Your ticket will cost you: " + "$"  + newTicket.ticketPrice() + "</li>");

        console.log(newCustomer);
    });



  });
});

    // if (newTicket.ageInput >= 60 && newTicket.timeInput === "matinee" && newTicket.movieInput === "old-release") {
    //   var price = 5;
    //   console.log(price)
    // } else if (newTicket.ageInput >= 60 && newTicket.timeInput === "matinee" && newTicket.movieInput === "new-release") {
    //   var price = 9;
    //   console.log(price);
    // } else if (newTicket.ageInput >= 60 && newTicket.timeInput === "full-price" && newTicket.movieInput === "new-release") {
    //   var price = 12;
    //   console.log(price);
    // }  else if (newTicket.ageInput >= 60 && newTicket.timeInput === "full-price" && newTicket.movieInput === "old-release") {
    //   var price = 8;
    //   console.log(price);
    // } else if (newTicket.ageInput <= 60 && newTicket.timeInput === "matinee" && newTicket.movieInput === "new-release") {
    //   var price = 12;
    //   console.log(price);
    // } else if (newTicket.ageInput <= 60 && newTicket.timeInput === "matinee" && newTicket.movieInput === "old-release") {
    //   var price = 8;
    //   console.log(price);
    // } else if (newTicket.ageInput <= 60 && newTicket.timeInput === "full-price" && newTicket.movieInput === "new-release") {
    //   var price = 15;
    //   console.log(price);
    // } else if (newTicket.ageInput <= 60 && newTicket.timeInput === "full-price" && newTicket.movieInput === "old-release") {
    //   var price = 12;
    //   console.log(price);
    // }
