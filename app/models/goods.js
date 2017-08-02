'use strict';

const mongoose = require('mongoose');

const GoodsSchema = new mongoose.Schema({
	name: 	{type: String, trim: true, required: true},
	desc: 	{type: String, default: ''},
	price:  {type: Number, min: 0, required: true}, 
	avatar: {type: String, required: true},
	image: 	{type: Array},
	createdAt: {type: Date, default : Date.now},
});


GoodsSchema.methods = {
	save:  	function() {
	},
};

GoodsSchema.statics = {
	list:    function()	{
		let models = [{
			name: "value",
			price:  	12,
			avatar: 	'/static/image/a.png',
			image: 		['/static/image/b.png'],
			createdAt: 	'2015-08-08', 
		}];
		return models;
	},
};

mongoose.model('Goods', GoodsSchema);
