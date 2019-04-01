const express = require('express');
const Api = require('./Api');
const Api2 = require('../countryWeather/Api');
const Router = express.Router();

Router.post('/v1/overView/mapData', Api.getMapData);


Router.post('/v1/basic/provincial', Api.getProvincial);
Router.post('/v1/report/dataType', Api.getNavData);
Router.post('/v1/report/detailInfo', Api.getTablesData); 
Router.post('/v1/report/station/basicInfo', Api.stationBasicInfo);
Router.post('/v1/report/station/detailInfo', Api.stationDetailInfo);
Router.post('/v1/report/station/state/basicInfo', Api.stationStateBasicInfo); // 广西气象定制
Router.post('/v1/report/station/state/detailInfo', Api.stationStateDetailInfo); // 广西气象定制
Router.post('/v1/report/inTime/detailInfo', Api.getCityRate);
Router.post('/v1/report/history/detailInfo', Api.getHistory);
Router.post('/v1/report/flow/dataBasicInfo', Api.getDataBasicInfo);
Router.post('/v1/report/flow/stationBasicInfo', Api.getStationBasicInfo);
Router.post('/v1/report/flow/stationListInfo', Api.getStationListInfo);
Router.post('/v1/report/flow/chartDataList', Api.getChartDataList);
Router.post('/v1/report/flow/chartList', Api.getChartList);


Router.post('/v1/overView/detail/alert', Api.getAlterModal);
Router.post('/v1/overView/detail/agent', Api.getAgentModal);
Router.post('/v1/downflow/detailInfo', Api.getDownLoadData);
Router.post('/v1/overView/upLoad', Api.getUpload);
Router.get('/v1/system/config/get', Api.getSystemConfig);



// Router.post('/v1/overView/alterInfo', Api.alterInfo);



Router.post('/OT/getTaskConfigs', Api2.getTaskConfigs);
Router.post('/findAlertCons', Api2.findAlertCons);
Router.post('/OT/taskConfig/update', Api2.update);
Router.post('/OT/taskConfig/detele', Api2.detele);
Router.get('/downloadExcel', Api2.downloadExcel);
Router.get('/getAppNames', Api2.getAppNames);

module.exports = Router;
