const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const compression = require('compression');

const port = process.env.PORT || 8080;
const app = express();
app.use(favicon(`${__dirname}/build/favicon.ico`));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(compression());
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port, () => {
  console.log(`Up and running. Listening to the ${port} port.`);
});
