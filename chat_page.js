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

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name")
function send(){
    msg=document.getElementById("msg").value;
    if(msg==""){
    window.alert("Please enter the message");
    }
    else{
    firebase.database().ref(room_name).push({
        name: user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
    }
}
function getData(){ firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id=childKey;
    message_data=childData;
    console.log(firebase_message_id);
    console.log(message_data);
    name=message_data['name'];
    message=message_data['message'];
    like=message_data['like'];
    var name_with_tag="<h4>"+name+"</h4>";
    var message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
    var like_button="<button class='btn btn-warning' id='"+firebase_message_id+"' value="+like+" onclick='updatelike(this.id)' > like:"+like+" </button> <hr>";
    row=name_with_tag+message_with_tag+like_button;
    document.getElementById("output").innerHTML += row;
} }); }); } getData();
function updatelike(message_id){
    console.log("clicked on the like button:"+message_id);
    button_id=message_id;
    var likes=document.getElementById(button_id).value;
    updated_likes=Number(likes)+1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({
        like:updated_likes
    });
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("chat.html");
}
}