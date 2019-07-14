var ref = firebase.database().ref("Users/");

ref.on("value", function(snap){
  $.each(snap.val(), function(i, n){
    console.log(snap.val()[i].latitude);
  });
});


