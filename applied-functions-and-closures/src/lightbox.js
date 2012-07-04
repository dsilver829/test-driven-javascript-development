var lightbox = {
    open: function () {
        ajax.loadFragment(this.url, {
           target: this.create()
        });

        return false;
    },

    close: function () { /*...*/ },
    destroy: function () { /*...*/ },
    create: function () {
        /* Create or return container */
    }
};

function anchorLightbox(anchor, options) {
    var lb = Object.create(lightbox);
    lb.url = anchor.ref;
    lb.title = anchor.title || anchor.href;
    Object.extend(lb, options);
    anchor.onclick = lb.open;

    return lb;
}

(function () {
    var anchors = document.getElementByTagName("a");
    var controller = Object.create(lightboxController);
    var regexp  = /(^|\s)lightbox(\s|$)/;

    for (var i = 0, l = anchors.length; i < l; i++) {
        if (regexp.test(anchors[i].className)) {
            (function (anchor) {
                anchor.onclick = function () {
                    controller.open(anchor);
                    return false;
                };
            }(anchors[i]));
        }
    }
}());