
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
    $(".buy").click(function(){
        alert(("Welcome to Cake World"))
    })
})

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