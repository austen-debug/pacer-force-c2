console.log("app.js loaded");

try {
    console.log("Firebase App:", firebase.apps.length);
    
    console.log("Config loaded:", firebaseConfig);

    console.log("Trying Firestore init...");
    db.collection("debug").add({ ok: true, ts: Date.now() })
        .then(docRef => {
            document.getElementById("status").textContent = "Firestore connected ✔";
            console.log("Firestore write OK:", docRef.id);
        })
        .catch(err => {
            document.getElementById("status").textContent = "Firestore FAILED ❌";
            console.error("Firestore error:", err);
        });

} catch (e) {
    console.error("Firebase init error:", e);
    document.getElementById("status").textContent = "Firebase crashed ❌";
}
