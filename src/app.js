const express = require('express');
const app = express();
const indexRouter = require('./routes/index.routes');
const path = require('path');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/views"));

const port = 3000;

app.use('/', indexRouter);

app.listen(port, () => console.log(`http://localhost:${port}`));
