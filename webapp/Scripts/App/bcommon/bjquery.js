/// <reference path="/Scripts/App/bcommon/references.js" />

//this is used to initialize bootstrap tooltips
//$("body").tooltip({ selector: '[data-toggle="tooltip"]', html: true });

$(document).ajaxStart(function (handler) {
    window.App.__container__.lookup("controller:application").send('refreshSession');
});

$(document).ajaxSend(function (event, jqXHR, ajaxOptions) {
    if (ajaxOptions.url.indexOf('some-url') == -1 ) {
        $('#dLoading').show();
    }
});


$(document).ajaxComplete(function () {
    $('#dLoading').hide();
});

function showAlert(title, message, type) {
    var icon;
    var template = '<div class="alert alert-' + type + ' alert-dismissable">' +
        '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' +
        '<h4 style="white-space:nowrap"><i class="icon fa ';
    switch (type) {
        case 'danger':
            template += 'fa-ban';
            break;
        case 'warning':
            template += 'fa-warning';
            break;
        case 'success':
            template += 'fa-check';
            break;
    }
    template += '"></i> <span data-growl="title"></span></h4>' +
        '<span data-growl="message"></span>' +
        '</div>';
    $.growl({
        title: title,
        message: message,
    }, {
        type: type,
        placement: {
            from: "bottom",
            align: "right"
        },
        z_index: 10000,
        delay: 5500,
        spacing: 10,
        icon_type: 'class',
        offset: {
            x: 10,
            y: 10,
        },
        animate: {
            enter: 'animated bounceInUp',
            exit: 'animated bounceOutDown'
        },
        template: template
    });
}

function rgba(rgb, a) {
    return 'rgba(' + rgb + ',' + a + ')';
}