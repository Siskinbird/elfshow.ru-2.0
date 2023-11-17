let modal = $(".modal");

$("#sendMailElfi").on("click", () => {
  let name = $("#formNameElfi").val();
  let email = $("#formEmailElfi").val();
  let phone = $("#formPhoneElfi").val();
  let message = $("#formMessageElfi").val();

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
      $("#btnContactElfi").prop("disabled", true);
    },
    success: function (data) {
      if (!data) {
        alert("Были ошибки, сообщение не отправлено");
      } else {
        $("#sendFormElfi").trigger("reset");
        $("#btnContactElfi").prop("disabled", false);

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
/***************************************************************************************/
/*                                  КОСТЫЛИИИИИИИИ                                     */
/***************************************************************************************/

$("#sendMailTrio").on("click", () => {
    let name = $("#formNameTrio").val();
    let email = $("#formEmailTrio").val();
    let phone = $("#formPhoneTrio").val();
    let message = $("#formMessageTrio").val();
  
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
        $("#btnContactTrio").prop("disabled", true);
      },
      success: function (data) {
        if (!data) {
          alert("Были ошибки, сообщение не отправлено");
        } else {
          $("#sendFormTrio").trigger("reset");
          $("#btnContactTrio").prop("disabled", false);
          modal[1].style.display = 'none';
        }
      },
    });
  });
  
/***************************************************************************************/
/*                                  КОСТЫЛИИИИИИИИ II                                  */
/***************************************************************************************/

$("#sendMailDuo").on("click", () => {
    let name = $("#formNameDuo").val();
    let email = $("#formEmailDuo").val();
    let phone = $("#formPhoneDuo").val();
    let message = $("#formMessageDuo").val();
  
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
        $("#btnContactDuo").prop("disabled", true);
      },
      success: function (data) {
        if (!data) {
          alert("Были ошибки, сообщение не отправлено");
        } else {
          $("#sendFormDuo").trigger("reset");
          $("#btnContactDuo").prop("disabled", false);
  
          modal[2].style.display = 'none';
        }
      },
    });
  });

/***************************************************************************************/
/*                                  КОСТЫЛИИИИИИИИ III                                 */
/***************************************************************************************/

$("#sendMailDriada").on("click", () => {
    let name = $("#formNameDriada").val();
    let email = $("#formEmailDriada").val();
    let phone = $("#formPhoneDriada").val();
    let message = $("#formMessageDriada").val();
  
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
        $("#btnContactDriada").prop("disabled", true);
      },
      success: function (data) {
        if (!data) {
          alert("Были ошибки, сообщение не отправлено");
        } else {
          $("#sendFormDriada").trigger("reset");
          $("#btnContactDriada").prop("disabled", false);
  
          modal[3].style.display = 'none';
        }
      },
    });
  });

/***************************************************************************************/
/*                                  КОСТЫЛИИИИИИИИ VI                                  */
/***************************************************************************************/

$("#sendMailSolo").on("click", () => {
    let name = $("#formNameSolo").val();
    let email = $("#formEmailSolo").val();
    let phone = $("#formPhoneSolo").val();
    let message = $("#formMessageSolo").val();
  
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
        $("#btnContactSolo").prop("disabled", true);
      },
      success: function (data) {
        if (!data) {
          alert("Были ошибки, сообщение не отправлено");
        } else {
          $("#sendFormSolo").trigger("reset");
          $("#btnContactSolo").prop("disabled", false);
  
          modal[4].style.display = 'none';
        }
      },
    });
  });