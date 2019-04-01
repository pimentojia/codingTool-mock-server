const express = require('express');
const Api = require('./Api');
const Api2 = require('../countryWeather/Api');
const Router = express.Router();

Router.get('/v1/cmacast/runState', Api.getRunState);
Router.get('/v1/cmacast/filesystem', Api.getFilesystem);
Router.get('/v1/cmacast/receiveState', Api.getReceiveState);
Router.get('/v1/cmacast/systemState', Api.getSystemState);
Router.get('/v1/cmacast/receiveSourceList', Api.getReceiveList);
Router.get('/v1/cmacast/systemNotice', Api.getSystemNotice);
Router.get('/v1/cmacast/pushMap', Api.getPushMap);
Router.get('/v1/resource/pandect', Api.getResourcePandect);
Router.get('/v1/getDataDetails/dataAnalysis', Api.getDataAnalysis);
Router.get('/v1/getDataDetails/radar', Api.getRadar);
Router.get('/v1/getDataDetails/satellite', Api.getSatellite);
Router.get('/v1/getDataDetails/getCiPan', Api.getCiPan);
Router.get('/v1/getDataDetails/getCiPanUse', Api.getCiPanUse);
Router.get('/v1/getDataDetails/getProcess', Api.getProcess);
Router.get('/v1/getDataDetails/getPctUsage', Api.getPctUsage);
Router.get('/v1/getDataDetails/getFlow', Api.getFlow);
Router.get('/v1/getDataDetails/getCpuInfo', Api.getCpuInfo);

module.exports = Router;
