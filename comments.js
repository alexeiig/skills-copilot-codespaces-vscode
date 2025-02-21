// Create web server
// Load the express module
const express = require('express');
const app = express();

// Load the body-parser module
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Load the comments module
const comments = require('./comments');

// Create a new comment
app.post('/comments', (req, res) => {
  const { body } = req;
  const { username, comment } = body;
  if (username && comment) {
    const newComment = comments.addComment(username, comment);
    res.status(201).json(newComment);
  } else {
    res.status(400).json({ error: 'username and comment are required' });