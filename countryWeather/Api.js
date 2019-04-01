const fs = require('fs')
const path = require('path')
exports.getTaskConfigs = async (req, res) => {
  try {
    const data = fs.readFileSync( path.join(__dirname,'getTaskConfigs.json'), 'utf-8')
    if (req.body.SYSTEM) {
      return res.json(JSON.parse(data).reverse())
    }else {
      return res.json(JSON.parse(data))

    }
  } catch (e) {
    console.log(e.stack)
    res.json({errCode: '', message: e.message, data: ''})
  }
}

exports.update = async (req, res) => {
  try {
    return res.json({
      'code': 0,
      'msg': ''
    })
  } catch (e) {
    console.log(e.stack)
    res.json({errCode: '', message: e.message, data: ''})
  }
}

exports.detele = async (req, res) => {
  try {
    return res.json({
      'code': 0,
      'msg': ''
    })
  } catch (e) {
    console.log(e.stack)
    res.json({errCode: '', message: e.message, data: ''})
  }
}

exports.findAlertCons = async (req, res) => {
  try {
    const data = fs.readFileSync(path.join(__dirname,'/b.json'), 'utf-8')
    return res.json(JSON.parse(data))
  } catch (e) {
    console.log(e.stack)
    res.json({errCode: '', message: e.message, data: ''})
  }
}

exports.downloadExcel = async (req, res) => {
  try {
    let filePath = path.join(__dirname, './plxz.xls')
    let content = fs.readFileSync(filePath, 'binary')
    res.setHeader(
      'Content-type', 'application/octet-stream'
    )
    res.end(new Buffer(content, 'binary'))

  } catch (e) {
    res.end(`系统异常：${e.message}`)
  }
}
exports.getAppNames = async (req, res) => {
  try {
    return res.json(['EI告警', 'MCP', '全流程'])
  } catch (e) {
    console.log(e.stack)
    res.json({errCode: '', message: e.message, data: ''})
  }
}