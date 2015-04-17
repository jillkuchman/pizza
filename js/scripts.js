// PROTOTYPE PIZZA OBJECT WITH getPrice METHOD
var pizza = {
    getPrice: function() {
        return 10   + (this.topping * 2)
                    + (this.pizza_size * 3)
                    + (this.crust * 3)
    }
};

var toppings_list = []

$(document).ready(function() {
    $('#order-form').submit(function(event) {
        event.preventDefault();

        var toppings_multiplier = 0;
        // ADDS CHECKED TOPPINGS TO TOPPINGS MULTIPLIER
        $(':checkbox:checked.topping-selection').each(function() {
            toppings_multiplier += +this.value;
        });

        // SETS SIZE SELECTION TO USER INPUT
        var size_selection = parseInt($('#size-selection').val());

        // SETS CRUST SELECTION TO USER INPUT
        var crust_selection = parseInt($('#crust-selection').val());

        var pizza_order = Object.create(pizza);

        pizza_order.topping = toppings_multiplier;
        pizza_order.pizza_size = size_selection;
        pizza_order.crust = crust_selection;

        var pizza_price = pizza_order.getPrice();

        $('#pizza-price').show();

        $('#order-price').text(pizza_price);

        // UNHIGHLIGHTS BUTTON WHEN NO LONGER BEING PRESSED
        $(".btn").mouseup(function(){
            $(this).blur();
        });
    });
});
