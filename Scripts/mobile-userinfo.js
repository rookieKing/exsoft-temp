(function ($) {
    $("#change").click(function () {
        var OldPassword = $("#OldPassword").val(),
            NewPassword = $("#NewPassword").val(),
            ConfirmPassword = $("#ConfirmPassword").val();
        if (!NewPassword) {
            $("#NewPassword~strong").stop(true, true).fadeIn(500, function () {
                $(this).fadeOut(3000);
            });
            $("#NewPassword").select();
        } else if (NewPassword !== ConfirmPassword) {
            $("#ConfirmPassword~strong").stop(true, true).fadeIn(500, function () {
                $(this).fadeOut(3000);
            });
            $("#ConfirmPassword").select();
        } else {
            $.post(AP_ROOT + "Account/ChangePassword", {
                OldPassword: OldPassword,
                NewPassword: NewPassword,
                ConfirmPassword: ConfirmPassword
            }, function (back) {
                //todo

            });
        }
    });
})(jQuery);
