$(function(){
  function verifNom(){
    var $champ = $("#nom");
    if (/^[a-zA-Z]+$/.test($champ.val())){
      $("#verifNom").html("<style>#nom{border:2px solid green;}</style>");
      return false;
    } else {
      $("#verifNom").html("<p> Non valide !</p>");
      return true;
    }
  }
  function verifPrenom(){
    var $champ = $("#prenom");
    if (/^[a-zA-Z]+$/.test($champ.val())){
      $("#verifPrenom").html("<style>#prenom{border:2px solid green;}</style>");
      return false;
    } else {
      $("#verifPrenom").html("<p>Non valide !</p>");
      return true;
    }
  }
  function verifEmail(){
    var $champ = $("#email");
    if ( /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test($champ.val())){
      $("#verifEmail").html("<style>#email{border:2px solid green;}</style>");
      return true;
    } else {
      $("#verifEmail").html("<p>Votre adresse e-mail n'est pas valide !</p>");
      return false;
    }
  }
  $("#nom").on('input', verifNom);
  $("#prenom").on('input', verifPrenom);
  $("#email").on('input', verifEmail);
  $("body").submit(function(){
    var verifFinalNom = verifNom();
    var verifFinalPrenom = verifPrenom();
    var verifFinalEmail = verifEmail();
    if (verifFinalEmail && verifFinalNom && verifFinalPrenom) {
      return true;
    } else {
      return false;
    }
  });
});
