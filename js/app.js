
            //  window.addEventListener("scroll",function(){
            //     document.getElementById('navbar').classList.add("sticky");
            //   })           

            // window.addEventListener('scroll',function(){
            //   let abc = `scrollToTop:window`;
            //   if(abc>100){
            //     alert("your have scrolled 100");
            //   }
            //   console.log(abc);
            // })
            $(function () {
              let _window = $(window);
              let nav = $("#navbar");
              _window.on("scroll", function (){
                  let scrollToTop = _window.scrollTop();
          
                  if (scrollToTop > 80) { 
                      nav.addClass("sticky");
                  } else {
                      nav.removeClass("sticky");
                  }
              });
              _window.on("scroll", function(){
                $(".preloader").hide();
              })
          });