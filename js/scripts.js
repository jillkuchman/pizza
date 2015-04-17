var Pizza = {
    getPrice: function() {
        if (this.topping === 'cheese') {
            return 10;
        }
        if (this.topping === 'pepperoni') {
            return 15;
        }
    }
}

$(document).ready(function() {
    $('#topping-selection').submit(function(event) {
        event.preventDefault();

        var topping_selection = $('#topping-input').val();

        var pizza_order = Object.create(Pizza);

        pizza_order.topping = topping_selection;

        var pizza_price = pizza_order.getPrice();

        $('#order-price').text(pizza_price);
    });
});
