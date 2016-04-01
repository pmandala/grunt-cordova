$(document).on("mobileinit", function () {
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;
    $.mobile.changePage.defaults.changeHash = false;
    //$.mobile.page.prototype.options.theme = 'b';
    //$.mobile.page.prototype.options.headerTheme = 'a';
    /*$.mobile.page.prototype.options.footerTheme = 'b';
    $.mobile.page.prototype.options.contentTheme = 'c';*/
    $.mobile.page.prototype.options.degradeInputs.date = true;
});

