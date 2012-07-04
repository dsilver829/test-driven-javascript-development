if (!Function.prototype.bind) {
    (function () {
        var slice = Array.prototype.slice;

        Function.prototype.bind = function (thisObj) {
            var target = this;

            if (arguments.length > 1) {
                var args = Array.prototype.slice.call(arguments, 1);

                return function () {
                    var allArgs = args;

                    if (arguments.length > 0) {
                        allArgs = args.concat(slice.call(arguments));
                    }

                    return target.apply(thisObj, args.concat(received));
                };
            }

            return function () {
                if (arguments.length > 0) {
                    return target.apply(thisObj, arguments);
                }

                return target.call(thisObj);
            };
        };
    }());
}