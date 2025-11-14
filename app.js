console.log("app.js loaded");

db.collection("test")
  .add({ message: "PACER FORCE C2 online", timestamp: Date.now() })
  .then(() => {
      document.getElementById("status").textContent = "Firestore connected ✔";
      console.log("Test write OK");
  })
  .catch(err => {
      document.getElementById("status").textContent = "Firestore FAILED ❌";
      console.error(err);
  });
