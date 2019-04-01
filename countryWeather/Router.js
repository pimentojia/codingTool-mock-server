const express = require('express');
const Api = require('./Api');
const Router = express.Router();

Router.post('/OT/getTaskConfigs', Api.getTaskConfigs);
Router.post('/findAlertCons', Api.findAlertCons);
Router.post('/OT/taskConfig/update', Api.update);
Router.post('/OT/taskConfig/detele', Api.detele);
Router.get('/downloadExcel', Api.downloadExcel);
Router.get('/getAppNames', Api.getAppNames);

module.exports = Router;
