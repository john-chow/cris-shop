import Express from 'express'
import fs from 'fs'
import path from 'path'
import handleRender from './app/middleware/handle_render'

const join = path.join
const models = join(__dirname, 'app/models');

const app = Express();
const port = process.env.PORT || 8080;
app.set("port", port);

// Bootstrap models
fs.readdirSync(models)
  .filter(file => ~file.search(/^[^\.].*\.js$/))
  .forEach(file => require(join(models, file)));

require('./config/routes')(app);

app.use(handleRender);
app.listen(port, () => {
	console.log('Express app started on port ' + port);
});
