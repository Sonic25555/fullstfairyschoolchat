var firebaseConfig = {
    apiKey: "AIzaSyB2YX3VOoaWfVoBVSiWdg6XGNGXYEzxrqA",
    authDomain: "kwitter-62e28.firebaseapp.com",
    projectId: "kwitter-62e28",
    storageBucket: "kwitter-62e28.appspot.com",
    messagingSenderId: "705534332225",
    appId: "1:705534332225:web:aa70e0a1f1576e9478a5c0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
    //It says welcome and your name with an exclamatory mark

    function addRoom()
{
      room_name = document.getElementById("room_name").value;
      //Getting the room name
      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      //Putting it in the local storage
      window.location = "kwitter_page.html";
      //Redirecting the page to the chat area
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      //Putting it in console
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #" + Room_names + 
      "</div> <hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
      function redirectToRoomName(name)
      //Redirecting to your room
      {
          console.log(name);
          //Putting it in console
          localStorage.setItem("room_name", name);
          //Saving the room name in local storage
          window.location="kwitter_page.html";
          //Moving to chat area
      }
      
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}
getData();
