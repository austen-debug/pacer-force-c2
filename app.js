console.log("app.js loaded.");

db.collection("system_state")
  .limit(1)
  .get()
  .then(() => {
    document.getElementById("loading").innerText = "Connected to Firestore ✔";
  })
  .catch(err => {
    document.getElementById("loading").innerHTML =
      "⚠ Firestore Error:<br>" + err.message;
  });
