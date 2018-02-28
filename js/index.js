$(function(){
  $('.nav-bottom-menu').hide();
  $('body').mouseover(function(){
    $('.nav-bottom-menu').hide();
  });
  $('.nav-bottom-menu').mouseover(function(event){
    event.stopPropagation();
    $(this).show();
  });
  $('.phone').hover(
    function(event){
      event.stopPropagation();
      $('.nav-bottom-menu').show();
      $('.nav-bottom-menu>p').empty();$('.nav-bottom-menu .picture').empty()
      $('.nav-bottom-menu>p')
      .append('<a href="#">全部手机></a>','<a href="#">HUWWEI META 系列</a>','<a href="#">HUWWEI P系列</a>');
      $('.nav-bottom-menu .picture')
      .append('<div><a><img src="image/nav-bottom.jpg"><p>手机</p></a></div>','<div><a><img src="image/nav-bottom.jpg"><p>手机</p></a></div>')
    },
    function(){
      $('.nav-bottom-menu').mouseleave(function(){
        $('.nav-bottom-menu').hide();
        $('.nav-bottom-menu>p').empty();$('.nav-bottom-menu .picture').empty()
      });
    }
  );
  $('.computer').hover(
    function(event){
      event.stopPropagation();
      $('.nav-bottom-menu').show();
      $('.nav-bottom-menu>p').empty();$('.nav-bottom-menu .picture').empty()
      $('.nav-bottom-menu>p')
      .append('<a href="#">全部笔记本电脑></a>','<a href="#">笔记本电脑</a>');
      $('.nav-bottom-menu .picture')
      .append('<div><a><img src="image/nav-bottom.jpg"><p>电脑</p></a></div>','<div><a><img src="image/nav-bottom.jpg"><p>电脑</p></a></div>')
    },
    function(){
      $('.nav-bottom-menu').mouseleave(function(){
        $('.nav-bottom-menu').hide();
        $('.nav-bottom-menu>p').empty();$('.nav-bottom-menu .picture').empty()
      });
    }
  );
})
