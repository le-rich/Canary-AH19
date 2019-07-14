function loadDone(){
	switchToLogin();
	myVar = setTimeout(showPage, 800);
}

function showPage(){
	$("#overlayLoad").slideUp("fast");
	$("#allContainer").css({"display": "block", "visibility": "visible"});
}

function switchToLogin(){
	$("#userField").slideUp("fast");
	$("#signupLabel").text("Login to Your Account");
	$("#switchLoginLink").attr("onclick", "switchToSignup()").text("Need an account? Click here to Sign Up.");
	$("#userFieldInput").attr("required", "false");
	$("#doneBtn").attr("value","LOGIN").attr("onclick", "loginFirebaseAccount()");
}

function switchToSignup(){
	$("#userField").slideDown("fast");
	$("#signupLabel").text("Create Your Account");
	$("#switchLoginLink").attr("onclick", "switchToLogin()").text("Already have an account? Click here to login.");
	$("#doneBtn").attr("value","SIGN UP").attr("onclick", "createFirebaseAccount()");
}

var loginProcessing = false;

function createFirebaseAccount(){
	var form = $("#signupForm");
	var username = $("#userFieldInput").val();
	var email = $("#emailFieldInput").val();
	var pass = $("#pwFieldInput").val();
  var latitude = getRandomLat(47.6061696, 47.6084474);
  var longitude = getRandomLong(-122.3268723, -122.3130929);
	loginProcessing = true;
	firebase.auth().createUserWithEmailAndPassword(email, pass).then(function(firebaseUser) {
		firebase.auth().onAuthStateChanged(function(user){
        	//Update database with the profile info collected for the user
        	var promise = firebase.database().ref('users/'+user.uid).update( {
        		"name": username,
        		"latitude" : latitude,
        		"longitude" : longitude,
						"distressActive" : false
        	});

        	$("#loginMessage").text("Welcome!");
          window.location.href="../richardIndex.html";
    	});
		return firebaseUser;
	}).catch(function(error) {
		alert(error)
		loginProcessing = false;
	});

	return false;
}

function loginFirebaseAccount(){
	var form = $("#signupForm");
	var email = $("#emailFieldInput").val();
	var pass = $("#pwFieldInput").val();
	loginProcessing = true;
	firebase.auth().signInWithEmailAndPassword(email, pass).then(function(firebaseUser){
		firebase.auth().onAuthStateChanged(function(user){
      window.location.href = "/";
		});
	}).catch(function(error) {
		alert(error);
		loginProcessing = false;
	});
};

//47.6061696, 47.6084474
function getRandomLat(min, max) {
  return Math.random() * (max - min) + min;
}
//-122.3268723, -122.3130929
function getRandomLong(min, max) {
  return Math.random() * (max - min) + min;
}

firebase.auth().onAuthStateChanged(function(user){
	if (!loginProcessing && user != null){
		window.location.href="/";
	}
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("#hello").textContent = "Logout";
    document.getElementById("#hello").href = "/richardIndex.html";
  } else {
    alert("failed")
  }
});