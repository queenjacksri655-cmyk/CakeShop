
    const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  spaceBetween: 25,

 
  pagination: {
    el: '.swiper-pagination',
  },

  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    },
  }
});



$(document).ready(function(){
    $("#cho-cake").hover(function(){
        $("#black").slideToggle(1000)
        $("#bla").slideToggle(1000)
    })
     $("#red-cake").hover(function(){
        $("#pink").slideToggle(1000)
        $("#pin").slideToggle(1000)
    })
     $("#pine-cake").hover(function(){
        $("#yellow").slideToggle(1000)
        $("#yel").slideToggle(1000)
    })
     $("#oreo-cake").hover(function(){
        $("#brown").slideToggle(1000)
        $("#bro").slideToggle(1000)
    })
     $("#va-cake").hover(function(){
        $("#white").slideToggle(1000)
        $("#whi").slideToggle(1000)
    })
     $("#straw-cake").hover(function(){
        $("#red").slideToggle(1000)
        $("#re").slideToggle(1000)
    })
     $("#cook").hover(function(){
        $("#crispy").slideToggle(1000)
        $("#cri").slideToggle(1000)
    })
     $("#brow").hover(function(){
        $("#rich").slideToggle(1000)
        $("#ric").slideToggle(1000)
    })
     $("#don").hover(function(){
        $("#soft").slideToggle(1000)
        $("#sof").slideToggle(1000)
    })
})


const menuOpenButton=document.querySelector("#menu-open-button")
const menuCloseButton=document.querySelector("#menu-close-button")

menuOpenButton.addEventListener("click",function(){
     document.body.classList.toggle("show-mobile-menu")
});

menuCloseButton.addEventListener("click",function(){
    menuOpenButton.click()
});



$(document).ready(function() {

    const cakeName = "Redvelvet Cake";
    const cakePrice = 450;

    $(".buy-8").click(function() {
        $("#popupText").text(`You selected: ${cakeName} — Price: $${cakePrice}`);
        $("#popup").fadeIn();
    });

    $("#closePopup").click(function() {
        $("#popup").fadeOut();
    });

});

$(document).ready(function() {

    const cakeName = "Chocolate Cake";
    const cakePrice = 250;

    $(".buy-9").click(function() {
        $("#popupText").text(`You selected: ${cakeName} — Price: $${cakePrice}`);
        $("#popup").fadeIn();
    });

    $("#closePopup").click(function() {
        $("#popup").fadeOut();
    });

});

$(document).ready(function() {

    const cakeName = "Pineapple Cake";
    const cakePrice = 600;

    $(".buy-1").click(function() {
        $("#popupText").text(`You selected: ${cakeName} — Price: $${cakePrice}`);
        $("#popup").fadeIn();
    });

    $("#closePopup").click(function() {
        $("#popup").fadeOut();
    });

});

$(document).ready(function() {

    const cakeName = "Oreo Cupcake";
    const cakePrice = 50;

    $(".buy-2").click(function() {
        $("#popupText").text(`You selected: ${cakeName} Price: $${cakePrice}`);
        $("#popup").fadeIn();
    });

    $("#closePopup").click(function() {
        $("#popup").fadeOut();
    });

});

$(document).ready(function() {

    const cakeName = "Vaniila Cupcake";
    const cakePrice = 30;

    $(".buy-3").click(function() {
        $("#popupText").text(`You selected: ${cakeName} Price: $${cakePrice}`);
        $("#popup").fadeIn();
    });

    $("#closePopup").click(function() {
        $("#popup").fadeOut();
    });

});

$(document).ready(function() {

    const cakeName = "Strawberry Cupcake";
    const cakePrice = 80;

    $(".buy-4").click(function() {
        $("#popupText").text(`You selected: ${cakeName} Price: $${cakePrice}`);
        $("#popup").fadeIn();
    });

    $("#closePopup").click(function() {
        $("#popup").fadeOut();
    });

});

$(document).ready(function() {

    const cakeName = "    Cookies  🍪 ";
    const cakePrice = 100;

    $(".buy-5").click(function() {
        $("#popupText").text(`You selected: ${cakeName}  Price: $${cakePrice}`);
        $("#popup").fadeIn();
    });

    $("#closePopup").click(function() {
        $("#popup").fadeOut();
    });

});

$(document).ready(function() {

    const cakeName = "    Brownies  🤎 ";
    const cakePrice = 250;

    $(".buy-6").click(function() {
        $("#popupText").text(`You selected: ${cakeName}  Price: $${cakePrice}`);
        $("#popup").fadeIn();
    });

    $("#closePopup").click(function() {
        $("#popup").fadeOut();
    });

});

$(document).ready(function() {

    const cakeName = "    Donuts  🥯 ";
    const cakePrice = 199;

    $(".buy-7").click(function() {
        $("#popupText").text(`You selected: ${cakeName}  Price: $${cakePrice}`);
        $("#popup").fadeIn();
    });

    $("#closePopup").click(function() {
        $("#popup").fadeOut();
    });

});

function valid(){
const name=document.getElementById("form").value.trim()
if(name==""){
    alert("Please enter the data!")
}
else{
 $(document).ready(function(){

    $(".submit-button").click(function(c){
        c.preventDefault(); 
        $("#popup-overlay").fadeIn();
        $("#su-popup").fadeIn();
    });

    $("#close-popup").click(function(){
        $("#popup-overlay").fadeOut();
        $("#su-popup").fadeOut();
        $("input").val("")
        $(".forminput").val("")
    });
   

});   
}
}

