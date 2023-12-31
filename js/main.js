// fixed header ================================================>
let header = $("#header"),
    heroH = $("#hero").innerHeight(),
    scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

$(window).on("scroll", function(){
    
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
});

function checkScroll(scrollPos){

    if( scrollOffset >= heroH ) {
        header.addClass("fixed");
    }else{
        header.removeClass("fixed");
    }
}



// Smooth scroll==============================================>
$("[data-scroll]").on("click", function(event){
    event.preventDefault();

    let blockId = $(this).data('scroll');
    let elementOfSet = $(blockId).offset().top;

    $("html, body").animate({
        scrollTop: elementOfSet + 1
    }, 1000);
   
});






// menu_toggle ====================================================>
let toggleBtn = document.querySelector(".toggle_btn");
let navClick = document.querySelector(".nav_click");
let dropdownMenu = document.querySelector(".dropdown_menu");
let body = document.querySelector("body");


toggleBtn.addEventListener('click', () =>{
    toggleBtn.classList.toggle('nav_click');
    
    if(toggleBtn.classList.contains('nav_click')){
        dropdownMenu.style.height = "240px";
        dropdownMenu.style.padding = "20px 10px";
    }else{
        dropdownMenu.style.height = "0";
        dropdownMenu.style.padding = "0";
        
    }
})


let menuList = document.querySelectorAll(".menu_list");

 for(let i=0; i<menuList.length; i++){
    menuList[i].addEventListener("click", () => {
        dropdownMenu.style.height = "0";
        toggleBtn.classList.remove('nav_click');
        dropdownMenu.style.padding = "0";
    })
}





// scroll top arrow ==============================================>
let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// scroll top arrow end



// video play ==================================================>
let video = document.querySelector(".video");
let videoPlay = document.querySelector(".video_play");
let videoIcon = document.querySelector(".video_play_icon");
let videoPause = document.querySelector(".video_play_pause");

let control = document.getElementsByTagName('controls');
let productVideo = document.querySelector(".product_video");

productVideo.addEventListener("mouseover", () => {
    control.getAttribute.add('controls')
})

productVideo.addEventListener("mouseleave", () => {
    control.getAttribute.remove('controls')
})


videoPlay.addEventListener("click", () => {
    if(video.paused){
        video.play();
        videoIcon.style.display = "none";
        videoPause.style.display = "block";
    }else{
        video.pause();
        videoIcon.style.display = "block";
        videoPause.style.display = "none";     
    }
})






// photo change ==============================================>
let  btn = document.querySelectorAll(".btn");
let  portfolioContentOne  = document.querySelectorAll(".portfolio_content_one");


for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click', function(){

        for(let j=0; j<btn.length; j++){
            btn[j].classList.remove('color');
        }
        this.classList.add('color');
        
        let caseFilter = this.getAttribute('case-filter');

        for(let k=0; k<portfolioContentOne.length; k++){
            portfolioContentOne[k].classList.remove('active');
            portfolioContentOne[k].classList.add('change');

            if( portfolioContentOne[k].getAttribute('case-item') == caseFilter){
                portfolioContentOne[k].classList.remove('change');
                portfolioContentOne[k].classList.add('active');
            }
        }
    })
}

