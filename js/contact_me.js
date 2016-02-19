/*
    This script was originally part of David Millers (https://github.com/davidtmiller)
    Bootstrap theme "Freelancer" add some functionality to the contact form.

    Licensed under the Apache License 2.0. For more information take a look at the orignal
    repository unde https://github.com/IronSummitMedia/startbootstrap-freelancer.
*/

$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },

        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });

    var $contactFormRow = $("#contactFormRow");
    var $contactConfirmRow = $("#contactConfirmRow");
    var $contactContainer = $("#contact .container");
    var $contactForm = $("#contactForm");

    $contactForm.ajaxForm().on('submit', function(){
        $contactContainer.css({
            'min-height': $contactContainer.height(),
            'max-height': $contactContainer.height()
        });

        $contactFormRow.transition({
            opacity: 0
        }, function(){
            $contactFormRow.hide();
            $contactConfirmRow.show().transition({
                opacity: 1
            }, function(){
                setTimeout(function(){
                    $contactConfirmRow.transition({
                        opacity: 0
                    }, function(){
                        $contactConfirmRow.hide();
                        $contactForm.clearForm();
                        $contactFormRow.show().transition({
                            opacity: 1
                        }, function(){
                            $contactContainer.css({
                                'min-height': '',
                                'max-height': ''
                            });
                        });
                    });
                }, 450);
            });
        });
    });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
