var circle = {
    radius: 6,

    diameter: function () {
        return this.radius * 2;
    }
};

TestCase("CircleTest", {
    "test should implicitly bind to object": function () {
        assertEquals(12, circle.diameter());
    },

    "test implicit binding to the global object": function () {
        var myDiameter = circle.diameter;
        assertNaN(myDiameter());

        radius = 2;
        assertEquals(4, myDiameter());
    }
});