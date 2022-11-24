 // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtmP1Cs7eFKqWzUzUMSFKY-gE9T70cnoY",
  authDomain: "live-tv-3bb53.firebaseapp.com",
  projectId: "live-tv-3bb53",
  storageBucket: "live-tv-3bb53.appspot.com",
  messagingSenderId: "481570700784",
  appId: "1:481570700784:web:6d22903faf35530d41f135"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
    firebase.auth.Auth.Persistence.LOCAL; 

    $("#btn-login").click(function(){
        
        var email = $("#email").val();
        var password = $("#password").val(); 

        var result = firebase.auth().signInWithEmailAndPassword(email, password);
    
        result.catch(function(error){
            var errorCode = error.code; 
            var errorMessage = error.message; 

            console.log(errorCode);
            console.log(errorMessage);
        });

    });

    $("#btn-logout").click(function(){
        firebase.auth().signOut();
    });

    function switchView(view){
        $.get({
            url:view,
            cache: false,  
        }).then(function(data){
            $("#container").html(data);
        });
    }