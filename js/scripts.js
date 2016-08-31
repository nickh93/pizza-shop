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

  if (this.sizeInput !="small") {
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

    $("ul#pizza-price").empty();
    var inputtedName = $("input#userName").val();

    var newCustomer = new Customer(inputtedName);

    $(".new-pizza").each(function () {
      var inputtedSize = $(this).find("#size").val();
      var inputtedToppings = [];
      //function used to grab values from the form into an array
      $(this).find("input[name=topping]:checked").each(function() {
        inputtedToppings.push($(this).val());
      });
      //function ends
      console.log(inputtedToppings);
      var newPizza = new Pizza (inputtedToppings, inputtedSize);
      newCustomer.pizza.push(newPizza);

      $("ul#pizza-price").append("<li>" + "Your pizza will cost you: " + "$"  + newPizza.pizzaPrice() + "</li>");

        console.log(inputtedToppings);
    });



  });
});
