const express = require('express');
const Api = require('./Api');

const Router = express.Router();

Router.post('/getGeneral', Api.getGeneral);
Router.post('/getSystemAssets', Api.getSystemAssets);
Router.post('/getAssetProfile', Api.getAssetProfile);

module.exports = Router;
