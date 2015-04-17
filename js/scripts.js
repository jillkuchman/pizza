var pizza = {
    // getPrice: function() {
    //     if (this.topping === 'cheese') {
    //         return 10;
    //     }
    //     if (this.topping === 'pepperoni') {
    //         return 15;
    //     }
    // }
    getPrice: function() {
        return 10   + (this.topping * 2)
                    + (this.pizza_size * 3)
    }
};

$(document).ready(function() {
    $('#order-form').submit(function(event) {
        event.preventDefault();

        var toppings_multiplier = 0;
        // var topping_selection = $('#topping-selection').val();
        $(':checkbox:checked.topping-selection').each(function() {
            toppings_multiplier += +this.value;
            console.log(toppings_multiplier);
        });
        console.log('total: ' + toppings_multiplier);

        var size_selection = $('#size-selection').val();

        var pizza_order = Object.create(pizza);

        pizza_order.topping = toppings_multiplier;
        pizza_order.size_selection = size_selection;

        var pizza_price = pizza_order.getPrice();

        $('#pizza-price').show();

        $('#order-price').text(pizza_price);
    });
});
