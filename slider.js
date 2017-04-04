$(document).ready(function (){
  $('#imageCarousel').carousel();
});

$( "#clickme" ).click(function() {
  $('#text').toggle('slow',function(){
  $( "#book" ).hide()

  });
      console.log('Élement #text est caché/affiché');
    });
