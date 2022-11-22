
let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for (let i = 0; i < list.length; i++){
    list[i].addEventListener('click', function(){
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove('active'); 
        }
        this.classList.add('active');
        let dataFilter = this.getAttribute('data-filter');
        for (let k = 0; k < itemBox.length; k++) {
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');

            if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == 'all'){
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            } 
        }
    })
}

// client section part

$(document).ready(function(){
    $('.client-wrapper').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        arrows: false,
        pauseOnHover: false,
        dotsClass: 'slick-dots',

      });
    //   top to bottom scroll button

      $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('#topBtn').fadeIn();
        }
        else{
            $('#topBtn').fadeOut();
        }
      })

    $('#topBtn').click(function(){
        $('html, body').animate({scrollTop : 0},100);
    });
});

// dateTime section

function displayTime(){
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let secssion = document.getElementById('secssion');

    if(hrs >= 12){
        secssion.innerHTML = 'PM';
    }
    else{
        secssion.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }


    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;

}

setInterval(displayTime, 10);

// end the clock time

// sticky header

window.addEventListener('scroll', function(){
    let header = document.getElementById('header');
    header.classList.toggle('sticky', window.scrollY > 100);
})