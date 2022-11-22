function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}
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

