require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 1. THE PULSE CHECK: This gives you a friendly message when you visit the Render URL!
app.get('/', (req, res) => {
    res.send("🟢 Backend is live and ready to receive requests!");
});

app.post('/api/run', async (req, res) => {
    res.json({ message: "Task completed!", data: req.body });
});

// 2. THE RENDER FIX: Adding '0.0.0.0' tells Render to open the gates to the internet.
const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});