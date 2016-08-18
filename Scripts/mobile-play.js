$(function () {
    //#region 节目信息
    var brief = $("#brief"),
        chapter = $("#chapter"),
        play = $(".play:first"),
        processor = {
            timeoutId: null,
            performProcessor: function () {
                play.css({
                    width: $(window).width(),
                    height: $(window).height() - 24
                });
                //$(window).scrollTop(play.offset().top);
                //todo flash大小改变

                //#region 详细信息
                if (!brief.data("animate")) {
                    $("#brief").css("height", "auto");
                    var briefHeight = brief.height();
                    $("#extendbrief").off("click");
                    if (briefHeight > 48) {
                        $("#brief").css("margin-bottom", "1.5em");
                        $("#extendbrief").parent().show();
                        $("#extendbrief").on("click", function () {
                            if ($(this).text() == "收起简介") {
                                brief.data("animate", true).animate({ height: 48 }, 500, function () {
                                    brief.data("animate", false);
                                });
                                $(this).data("show", false).text("展开简介").parent().removeClass("hide");
                            } else {
                                brief.css("height", "auto");
                                $(this).data("show", true).text("收起简介").parent().addClass("hide");
                            }
                            $(window).scrollTop($("#brief").offset().top);
                        });
                        brief.height(48);

                    } else {
                        $("#extendbrief").parent().hide();
                        $("#brief").css("margin-bottom", "0px");
                        $("#extendbrief").off("click");
                    }

                    if ($("#extendbrief").data("show")) {
                        brief.css("height", "auto");
                        $("#extendbrief").text("收起简介").parent().addClass("hide");
                    } else {
                        brief.css("height", "48px");
                        $("#extendbrief").text("展开简介").parent().removeClass("hide");
                    }
                }
                //#endregion

                //#region 片断
                $("#chapter").css("height", "auto");
                var chapterHeight = chapter.height();
                $("#extendchapter").off("click");
                if (chapterHeight > 150) {
                    $("#extendchapter").css("display", "inline-block");
                    chapter.height(150);
                    $("#extendchapter").on("click", function () {
                        $(this).data("show", true);
                        chapter.css("height", "auto");
                        $(this).hide();
                    });
                } else {
                    $("#extendchapter").hide();
                    $("#extendchapter").off("click");
                }

                if ($("#extendchapter").data("show")) {
                    $("#extendchapter").click();
                } else {

                }
                //#endregion
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
        console.log($(window).height());
        processor.process();
    });
    //#endregion
});
