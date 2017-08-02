const express = require('express');
const fs = require('fs');
const join = require('path').join;
const models = join(__dirname, 'app/models');

const app = express();
const port = process.env.PORT || 8080;
app.set("port", port);

// Bootstrap models
fs.readdirSync(models)
  .filter(file => ~file.search(/^[^\.].*\.js$/))
  .forEach(file => require(join(models, file)));

require('./config/routes')(app);

app.listen(port, () => {
	console.log('Express app started on port ' + port);
});
