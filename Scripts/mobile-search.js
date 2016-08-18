(function ($) {
    var searchCondition = $("#searchCondition");
    $("#conditionSwitch").click(function () {
        searchCondition.toggleClass("hide");
    }); 

    var processor = {
        timeoutId: null,
        performProcessor: function (e) {
            if ($(document).height() <= $(window).scrollTop() + $(window).height() + 100) {
                //加载更多-如果有更多的话
                console.log(new Date().toLocaleString());

            }
        },
        process: function (e) {
            clearTimeout(this.timeoutId);

            var that = this;
            this.timeoutId = setTimeout(function () {
                that.performProcessor(e);
            }, 100);
        }
    };

    $(window).scroll(function (e) {
        processor.process.call(processor, e);
    });

    //$.get("/U/Search", {
    //    keyword: "",
    //    categoryId: "",
    //    year: "",
    //    sDuration: "",
    //    eDuration: "",
    //    order: ""
    //}, function (data) {
    //    console.log(data);
    //}, "html");
})(jQuery);
