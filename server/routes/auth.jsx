const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');
const router = express.Router();

// Signup
router.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password, schoolName } = req.body;

  if (password.length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const query = `INSERT INTO SignUpForm (FirstName, LastName, Email, Password, SchoolName) VALUES (?, ?, ?, ?, ?)`;

  db.query(query, [firstName, lastName, email, hashedPassword, schoolName], (err) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.status(201).json({ message: 'User registered successfully' });
  });
});

// Login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM login WHERE username = ?';
  db.query(query, [username], async (err, results) => {
    if (err || results.length === 0) return res.status(400).json({ error: 'User not found' });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  });
});

module.exports = router;
