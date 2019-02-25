const express = require('express');
const path = require('path');
const http = require('http');


const app = express();

const DIST_DIRECTORY = path.join(__dirname, '/dist');
app.use('/', express.static(DIST_DIRECTORY));

app.get('/', (req, res) => res.sendFile(
  path.join(DIST_DIRECTORY, 'index.html'))
);

const server = http.createServer(app)

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`server started on ${port}`);
});
