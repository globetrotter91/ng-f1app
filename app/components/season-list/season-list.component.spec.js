describe('seasonList', function() {
    // Load the module that contains the `sessionList` component before each test
    beforeEach(module('foneApp'));
    // Test the controller
    describe('SeasonListController', function() {
        it('should load without error', inject(function($componentController) {
            var ctrl = $componentController();

            expect(ctrl.seasons.length).toBe(0);
        }));
    });
});