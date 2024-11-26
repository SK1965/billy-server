const express = require("express");
const admin = require("../config/firebase"); // Import Firebase Admin instance

const router = express.Router();

// SIGNUP Route
router.post("/signup", async (req, res) => {
  const { email, password, displayName } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and Password are required" });
  }

  try {
    // Create a new user in Firebase Authentication
    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName: displayName || null,
    });

    res.status(201).json({
      message: "User created successfully",
      user: {
        uid: userRecord.uid,
        email: userRecord.email,
        displayName: userRecord.displayName,
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: error.message });
  }
});

// LOGIN Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and Password are required" });
  }

  try {
    // Simulate login using Firebase Admin
    const userRecord = await admin.auth().getUserByEmail(email);

    // Password verification would typically happen client-side
    res.status(200).json({
      message: "Login successful",
      user: {
        uid: userRecord.uid,
        email: userRecord.email,
        displayName: userRecord.displayName,
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(401).json({ error: "Invalid email or password" });
  }
});

module.exports = router;
