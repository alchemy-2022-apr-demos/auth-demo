const express = require('express');

const app = express();
const cookieParser = require('cookie-parser');

// Built in middleware
app.use(express.json());
app.use(cookieParser());

// App routes
app.use('/api/v1/users', require('./controllers/users'));

app.use((req, res, next) => {
  console.log('hello from custom middleware that does nothing');
  next();
});

app.get('/middle', (req, res, next) => {
  console.log('in the middle route');
  res.json({ resp: 'this is the middle route' });
});

// Error handling & 404 middleware for when
// a request doesn't match any app routes

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
