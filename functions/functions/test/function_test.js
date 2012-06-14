TestCase("FunctionTest", {
    "test function length property": function () {
        assertEquals(2, assert.length);
        assertEquals(1, document.getElementById.length);
        assertEquals(0, console.log.length);
    },

    "test scope": function() {
        function sum() {
            assertUndefined(i);

            assertException(function () {
                assertUndefined(someVar);
            }, "ReferenceError");

            var total = arguments[0];

            if (arguments.length > 1) {
                for (var i = 1, l = arguments.length; i < l; i++) {
                    total += arguments[i];
                }
            }

            assertEquals(5, i);

            return total;
        }

        sum(1,2,3,4,5);
    }
});

TestCase("FormalParametersArgumentsTest", {
    "test dynamic relationship": function () {
        function modify(a, b) {
            b = 42;
            arguments[0] = arguments[1];

            return a;
        }

        assertEquals(42, modify(1,2));
    }
});

var global = this;

TestCase("GlobalObjectTest", {
   "test window should be a global object": function () {
       assertSame(global, window);
       assertSame(global.window, window);
       assertSame(window.window, window);
   }
});