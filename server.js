require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 1. THE PULSE CHECK
app.get('/', (req, res) => {
    res.send("🟢 Backend is live and ready to receive requests!");
});

// 2. THE AI ROUTE
app.post('/api/run', async (req, res) => {
    res.json({ message: "Task completed!", data: req.body });
});

// 3. THE RENDER PORT BINDING
const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});