$(function(){

  $('.produit').hover(function(){
    $(this).find('.descGall').css('display', 'flex');
  }, function(){
    $(this).find('.descGall').hide();
  });
});
