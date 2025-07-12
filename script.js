const firebaseConfig = {
  apiKey: "AIzaSyCcUrLlCuccAtEDE0Ep2m65EtBwBX0fzAU",
  authDomain: "hello-data-entry.firebaseapp.com",
  databaseURL: "https://hello-data-entry-default-rtdb.firebaseio.com",
  projectId: "hello-data-entry",
  storageBucket: "hello-data-entry.firebasestorage.app",
  messagingSenderId: "856905908671",
  appId: "1:856905908671:web:fc450024b72c82d0dea10a",
  measurementId: "G-8PW1TRQKSL"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const output = document.getElementById("output");

function submitName() {
  const name = document.getElementById("nameInput").value;
  database.ref("sharedName").set(name);
}

// Listen for changes
database.ref("sharedName").on("value", (snapshot) => {
  const name = snapshot.val();
  output.textContent = name ? "Hello, " + name + "!" : "";
});
