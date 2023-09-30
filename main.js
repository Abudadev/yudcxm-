var firebaseConfig = {
  apiKey: "AIzaSyCavQ7Hzgxr74-jz6epYsMeeceUklHjfkk",
  authDomain: "sssssssssssss-45106.firebaseapp.com",
  databaseURL: "https://sssssssssssss-45106-default-rtdb.firebaseio.com",
  projectId: "sssssssssssss-45106",
  storageBucket: "sssssssssssss-45106.appspot.com",
  messagingSenderId: "945793721873",
  appId: "1:945793721873:web:5ec05317a787d83a32b3b0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser(){
  user_name = document.getElementById("UNT").value;
  localStorage.setItem("UNT", user_name)
  
  firebase.database().ref("/").child(user_name).update({
    purpose: "adding profile"
  });
  
  window.location = "Wip.html"
}

