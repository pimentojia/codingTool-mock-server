const fs = require('fs')
const path = require('path')

exports.getGeneral = async (req, res) => {
  try {
    const data = {
      data: {
        machineRoom: 5,
        rate: 50,
        it: 350,
        agent: 344,
        service: 2133,
        over: 1,
        order: 260,
        ordering: 120
      },
      message: '请求成功',
      statusCode: '200'
    }
    return res.json(data)

  } catch (e) {
    console.log(e.stack)
    res.json({statusCode: 500, message: e.message, data: null})
  }
}

exports.getAssetProfile = async (req, res) => {
  try {
    const data = {
      data: {
        computingDevice: [1110, 20, 58, 220],
        storageDevice: [200, 356, 526, 125],
        networkDevice: [120, 52, 36, 26],
        television: [152, 68, 596, 523]
      },
      message: '请求成功',
      statusCode: '200'
    }
    return res.json(data)

  } catch (e) {
    console.log(e.stack)
    res.json({statusCode: 500, message: e.message, data: null})
  }
}


exports.getSystemAssets = async (req, res) => {
  try {
    const data = {
      data: [
        {
          'classCode': 'xxx',
          'name': 'CTS2.0',
          'total': 189,
          '服务器': 183,
          '存储': 5
        }, {
          'classCode': 'xxx',
          'name': 'MICAPS',
          'total': 189,
          '服务器': 183,
          '存储': 5
        },
        {
          'classCode': 'xxx',
          'name': '虚谷',
          'total': 189,
          '服务器': 183,
          '存储': 5
        },
        {
          'classCode': 'xxx',
          'name': 'rds',
          'total': 189,
          '服务器': 183,
          '存储': 5
        },
        {
          'classCode': 'xxx',
          'name': 'ads',
          'total': 189,
          '服务器': 183,
          '存储': 5,
          '磁带库': 2
        }
      ],
      message: '请求成功',
      statusCode: '200'
    }
    return res.json(data)

  } catch (e) {
    console.log(e.stack)
    res.json({statusCode: 500, message: e.message, data: null})
  }
}

