const firebaseConfig = {
      apiKey: "AIzaSyDh8NhH8DeLzoF1fB8rOPdseqQZad3ZCp4",
      authDomain: "kwitter-app-b4116.firebaseapp.com",
      databaseURL: "https://kwitter-app-b4116-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-b4116",
      storageBucket: "kwitter-app-b4116.appspot.com",
      messagingSenderId: "955017414798",
      appId: "1:955017414798:web:4c06b68c9edcda23caa1df"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");

document.getElementById("username").innerHTML = "Welcome " + username + "!!!";

function addroom(){
room_name = document.getElementById("room_name").value ;
firebase.database().ref("/").child(room_name).update({
      purpose : "addingroomname"
});
localStorage.setItem("room_name" , room_name);
window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-" + Room_names);
row = "<div class = 'room_name' id = '" + Room_names + "' onclick = 'redirecttoroomname(this.id)' >#" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("room_name")
      localStorage.removeItem("username")
      window.location = "index.html";
}

