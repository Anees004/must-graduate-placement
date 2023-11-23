
    $(function (){
        $('.top-bar .dropdown').on('mouseenter click',function (){
            $(this).addClass('dropdown-top')
            $(this).find('.dropdown-menu').addClass('dropdown-menu-show').removeClass('show')
        })
        $('.top-bar .dropdown').on('mouseleave',function (){
            $(this).removeClass('dropdown-top')
            $(this).find('.dropdown-menu').removeClass('dropdown-menu-show show')
        })
        $('.tuf-main-menu .dropdown').on('mouseenter click',function (){
            $(this).find('.dropdown-menu').addClass('dropdown-menu-show').removeClass('show')
        })
        $('.tuf-main-menu .dropdown').on('mouseleave',function (){
            $(this).find('.dropdown-menu').removeClass('dropdown-menu-show show')
        })

        //Testimonial Slider
        $('.testimonial-slider').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots: true,
            autoplay:true,
            autoplayTimeout:5000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })

         //Testimonial Slider
         $('.collaborations-slider').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots: true,
            autoplay:true,
            autoplayTimeout:5000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:6
                }
            }
        })

        $(".dropdown-toggle").dropdown();

         // jQuery counterUp

      const counterUp = window.counterUp.default
      const callback = entries => {
          entries.forEach( entry => {
              const el = entry.target
              if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
                  counterUp( el, {
                      duration: 2000,
                      delay: 16,
                  } )
                  el.classList.add( 'is-visible' )
              }
          } )
      }
      const IO = new IntersectionObserver( callback, { threshold: 1 } )
      const el = document.querySelector( '.count' )
      const ac = document.querySelector( '.collaborations' )
      const ec = document.querySelector( '.applications' )
      
      IO.observe( el )
      IO.observe( ac )
      IO.observe( ec )
    });

     