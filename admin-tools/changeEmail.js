// admin-tools/changeEmail.js
import admin from "firebase-admin";
import fs from "fs";

const serviceAccount = JSON.parse(
  fs.readFileSync("./serviceAccountKey.json", "utf8")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const run = async () => {
  const userId = "i3ubsQDElEcBHNHB7WI1igmlOyh2";
  const newEmail = "ayushpandey77737@gmail.com";

  // 1️⃣ Update Auth email
  await admin.auth().updateUser(userId, {
    email: newEmail,
    emailVerified: false,
  });

  // 2️⃣ Sync Firestore users collection
  await db.collection("users").doc(userId).update({
    email: newEmail,
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  console.log("✅ Auth + Firestore email updated");
  process.exit(0);
};

run().catch((err) => {
  console.error("❌ Error:", err);
  process.exit(1);
});