require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); 
app.use(express.json());

// The Pulse Check (So you know Render is awake)
app.get('/', (req, res) => {
    res.send('🟢 Welcome to the API! Backend is live.');
});

// The Correct Route (Matches your Frontend button!)
app.post('/api/run', async (req, res) => {
    // We will connect Gemini here later
    res.json({ message: "AI Task successfully completed!", data: req.body });
});

// The Render Fix (0.0.0.0 opens the gates)
const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
    console.log('Server is running on port: ' + PORT);
});