//Business logic
function Customer(name) {
  this.nameInput = name;
  this.pizza = [];
}

function Pizza(toppings, size) {
  this.toppingsInput = toppings;
  this.sizeInput = size;
  this.price = 5;
}
Pizza.prototype.pizzaPrice = function () {

  if (this.sizeInput !="small") {
    if (this.sizeInput === "medium") {
      this.price += 3;
    }
    else if (this.sizeInput === "large") {
      this.price += 5;
    }
    else if (this.sizeInput === "xl") {
      this.price += 7;
    }
    else if (this.sizeInput === "jumbo") {
      this.price += 10;
    }
  }
  if (this.toppingsInput.length != 0) {
    this.price = this.price + (this.toppingsInput.length * .75);
  }
  return this.price;
};

Customer.prototype.totalPrice = function() {
  var totalPrice = 0;

  this.pizza.forEach(function(currentPizza) {
    totalPrice += currentPizza.price;
  });

  return totalPrice;
}

// Front-end logic
$(document).ready(function() {
  $("#add-pizza").click(function () {
    $("#new-pizza").append ('<div class="new-pizza">' +
                              '<label for="movie">Please select a pizza size: </label>' +
                              '<select class="form-control size">' +
                                '<option value="small">Small</option>' +
                                '<option value="medium">Medium</option>' +
                                '<option value="large">Large</option>' +
                                '<option value="xl">Extra large</option>' +
                                '<option value="jumbo">Nick Special Jumbo</option>' +
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

    $("ul#pizza-price").empty();
    var inputtedName = $("input#userName").val();

    var newCustomer = new Customer(inputtedName);

    $(".new-pizza").each(function () {
      var inputtedSize = $(this).find(".size").val();
      var inputtedToppings = [];
      //function used to grab values from the form into an array
      $(this).find("input[name=topping]:checked").each(function() {
        inputtedToppings.push($(this).val());
      });
      //function ends
      var newPizza = new Pizza (inputtedToppings, inputtedSize);
      newCustomer.pizza.push(newPizza);

      $("ul#pizza-price").append("<li>" + "Your pizza will cost you: " + "$"  + newPizza.pizzaPrice() + "</li>");
    });

    $("ul#pizza-price").append("<li>" + "Your total price will be: " + "$"  + newCustomer.totalPrice() + "</li>");


  });
});
