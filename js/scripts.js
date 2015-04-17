var Pizza = {
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
                    
    }
};

$(document).ready(function() {
    $('#order-form').submit(function(event) {
        event.preventDefault();

        var topping_selection = $('#topping-selection').val();

        var pizza_order = Object.create(Pizza);

        pizza_order.topping = topping_selection;

        var pizza_price = pizza_order.getPrice();

        $('#pizza-price').show();

        $('#order-price').text(pizza_price);
    });
});
