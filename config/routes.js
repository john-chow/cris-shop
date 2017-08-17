'use strict';

import * as goods from '../app/controllers/goods'

module.exports = (app) => {
	app.get('/goods', goods.list);
	app.get('/goods/:id/edit', goods.edit);
	app.put('/goods/:id', goods.update);
	app.get('/goods/:id', goods.detail);
	app.get('/goods/new', goods.create);
	app.post('/goods/new', goods.new);
	app.delete('/goods/:id', goods.delete);
	app.get('/', goods.index);

	//app.get('/admin', admin.index);
}
