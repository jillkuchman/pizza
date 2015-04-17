describe('Pizza', function() {
    describe('getPrice', function() {
        it('will return a price of 10 for cheese', function() {
            var testPizza = Object.create(Pizza);
            testPizza.topping = 'cheese';
            expect(testPizza.getPrice()).to.equal(10);
        });
        it('will return a price of 15 for pepperoni', function() {
            var testPizza = Object.create(Pizza);
            testPizza.topping = 'pepperoni';
            expect(testPizza.getPrice()).to.equal(15);
        });
    });
});
