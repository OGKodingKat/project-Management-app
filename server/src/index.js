const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Client } = require('pg');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let config = {
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DATABASE_PORT,
  ssl: true,
}

// POST /feedbacks - Add new feedback
app.post('/feedbacks', async (req, res) => {
  const client = new Client(config);
  await client.connect();

  const { title, category, description, status } = req.body;
  await client.query(
    `INSERT INTO feedback (title, category, description, status) VALUES ($1, $2, $3, $4)`,
    [title, category, description, status || 'suggestion']
  );

  await client.end();
  res.json({ message: 'Feedback added' });
});

// GET /feedbacks - Get all feedback
app.get('/feedbacks', async (req, res) => {
  const client = new Client(config);
  await client.connect();

  const result = await client.query(`SELECT * FROM feedback`);
  await client.end();
  res.json(result.rows);
});

// GET /feedbacks/:id - Get one feedback by ID
app.get('/feedbacks/:id', async (req, res) => {
  const client = new Client(config);
  await client.connect();

  const result = await client.query(`SELECT * FROM feedback WHERE id = $1`, [req.params.id]);
  await client.end();
  res.json(result.rows[0]);
});

// POST /comments - Add comment to feedback
app.post('/comments', async (req, res) => {
  const client = new Client(config);
  await client.connect();

  const { feedback_id, text } = req.body;
  await client.query(
    `INSERT INTO comments (feedback_id, text) VALUES ($1, $2)`,
    [feedback_id, text]
  );

  await client.end();
  res.json({ message: 'Comment added' });
});

// Start server
app.listen(5000, () => {
  console.log('🚀 Server running on port 5000');
});
