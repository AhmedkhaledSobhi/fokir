// ============ Start Typed Header ==============

var typed = new Typed('.type', {
    strings:  [ ' Developer ', ' Designer '],

    typeSpeed: 40,
    backSpeed: 40,
    loop: true,
    smartBackspace: false // Default value
  });

  $('nav a').click(function (e) {
    let linkHref=$(e.target).attr('href');
    let sectionOffset =$(linkHref).offset().top;
    $('html , body').animate({scrollTop:sectionOffset} , 1000)
  })

// =============End typed Header =================

  let Services=$('#Services').offset().top;
  let Portfolio=$('#Portfolio').offset().top;
  let home=$('#Home').offset().top;

// ================ Start scrollNav toggle bg-color ===================

  $(window).scroll(function () {
      let windoScroll =$(window).scrollTop() ;

      if (windoScroll > home  ) {
        $('#scrollNav').css('background-color','#333');
        $('#btnUp').css('display','flex');
      } 
      else{
        $('#scrollNav').css('background-color','transparent');
        $('#btnUp').css('display','none');
      }
  })

// ================ End scrollNav toggle bg-color ===================

// ================ Start Portfolio ===================

  $(window).scroll(function () {
    let windoScroll =$(window).scrollTop() ;
    if (windoScroll >Portfolio -300) {
      $('#Portfolio .itemPortfolio img').css('transform','rotateY(0deg)')
    }
    else{
      $('#Portfolio .itemPortfolio img').css('transform','rotateY(90deg)')
    }
  })
// ================ End Portfolio ===================

// ================ Start Services ===================
  $(window).scroll(function () {
    let windoScroll =$(window).scrollTop() ;
    if (windoScroll >= Services -450  ) {
      $('#Services .item').css('transform','rotateY(0deg)')
    }
    else{
      $('#Services .item').css('transform','rotateY(90deg)')
    }
  })
// ================ End Services ===================

// ================ Start btnUp toggle bg-color ===========

  $('#btnUp').click(function () {
    $('html,body').animate({scrollTop:0},1000);
    
  })
// ================ Start btnUp toggle bg-color ===========

// ================ Start loadingScrean ===========
    $(document).ready(function () {
      $('#loadingScrean .spinner').fadeOut(1500, function () {
        $('#loadingScrean').fadeOut(2000 ,function () {
          $('body').css('overflow-y','auto')
          $('#loadingScrean').remove()
        })
      })
    })

// ================ End loadingScrean ===========

    // $(document).ready(function() {
    //   $(".skitter-large").skitter();
    // });

    // $(".skitter-large").skitter();


    $('.itemPortfolio ').click(function () {

      let getcontainImg=($(this).html());
      let getImg=($(getcontainImg).html('img'));
      $('#showImg').css('display','flex');
      $('#showImg img').attr('src', ($(getImg).attr('src')));

    })

    $('#exitSlid').click(function () {
      $('#showImg').toggle()
    })






