var $;
$(function () {
    'use strict';


    //Navbar code

    $(".header .collapse i.fa").click(function () {
        $(this).css("display", "none");
        $(this).siblings().css("display", "block");
        $(".header .navbar").slideToggle(400);
        $(".header .navbar").css("border-radius", "0");
    });


});