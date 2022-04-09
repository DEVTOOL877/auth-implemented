const whenSignedOut = document.getElementById('whenSignedOut');
const whenSignedIn = document.getElementById('whenSignedIn');

firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        whenSignedIn.hidden = true;
          whenSignedOut.hidden = false;
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
        whenSignedIn.hidden = false;
          whenSignedOut.hidden = true;
    }
})


function logout(){
    // firebase.auth().signOut()
}

function login(){
    firebase.auth().signIn()
}

