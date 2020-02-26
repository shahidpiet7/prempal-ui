"use strict";
$(document).ready(function(){
    $("#HamburgerMenu").click(function(){
        console.log("Menu Clicked");
        $("#HamburgerMenu").toggleClass('OpenMenu');
        $(".NavUl").toggleClass('OpenNav');
    });

    var HeaderHeight = $('#header').outerHeight();
    console.log("Header Height:", HeaderHeight);
    // $(".NavUl").css("top", HeaderHeight);
    
    //Accordion faq
    $(".set > a").on("click", function(e) {
        e.preventDefault();
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this)
            .siblings(".content")
            .slideUp(200);
        } else {
          $(".set > a").removeClass("active");
          $(this).addClass("active");
          $(".content").slideUp(200);
          $(this)
            .siblings(".content")
            .slideDown(200);
        }
      });

      // Maxlength in paragraph
      function truncateText(selector, maxLength) {
        var element = document.querySelector(selector),
            truncated = element.innerText;
    
        if (truncated.length > maxLength) {
            truncated = truncated.substr(0,maxLength) + '...';
        }
        return truncated;
      }

      function popup(){
        $('.PopupButton').on('click', function (e) {
          e.preventDefault();
          $('.PopupModal, .modalOverlay, #popOverlayWrapper').fadeIn(500);
          $('body').css("overflow", 'hidden');
        });
          $('.closePopup').on('click', function (e) {
            e.preventDefault();
            $('.PopupModal, .modalOverlay, #popOverlayWrapper').fadeOut(500);
            $('body').css("overflow", 'inherit');
        });
      }
      popup();
      

      // var Ptags = document.querySelectorAll('.ServiceboxSection .serviceContainer p');
      // console.log("pTag", Ptags);

      // $(Ptags).each(function (){
      //   // console.log("Para", this);
      //   var text = $(this).text();
      //   console.log("Text", text);
      // });

     
      var seoService = document.querySelectorAll('.ServiceboxSection .seoService p');
      console.log('seoService', seoService);
      document.querySelector('.ServiceboxSection .seoService p').innerText = truncateText('.ServiceboxSection .seoService p', 90);
      document.querySelector('.ServiceboxSection .smoService p').innerText = truncateText('.ServiceboxSection .smoService p', 90);
      document.querySelector('.ServiceboxSection .webService p').innerText = truncateText('.ServiceboxSection .webService p', 90);

      //AOS
      AOS.init({
        offset: 0,
        duration: 800,
        delay: 500,
        easing: 'ease',
        anchorPlacement: 'center-top'
      });

      

    
})
