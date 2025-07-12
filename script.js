const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
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
