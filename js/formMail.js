$('#sendMail').on('click', () => {
    let name = $('#formName').val();
    let email = $('#formEmail').val();
    let phone = $('#formPhone').val();
    let message = $('#formMessage').val();

    if(email.trim() === ''){
        $("#errorMessage").text("Введите email");
        return false;
    } else if(name.trim() === '') {
        $("#errorMessage").text("Введите имя");
        return false;
    } else if(phone.trim() === '') {
        $("#errorMessage").text("Введите телефон");
        return false;
    } else if(message.length < 5) {
        $("#errorMessage").text("Введите сообщение не менее 5 символов");
        return false;
    }

    $('#errorMessage').text('');

    $.ajax({
        url: 'ajax/mail.php',
        type: 'POST',
        cache: false,
        data: {
            'name' : name,
            'email': email,
            'phone': phone,
            'message': message
        },
        dataType: 'html',
        beforeSend: function () {
            $('#sendMail').prop('disabled', true);
        },
        success: function (data) {
            alert(data);
            $("#sendMail").prop('disabled', false)
        }
    })

})