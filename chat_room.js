const firebaseConfig = {
    apiKey: "AIzaSyDoUKfT2Yirgsx6pOXybGQanfw1ukX5dTc",
    authDomain: "chat-app-bb1f2.firebaseapp.com",
    databaseURL: "https://chat-app-bb1f2-default-rtdb.firebaseio.com",
    projectId: "chat-app-bb1f2",
    storageBucket: "chat-app-bb1f2.appspot.com",
    messagingSenderId: "433599892860",
    appId: "1:433599892860:web:e3a42fe5c577e14e9268f9"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!!";

function addroom(){
room_name = document.getElementById("room_name").value ;
firebase.database().ref("/").child(room_name).update({
      purpose : "addingroomname"
});
localStorage.setItem("room_name" , room_name);
window.location = "chat_page.html";
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
      window.location = "chat_page.html";
}
function logout(){
      localStorage.removeItem("room_name")
      localStorage.removeItem("user_name")
      window.location = "index.html";
}




