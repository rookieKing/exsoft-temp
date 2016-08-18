if (!String.prototype.trim) String.prototype.trim = function () { return this.replace(/^\s+|\s+$/g, ""); };
String.prototype.format = function () { var a = arguments, b = a[0], c = this, d = /\{(\d+)\}/g; if ("object" == typeof b) for (var e in b) d = RegExp("({" + e + "})", "g"), c = c.replace(d, b[e]); else c = c.replace(d, function (b, c) { return a[c] }); return c };

(function ($) {
    $(".delSpace,.pagination").each(function () {
        $(this).html($(this).html().replace(/\s+(?=<)|\s+$/g, ""));
    });
    function autoMargin(sumWidth, itemWidth, apllyTarget, minMargin) {
        var count = Math.floor(sumWidth / (itemWidth + (minMargin || 8))),
            marginSum = (sumWidth - itemWidth * count) || itemWidth,
            margin = marginSum / count / 2;
        if (Math.floor(margin) == Math.round(margin))
            $(apllyTarget).css({
                marginLeft: Math.floor(margin),
                marginRight: Math.floor(margin)
            });
        else
            $(apllyTarget).css({
                marginLeft: Math.floor(margin),
                marginRight: Math.ceil(margin)
            });
    }
    var autoMargins = $(".autoMargin"),
        processor = {
            timeoutId: null,
            performProcessor: function () {
                //$("#header>h1").text($(window).width() + "*" + $(window).height());
                autoMargins.each(function () {
                    var self = $(this),
                        sumWidth = self.width(),
                        itemWidth = Number(self.attr("data-itemWidth")) || 150,
                        count = Math.floor(sumWidth / itemWidth),
                        minMargin;
                    if (count == 2) {
                        minMargin = 8;
                    } else if (count > 2 && count < 6) {
                        minMargin = 32;
                    } else {
                        minMargin = 64;
                    }
                    autoMargin(sumWidth, itemWidth, $("li", self), minMargin);
                });
            },
            process: function () {
                clearTimeout(this.timeoutId);

                var that = this;
                this.timeoutId = setTimeout(function () {
                    that.performProcessor();
                }, 100);
            }
        };
    processor.process();
    $(window).resize(function () {
        processor.process();
    });

    var searchBox = $("#searchWrap").parent();
    $("#header>.menu>span").click(function () {
        if (searchBox.is(":visible")) {
            searchBox.hide(500);
        } else {
            searchBox.show(500);
        }
    });
    var secondNav = $("#secondNav");
    $("#mainNav>div:first>a.menu").click(function () {
        if (secondNav.is(":visible")) {
            $("#secondNav").fadeOut(500);
            $(this).removeClass("active");
        } else {
            $("#secondNav").fadeIn(500);
            $(this).addClass("active");
        }
    });
})(jQuery);
