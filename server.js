const express = require('express')
// const Router=require('./countryWeather/Router');
const Router=require('./wolf/Router');
// const Router=require('./beijing/Router');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express()
app.use(bodyParser.json());
app.set('showStackError', true);
app.use(logger(':method :url :status'));
app.locals.pretty = true;
app.use('/service/api', Router);
// app.use('/api', Router);

app.listen(8080, () => {
  console.log('server is listening on 8080')
})
