const admin = require("firebase-admin");
const serviceAccount = require("../path/to/your-service-account-key.json"); // Update with your path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-database-name.firebaseio.com", // Replace with your database URL
});

module.exports = admin;
