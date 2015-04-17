var pizza = {
    getPrice: function() {
        return 10   + (this.topping * 2)
                    + (this.pizza_size * 3)
    }
};

$(document).ready(function() {
    $('#order-form').submit(function(event) {
        event.preventDefault();

        var toppings_multiplier = 0;

        $(':checkbox:checked.topping-selection').each(function() {
            toppings_multiplier += +this.value;
        });

        var size_selection = parseInt($('.size-selection').val());
        console.log(size_selection);

        var pizza_order = Object.create(pizza);

        pizza_order.topping = toppings_multiplier;
        pizza_order.pizza_size = size_selection;

        var pizza_price = pizza_order.getPrice();

        $('#pizza-price').show();

        $('#order-price').text(pizza_price);
    });
});
