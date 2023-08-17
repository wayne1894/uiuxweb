var scene = document.getElementById('section_1');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});

var scroll_start = false;
var page_now = 0;//現在的頁次
var section = document.querySelectorAll("main>section");
var last_page_index = section.length - 1;//最後一頁

function wheel(e){
  if(page_now == last_page_index && e.wheelDelta < 0) return
  if(page_now == last_page_index && section[page_now].scrollTop > 150) return
  
  if(scroll_start) return ;
  scroll_start = true;
  var page_index = page_now;
  if (e.wheelDelta > 0) {
    page_index = page_index - 1;
  } else {
    page_index = page_index + 1;
  }
  
  if(page_index < 0) page_index = 0;
  if(page_index >= section.length - 1) page_index = section.length - 1;

  move_page(page_index);
}

function move_page(page_index){
  gsap.to(window, 0.5, {
      scrollTo: section[page_index],
      onStart : function(){
        if(page_index!=last_page_index){
          document.querySelectorAll("#section_4 .s_left")[0].classList.remove("fixed");      
        }
        gsap.set("#section_4 .s_left",{
          opacity:0
        })
  
      },
      onComplete : function(){

        if(page_index == 1){ // to page2 action
          gsap.to(".t_cell",.7,{ 
              opacity: 1,
              top: "30px",
              delay: 0.5
          })
        }

        if(page_index == last_page_index){
          document.querySelectorAll("#section_4 .s_left")[0].classList.add("fixed");
        }
        gsap.to("#section_4 .s_left",{
                opacity:1
        })
  

        page_now = page_index;
        setTimeout(function(){
            scroll_start = false;
        },1000)
      }
  });
}

window.addEventListener("wheel",wheel)

