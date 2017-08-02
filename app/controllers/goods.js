'use strict';
const mongoose = require('mongoose');
const GoodsModel = mongoose.model('Goods');

exports.new = function() {

};

exports.create = function() {

};

let list = async function(req, res) {
	let collections = await GoodsModel.list();
	res.status(200).send(collections);
};
exports.list = list;

exports.detail = function() {

};


exports.edit = function() {

};

exports.update = function() {

};

exports.delete = function() {

};

