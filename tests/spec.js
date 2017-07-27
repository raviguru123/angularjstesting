describe('Filters', function() { //describe your object type
    beforeEach(module('MyApp')); //load module
    describe('reverse', function() { //describe your app name
        var reverse;
        beforeEach(inject(function($filter) {
            reverse = $filter("reverse", {});
        }));
        it("it should reverse string", function() {
            expect(reverse('ravi')).toBe('ivar'); //pass
        })
    })
})