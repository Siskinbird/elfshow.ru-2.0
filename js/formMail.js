$("#sendMail").on("click", () => {
  let name = $("#formName").val();
  let email = $("#formEmail").val();
  let phone = $("#formPhone").val();
  let message = $("#formMessage").val();

  if (email.trim() === "") {
    $("#errorMessage").text("Введите email");
    return false;
  } else if (name.trim() === "") {
    $("#errorMessage").text("Введите имя");
    return false;
  } else if (phone.trim() === "") {
    $("#errorMessage").text("Введите телефон");
    return false;
  } else if (message.length < 5) {
    $("#errorMessage").text("Введите сообщение не менее 5 символов");
    return false;
  }

  $("#errorMessage").text("");

  $.ajax({
    url: "ajax/mail.php",
    type: "POST",
    crossDomain: true,
    cache: false,
    data: {
      name: name,
      email: email,
      phone: phone,
      message: message,
    },
    dataType: "html",
    beforeSend: function () {
      $(".btnContact").prop("disabled", true);
    },
    success: function (data) {
      if (!data) {
        alert("Были ошибки, сообщение не отправлено");
      } else {
        $(".sendForm").trigger("reset");
        $(".btnContact").prop("disabled", false);

        let elems = document.getElementsByClassName("modal");
        for (let i = 0; i < elems.length; i++) {
          if ((elems[i].style.display === "block")) {
            elems[i].style.display = "none";
          }
        }
      }
    },
  });
});
