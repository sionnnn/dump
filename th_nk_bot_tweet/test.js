var currentSessionId;

$(document).ready(function () {
        
    // Reference the auto-generated proxy for the hub.  
    var session = $.connection.sessionHub;

    $('input.chat-input').keypress(function (e) {
        if (e.which == 13) {
            SubmitInput();
        }
    });

    $('button.chat-start').click(function () {
        $('.chat-intro').hide();
                
        // Create a function that the hub can call back to display messages.
        session.client.connected = function (sessionId) {
            currentSessionId = sessionId;
        };

        session.client.receiveResponse = function (data) {
            if (data.Type == "Text") {
                var chatHistoryPane = $('.chat-history-pane');
                chatHistoryPane.append('<p class="chat-item text server"><b>Aurora: </b>' + data.Content + '</p>');
            }
        };

        session.client.messageSent = function () {
            // Clear text box and reset focus for next comment. 
            $('input.chat-input').val('').focus();

            $('button.chat-input').removeAttr('disabled');
            $('textarea.chat-input').removeAttr('disabled');
        };

        // Start the connection.
        $.connection.hub.start().done(function () {
            session.server.connect();

            setTimeout(function () {
                session.server.start(currentSessionId);
                $('.chat-room').show();
            }, 500);

            $('button.chat-input').click(function () {
                SubmitInput();
            });
        });
    });

    function SubmitInput()
    {
        var input = $('input.chat-input').val();

        var chatHistoryPane = $('.chat-history-pane');
        chatHistoryPane.append('<p class="chat-item text client"><b>Me: </b>' + input + '</p>');

        // Call the Send method on the hub. 
        session.server.sendMessage(input, currentSessionId);

        $('button.chat-input').attr('disabled', 'disabled');
        $('textarea.chat-input').attr('disabled', 'disabled');
    }

    $('button.chat-end').click(function () {
        session.server.stop(currentSessionId);
        $.connection.hub.stop();
        $('.chat-history-pane').html('');
        $('.chat-intro').show();
        $('.chat-room').hide();
        window.location.reload();
    });

});
