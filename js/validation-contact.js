$(document).ready(function() {
    $('#send_message').click(function(e) {
        e.preventDefault(); // Prevent form submission

        // Reset error state
        var error = false;
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var phone = $('#phone').val().trim();
        var message = $('#message').val().trim();

        // Remove previous error styles when typing again
        $('#name, #email, #phone, #message').on('input', function() {
            $(this).removeClass("error_input");
        });

        // Validation rules
        if (name.length === 0) {
            error = true;
            $('#name').addClass("error_input");
        }

        if (email.length === 0 || email.indexOf('@') === -1) {
            error = true;
            $('#email').addClass("error_input");
        }

        if (phone.length === 0) {
            error = true;
            $('#phone').addClass("error_input");
        }

        if (message.length === 0) {
            error = true;
            $('#message').addClass("error_input");
        }

        // Process the form if no error
        if (!error) {
            $('#send_message').attr({
                'disabled': true,
                'value': 'Redirecting to WhatsApp...'
            });

            // Format message for WhatsApp
            var waText = "Hello VS Interiors, I would like to inquire about interior design services.\n\n" +
                         "👤 *Name:* " + name + "\n" +
                         "📧 *Email:* " + email + "\n" +
                         "📞 *Phone:* " + phone + "\n" +
                         "💬 *Message:* " + message;

            var waUrl = "https://wa.me/919063429993?text=" + encodeURIComponent(waText);

            // Open WhatsApp in new tab/window
            window.open(waUrl, '_blank');

            // Show nice success confirmation
            $('#contact_form').fadeOut(400, function() {
                $('<div id="success_message" class="alert alert-success mt-3 text-center p-4" style="background: rgba(37, 211, 102, 0.1); border: 1px solid #25D366; border-radius: 8px; color: #111;">' +
                  '<i class="fa-brands fa-whatsapp mb-2" style="font-size: 2.2rem; color: #25D366; display: block;"></i>' +
                  '<h5 style="color: #111; font-weight: 600;">Opening WhatsApp...</h5>' +
                  '<p class="mb-2" style="font-size: 0.95rem; color: #555;">Your inquiry details have been transferred to WhatsApp. If the chat didn\'t open automatically, click below:</p>' +
                  '<a href="' + waUrl + '" target="_blank" class="btn btn-sm btn-success mt-2" style="background:#25D366; border-color:#25D366; font-weight:600; padding: 8px 20px; border-radius: 20px;"><i class="fa-brands fa-whatsapp me-2"></i>Open Chat Directly</a>' +
                  '</div>')
                    .hide()
                    .appendTo($(this).parent())
                    .fadeIn(500);
            });
        }
    });
});

