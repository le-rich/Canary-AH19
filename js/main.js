var ref = firebase.database().ref("Users/");

ref.on("value", function(snap){
  $.each(snap.val(), function(i, n){
    console.log(snap.val()[i].latitude);
  });
});

let $sosButton = $("#sos-button");
let $icons = $('.features-icons-item');
let $cancelButton = $("#cancel-sos-btn");
let iconDisplayNone = true;
let sosDisplayNone = false;

$sosButton.on("click", () => {
  if (iconDisplayNone) {
    for (i = 0; i < $icons.length; i++) {
      $icons[i].className = "features-icons-item mx-auto";
    }
    iconDisplayNone = false;

    /* Hides SOS button */
    $sosButton[0].className += " d-none";
    sosDisplayNone = true;

    /* Reveals Cancel SOS button */
    $cancelButton[0].className = "col-5 mx-auto text-center py-4 animated fadeInUp";
  }
});

$cancelButton.on("click", () => {
  if (sosDisplayNone) {
    for (i = 0; i < $icons.length; i++) {
      $icons[i].className = "col-5 mx-auto text-center py-4 animated fadeInUp d-none";
    }
    iconDisplayNone = true;

    /* Hides Cancel SOS button */
    $cancelButton[0].className += " d-none";

    /* Reveals SOS request button */
    $sosButton[0].className = "col-5 mx-auto text-center py-4 animated fadeInUp";
  }
});