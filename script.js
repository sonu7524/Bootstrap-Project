$(document).ready(function() {
    $("#contact-form").submit(function(e) {
      e.preventDefault();
      var firstname = $("#firstname").val();
      var lastname = $("#lastname").val();
      var email = $("#email").val();
      var password = $("#password").val();
      var confirmpassword = $("#password").val();
      $.ajax({
        type: "POST",
        url: "send-mail.php",
        data: {
          firstname: fistname,
          lastname: lastname,
          email: email,
          password:password,
          confirmpassword: confirmpassword
        },
        success: function(data) {
          $("#contact-form").html("<p>Thank you for your message!</p>");
        },
        error: function(data) {
          alert("An error occurred. Please try again later.");
        }
      });
    });
  });

  let swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  