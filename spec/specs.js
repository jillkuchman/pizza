describe('Pizza', function() {
    describe('getPrice', function() {
        it('will return a price of 10 for cheese', function() {
            var testPizza = Object.create(Pizza);
            testPizza.topping = 0;
            expect(testPizza.getPrice()).to.equal(10);
        });
        it('will return a price of 12 for pepperoni', function() {
            var testPizza = Object.create(Pizza);
            testPizza.topping = 1;
            expect(testPizza.getPrice()).to.equal(12);
        });
    });
});
