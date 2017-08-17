'use strict';
import mongoose from 'mongoose'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

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

exports.index = function(req, res) {

};

