$(document).ready(function () {
  Metronic.init();
  ComponentsPickers.init();
  $(".files").attr('data-before', "Drag file here or click the above button");
  $('input[type="file"]').change(function (e) {
    var fileName = e.target.files[0].name;
    $(".files").attr('data-before', fileName);

  });


  $("#left_slider").click(function () {
    var x = document.getElementById("left_check").checked;
    if (x) {
      $("#left_header_card").html("Day Pass");
      $("#left_price").html("$20.00");
      $("#left_price_text").html("original price was $40.00");
      $("#left_description").html("Live Group Only");
      $("#day_pass").addClass("changed");
      $("#week_program").removeClass("changed");
      $("#left_info_1").html("----------------------");
      $("#left_info_2").html("----------------------");
      $("#left_info_3").html("----------------------");
      $("#left_info_4").html("----------------------");
      $("#left_info_5").html("----------------------");
      $("#left_info_6").html("----------------------");
    } else {
      $("#left_header_card").html("6 Weeks Program");
      $("#left_price").html("$50.00");
      $("#left_price_text").html("Original price was $80.00");
      $("#left_description").html("6 Weeks Program [PDF]");
      $("#day_pass").removeClass("changed");
      $("#week_program").addClass("changed");
      $("#left_info_1").html("General Exercise");
      $("#left_info_2").html("General Diet Plans");
      $("#left_info_3").html("----------------------");
      $("#left_info_4").html("----------------------");
      $("#left_info_5").html("----------------------");
      $("#left_info_6").html("----------------------");
    }
  });
  $("#right_slider").click(function () {
    var x = document.getElementById("right_check").checked;
    if (x) {
      $("#right_price").html("$170.00");
      $("#right_price_text").html("Original price was $250");
      $("#right_description").html("Virtual Training");
      $("#one_payment").addClass("changed");
      $("#week_live").removeClass("changed");
      $("#right_info_1").html("General info Diet Plans");
      $("#right_info_2").html("----------------------");
      $("#right_info_3").html("Live Access 4 Days /week");
      $("#right_info_4").html("----------------------");
      $("#right_info_5").html("----------------------");
      $("#right_info_6").html("30 Min. Consultation");
    } else {
      $("#right_price").html("$225.00");
      $("#right_price_text").html("Original price was $350");
      $("#right_description").html("Virtual Training");
      $("#one_payment").removeClass("changed");
      $("#week_live").addClass("changed");
      $("#right_info_1").html("General info Diet Plans");
      $("#right_info_2").html("----------------------");
      $("#right_info_3").html("Live Access 4 Days /week");
      $("#right_info_4").html("----------------------");
      $("#right_info_5").html("----------------------");
      $("#right_info_6").html("30 Min. Consultation");
    }
  });
  $("#middle_slider").click(function () {
    var x = document.getElementById("middle_check").checked;
    if (x) {
      $("#middle_price").html("$240.00");
      $("#middle_price_text").html("Original price was $400");
      $("#middle_description").html("Virtual Training");
      $("#middle_left").addClass("changed");
      $("#middle_right").removeClass("changed");
      $("#middle_info_1").html("General Info Exercise");
      $("#middle_info_2").html("General info Diet Plans");
      $("#middle_info_3").html("Games and Challenges");
      $("#middle_info_4").html("Live Access 5 Days /week");
      $("#middle_info_5").html("Schedule Availibity Monday | Tuesday| Thursday| Friday");
      $("#middle_info_6").html("30 Min. Consultation");
    } else {
      $("#middle_price").html("$180.00");
      $("#middle_price_text").html("Original price was $400");
      $("#middle_description").html("Virtual Training");
      $("#middle_left").removeClass("changed");
      $("#middle_right").addClass("changed");
      $("#middle_info_1").html("General Info Exercise");
      $("#middle_info_2").html("General info Diet Plans");
      $("#middle_info_3").html("Games and Challenges");
      $("#middle_info_4").html("Live Access 5 Days /week");
      $("#middle_info_5").html("Arrange Live Access on Weekend optional for missing days");
      $("#middle_info_6").html("30 Min. Consultation");
    }
  });

  window.onscroll = function () { myFunction() };

  function myFunction() {
    if (window.scrollY > 400) {
      $("#about_bar").addClass("animated fadeInLeftBig");
    } else {
      $("#about_bar").removeClass("animated fadeInLeftBig");
    }

    if (window.scrollY > 400) {
      $("#about_left").addClass("animated fadeInLeft");
      $("#summary_left").addClass("animated fadeInLeft");
      $("#offer_left").addClass("animated fadeInLeft");
      $("#about_right").addClass("animated fadeInRight");
      $("#summary_right").addClass("animated fadeIn");
      $("#offer_middle").addClass("animated fadeInDown");
      $("#offer_right").addClass("animated fadeInDown");

    } else {
      $("#about_left").removeClass("animated fadeInLeft");
      $("#summary_left").removeClass("animated fadeInLeft");
      $("#offer_left").removeClass("animated fadeInLeft");
      $("#about_right").removeClass("animated fadeInRight");
      $("#summary_right").removeClass("animated fadeIn");
      $("#offer_middle").removeClass("animated fadeInDown");
      $("#offer_right").removeClass("animated fadeInDown");
    }

    if (window.scrollY > 1000) {
      $("#price_navbar").addClass("animated fadeInLeftBig");
    } else {
      $("#price_navbar").removeClass("animated fadeInLeftBig");
    }

    if (window.scrollY > 1000) {
      $(".price_card").addClass("animated zoomIn");
    } else {
      $(".price_card").removeClass("animated zoomIn");
    }

    if (window.scrollY > 1900) {
      $("#cantact_us").addClass("animated zoomIn");
      $(".contact_img").addClass("animated zoomIn");
      $(".contact_list").addClass("animated fadeIn");
      $(".contact_title").addClass("animated fadeInLeftBig");

    } else {
      $("#cantact_us").removeClass("animated zoomIn");
      $(".contact_img").removeClass("animated zoomIn");
      $(".contact_list").removeClass("animated fadeIn");
      $(".contact_title").removeClass("animated fadeInLeftBig");
    }
  }
});
