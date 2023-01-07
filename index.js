function sendMessage() {
    fname = $("#name").val();
    email = $("#email").val();
    phone = $("#phone").val();
    subject = $("#subject").val();
    message = $("#message").val();
    if (message !== "") {
        $.ajax({
            url: "send.php",
            type: "POST",
            headers: {
                Accept: 'application/json'
            },
            data: {
                fname: fname,
                email: email,
                phone: phone,
                subject: subject,
                message: message
            },
            success: function(res) {
                console.log(res);
                alert("Message sent successfully");
            },
            error: function(res) {
                console.log(res);
            }
        });
    }
}