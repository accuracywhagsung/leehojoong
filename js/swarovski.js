
    $(function () {
      $('.newproduct_inner_wrap').slick({
        slide: 'div',        //슬라이드 되어야 할 태그
        infinite: true,     //무한 반복 옵션     
        slidesToShow: 4,        // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 1,        //스크롤 한번에 움직일 컨텐츠 개수
        speed: 500,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows: true,         // 옆으로 이동하는 화살표 표시 여부
        dots: false,         // 스크롤바 아래 점으로 페이지네이션 여부
        autoplay: false,            // 자동 스크롤 사용 여부
        autoplaySpeed: 2000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover: true,        // 슬라이드 이동 시 마우스 호버하면 슬라이더 멈추게 설정
        vertical: false,        // 세로 방향 슬라이드 옵션
        fade:false,
        prevArrow: '<button class="prevBtn">Previous</button>', 
        nextArrow:'<button class="nextBtn">Next</button>',
       
        draggable: true,     //드래그 가능 여부 
        pauseOnFocus: false,//클릭후 멈춤현상
        responsive: [ // 반응형 웹 구현 옵션

        {
            breakpoint:2300,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows:true,
                
                
              }
        },
        {
            breakpoint: 1920, //화면 사이즈 1280px
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows:true,
            

            }
          },
          
          {
            breakpoint: 1024, //화면 사이즈 1024px
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows:false,
              dots:true
            }
          },
          {
            breakpoint: 768, //화면 사이즈 768px
            settings: {
              arrows:false,
              dots:true,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
        ]

      });
    });


    $(function(){
      $(document).ready(function(){
          // scroll 
          $(window).scroll(function(){
              var win_top = $(window).scrollTop()
              var win_h = $(window).height()    
             
              $('.swarovski_story').each(function(){
                  var history_box = $(this).offset().top            
                  if(win_top >= history_box - 750 ){
                      $(this).find('.swarovski_story_txt h2, .swarovski_story_txt p, .swarovski_story_txt a, .swarovski_story_right_img,.swarovski_story_left_img').addClass('active')
                  }
                  else if(win_top < history_box - win_h ) {
                      $(this).find('.swarovski_story_txt h2, .swarovski_story_txt p, .swarovski_story_txt a, .swarovski_story_right_img,.swarovski_story_left_img').removeClass('active')
                  }
              })
              $('.CATALOG').each(function(){
                  var best_box = $(this).offset().top            
                  if(win_top >= best_box - 750 ){
                      $('.catalog p, .catalog1, .catalog2, .catalog3').addClass('active')
                  }
                  else if(win_top < best_box - win_h ) {
                      $('.catalog p, .catalog1, .catalog2, .catalog3').removeClass('active')
                  }
              })   
              $('.wedding').each(function(){
                  var new_box = $(this).offset().top            
                  if(win_top >= new_box - 750 ){
                      $('.wedding_left, .wedding_right .big_img, .wedding_right .small_img').addClass('active')
                  }
                  else if(win_top < new_box - win_h ) {
                      $('.wedding_left, .wedding_right .big_img, .wedding_right .small_img').removeClass('active')
                  }
              })
              $('.inspiration').each(function(){
                  var svg_box = $(this).offset().top            
                  if(win_top >= svg_box - 750 ){
                      $('.inspiration_left, .inspiration_right, .inspiration_right h3, .inspiration_right p, .inspiration_right a  ').addClass('active')
                  }
                  else if(win_top < svg_box - win_h ) {
                      $('.inspiration_left, .inspiration_right, .inspiration_right h3, .inspiration_right p, .inspiration_right a ').removeClass('active')
                  }
              })           
              $('.collaboration').each(function(){
                  var collections_box = $(this).offset().top            
                  if(win_top >= collections_box - 750 ){
                      $('.collaboration_bimg, .collaboration_simg, .collaboration_txt, .text_box text tspan').addClass('active')
                  }
                  else if(win_top < collections_box - win_h ) {
                      $('.collaboration_bimg, .collaboration_simg, .collaboration_txt, .text_box text tspan').removeClass('active')
                  }
              })
              $('.newproduct').each(function(){
                  var text_box = $(this).offset().top            
                  if(win_top >= text_box - 750  ){
                      $('.newproduct_text p, .newproduct_inner_wrap').addClass('active')
                  }
                  else if(win_top < text_box - win_h ) {
                      $('.newproduct_text p, .newproduct_inner_wrap').removeClass('active')
                  }
              })     
          });
          //scroll
      });
  });