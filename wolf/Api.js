const fs = require('fs')
const path = require('path')

exports.getUpload = async (req, res) => {
  try {
    const data = {
        "data": {
            "yAxis": [
                100,
                98.05,
                100,
                0,
                42.22
            ],
            "xAxis": [
                "质控后新Z文件",
                "质控后区域站资料",
                "公路交通站",
                "测风A部-UP",
                "雷达-组合反射率（分辨率4公里）"
            ],
            "shadow": [
                "{\"value\":100,\"itemStyle\":{\"normal\":{\"color\":\"rgba(32, 42, 50, 0.3)\"}}}",
                "{\"value\":100,\"itemStyle\":{\"normal\":{\"color\":\"rgba(32, 42, 50, 0.3)\"}}}",
                "{\"value\":100,\"itemStyle\":{\"normal\":{\"color\":\"rgba(32, 42, 50, 0.3)\"}}}",
                "{\"value\":100,\"itemStyle\":{\"normal\":{\"color\":\"rgba(32, 42, 50, 0.3)\"}}}",
                "{\"value\":100,\"itemStyle\":{\"normal\":{\"color\":\"rgba(32, 42, 50, 0.3)\"}}}"
            ]
        },
        "message": "success",
        "statusCode": "200"
    }
    return res.json(data)

  } catch (e) {
    console.log(e.stack)
    res.json({
      statusCode: 500,
      message: e.message,
      data: null
    })
  }
}


exports.getMapData = async (req, res) => {
    try {
      const data = {
        "data": {
            "入库率": {
                "data": [
                    100,
                    98.05,
                    100,
                    0,
                    0
                ]
            },
            "小类": {
                "data": [
                    "质控后新Z文件",
                    "质控后区域站资料",
                    "公路交通站",
                    "测风A部-UP",
                    "雷达-组合反射率（分辨率4公里）"
                ]
            },
            "时次": {
                "data": [
                    "世界时 2019-03-29 03:00",
                    "世界时 2019-03-29 03:00",
                    "世界时 2019-03-29 03:00",
                    "世界时 2019-03-29 00:00",
                    "世界时 2019-03-29 03:00"
                ]
            },
            "应收": {
                "data": [
                    "91",
                    "668",
                    "8",
                    "0",
                    "90"
                ]
            },
            "normalCount": {
                "data": [
                    "0",
                    "642",
                    "8",
                    "6",
                    "4"
                ]
            },
            "abnormalCount": {
                "data": [
                    "91",
                    "18",
                    "0",
                    "0",
                    "6"
                ]
            },
            "sodName": {
                "data": [
                    "中国地面分钟降水资料",
                    "中国地面逐小时资料-要素存储",
                    "公路交通气象基本要素资料-要素存储",
                    "全球高空定时值资料-要素存储",
                    "质控前单站多普勒雷达产品-组合反射率-单文件"
                ]
            },
            "stationStateRate": {
                "data": [
                    0,
                    98,
                    100,
                    100,
                    11
                ]
            },
            "到报率": {
                "data": [
                    100,
                    98.05,
                    100,
                    0,
                    42.22
                ]
            },
            "实收": {
                "data": [
                    "91",
                    "655",
                    "8",
                    "0",
                    "38"
                ]
            },
            "缺收": {
                "data": [
                    "0",
                    "13",
                    "0",
                    "0",
                    "52"
                ]
            },
            "ctsdpcsodCode": {
                "data": [
                    "A.0001.0032.R001:A.0010.0001.P006:A.0010.0001.S001",
                    "A.0001.0028.R001:A.0012.0001.P005:A.0012.0001.S001",
                    "A.0001.0027.R001:A.0008.0001.P001:A.0008.0001.S001",
                    "B.0001.0005.R001:B.0011.0001.P005:B.0011.0001.S001",
                    "J.0003.0003.R002:J.0003.0003.P002:J.0003.0003.S001"
                ]
            },
            "及时率": {
                "data": [
                    100,
                    97.9,
                    100,
                    0,
                    42.22
                ]
            },
            "解码率": {
                "data": [
                    100,
                    98.05,
                    100,
                    0,
                    0
                ]
            },
            "大类": {
                "data": [
                    "地面气象资料",
                    "地面气象资料",
                    "地面气象资料",
                    "高空气象资料",
                    "雷达数据"
                ]
            }
        },
        "message": "success",
        "statusCode": "200"
    }
      return res.json(data)
  
    } catch (e) {
      console.log(e.stack)
      res.json({
        statusCode: 500,
        message: e.message,
        data: null
      })
    }
  }

exports.getProvincial = async (req, res) => {
  try {
    const data = {
      'data': {
        'provincial': 'zhejiang',
        'provincialCN': '浙江'
      },
      'statusCode': 200,
      'message': 'success'
    }
    return res.json(data)

  } catch (e) {
    console.log(e.stack)
    res.json({
      statusCode: 500,
      message: e.message,
      data: null
    })
  }
}

exports.getNavData = async (req, res) => {
  try {
    const data = {
      'data': [
        '地面气象资料',
        '高空气象资料',
        '海洋气象资料',
        '气象辐射资料',
        '卫星数据',
        '卫星数据1',
        '卫星数据2',
        '卫星数据3',
        '卫星数据4',
        '卫星数据5',
        '卫星数据6',
        '卫星数据7',
        '卫星数据8',
        '卫星数据9',
        '卫星数据10',
        '卫星数据11',
        '卫星数据12',
        '卫星数据13',
        '卫星数据14',
        '卫星数据15',
        '卫星数据16',
        '卫星数据17',
      ],
      'statusCode': 200,
      'message': 'success'
    }
    return res.json(data)

  } catch (e) {
    console.log(e.stack)
    res.json({
      statusCode: 500,
      message: e.message,
      data: null
    })
  }
}

exports.alterInfo = async (req, res) => {
  try {
    const data = {
      'data': [
        '地面气象资料',
        '高空气象资料',
        '海洋气象资料',
        '气象辐射资料',
        '卫星数据',
        '卫星数据1',
        '卫星数据2',
        '卫星数据3',
        '卫星数据4',
        '卫星数据5',
        '卫星数据6',
        '卫星数据7',
        '卫星数据8',
        '卫星数据9',
        '卫星数据10',
        '卫星数据11',
        '卫星数据12',
        '卫星数据13',
        '卫星数据14',
        '卫星数据15',
        '卫星数据16',
        '卫星数据17',
      ],
      'statusCode': 200,
      'message': 'success'
    }
    return res.json(data)

  } catch (e) {
    console.log(e.stack)
    res.json({
      statusCode: 500,
      message: e.message,
      data: null
    })
  }
}

exports.getTablesData = async (req, res) => {
  try {
    const data = {
      "data": [
          {
              "deatil": [
                  {
                      "stationStateInfo": {
                          "abnormalCount": 0,
                          "name": "交通气象观测站",
                          "normalCount": 8,
                          "stationTypes": "jtqxgcz"
                      },
                      "destination": [
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "BABJ",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "DPC",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "MDOS",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          }
                      ],
                      "metricCoLocNum": 0,
                      "sod": "A.0008.0001.S001",
                      "dataName": "CTS:公路交通气象基本要素资料\nSOD:中国公路交通气象基本要素资料",
                      "oughtSend": "0",
                      "oughtPut": "0",
                      "missPut": "0",
                      "timeLevelSecond": "0.0",
                      "metricCoTdNum": 8,
                      "timeLevelThird": "0.0",
                      "dpc": "A.0008.0001.P001",
                      "realitySend": "0",
                      "metricCoActualNum": 8,
                      "metricCtsRate": 100,
                      "newDate": "2019-03-25 03:00",
                      "metricIntimeRate": 100,
                      "cts": "A.0001.0027.R001",
                      "missSend": "0",
                      "timeLevelFirst": "0.0",
                      "stationAvail": "98",
                      "assessInfo": [
                          {
                              "assessLevel": "国家级考核",
                              "missAccept": "0",
                              "realityAccept": "0",
                              "ctsRate": 0,
                              "ctsIntimeRate": 0,
                              "oughtAccept": "0"
                          }
                      ],
                      "realityPut": "0",
                      "sodRate": 0,
                      "minuteStep": "60"
                  },
                  {
                      "stationStateInfo": {
                          "abnormalCount": 0,
                          "name": "交通气象观测站",
                          "normalCount": 8,
                          "stationTypes": "jtqxgcz"
                      },
                      "destination": [
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "BABJ",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "DPC",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "MDOS",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          }
                      ],
                      "metricCoLocNum": 0,
                      "sod": "A.0008.0002.S001",
                      "dataName": "CTS:公路交通气象基本要素资料\nSOD:中国公路交通分钟降水资料-要素存储",
                      "oughtSend": "0",
                      "oughtPut": "0",
                      "missPut": "0",
                      "timeLevelSecond": "0.0",
                      "metricCoTdNum": 8,
                      "timeLevelThird": "0.0",
                      "dpc": "A.0008.0002.P001",
                      "realitySend": "0",
                      "metricCoActualNum": 8,
                      "metricCtsRate": 100,
                      "newDate": "2019-03-25 03:00",
                      "metricIntimeRate": 100,
                      "cts": "A.0001.0027.R001",
                      "missSend": "0",
                      "timeLevelFirst": "0.0",
                      "stationAvail": "98",
                      "assessInfo": [
                          {
                              "assessLevel": "国家级考核",
                              "missAccept": "0",
                              "realityAccept": "0",
                              "ctsRate": 0,
                              "ctsIntimeRate": 0,
                              "oughtAccept": "0"
                          }
                      ],
                      "realityPut": "0",
                      "sodRate": 0,
                      "minuteStep": "60"
                  },
                  {
                      "stationStateInfo": {
                          "abnormalCount": 42,
                          "name": "国家地面天气站、普通区域站",
                          "normalCount": 2674,
                          "stationTypes": "gjdmtqz,ptqyz"
                      },
                      "destination": [
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "BABJ",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "DPC",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "MDOS",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          }
                      ],
                      "metricCoLocNum": 9,
                      "sod": "A.0010.0001.S001",
                      "dataName": "CTS:质控后地面自动站气象要素资料(一体化区域站)\nSOD:中国地面分钟降水资料",
                      "oughtSend": "0",
                      "oughtPut": "0",
                      "missPut": "0",
                      "timeLevelSecond": "79.51",
                      "metricCoTdNum": 668,
                      "timeLevelThird": "0.0",
                      "dpc": "A.0010.0001.P002",
                      "realitySend": "0",
                      "metricCoActualNum": 659,
                      "metricCtsRate": 98.65,
                      "newDate": "2019-03-25 03:00",
                      "metricIntimeRate": 98.35,
                      "cts": "A.0001.0028.R001",
                      "missSend": "0",
                      "timeLevelFirst": "20.49",
                      "stationAvail": "98",
                      "assessInfo": [
                          {
                              "assessLevel": "国家级考核",
                              "missAccept": "0",
                              "realityAccept": "0",
                              "ctsRate": 0,
                              "ctsIntimeRate": 0,
                              "oughtAccept": "0"
                          }
                      ],
                      "realityPut": "0",
                      "sodRate": 0,
                      "minuteStep": "60"
                  },
                  {
                      "stationStateInfo": {
                          "abnormalCount": 42,
                          "name": "国家地面天气站、普通区域站",
                          "normalCount": 2674,
                          "stationTypes": "gjdmtqz,ptqyz"
                      },
                      "destination": [
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "BABJ",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "DPC",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "MDOS",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          }
                      ],
                      "metricCoLocNum": 9,
                      "sod": "A.0012.0001.S001",
                      "dataName": "CTS:质控后地面自动站气象要素资料(一体化区域站)\nSOD:中国地面逐小时资料-要素存储",
                      "oughtSend": "0",
                      "oughtPut": "0",
                      "missPut": "0",
                      "timeLevelSecond": "0.0",
                      "metricCoTdNum": 668,
                      "timeLevelThird": "0.0",
                      "dpc": "A.0012.0001.P005",
                      "realitySend": "0",
                      "metricCoActualNum": 659,
                      "metricCtsRate": 98.65,
                      "newDate": "2019-03-25 03:00",
                      "metricIntimeRate": 98.35,
                      "cts": "A.0001.0028.R001",
                      "missSend": "0",
                      "timeLevelFirst": "0.0",
                      "stationAvail": "98",
                      "assessInfo": [
                          {
                              "assessLevel": "国家级考核",
                              "missAccept": "0",
                              "realityAccept": "0",
                              "ctsRate": 0,
                              "ctsIntimeRate": 0,
                              "oughtAccept": "0"
                          }
                      ],
                      "realityPut": "0",
                      "sodRate": 0,
                      "minuteStep": "60"
                  },
                  {
                      "cts": "A.0001.0029.R001",
                      "missSend": "0",
                      "timeLevelFirst": "20.49",
                      "destination": [
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "BABJ",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "DPC",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "MDOS",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          }
                      ],
                      "stationAvail": "98",
                      "metricCoLocNum": 1,
                      "sod": "A.0010.0001.S001",
                      "dataName": "CTS:质控后地面自动站降水量资料(一体化雨量站)\nSOD:中国地面分钟降水资料",
                      "oughtSend": "0",
                      "oughtPut": "0",
                      "missPut": "0",
                      "timeLevelSecond": "79.51",
                      "metricCoTdNum": 682,
                      "assessInfo": [
                          {
                              "assessLevel": "国家级考核",
                              "missAccept": "0",
                              "realityAccept": "0",
                              "ctsRate": 0,
                              "ctsIntimeRate": 0,
                              "oughtAccept": "0"
                          }
                      ],
                      "realityPut": "0",
                      "timeLevelThird": "0.0",
                      "sodRate": 0,
                      "dpc": "A.0010.0001.P003",
                      "realitySend": "0",
                      "metricCoActualNum": 681,
                      "metricCtsRate": 99.85,
                      "minuteStep": "60",
                      "newDate": "2019-03-25 03:00",
                      "metricIntimeRate": 99.85
                  },
                  {
                      "cts": "A.0001.0031.R001",
                      "missSend": "0",
                      "timeLevelFirst": "100.0",
                      "destination": [
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "BABJ",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "DPC",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "MDOS",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          }
                      ],
                      "stationAvail": "98",
                      "metricCoLocNum": 91,
                      "sod": "A.0011.0001.S001",
                      "dataName": "CTS:质控后地面日照资料(一体化)\nSOD:中国地面日照资料-要素存储",
                      "oughtSend": "0",
                      "oughtPut": "0",
                      "missPut": "0",
                      "timeLevelSecond": "0.0",
                      "metricCoTdNum": 91,
                      "assessInfo": [
                          {
                              "assessLevel": "国家级考核",
                              "missAccept": "0",
                              "realityAccept": "0",
                              "ctsRate": 0,
                              "ctsIntimeRate": 0,
                              "oughtAccept": "0"
                          }
                      ],
                      "realityPut": "0",
                      "timeLevelThird": "0.0",
                      "sodRate": 0,
                      "dpc": "A.0011.0001.P001",
                      "realitySend": "0",
                      "metricCoActualNum": 0,
                      "metricCtsRate": "0",
                      "minuteStep": "60",
                      "newDate": "2019-03-25 00:00",
                      "metricIntimeRate": "0"
                  },
                  {
                      "stationStateInfo": {
                          "abnormalCount": 0,
                          "name": "国家基本气候站、国家基本气象站、国家地面气象站(除2个无人站)",
                          "normalCount": 93,
                          "stationTypes": "jzqhz,jbqhz,ybqxz"
                      },
                      "destination": [
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "BABJ",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "DPC",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "MDOS",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          }
                      ],
                      "metricCoLocNum": 0,
                      "sod": "A.0010.0001.S001",
                      "dataName": "CTS:质控后地面气象要素资料（一体化新Z文件）\nSOD:中国地面分钟降水资料",
                      "oughtSend": "0",
                      "oughtPut": "0",
                      "missPut": "0",
                      "timeLevelSecond": "79.51",
                      "metricCoTdNum": 91,
                      "timeLevelThird": "0.0",
                      "dpc": "A.0010.0001.P006",
                      "realitySend": "0",
                      "metricCoActualNum": 91,
                      "metricCtsRate": 100,
                      "newDate": "2019-03-25 03:00",
                      "metricIntimeRate": 100,
                      "cts": "A.0001.0032.R001",
                      "missSend": "0",
                      "timeLevelFirst": "20.49",
                      "stationAvail": "98",
                      "assessInfo": [
                          {
                              "assessLevel": "国家级考核",
                              "missAccept": "0",
                              "realityAccept": "0",
                              "ctsRate": 0,
                              "ctsIntimeRate": 0,
                              "oughtAccept": "0"
                          }
                      ],
                      "realityPut": "0",
                      "sodRate": 0,
                      "minuteStep": "60"
                  },
                  {
                      "stationStateInfo": {
                          "abnormalCount": 0,
                          "name": "国家基本气候站、国家基本气象站、国家地面气象站(除2个无人站)",
                          "normalCount": 93,
                          "stationTypes": "jzqhz,jbqhz,ybqxz"
                      },
                      "destination": [
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "BABJ",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "DPC",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "MDOS",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          }
                      ],
                      "metricCoLocNum": 0,
                      "sod": "A.0012.0001.S001",
                      "dataName": "CTS:质控后地面气象要素资料（一体化新Z文件）\nSOD:中国地面逐小时资料-要素存储",
                      "oughtSend": "0",
                      "oughtPut": "0",
                      "missPut": "0",
                      "timeLevelSecond": "0.0",
                      "metricCoTdNum": 91,
                      "timeLevelThird": "0.0",
                      "dpc": "A.0012.0001.P001",
                      "realitySend": "0",
                      "metricCoActualNum": 91,
                      "metricCtsRate": 100,
                      "newDate": "2019-03-25 03:00",
                      "metricIntimeRate": 100,
                      "cts": "A.0001.0032.R001",
                      "missSend": "0",
                      "timeLevelFirst": "0.0",
                      "stationAvail": "98",
                      "assessInfo": [
                          {
                              "assessLevel": "国家级考核",
                              "missAccept": "0",
                              "realityAccept": "0",
                              "ctsRate": 0,
                              "ctsIntimeRate": 0,
                              "oughtAccept": "0"
                          }
                      ],
                      "realityPut": "0",
                      "sodRate": 0,
                      "minuteStep": "60"
                  },
                  {
                      "cts": "A.0001.0040.R001",
                      "missSend": "0",
                      "timeLevelFirst": "20.49",
                      "destination": [
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "BABJ",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "DPC",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "MDOS",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          }
                      ],
                      "stationAvail": "98",
                      "metricCoLocNum": 0,
                      "sod": "A.0010.0001.S001",
                      "dataName": "CTS:质控后无人站地面气象要素资料（新Z文件）\nSOD:中国地面分钟降水资料",
                      "oughtSend": "0",
                      "oughtPut": "0",
                      "missPut": "0",
                      "timeLevelSecond": "79.51",
                      "metricCoTdNum": 2,
                      "assessInfo": [
                          {
                              "assessLevel": "国家级考核",
                              "missAccept": "0",
                              "realityAccept": "0",
                              "ctsRate": 0,
                              "ctsIntimeRate": 0,
                              "oughtAccept": "0"
                          }
                      ],
                      "realityPut": "0",
                      "timeLevelThird": "0.0",
                      "sodRate": 0,
                      "dpc": "A.0010.0001.P009",
                      "realitySend": "0",
                      "metricCoActualNum": 2,
                      "metricCtsRate": 100,
                      "minuteStep": "60",
                      "newDate": "2019-03-25 03:00",
                      "metricIntimeRate": 100
                  },
                  {
                      "cts": "A.0001.0040.R001",
                      "missSend": "0",
                      "timeLevelFirst": "0.0",
                      "destination": [
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "BABJ",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "DPC",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "MDOS",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          }
                      ],
                      "stationAvail": "98",
                      "metricCoLocNum": 0,
                      "sod": "A.0012.0001.S001",
                      "dataName": "CTS:质控后无人站地面气象要素资料（新Z文件）\nSOD:中国地面逐小时资料-要素存储",
                      "oughtSend": "0",
                      "oughtPut": "0",
                      "missPut": "0",
                      "timeLevelSecond": "0.0",
                      "metricCoTdNum": 2,
                      "assessInfo": [
                          {
                              "assessLevel": "国家级考核",
                              "missAccept": "0",
                              "realityAccept": "0",
                              "ctsRate": 0,
                              "ctsIntimeRate": 0,
                              "oughtAccept": "0"
                          }
                      ],
                      "realityPut": "0",
                      "timeLevelThird": "0.0",
                      "sodRate": 0,
                      "dpc": "A.0012.0001.P004",
                      "realitySend": "0",
                      "metricCoActualNum": 2,
                      "metricCtsRate": 100,
                      "minuteStep": "60",
                      "newDate": "2019-03-25 03:00",
                      "metricIntimeRate": 100
                  },
                  {
                      "stationStateInfo": {
                          "abnormalCount": 0,
                          "name": "国家基本气候站、国家基本气象站、国家地面气象站(除2个无人站)",
                          "normalCount": 93,
                          "stationTypes": "jzqhz,jbqhz,ybqxz"
                      },
                      "destination": [
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "BABJ",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "DPC",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "MDOS",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          }
                      ],
                      "metricCoLocNum": 91,
                      "sod": "A.0010.0001.S001",
                      "dataName": "CTS:中国国家站地面分钟观测资料(BUFR格式)(质控后)\nSOD:中国地面分钟降水资料",
                      "oughtSend": "0",
                      "oughtPut": "0",
                      "missPut": "0",
                      "timeLevelSecond": "79.51",
                      "metricCoTdNum": 91,
                      "timeLevelThird": "0.0",
                      "dpc": "A.0010.0001.P007",
                      "realitySend": "0",
                      "metricCoActualNum": 0,
                      "metricCtsRate": "0",
                      "newDate": "2019-03-25 02:59",
                      "metricIntimeRate": "0",
                      "cts": "A.0001.0043.R001",
                      "missSend": "0",
                      "timeLevelFirst": "20.49",
                      "stationAvail": "98",
                      "assessInfo": [
                          {
                              "assessLevel": "国家级考核",
                              "missAccept": "0",
                              "realityAccept": "0",
                              "ctsRate": 0,
                              "ctsIntimeRate": 0,
                              "oughtAccept": "0"
                          }
                      ],
                      "realityPut": "0",
                      "sodRate": 0,
                      "minuteStep": "60"
                  },
                  {
                      "stationStateInfo": {
                          "abnormalCount": 0,
                          "name": "国家基本气候站、国家基本气象站、国家地面气象站(除2个无人站)",
                          "normalCount": 93,
                          "stationTypes": "jzqhz,jbqhz,ybqxz"
                      },
                      "destination": [
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "BABJ",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "DPC",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "MDOS",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          }
                      ],
                      "metricCoLocNum": 91,
                      "sod": "A.0010.0002.S001",
                      "dataName": "CTS:中国国家站地面分钟观测资料(BUFR格式)(质控后)\nSOD:中国地面分钟压温湿风资料",
                      "oughtSend": "0",
                      "oughtPut": "0",
                      "missPut": "0",
                      "timeLevelSecond": "0.17",
                      "metricCoTdNum": 91,
                      "timeLevelThird": "0.0",
                      "dpc": "A.0010.0002.P006",
                      "realitySend": "0",
                      "metricCoActualNum": 0,
                      "metricCtsRate": "0",
                      "newDate": "2019-03-25 02:59",
                      "metricIntimeRate": "0",
                      "cts": "A.0001.0043.R001",
                      "missSend": "0",
                      "timeLevelFirst": "99.83",
                      "stationAvail": "98",
                      "assessInfo": [
                          {
                              "assessLevel": "国家级考核",
                              "missAccept": "0",
                              "realityAccept": "0",
                              "ctsRate": 0,
                              "ctsIntimeRate": 0,
                              "oughtAccept": "0"
                          }
                      ],
                      "realityPut": "0",
                      "sodRate": 0,
                      "minuteStep": "60"
                  },
                  {
                      "stationStateInfo": {
                          "abnormalCount": 0,
                          "name": "国家基本气候站、国家基本气象站、国家地面气象站(除2个无人站)",
                          "normalCount": 93,
                          "stationTypes": "jzqhz,jbqhz,ybqxz"
                      },
                      "destination": [
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "BABJ",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "DPC",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "MDOS",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          }
                      ],
                      "metricCoLocNum": 0,
                      "sod": "A.0011.0001.S001",
                      "dataName": "CTS:中国国家站地面小时观测资料(BUFR格式)(质控后)\nSOD:中国地面日照资料-要素存储",
                      "oughtSend": "0",
                      "oughtPut": "0",
                      "missPut": "0",
                      "timeLevelSecond": "0.0",
                      "metricCoTdNum": 91,
                      "timeLevelThird": "0.0",
                      "dpc": "A.0011.0001.P002",
                      "realitySend": "0",
                      "metricCoActualNum": 91,
                      "metricCtsRate": 100,
                      "newDate": "2019-03-25 03:00",
                      "metricIntimeRate": 100,
                      "cts": "A.0001.0044.R001",
                      "missSend": "0",
                      "timeLevelFirst": "100.0",
                      "stationAvail": "98",
                      "assessInfo": [
                          {
                              "assessLevel": "国家级考核",
                              "missAccept": "0",
                              "realityAccept": "0",
                              "ctsRate": 0,
                              "ctsIntimeRate": 0,
                              "oughtAccept": "0"
                          }
                      ],
                      "realityPut": "0",
                      "sodRate": 0,
                      "minuteStep": "60"
                  },
                  {
                      "stationStateInfo": {
                          "abnormalCount": 0,
                          "name": "国家基本气候站、国家基本气象站、国家地面气象站(除2个无人站)",
                          "normalCount": 93,
                          "stationTypes": "jzqhz,jbqhz,ybqxz"
                      },
                      "destination": [
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "BABJ",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "DPC",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "MDOS",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          }
                      ],
                      "metricCoLocNum": 0,
                      "sod": "A.0012.0001.S001",
                      "dataName": "CTS:中国国家站地面小时观测资料(BUFR格式)(质控后)\nSOD:中国地面逐小时资料-要素存储",
                      "oughtSend": "0",
                      "oughtPut": "0",
                      "missPut": "0",
                      "timeLevelSecond": "0.0",
                      "metricCoTdNum": 91,
                      "timeLevelThird": "0.0",
                      "dpc": "A.0012.0001.P006",
                      "realitySend": "0",
                      "metricCoActualNum": 91,
                      "metricCtsRate": 100,
                      "newDate": "2019-03-25 03:00",
                      "metricIntimeRate": 100,
                      "cts": "A.0001.0044.R001",
                      "missSend": "0",
                      "timeLevelFirst": "0.0",
                      "stationAvail": "98",
                      "assessInfo": [
                          {
                              "assessLevel": "国家级考核",
                              "missAccept": "0",
                              "realityAccept": "0",
                              "ctsRate": 0,
                              "ctsIntimeRate": 0,
                              "oughtAccept": "0"
                          }
                      ],
                      "realityPut": "0",
                      "sodRate": 0,
                      "minuteStep": "60"
                  },
                  {
                      "stationStateInfo": {
                          "abnormalCount": 0,
                          "name": "国家基本气候站、国家基本气象站、国家地面气象站(除2个无人站)",
                          "normalCount": 93,
                          "stationTypes": "jzqhz,jbqhz,ybqxz"
                      },
                      "destination": [
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "BABJ",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "DPC",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "MDOS",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          }
                      ],
                      "metricCoLocNum": 0,
                      "sod": "A.0013.0001.S001",
                      "dataName": "CTS:中国国家站地面小时观测资料(BUFR格式)(质控后)\nSOD:全球地面逐小时资料-要素存储",
                      "oughtSend": "0",
                      "oughtPut": "0",
                      "missPut": "0",
                      "timeLevelSecond": "1.87",
                      "metricCoTdNum": 91,
                      "timeLevelThird": "0.0",
                      "dpc": "A.0013.0001.P016",
                      "realitySend": "0",
                      "metricCoActualNum": 91,
                      "metricCtsRate": 100,
                      "newDate": "2019-03-25 03:00",
                      "metricIntimeRate": 100,
                      "cts": "A.0001.0044.R001",
                      "missSend": "0",
                      "timeLevelFirst": "98.13",
                      "stationAvail": "98",
                      "assessInfo": [
                          {
                              "assessLevel": "国家级考核",
                              "missAccept": "0",
                              "realityAccept": "0",
                              "ctsRate": 0,
                              "ctsIntimeRate": 0,
                              "oughtAccept": "0"
                          }
                      ],
                      "realityPut": "0",
                      "sodRate": 0,
                      "minuteStep": "60"
                  },
                  {
                      "stationStateInfo": {
                          "abnormalCount": 0,
                          "name": "国家基本气候站、国家基本气象站、国家地面气象站(除2个无人站)",
                          "normalCount": 93,
                          "stationTypes": "jzqhz,jbqhz,ybqxz"
                      },
                      "destination": [
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "BABJ",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "DPC",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "MDOS",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          }
                      ],
                      "metricCoLocNum": 0,
                      "sod": "A.0016.0001.S001",
                      "dataName": "CTS:中国国家站地面小时观测资料(BUFR格式)(质控后)\nSOD:中国地面日值资料-要素存储",
                      "oughtSend": "0",
                      "oughtPut": "0",
                      "missPut": "0",
                      "timeLevelSecond": "85.75",
                      "metricCoTdNum": 91,
                      "timeLevelThird": "0.0",
                      "dpc": "A.0016.0001.P006",
                      "realitySend": "0",
                      "metricCoActualNum": 91,
                      "metricCtsRate": 100,
                      "newDate": "2019-03-25 03:00",
                      "metricIntimeRate": 100,
                      "cts": "A.0001.0044.R001",
                      "missSend": "0",
                      "timeLevelFirst": "14.25",
                      "stationAvail": "98",
                      "assessInfo": [
                          {
                              "assessLevel": "国家级考核",
                              "missAccept": "0",
                              "realityAccept": "0",
                              "ctsRate": 0,
                              "ctsIntimeRate": 0,
                              "oughtAccept": "0"
                          }
                      ],
                      "realityPut": "0",
                      "sodRate": 0,
                      "minuteStep": "60"
                  },
                  {
                      "stationStateInfo": {
                          "abnormalCount": 0,
                          "name": "国家基本气候站、国家基本气象站、国家地面气象站(除2个无人站)",
                          "normalCount": 93,
                          "stationTypes": "jzqhz,jbqhz,ybqxz"
                      },
                      "destination": [
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "BABJ",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "DPC",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          },
                          {
                              "dlIntimeCheckLocNum": 0,
                              "dlCheckRate": 0,
                              "dlIntimeCheckRate": 0,
                              "dlIntimeCheckNum": 0,
                              "dlTdNum": 0,
                              "destination": "MDOS",
                              "dlIntimeNum": 0,
                              "dlRate": 0,
                              "dlActualNum": 0,
                              "dlCheckActualNum": 0,
                              "dlCheckTdNum": 0,
                              "dlCheckLocNum": 0,
                              "dlLocNum": 0,
                              "dlIntimeLocNum": 0,
                              "dlIntimeRate": 0
                          }
                      ],
                      "metricCoLocNum": 0,
                      "sod": "A.0024.0001.S001",
                      "dataName": "CTS:中国国家站地面小时观测资料(BUFR格式)(质控后)\nSOD:地面重要天气资料-要素存储",
                      "oughtSend": "0",
                      "oughtPut": "0",
                      "missPut": "0",
                      "timeLevelSecond": "0.0",
                      "metricCoTdNum": 91,
                      "timeLevelThird": "0.0",
                      "dpc": "A.0024.0001.P006",
                      "realitySend": "0",
                      "metricCoActualNum": 91,
                      "metricCtsRate": 100,
                      "newDate": "2019-03-25 03:00",
                      "metricIntimeRate": 100,
                      "cts": "A.0001.0044.R001",
                      "missSend": "0",
                      "timeLevelFirst": "100.0",
                      "stationAvail": "98",
                      "assessInfo": [
                          {
                              "assessLevel": "国家级考核",
                              "missAccept": "0",
                              "realityAccept": "0",
                              "ctsRate": 0,
                              "ctsIntimeRate": 0,
                              "oughtAccept": "0"
                          }
                      ],
                      "realityPut": "0",
                      "sodRate": 0,
                      "minuteStep": "60"
                  }
              ],
              "dataType": "地面气象资料"
          }
      ],
      "message": "success",
      "statusCode": "200"
  }
    return res.json(data)

  } catch (e) {
    console.log(e.stack)
    res.json({
      statusCode: 500,
      message: e.message,
      data: null
    })
  }
}

exports.stationBasicInfo = async (req, res) => {
  try {
    const data = {
      'data': {
        'dataName': '浙江省地面气象资料',
        'ctsCode': 'A.0001.0002.R001',
        'time': '2018-09-04 12:00',
        'oughtAccept': '152',
        'realityAccpet': '152',
        'ctsInTimeRate': '100',
        'ctsRate': '100',
        'checkOughtAccept': '152',
        'checkRealityAccept': '152',
        'checkCtsInTimeRate': '100',
        'checkCtsRate': '100'
      },
      'statusCode': 200,
      'message': 'success'
    }
    return res.json(data)

  } catch (e) {
    console.log(e.stack)
    res.json({
      statusCode: 500,
      message: e.message,
      data: null
    })
  }
}

exports.stationDetailInfo = async (req, res) => {
  try {
    const data = {"data":[{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"杭州市","stationName":"临安","stationID":"58448"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"杭州市","stationName":"临安","stationID":"584481"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"杭州市","stationName":"临安","stationID":"584482"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"杭州市","stationName":"临安","stationID":"584483"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"杭州市","stationName":"临安","stationID":"584484"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"杭州市","stationName":"临安","stationID":"584485"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"杭州市","stationName":"临安","stationID":"58448"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"杭州市","stationName":"临安","stationID":"58448"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"杭州市","stationName":"临安","stationID":"58448"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"杭州市","stationName":"临安","stationID":"58448"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"湖州市","county":"吴兴区","stationName":"湖州","stationID":"58450"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"湖州市","county":"吴兴区","stationName":"湖州","stationID":"58450"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"湖州市","county":"吴兴区","stationName":"湖州","stationID":"58450"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"湖州市","county":"吴兴区","stationName":"湖州","stationID":"58450"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"湖州市","county":"吴兴区","stationName":"湖州","stationID":"58450"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"湖州市","county":"吴兴区","stationName":"湖州","stationID":"58450"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"湖州市","county":"吴兴区","stationName":"湖州","stationID":"58450"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"湖州市","county":"吴兴区","stationName":"湖州","stationID":"58450"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"湖州市","county":"吴兴区","stationName":"湖州","stationID":"58450"},{"ctsInTimeState":"不及时","province":"浙江省","municipality":"湖州市","county":"吴兴区","stationName":"湖州","stationID":"58450"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"嘉兴市","county":"南湖区","stationName":"嘉兴","stationID":"58452"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"嘉兴市","county":"南湖区","stationName":"嘉兴","stationID":"58452"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"嘉兴市","county":"南湖区","stationName":"嘉兴","stationID":"58452"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"嘉兴市","county":"南湖区","stationName":"嘉兴","stationID":"58452"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"嘉兴市","county":"南湖区","stationName":"嘉兴","stationID":"58452"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"嘉兴市","county":"南湖区","stationName":"嘉兴","stationID":"58452"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"嘉兴市","county":"南湖区","stationName":"嘉兴","stationID":"58452"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"嘉兴市","county":"南湖区","stationName":"嘉兴","stationID":"58452"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"嘉兴市","county":"南湖区","stationName":"嘉兴","stationID":"58452"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"嘉兴市","county":"南湖区","stationName":"嘉兴","stationID":"58452"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"萧山区","stationName":"萧山","stationID":"58459"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"萧山区","stationName":"萧山","stationID":"58459"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"萧山区","stationName":"萧山","stationID":"58459"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"萧山区","stationName":"萧山","stationID":"58459"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"萧山区","stationName":"萧山","stationID":"58459"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"萧山区","stationName":"萧山","stationID":"58459"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"萧山区","stationName":"萧山","stationID":"58459"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"萧山区","stationName":"萧山","stationID":"58459"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"萧山区","stationName":"萧山","stationID":"58459"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"萧山区","stationName":"萧山","stationID":"58459"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"淳安县","stationName":"淳安","stationID":"58543"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"淳安县","stationName":"淳安","stationID":"58543"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"淳安县","stationName":"淳安","stationID":"58543"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"淳安县","stationName":"淳安","stationID":"58543"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"淳安县","stationName":"淳安","stationID":"58543"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"淳安县","stationName":"淳安","stationID":"58543"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"淳安县","stationName":"淳安","stationID":"58543"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"淳安县","stationName":"淳安","stationID":"58543"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"淳安县","stationName":"淳安","stationID":"58543"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"杭州市","county":"淳安县","stationName":"淳安","stationID":"58543"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"金华市","county":"义乌市","stationName":"义乌","stationID":"58557"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"金华市","county":"义乌市","stationName":"义乌","stationID":"58557"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"金华市","county":"义乌市","stationName":"义乌","stationID":"58557"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"金华市","county":"义乌市","stationName":"义乌","stationID":"58557"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"金华市","county":"义乌市","stationName":"义乌","stationID":"58557"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"金华市","county":"义乌市","stationName":"义乌","stationID":"58557"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"金华市","county":"义乌市","stationName":"义乌","stationID":"58557"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"金华市","county":"义乌市","stationName":"义乌","stationID":"58557"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"金华市","county":"义乌市","stationName":"义乌","stationID":"58557"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"金华市","county":"义乌市","stationName":"义乌","stationID":"58557"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"温州市","county":"洞头区","stationName":"洞头","stationID":"58760"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"温州市","county":"洞头区","stationName":"洞头","stationID":"58760"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"温州市","county":"洞头区","stationName":"洞头","stationID":"58760"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"温州市","county":"洞头区","stationName":"洞头","stationID":"58760"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"温州市","county":"洞头区","stationName":"洞头","stationID":"58760"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"温州市","county":"洞头区","stationName":"洞头","stationID":"58760"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"温州市","county":"洞头区","stationName":"洞头","stationID":"58760"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"温州市","county":"洞头区","stationName":"洞头","stationID":"58760"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"温州市","county":"洞头区","stationName":"洞头","stationID":"58760"},{"ctsInTimeState":"及时","province":"浙江省","municipality":"温州市","county":"洞头区","stationName":"洞头","stationID":"58760"}],"message":"success","statusCode":"200"}
    return res.json(data)

  } catch (e) {
    console.log(e.stack)
    res.json({
      statusCode: 500,
      message: e.message,
      data: null
    })
  }
}

exports.stationStateBasicInfo = async (req, res) => {
  try {
    const data = {"data":{"abnormalCount":48,"ctsCode":"A.0001.0028.R001","dataName":"CTS:质控后地面自动站气象要素资料(一体化区域站)\nSOD:中国地面分钟降水资料","name":"国家地面天气站、普通区域站","normalCount":2668,"stationTypes":"gjdmtqz,ptqyz","time":"2019-03-25 07:00"},"message":"success","statusCode":"200"}
    return res.json(data)

  } catch (e) {
    console.log(e.stack)
    res.json({
      statusCode: 500,
      message: e.message,
      data: null
    })
  }
}

exports.stationStateDetailInfo = async (req, res) => {
  try {
    const data = {
      "data": [
          {
              "stationCode": "N7512",
              "stationName": "灵山佛子灵东水库国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7593",
              "stationName": "浦北大成国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7591",
              "stationName": "钦北板城国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7581",
              "stationName": "钦北那蒙国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6578",
              "stationName": "隆林天生桥国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6588",
              "stationName": "隆林德峨国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3588",
              "stationName": "平乐青龙乡青龙村国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1363",
              "stationName": "宾阳陈平国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1397",
              "stationName": "横县马岭国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4520",
              "stationName": "八步黄洞国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4333",
              "stationName": "西兰村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1133",
              "stationName": "宾阳甘棠国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5444",
              "stationName": "桂平金田水库国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1095",
              "stationName": "马山永州国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1137",
              "stationName": "横县百合江南水库国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1086",
              "stationName": "邕宁百济国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1118",
              "stationName": "上林巷贤国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1154",
              "stationName": "隆安屏山国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1123",
              "stationName": "宾阳黎塘国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1134",
              "stationName": "隆安城厢兴阳国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1096",
              "stationName": "邕宁那楼国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1143",
              "stationName": "宾阳新圩国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1087",
              "stationName": "横县镇龙国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1098",
              "stationName": "上林三里国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2606",
              "stationName": "忻城古蓬国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6711",
              "stationName": "隆林克长卡达水库国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7570",
              "stationName": "钦南那彭国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6303",
              "stationName": "靖西禄峒国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4592",
              "stationName": "昭平走马国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4740",
              "stationName": "八步贺街新忠国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5013",
              "stationName": "平南六陈合水国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4670",
              "stationName": "八步桂岭国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4710",
              "stationName": "平桂姑婆山森林公园国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3105",
              "stationName": "阳朔金宝国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3097",
              "stationName": "永福堡里板峡水库国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6300",
              "stationName": "右江四塘国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5540",
              "stationName": "茂林",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7245",
              "stationName": "宁明那楠国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7266",
              "stationName": "天等东平乡东平村国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2173",
              "stationName": "三江富禄国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2184",
              "stationName": "融水洞头国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2537",
              "stationName": "合山岭南国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2560",
              "stationName": "兴宾良塘国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2594",
              "stationName": "金秀六巷乡六巷村国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2604",
              "stationName": "金秀大樟三古国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2543",
              "stationName": "武宣黄茆国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2574",
              "stationName": "金秀忠良国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2053",
              "stationName": "三江同乐乡同乐村国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1510",
              "stationName": "良庆南晓国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1407",
              "stationName": "横县六景工业园国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2004",
              "stationName": "融水香粉国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3594",
              "stationName": "兴安溶江司门国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3609",
              "stationName": "龙胜江底国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4602",
              "stationName": "昭平樟木林国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5043",
              "stationName": "平南同和国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4612",
              "stationName": "昭平马江国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6209",
              "stationName": "田林八桂平六国家气象观测站",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N6204",
              "stationName": "田东那拔国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1289",
              "stationName": "武鸣两江四联国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1070",
              "stationName": "西乡塘农科院国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2660",
              "stationName": "兴宾高安国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1213",
              "stationName": "宾阳思陇祥华国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3027",
              "stationName": "永福苏桥国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2664",
              "stationName": "金秀罗香乡罗香村国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2593",
              "stationName": "武宣桐岭仁汉国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2646",
              "stationName": "忻城大塘寨东国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2610",
              "stationName": "兴宾蒙村国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2665",
              "stationName": "象州马坪国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2600",
              "stationName": "兴宾良江国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2620",
              "stationName": "兴宾凤凰国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2760",
              "stationName": "兴宾大湾国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3071",
              "stationName": "全州东山国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6329",
              "stationName": "田林百乐国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4064",
              "stationName": "广平",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4044",
              "stationName": "苍梧梨埠国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4024",
              "stationName": "苍梧岭脚木枧水库国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4023",
              "stationName": "梨木",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7602",
              "stationName": "灵山三隆国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7612",
              "stationName": "灵山太平思明水库国家气象观测站",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N7600",
              "stationName": "钦南那思国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5585",
              "stationName": "陆川良田国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5610",
              "stationName": "苏烟水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6118",
              "stationName": "西林者夯国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5551",
              "stationName": "沙田",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5633",
              "stationName": "石南",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1360",
              "stationName": "西乡塘坛洛国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2024",
              "stationName": "融水三防国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2044",
              "stationName": "融水怀宝国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1500",
              "stationName": "良庆那陈国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2050",
              "stationName": "鱼峰白莲街道国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4661",
              "stationName": "富川葛坡凤岭国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4700",
              "stationName": "八步大桂山森林公园国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4680",
              "stationName": "八步南乡国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4713",
              "stationName": "钟山红花龙塘国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4683",
              "stationName": "钟山珊瑚同乐国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4703",
              "stationName": "钟山燕塘张屋国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4741",
              "stationName": "富川新华东湾国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6598",
              "stationName": "隆林隆或国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6704",
              "stationName": "西林西平平寨国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6769",
              "stationName": "田林那比国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6737",
              "stationName": "乐业新化国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6639",
              "stationName": "隆林岩茶国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6747",
              "stationName": "乐业逻沙国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6709",
              "stationName": "田林潞城八洞国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6619",
              "stationName": "田林六隆国家气象观测站",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N6241",
              "stationName": "田阳头塘百坡国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6242",
              "stationName": "平果果化国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4296",
              "stationName": "藤县古龙田心国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4316",
              "stationName": "藤县大黎东安国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3127",
              "stationName": "永福龙江龙山国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3132",
              "stationName": "临桂茶洞鹿角国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3124",
              "stationName": "灌阳黄关国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3129",
              "stationName": "资源瓜里大田国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3115",
              "stationName": "阳朔兴坪国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3107",
              "stationName": "永福罗锦金鸡河水库国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2234",
              "stationName": "融水怀宝民洞国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1244",
              "stationName": "隆安都结国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6381",
              "stationName": "田阳巴别国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3004",
              "stationName": "兴安华江水厂国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5614",
              "stationName": "容县黎村国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3138",
              "stationName": "恭城嘉会太平国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3143",
              "stationName": "灵川海洋东落水库国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3148",
              "stationName": "恭城观音乡观音村国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3151",
              "stationName": "全州才湾天湖水库国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4065",
              "stationName": "蒙山夏宜国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4075",
              "stationName": "蒙山长坪国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4076",
              "stationName": "藤县太平国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5623",
              "stationName": "蒲塘",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2224",
              "stationName": "融水和睦国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2244",
              "stationName": "融水永乐国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2336",
              "stationName": "柳城沙埔镇沙埔村国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2506",
              "stationName": "忻城欧洞国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7603",
              "stationName": "浦北乐民金康水库国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6114",
              "stationName": "田东印茶国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5613",
              "stationName": "大西水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5634",
              "stationName": "容县六王国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5631",
              "stationName": "樟木镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2204",
              "stationName": "融水同练英洞国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7611",
              "stationName": "青菜头岛国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6818",
              "stationName": "隆林者浪那隆水库国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3070",
              "stationName": "七星铁山园国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6313",
              "stationName": "靖西果乐国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7622",
              "stationName": "灵山伯劳国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2115",
              "stationName": "融安大良国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2098",
              "stationName": "鱼峰里雍国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2116",
              "stationName": "柳城六塘国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2038",
              "stationName": "柳江穿山国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3117",
              "stationName": "永福永安乡永安村国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6879",
              "stationName": "田林八渡福达国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2087",
              "stationName": "鹿寨中渡国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2067",
              "stationName": "鹿寨四排国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2118",
              "stationName": "柳江流山国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3083",
              "stationName": "灵川大圩国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2655",
              "stationName": "象州运江国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2676",
              "stationName": "忻城大塘国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2783",
              "stationName": "三江丹洲板江国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3085",
              "stationName": "阳朔葡萄国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3016",
              "stationName": "荔浦马岭国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5004",
              "stationName": "桂平南木金龙国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5692",
              "stationName": "博白东平合江国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5712",
              "stationName": "博白龙潭国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5815",
              "stationName": "陆川清湖国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5722",
              "stationName": "博白江宁国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5665",
              "stationName": "陆川平乐东城水库国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5776",
              "stationName": "北流大坡分水水库国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5702",
              "stationName": "博白英桥国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6123",
              "stationName": "靖西龙邦国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7264",
              "stationName": "大新雷平国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7255",
              "stationName": "宁明城中花山民族山寨风景区国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7531",
              "stationName": "钦北贵台八寨沟景区国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5062",
              "stationName": "覃塘石卡国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5103",
              "stationName": "平南大鹏国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4622",
              "stationName": "昭平北陀黄莲林场国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4652",
              "stationName": "昭平富罗镇富罗村国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3141",
              "stationName": "全州黄沙河国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3048",
              "stationName": "平乐沙子国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3131",
              "stationName": "全州石塘国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7050",
              "stationName": "江州左州国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1280",
              "stationName": "兴宁五塘国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7631",
              "stationName": "钦北大直王岗国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7613",
              "stationName": "浦北六垠国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7640",
              "stationName": "钦南大番坡国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5132",
              "stationName": "覃塘山北三渌水库国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7070",
              "stationName": "江州板利派关水库国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2523",
              "stationName": "武宣东乡国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4880",
              "stationName": "平桂公会杨会国家气象观站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4890",
              "stationName": "八步大宁镇大宁村国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7650",
              "stationName": "钦南沙埠油埠国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1049",
              "stationName": "武鸣陆斡国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4233",
              "stationName": "三村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2148",
              "stationName": "柳江百朋镇百朋村国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5150",
              "stationName": "港南木梓武思江水库国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1219",
              "stationName": "武鸣锣圩英圩国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3052",
              "stationName": "临桂中庸国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7080",
              "stationName": "江州濑湍国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6152",
              "stationName": "平果四塘国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3158",
              "stationName": "恭城西岭国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1218",
              "stationName": "上林西燕大龙洞水库国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4306",
              "stationName": "藤县天平龙胜国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3028",
              "stationName": "恭城三江国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1047",
              "stationName": "横县飞龙国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7623",
              "stationName": "浦北石埇国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7163",
              "stationName": "扶绥柳桥国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2750",
              "stationName": "兴宾迁江国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1050",
              "stationName": "兴宁高峰林场国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7063",
              "stationName": "扶绥山圩国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N0057",
              "stationName": "金秀长垌乡长垌村国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1029",
              "stationName": "武鸣太平国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1039",
              "stationName": "武鸣甘圩赖坡国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1043",
              "stationName": "宾阳洋桥廖平国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5050",
              "stationName": "港南东津石江国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4671",
              "stationName": "富川麦岭财富塘国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4753",
              "stationName": "钟山同古塘尾国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5204",
              "stationName": "桂平麻垌荔枝种植示范园国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5224",
              "stationName": "桂平蒙圩玉柴光伏发电园国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5433",
              "stationName": "平南官成水库国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5501",
              "stationName": "野生稻",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5353",
              "stationName": "平南大安国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5031",
              "stationName": "港北大圩国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5041",
              "stationName": "港北根竹国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5100",
              "stationName": "港南桥圩蒙垌国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3057",
              "stationName": "永福三皇国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3172",
              "stationName": "临桂五通新寨水库国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3194",
              "stationName": "灌阳新街江口国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6434",
              "stationName": "田东林逢国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6537",
              "stationName": "乐业幼平国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6488",
              "stationName": "隆林介廷国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6498",
              "stationName": "隆林平班扁牙国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7610",
              "stationName": "大庙墩岛国家气象观测站",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N7234",
              "stationName": "大新恩城国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4104",
              "stationName": "苍梧狮寨国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4144",
              "stationName": "苍梧木双西中国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4150",
              "stationName": "富万村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3579",
              "stationName": "龙胜乐江国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4095",
              "stationName": "蒙山黄村镇黄村国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4106",
              "stationName": "藤县和平国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4123",
              "stationName": "三堡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4154",
              "stationName": "苍梧沙头龙科国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4160",
              "stationName": "周睦村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4166",
              "stationName": "藤县象棋国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7060",
              "stationName": "江州新和国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7083",
              "stationName": "扶绥渠黎国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7085",
              "stationName": "宁明海渊国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7087",
              "stationName": "龙州武德国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7090",
              "stationName": "江州驮卢国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7093",
              "stationName": "扶绥中东国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7094",
              "stationName": "大新宝圩国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7095",
              "stationName": "宁明桐棉国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7096",
              "stationName": "天等龙茗国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7097",
              "stationName": "龙州响水国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7103",
              "stationName": "扶绥岜盆弄廪国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7104",
              "stationName": "大新下雷国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7105",
              "stationName": "宁明亭亮国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7106",
              "stationName": "天等把荷国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7107",
              "stationName": "龙州八角国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7114",
              "stationName": "大新那岭国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7115",
              "stationName": "宁明爱店国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7116",
              "stationName": "天等宁干国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7117",
              "stationName": "龙州水口国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7124",
              "stationName": "大新昌明国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7127",
              "stationName": "龙州上金国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2106",
              "stationName": "柳城古砦国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2113",
              "stationName": "三江八江国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2117",
              "stationName": "鹿寨导江国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2123",
              "stationName": "三江高基国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2124",
              "stationName": "融水白云国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2133",
              "stationName": "三江独峒国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2134",
              "stationName": "融水杆洞国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2135",
              "stationName": "融安大将国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2136",
              "stationName": "柳城龙头伏虎华侨农场国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2138",
              "stationName": "柳江土博屯兵国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1235",
              "stationName": "马山林圩片圩国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1263",
              "stationName": "宾阳洋桥东黎国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1287",
              "stationName": "横县良圻国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6089",
              "stationName": "田林定安国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6092",
              "stationName": "平果旧城国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5816",
              "stationName": "北流民乐佛子湾水库国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5844",
              "stationName": "容县自良中平国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6068",
              "stationName": "西林八大河国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6073",
              "stationName": "靖西南坡国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6077",
              "stationName": "凌云伶站国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6079",
              "stationName": "田林旧州国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6178",
              "stationName": "西林足别国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6179",
              "stationName": "田林浪平国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6186",
              "stationName": "那坡百都国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6189",
              "stationName": "田林八桂弄瓦国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6193",
              "stationName": "靖西渠洋国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6109",
              "stationName": "田林潞城板桃国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5962",
              "stationName": "博白亚山镇温罗水库国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6031",
              "stationName": "田阳坡洪坡丹国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6066",
              "stationName": "那坡坡荷国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6070",
              "stationName": "右江龙川镇龙川村国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6078",
              "stationName": "西林那佐龙潭水库国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6080",
              "stationName": "右江汪甸国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6082",
              "stationName": "平果太平国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6084",
              "stationName": "田东思林国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6087",
              "stationName": "凌云逻楼国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5972",
              "stationName": "博白沙陂老虎头水库国家气象观测站",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N6041",
              "stationName": "田阳洞靖国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6051",
              "stationName": "田阳玉凤国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6056",
              "stationName": "那坡平孟国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6104",
              "stationName": "田东朔良国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6106",
              "stationName": "那坡百省国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6116",
              "stationName": "那坡百南国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6142",
              "stationName": "平果黎明国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6155",
              "stationName": "德保巴头国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5876",
              "stationName": "北流石窝华东国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6060",
              "stationName": "右江泮水和平国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6069",
              "stationName": "田林百乐根标国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3189",
              "stationName": "资源车田石寨国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3191",
              "stationName": "全州蕉江万板桥国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3201",
              "stationName": "全州绍水桂北农场国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3529",
              "stationName": "龙胜平等国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3534",
              "stationName": "兴安界首国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3549",
              "stationName": "龙胜伟江布弄国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3564",
              "stationName": "兴安崔家国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3568",
              "stationName": "平乐大发国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3569",
              "stationName": "龙胜三门大滩国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3608",
              "stationName": "平乐同安大理国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4036",
              "stationName": "藤县塘步国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4053",
              "stationName": "筋竹",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4063",
              "stationName": "安平",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5834",
              "stationName": "容县松山沙田国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6145",
              "stationName": "德保足荣国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7225",
              "stationName": "宁明峙浪长桥国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6095",
              "stationName": "德保燕峒国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2077",
              "stationName": "鹿寨寨沙龙江国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6567",
              "stationName": "乐业雅长国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7073",
              "stationName": "扶绥东罗国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3142",
              "stationName": "临桂宛田十二滩漂流风景区国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7088",
              "stationName": "凭祥夏石新鸣国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3164",
              "stationName": "清塘村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7702",
              "stationName": "灵山檀圩华山农场国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7752",
              "stationName": "灵山陆屋新光农场国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7852",
              "stationName": "灵山烟墩佳平国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7853",
              "stationName": "浦北福旺镇福旺村国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8049",
              "stationName": "都安菁盛国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8054",
              "stationName": "巴马所略国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8057",
              "stationName": "东兰三石国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8058",
              "stationName": "凤山三门海国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8061",
              "stationName": "宜州怀远国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8066",
              "stationName": "南丹里湖国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8067",
              "stationName": "东兰兰木国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8069",
              "stationName": "都安下坳国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8071",
              "stationName": "宜州龙头国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8072",
              "stationName": "环江长美国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8073",
              "stationName": "天峨纳直国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8074",
              "stationName": "巴马百林国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8077",
              "stationName": "东兰长江国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8078",
              "stationName": "凤山乔音国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8080",
              "stationName": "金城江九圩国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8081",
              "stationName": "宜州北山国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8082",
              "stationName": "环江驯乐国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8083",
              "stationName": "天峨向阳国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8085",
              "stationName": "罗城怀群卡马水库国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8086",
              "stationName": "南丹罗富国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8089",
              "stationName": "都安保安国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8090",
              "stationName": "金城江长老国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8092",
              "stationName": "环江东兴国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8093",
              "stationName": "天峨三堡国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8094",
              "stationName": "巴马凤凰国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8096",
              "stationName": "南丹八圩国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8099",
              "stationName": "都安九渡国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8100",
              "stationName": "金城江拔贡国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8102",
              "stationName": "环江洛阳华山林场国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8104",
              "stationName": "巴马燕洞国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8105",
              "stationName": "罗城宝坛国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8106",
              "stationName": "南丹芒场巴平国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8122",
              "stationName": "环江大安国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8161",
              "stationName": "宜州德胜国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8166",
              "stationName": "南丹中堡东井国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8186",
              "stationName": "南丹六寨弄撒国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8189",
              "stationName": "都安高岭国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8198",
              "stationName": "凤山平乐洪力国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8200",
              "stationName": "金城江五圩国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8208",
              "stationName": "凤山中亭国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8210",
              "stationName": "金城江东江国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8219",
              "stationName": "都安大兴国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8220",
              "stationName": "金城江白土德地国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8252",
              "stationName": "环江川山国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8257",
              "stationName": "东兰长乐镇长乐村国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8259",
              "stationName": "都安拉烈镇拉烈村国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8262",
              "stationName": "环江水源国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8267",
              "stationName": "东兰大同国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8273",
              "stationName": "天峨下老国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8295",
              "stationName": "罗城天河国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8316",
              "stationName": "南丹八圩砂厂国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8321",
              "stationName": "宜州洛西国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8393",
              "stationName": "天峨芭暮镇芭暮村国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8493",
              "stationName": "天峨坡结国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8629",
              "stationName": "大化古河国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8659",
              "stationName": "大化七百弄弄合国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8669",
              "stationName": "大化岩滩协合国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8849",
              "stationName": "大化贡川国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8899",
              "stationName": "大化北景国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8929",
              "stationName": "大化板升国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8939",
              "stationName": "大化都阳国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9040",
              "stationName": "铁山港营盘国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9100",
              "stationName": "铁山港石头埠国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9103",
              "stationName": "合浦西场国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9113",
              "stationName": "合浦常乐国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9130",
              "stationName": "银海福成国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9173",
              "stationName": "合浦石康易屋国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9183",
              "stationName": "合浦星岛湖洪潮江水库国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9193",
              "stationName": "合浦沙田国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9540",
              "stationName": "双墩岛国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9543",
              "stationName": "防城茅岭国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9553",
              "stationName": "防城垌中板典国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9564",
              "stationName": "东兴马路国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9575",
              "stationName": "上思平福岽僚国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9585",
              "stationName": "上思公正东屏国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9625",
              "stationName": "上思叫安那工国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9645",
              "stationName": "上思叫安国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9665",
              "stationName": "上思南屏国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9713",
              "stationName": "防城扶隆那其国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9723",
              "stationName": "防城华石黄江国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1065",
              "stationName": "马山金钗国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3106",
              "stationName": "荔浦蒲芦黎村国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3091",
              "stationName": "全州文桥连鱼头水库国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1275",
              "stationName": "马山古寨古寨国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6361",
              "stationName": "百育镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6287",
              "stationName": "腰马村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6283",
              "stationName": "标亮村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6288",
              "stationName": "皆马村",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N7541",
              "stationName": "平吉",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7642",
              "stationName": "武利",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7542",
              "stationName": "平南",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7550",
              "stationName": "犀牛脚",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7226",
              "stationName": "益山村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7227",
              "stationName": "锦阁村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7236",
              "stationName": "桃永村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2533",
              "stationName": "禄新",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2535",
              "stationName": "象州百丈气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2534",
              "stationName": "平竹村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4593",
              "stationName": "凤翔",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4591",
              "stationName": "白沙",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3093",
              "stationName": "海洋",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3098",
              "stationName": "三星桥村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3095",
              "stationName": "七仙峰茶场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6199",
              "stationName": "八桃村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6201",
              "stationName": "巴庙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6200",
              "stationName": "者仙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5530",
              "stationName": "立石村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5525",
              "stationName": "平乐",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5524",
              "stationName": "十里",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5522",
              "stationName": "新田",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6587",
              "stationName": "新场村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6569",
              "stationName": "新建村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3584",
              "stationName": "猫儿山1600",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3578",
              "stationName": "二塘",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1347",
              "stationName": "平恩村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2150",
              "stationName": "桂柳州城中区柳州高中",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2157",
              "stationName": "鹿寨幽兰村国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2156",
              "stationName": "新村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2155",
              "stationName": "桂柳州融安大将镇瓜洞村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2154",
              "stationName": "拱洞",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2153",
              "stationName": "程阳桥",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1058",
              "stationName": "白圩镇朝韦村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1060",
              "stationName": "新秀公园",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N4583",
              "stationName": "公安",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4541",
              "stationName": "福利",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4356",
              "stationName": "新芹村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4396",
              "stationName": "马地村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4436",
              "stationName": "山花水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4502",
              "stationName": "黄姚",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4511",
              "stationName": "新华",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4523",
              "stationName": "同古",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4530",
              "stationName": "里松",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4533",
              "stationName": "燕塘中学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4236",
              "stationName": "孔良村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4582",
              "stationName": "五将",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4346",
              "stationName": "都蒙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4386",
              "stationName": "新村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4426",
              "stationName": "沙村村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4476",
              "stationName": "那塘村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4501",
              "stationName": "鲁洞村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4510",
              "stationName": "步头",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4516",
              "stationName": "花洲村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4522",
              "stationName": "文竹",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4496",
              "stationName": "石桥村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4276",
              "stationName": "潭东村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4260",
              "stationName": "河口村",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N4506",
              "stationName": "新塘村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4536",
              "stationName": "夏垌村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4366",
              "stationName": "大村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4303",
              "stationName": "平田村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4540",
              "stationName": "沙田",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4336",
              "stationName": "兴义村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4376",
              "stationName": "和好村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4416",
              "stationName": "森塘村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4243",
              "stationName": "旺坡村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4253",
              "stationName": "泗滩村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4250",
              "stationName": "红山村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1068",
              "stationName": "万福村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1089",
              "stationName": "罗波",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1078",
              "stationName": "东敢水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1100",
              "stationName": "沙井",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N1110",
              "stationName": "大沙田",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N1120",
              "stationName": "那马",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1140",
              "stationName": "台马村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1150",
              "stationName": "良庆",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1160",
              "stationName": "大王滩水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1170",
              "stationName": "大塘",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1190",
              "stationName": "长塘",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1199",
              "stationName": "林渌村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1207",
              "stationName": "新福",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1073",
              "stationName": "王灵",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1063",
              "stationName": "和平村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1083",
              "stationName": "中华",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1105",
              "stationName": "里当",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1115",
              "stationName": "百龙滩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1125",
              "stationName": "林圩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1145",
              "stationName": "加雅村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1155",
              "stationName": "龙桂村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1165",
              "stationName": "太平村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4603",
              "stationName": "石龙",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1097",
              "stationName": "云表镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1107",
              "stationName": "校椅",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1345",
              "stationName": "金钗镇乐江社区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1075",
              "stationName": "六朝水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1059",
              "stationName": "锣圩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1088",
              "stationName": "南岩水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1099",
              "stationName": "东王村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1124",
              "stationName": "下琴水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1164",
              "stationName": "古信村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1064",
              "stationName": "定军村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1074",
              "stationName": "三乐村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1085",
              "stationName": "大朗水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1079",
              "stationName": "桂南宁武鸣两江镇英俊村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1114",
              "stationName": "那降水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1184",
              "stationName": "百朝社区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1135",
              "stationName": "双联",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1144",
              "stationName": "雁江镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1174",
              "stationName": "四联村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1193",
              "stationName": "太守",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1077",
              "stationName": "灵竹",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1067",
              "stationName": "陶圩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1106",
              "stationName": "英雄水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1117",
              "stationName": "莲塘",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1128",
              "stationName": "正浪村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1138",
              "stationName": "龙保村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1147",
              "stationName": "镇龙那歪林场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1157",
              "stationName": "南乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1167",
              "stationName": "石塘",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1069",
              "stationName": "桂南宁武鸣城厢镇平等村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1090",
              "stationName": "药用植物园",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N1103",
              "stationName": "桂南宁宾阳新桥镇民范村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1473",
              "stationName": "百合水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1204",
              "stationName": "英敏村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1066",
              "stationName": "中和乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1076",
              "stationName": "新江镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1108",
              "stationName": "乔贤",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1119",
              "stationName": "幕定水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1130",
              "stationName": "那邦村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1139",
              "stationName": "忠党水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2623",
              "stationName": "金岗村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5544",
              "stationName": "杨梅",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3598",
              "stationName": "平石村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1367",
              "stationName": "高祝村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6609",
              "stationName": "平布村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4601",
              "stationName": "朝东",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3103",
              "stationName": "潭下",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3108",
              "stationName": "峻山水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6648",
              "stationName": "大寨屯",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6687",
              "stationName": "甲龙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6748",
              "stationName": "母施村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6597",
              "stationName": "九洞村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7543",
              "stationName": "寨圩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7551",
              "stationName": "大直",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7560",
              "stationName": "那雾岭景区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7552",
              "stationName": "红坎村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7562",
              "stationName": "石塘",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7572",
              "stationName": "长安水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6294",
              "stationName": "那达村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6299",
              "stationName": "六丹村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6284",
              "stationName": "内油村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6291",
              "stationName": "新美村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6297",
              "stationName": "官仓村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6293",
              "stationName": "朋怀水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6298",
              "stationName": "平用村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6309",
              "stationName": "渭标村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6304",
              "stationName": "模范村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6324",
              "stationName": "民安村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4610",
              "stationName": "贺街",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4606",
              "stationName": "永隆村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4621",
              "stationName": "天堂岭林场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4620",
              "stationName": "鹅塘",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4632",
              "stationName": "庇江村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4651",
              "stationName": "白牛村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4690",
              "stationName": "公会",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4730",
              "stationName": "水晶塘电站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4750",
              "stationName": "六合村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4800",
              "stationName": "建新村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4850",
              "stationName": "盘谷水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4920",
              "stationName": "贺州气象站旧址",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4613",
              "stationName": "清塘",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4630",
              "stationName": "水口",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4643",
              "stationName": "塘委村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4662",
              "stationName": "马江",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4681",
              "stationName": "山宝村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4701",
              "stationName": "桐石村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4721",
              "stationName": "茶青村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3101",
              "stationName": "白宝",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3099",
              "stationName": "老山界林场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3110",
              "stationName": "七星国际",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3102",
              "stationName": "五通",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6290",
              "stationName": "百色火车站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6307",
              "stationName": "陇雅村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6301",
              "stationName": "百勇村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6308",
              "stationName": "垌硝村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6314",
              "stationName": "陇造村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5541",
              "stationName": "城均",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5554",
              "stationName": "自良",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5535",
              "stationName": "上旺村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5534",
              "stationName": "松山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5550",
              "stationName": "高垌水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5532",
              "stationName": "三滩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5545",
              "stationName": "平塘村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5561",
              "stationName": "中流村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5574",
              "stationName": "县底",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5533",
              "stationName": "平巷村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5546",
              "stationName": "民安",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5562",
              "stationName": "双凤",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5536",
              "stationName": "白马",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5542",
              "stationName": "双旺",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5555",
              "stationName": "沙坡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5571",
              "stationName": "忠荔村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5584",
              "stationName": "杨村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5543",
              "stationName": "小平山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5556",
              "stationName": "新圩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5572",
              "stationName": "顿谷",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7235",
              "stationName": "洞浪村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7254",
              "stationName": "上吉村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7256",
              "stationName": "永隆村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2158",
              "stationName": "新兴开发区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2170",
              "stationName": "桂柳州柳南区太阳村镇西鹅中学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2183",
              "stationName": "东风村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2194",
              "stationName": "三防镇洞马村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2206",
              "stationName": "二塘村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2165",
              "stationName": "桂柳州融安浮石镇",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N2176",
              "stationName": "八甲村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2188",
              "stationName": "桂柳州柳江里雍镇红花村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2203",
              "stationName": "沙宜村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2216",
              "stationName": "塘进村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2164",
              "stationName": "良寨",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2174",
              "stationName": "安陲乡乌吉村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2186",
              "stationName": "龙田村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2163",
              "stationName": "大塘水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1239",
              "stationName": "那化村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1269",
              "stationName": "双桥村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1277",
              "stationName": "北滩水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1313",
              "stationName": "芳雷村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1317",
              "stationName": "宝华村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1185",
              "stationName": "忠党村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1194",
              "stationName": "华侨管理区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1249",
              "stationName": "建丰村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1253",
              "stationName": "三军村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2553",
              "stationName": "麻碑村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2566",
              "stationName": "桂来宾忻城古蓬镇板梧村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2555",
              "stationName": "象州运江古平气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2586",
              "stationName": "桂来宾忻城遂意乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2544",
              "stationName": "银杉",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2575",
              "stationName": "象州中平气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2614",
              "stationName": "镇冲村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3010",
              "stationName": "阳光城",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3018",
              "stationName": "岛坪村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2557",
              "stationName": "里兰村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2540",
              "stationName": "寺山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2556",
              "stationName": "桂来宾忻城新圩乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2573",
              "stationName": "百崖大峡谷",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2547",
              "stationName": "瀑泉村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2564",
              "stationName": "三角",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2545",
              "stationName": "象州寺村气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2563",
              "stationName": "三里",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2550",
              "stationName": "草凌村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2565",
              "stationName": "象州大乐气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3020",
              "stationName": "四联村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2603",
              "stationName": "马良村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2636",
              "stationName": "桂来宾忻城思练镇里伴村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2546",
              "stationName": "桂来宾忻城果遂镇古抗村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2580",
              "stationName": "韦里村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2596",
              "stationName": "桂来宾忻城思练镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2616",
              "stationName": "桂来宾忻城北更乡弄兰村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2634",
              "stationName": "金田村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1357",
              "stationName": "簕竹村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1387",
              "stationName": "凤丹村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1420",
              "stationName": "天坪",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N1480",
              "stationName": "坛羌水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2013",
              "stationName": "斗江",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2023",
              "stationName": "八江镇马胖村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2033",
              "stationName": "高基乡篦梳村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2043",
              "stationName": "林溪",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1400",
              "stationName": "龙潭水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1440",
              "stationName": "那龙",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1370",
              "stationName": "江西",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1450",
              "stationName": "南湖公园",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2217",
              "stationName": "鹿寨江口乡江口林场国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2027",
              "stationName": "鹿寨寨沙国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2037",
              "stationName": "鹿寨平山国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1380",
              "stationName": "苏圩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1417",
              "stationName": "新仲村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1470",
              "stationName": "民族气象小区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2010",
              "stationName": "桂柳州城中区三门江林场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2020",
              "stationName": "桂柳州城中区雷达站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3599",
              "stationName": "马堤村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3614",
              "stationName": "腰鼓岭水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4013",
              "stationName": "城谏",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3628",
              "stationName": "双合村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4005",
              "stationName": "西河",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3604",
              "stationName": "五里峡水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3618",
              "stationName": "凉伞村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4003",
              "stationName": "波塘",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3638",
              "stationName": "源头镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2536",
              "stationName": "桂来宾忻城安东乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5023",
              "stationName": "谏岭村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4596",
              "stationName": "三合村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4611",
              "stationName": "石家水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4616",
              "stationName": "安宁村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5033",
              "stationName": "扶兰村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1327",
              "stationName": "天亮村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1330",
              "stationName": "峙村河",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1333",
              "stationName": "桃源林场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4631",
              "stationName": "长溪江村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4650",
              "stationName": "仁义",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4623",
              "stationName": "花山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4641",
              "stationName": "洋新村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4600",
              "stationName": "灵峰村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4660",
              "stationName": "西湾",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4626",
              "stationName": "岭景村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2583",
              "stationName": "思灵",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2656",
              "stationName": "桂来宾忻城遂意乡兰甲村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2654",
              "stationName": "平孟村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4642",
              "stationName": "富裕村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2200",
              "stationName": "桂柳州阳和工业新区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6212",
              "stationName": "坡造镇绿德村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6220",
              "stationName": "六卜村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6207",
              "stationName": "九民水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6214",
              "stationName": "百林村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6222",
              "stationName": "甘河村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6230",
              "stationName": "练乡村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6217",
              "stationName": "祥福村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6202",
              "stationName": "海明林场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6210",
              "stationName": "柳羊村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6203",
              "stationName": "武平",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6211",
              "stationName": "上镇村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6219",
              "stationName": "那收村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6227",
              "stationName": "滥村村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6233",
              "stationName": "旧州村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1175",
              "stationName": "民乐村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1225",
              "stationName": "乐圩村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1337",
              "stationName": "黄艾村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1283",
              "stationName": "八德村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1247",
              "stationName": "六蓝水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1243",
              "stationName": "那茶村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1293",
              "stationName": "大仙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1300",
              "stationName": "义梅水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1320",
              "stationName": "天雹水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1323",
              "stationName": "青山村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1224",
              "stationName": "同乐村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1229",
              "stationName": "贵德村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1237",
              "stationName": "云表水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1178",
              "stationName": "东春村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3012",
              "stationName": "宛田",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1168",
              "stationName": "高顶村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1179",
              "stationName": "上江",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1158",
              "stationName": "下金村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1129",
              "stationName": "桂南宁武鸣府城镇文泉村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1148",
              "stationName": "覃排社区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1215",
              "stationName": "大龙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1109",
              "stationName": "灵马",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1153",
              "stationName": "洋桥",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2063",
              "stationName": "洋溪乡波里村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2214",
              "stationName": "三防镇拉川村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3036",
              "stationName": "修仁中学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3019",
              "stationName": "车田",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2700",
              "stationName": "岭头村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2625",
              "stationName": "象州妙皇大梭气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2644",
              "stationName": "六段村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2720",
              "stationName": "龙头村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3003",
              "stationName": "青狮潭水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3015",
              "stationName": "新村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3067",
              "stationName": "百寿",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2630",
              "stationName": "平阳",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2650",
              "stationName": "那谷村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2670",
              "stationName": "来宾职业技术学院",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3069",
              "stationName": "下金",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2613",
              "stationName": "大琳村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2590",
              "stationName": "中山村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2626",
              "stationName": "桂来宾忻城城关镇加仁村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2645",
              "stationName": "象州寺村上山气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2730",
              "stationName": "大龙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2633",
              "stationName": "马步村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2595",
              "stationName": "象州石龙气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2615",
              "stationName": "象州运江岩村气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2690",
              "stationName": "清潭水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3068",
              "stationName": "玄武村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3074",
              "stationName": "新街",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3077",
              "stationName": "凤凰村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3080",
              "stationName": "柘木",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2570",
              "stationName": "北五村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3043",
              "stationName": "灵田",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7503",
              "stationName": "北通",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7501",
              "stationName": "长滩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7511",
              "stationName": "大垌",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7244",
              "stationName": "振兴村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6331",
              "stationName": "新楼村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6339",
              "stationName": "百华村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6348",
              "stationName": "周约村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6319",
              "stationName": "八来村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6328",
              "stationName": "峨沙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6337",
              "stationName": "彩架村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6321",
              "stationName": "活旺村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6311",
              "stationName": "扁村村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6318",
              "stationName": "龙滩村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6327",
              "stationName": "双达村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4016",
              "stationName": "濛江镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4026",
              "stationName": "大黎",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4043",
              "stationName": "大隆",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4054",
              "stationName": "都梅村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4074",
              "stationName": "京南",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4084",
              "stationName": "六堡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4094",
              "stationName": "石桥",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N4100",
              "stationName": "城东",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4105",
              "stationName": "古定村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4114",
              "stationName": "赛塘水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4120",
              "stationName": "倒水",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4006",
              "stationName": "石表山风景区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4020",
              "stationName": "富和社区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4033",
              "stationName": "昙容",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4055",
              "stationName": "陈塘",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4014",
              "stationName": "大坡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4035",
              "stationName": "新圩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4050",
              "stationName": "平浪村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4060",
              "stationName": "中医院",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4070",
              "stationName": "西环社区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4034",
              "stationName": "木双",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4056",
              "stationName": "琅南",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4046",
              "stationName": "金鸡镇四中",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7580",
              "stationName": "钦州港",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7590",
              "stationName": "久隆",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7582",
              "stationName": "沙坪",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7592",
              "stationName": "烟墩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7561",
              "stationName": "榃忠村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7563",
              "stationName": "安石",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4456",
              "stationName": "太平狮山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4406",
              "stationName": "蝴蝶谷风景区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4446",
              "stationName": "镇安村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4486",
              "stationName": "黄垌水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4503",
              "stationName": "望高镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4512",
              "stationName": "砂子村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4466",
              "stationName": "大壬水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4500",
              "stationName": "信都",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4543",
              "stationName": "两安",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4546",
              "stationName": "南安村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4556",
              "stationName": "同敏水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4560",
              "stationName": "大宁",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4562",
              "stationName": "西坪村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4571",
              "stationName": "城北",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4573",
              "stationName": "回龙",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4580",
              "stationName": "里宁村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4526",
              "stationName": "黎田村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4531",
              "stationName": "麦岭",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4542",
              "stationName": "北陀",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4553",
              "stationName": "田冲水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4561",
              "stationName": "古城",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4563",
              "stationName": "羊头",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5600",
              "stationName": "佛子山水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5590",
              "stationName": "分界村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5552",
              "stationName": "菱角",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5565",
              "stationName": "沙湖",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6110",
              "stationName": "林河村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6112",
              "stationName": "旧城镇绿宏村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5570",
              "stationName": "车垌村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5583",
              "stationName": "龙安",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5553",
              "stationName": "旺翻村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5566",
              "stationName": "清水口",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5582",
              "stationName": "旺茂",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5595",
              "stationName": "大桥",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5560",
              "stationName": "陂耀村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5573",
              "stationName": "龙江小学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5586",
              "stationName": "新丰",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5601",
              "stationName": "六万山林场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5612",
              "stationName": "沙陂",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5626",
              "stationName": "民乐",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5643",
              "stationName": "卖酒二中",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5663",
              "stationName": "博爱村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5683",
              "stationName": "大同村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6113",
              "stationName": "化峒",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6121",
              "stationName": "坤平",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6124",
              "stationName": "那蒙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5564",
              "stationName": "石寨",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5580",
              "stationName": "云良村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5593",
              "stationName": "仁厚",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5605",
              "stationName": "珊罗",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5622",
              "stationName": "凤山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5635",
              "stationName": "乌石",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5654",
              "stationName": "满垌村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5575",
              "stationName": "四和村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5591",
              "stationName": "田横村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5603",
              "stationName": "洛阳",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5620",
              "stationName": "仁东村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5563",
              "stationName": "马村小学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5576",
              "stationName": "六麻",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5592",
              "stationName": "松旺",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5604",
              "stationName": "容西",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5621",
              "stationName": "大水村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5674",
              "stationName": "大水村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1377",
              "stationName": "汗桥村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1410",
              "stationName": "观日山庄",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N1460",
              "stationName": "那念水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2006",
              "stationName": "桂柳州柳城六塘镇黄冲村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2018",
              "stationName": "鱼峰白沙镇白沙社区气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1390",
              "stationName": "延安",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1427",
              "stationName": "芦村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1490",
              "stationName": "马安水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2014",
              "stationName": "安太",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2034",
              "stationName": "四荣",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2054",
              "stationName": "汪洞新合村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2016",
              "stationName": "桂柳州柳城寨隆镇龙旦水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2026",
              "stationName": "柳州市柳城县大埔镇洛崖知青城",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2036",
              "stationName": "桂柳州柳城保门水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2065",
              "stationName": "桂柳州融安桥板乡翘板村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2074",
              "stationName": "永乐镇荣山村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1430",
              "stationName": "灯笼花苑",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N2015",
              "stationName": "桂柳州融安沙子乡沙子村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2035",
              "stationName": "桂柳州融安浮石镇东江村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2025",
              "stationName": "桂柳州融安大坡乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2045",
              "stationName": "桂柳州融安潭头乡潭头村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2055",
              "stationName": "桂柳州融安大将镇三马村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2030",
              "stationName": "桂柳州柳南区市交通学校",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2040",
              "stationName": "桂柳州鱼峰区市职业技术学院",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6111",
              "stationName": "百敢村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4720",
              "stationName": "草寺村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4673",
              "stationName": "凤岭村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4693",
              "stationName": "鱼塞村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4733",
              "stationName": "龙井村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4760",
              "stationName": "大同村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4820",
              "stationName": "清池村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4870",
              "stationName": "狮洞水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4663",
              "stationName": "竹梅村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4723",
              "stationName": "新凤村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5054",
              "stationName": "大湾",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6727",
              "stationName": "百乐村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6629",
              "stationName": "门屯村",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N6668",
              "stationName": "德峨镇常么村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6729",
              "stationName": "央郎村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6779",
              "stationName": "站保村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6617",
              "stationName": "上岗水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6649",
              "stationName": "太阳村",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N6688",
              "stationName": "蒙里村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6717",
              "stationName": "逻瓦村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6618",
              "stationName": "猪场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6657",
              "stationName": "南干村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6689",
              "stationName": "三瑶村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6718",
              "stationName": "民德村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6589",
              "stationName": "凡屯村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6627",
              "stationName": "山洲水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6659",
              "stationName": "老六隆村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6698",
              "stationName": "者艾村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6599",
              "stationName": "老山林场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6637",
              "stationName": "百中村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6677",
              "stationName": "乐翁村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6707",
              "stationName": "百安村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6788",
              "stationName": "么窝村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6708",
              "stationName": "隆林国家应用气象观测站（农业）",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6678",
              "stationName": "龙滩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6799",
              "stationName": "那腊村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6869",
              "stationName": "粉屯村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7136",
              "stationName": "降祥村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7137",
              "stationName": "勤江村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7140",
              "stationName": "濑湍镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7143",
              "stationName": "那江村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7144",
              "stationName": "三合村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7145",
              "stationName": "那敏村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6658",
              "stationName": "金钟山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6697",
              "stationName": "民享村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6719",
              "stationName": "平宜村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6768",
              "stationName": "民怀村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6628",
              "stationName": "蛇场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6667",
              "stationName": "陇那村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6701",
              "stationName": "平班村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6728",
              "stationName": "林场村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6228",
              "stationName": "赵家堡村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6234",
              "stationName": "游昌村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6248",
              "stationName": "高维村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6255",
              "stationName": "城关镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6205",
              "stationName": "马牌村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6221",
              "stationName": "新民村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6229",
              "stationName": "那囊村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6235",
              "stationName": "仁和村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6249",
              "stationName": "标屯村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6218",
              "stationName": "平安村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6225",
              "stationName": "三合村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6237",
              "stationName": "板里水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6243",
              "stationName": "岜蒙水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6250",
              "stationName": "平塘村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6258",
              "stationName": "皿帖村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6208",
              "stationName": "普合乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6215",
              "stationName": "和平村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6223",
              "stationName": "桂百色靖西湖润镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6231",
              "stationName": "宝美村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6238",
              "stationName": "者革村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6244",
              "stationName": "宝达村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6251",
              "stationName": "康华村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6259",
              "stationName": "那读村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6267",
              "stationName": "坡脚水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6271",
              "stationName": "弄朗村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6278",
              "stationName": "那佐村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6213",
              "stationName": "魁圩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4513",
              "stationName": "红花",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4256",
              "stationName": "莫泗村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4246",
              "stationName": "赤水村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4263",
              "stationName": "思回村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4283",
              "stationName": "义水村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4240",
              "stationName": "老义村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4273",
              "stationName": "河六村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4313",
              "stationName": "扶南村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4551",
              "stationName": "柳家",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4293",
              "stationName": "马芹村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4550",
              "stationName": "开山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4552",
              "stationName": "岩头村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4270",
              "stationName": "扶典村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4566",
              "stationName": "坡头村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4570",
              "stationName": "莲塘",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4286",
              "stationName": "平山村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4576",
              "stationName": "户安村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4572",
              "stationName": "平恩村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4266",
              "stationName": "平桂村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3113",
              "stationName": "公平",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3116",
              "stationName": "大塘",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3122",
              "stationName": "黄沙",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3114",
              "stationName": "水车水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3118",
              "stationName": "兰洞水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3111",
              "stationName": "永岁",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3120",
              "stationName": "老人山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3112",
              "stationName": "大江水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3121",
              "stationName": "才湾",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2624",
              "stationName": "莲花山风景区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5624",
              "stationName": "浪水",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7146",
              "stationName": "伏慢村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6334",
              "stationName": "那荷村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6341",
              "stationName": "亮往村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6338",
              "stationName": "那岩村",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N2230",
              "stationName": "桂柳州柳东新区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2256",
              "stationName": "旗山村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2266",
              "stationName": "凉水山林场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2196",
              "stationName": "上雷街",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2210",
              "stationName": "桂柳州鱼峰区第22中学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2226",
              "stationName": "下寨村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1203",
              "stationName": "双桥",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1209",
              "stationName": "桂南宁武鸣马头镇小陆村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1260",
              "stationName": "西云江水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1310",
              "stationName": "石埠",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1230",
              "stationName": "伶俐",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1188",
              "stationName": "西燕镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1198",
              "stationName": "佛子村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1205",
              "stationName": "里民村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1159",
              "stationName": "天马",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1169",
              "stationName": "玉泉",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1180",
              "stationName": "南阳",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1259",
              "stationName": "聚群村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1080",
              "stationName": "那洪",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N1093",
              "stationName": "露圩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1104",
              "stationName": "布泉乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1163",
              "stationName": "六佑水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1173",
              "stationName": "河田",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1183",
              "stationName": "高田",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1187",
              "stationName": "马山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1195",
              "stationName": "上龙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1210",
              "stationName": "会展中心",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6394",
              "stationName": "三陇村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6404",
              "stationName": "摩天岭村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6409",
              "stationName": "新寨村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6384",
              "stationName": "江那村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6398",
              "stationName": "龙保村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6344",
              "stationName": "符桃村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6347",
              "stationName": "八里村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6354",
              "stationName": "世木村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6358",
              "stationName": "泥洞村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6367",
              "stationName": "下谋村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6374",
              "stationName": "新建村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6351",
              "stationName": "那驮村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6359",
              "stationName": "那雄村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6368",
              "stationName": "央达村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6377",
              "stationName": "平林水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6357",
              "stationName": "连灯村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2306",
              "stationName": "桂柳州柳城大埔镇吉兆水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7147",
              "stationName": "四清村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7150",
              "stationName": "卜驮村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7153",
              "stationName": "岜楼村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7154",
              "stationName": "德立村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7156",
              "stationName": "江岸村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6838",
              "stationName": "长发村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2316",
              "stationName": "米村村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3156",
              "stationName": "蒲芦乡政府广场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3134",
              "stationName": "洞井",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3140",
              "stationName": "琴潭乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3145",
              "stationName": "高田卫生院",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3149",
              "stationName": "十里平坦风景区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4134",
              "stationName": "交村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4140",
              "stationName": "夏郢",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4145",
              "stationName": "六洛村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4153",
              "stationName": "天星村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4080",
              "stationName": "白云社区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4090",
              "stationName": "云龙社区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4096",
              "stationName": "新庆",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4085",
              "stationName": "汉豪",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4066",
              "stationName": "古龙",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4086",
              "stationName": "同心",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6232",
              "stationName": "榜圩镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6239",
              "stationName": "龙歪村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6245",
              "stationName": "东凌镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6253",
              "stationName": "金色村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6240",
              "stationName": "百练村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6247",
              "stationName": "那伏村",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N6254",
              "stationName": "六羊村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6260",
              "stationName": "六沙园艺场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6257",
              "stationName": "阁楼村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6263",
              "stationName": "坡豆村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6269",
              "stationName": "合塘村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6274",
              "stationName": "保群村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6261",
              "stationName": "百谷村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6268",
              "stationName": "那务村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6273",
              "stationName": "大农村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6279",
              "stationName": "者赖村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6264",
              "stationName": "兰芳村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6270",
              "stationName": "福禄村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6277",
              "stationName": "上蒙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6280",
              "stationName": "那扪村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4125",
              "stationName": "陈塘村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5581",
              "stationName": "宁冲村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5594",
              "stationName": "罗江",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5606",
              "stationName": "扶新",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5636",
              "stationName": "大坡外",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5655",
              "stationName": "月垌",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5675",
              "stationName": "三安村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5695",
              "stationName": "靖东村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2286",
              "stationName": "冲脉村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2513",
              "stationName": "石祥河水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2515",
              "stationName": "象州马坪古路气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2516",
              "stationName": "桂来宾忻城欧洞乡板毛水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2517",
              "stationName": "河里",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2520",
              "stationName": "二沟水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2740",
              "stationName": "高龙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2666",
              "stationName": "桂来宾忻城欧洞乡里苗村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6607",
              "stationName": "六为水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5596",
              "stationName": "石窝",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5611",
              "stationName": "旺久村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5640",
              "stationName": "名山镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5656",
              "stationName": "沙垌",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5630",
              "stationName": "大塘村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5653",
              "stationName": "山奇村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5645",
              "stationName": "马坡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5694",
              "stationName": "思旺村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5714",
              "stationName": "木井村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6127",
              "stationName": "东和",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6129",
              "stationName": "八渡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5602",
              "stationName": "文地",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5616",
              "stationName": "塘岸",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5632",
              "stationName": "沙河",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5646",
              "stationName": "大伦",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2166",
              "stationName": "碑田村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2178",
              "stationName": "华桥农场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2193",
              "stationName": "牛浪波林场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2220",
              "stationName": "桂柳州鱼峰区柳石收费站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2236",
              "stationName": "古砦街",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2276",
              "stationName": "柳城华侨农场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2326",
              "stationName": "岭头村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6828",
              "stationName": "河马村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6958",
              "stationName": "九龙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7014",
              "stationName": "龙门",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7155",
              "stationName": "海渊华侨农场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7157",
              "stationName": "俸村村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1265",
              "stationName": "苏博工业园",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3022",
              "stationName": "会仙",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6758",
              "stationName": "岩场村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6819",
              "stationName": "平吉村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6888",
              "stationName": "隆或镇打兰村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6798",
              "stationName": "播立村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6738",
              "stationName": "委乐村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6749",
              "stationName": "百榄村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1189",
              "stationName": "苏供村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6868",
              "stationName": "平利村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6878",
              "stationName": "隆或镇八峰村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6858",
              "stationName": "母施村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6928",
              "stationName": "马窑村",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N7005",
              "stationName": "自卫村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6859",
              "stationName": "百隆村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6938",
              "stationName": "岩怀村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7010",
              "stationName": "那隆镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7025",
              "stationName": "城中镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6778",
              "stationName": "龙良村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6848",
              "stationName": "委尧村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6918",
              "stationName": "龙台村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7004",
              "stationName": "榄圩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6808",
              "stationName": "者床村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6968",
              "stationName": "那绍村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7015",
              "stationName": "叫隘村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6898",
              "stationName": "冷独村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6998",
              "stationName": "德峨镇新街村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7017",
              "stationName": "上降",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7023",
              "stationName": "岜盆乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4780",
              "stationName": "桂山水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4743",
              "stationName": "三叉村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5644",
              "stationName": "石剑村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3153",
              "stationName": "思安江水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7553",
              "stationName": "万垌村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3160",
              "stationName": "大风山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2064",
              "stationName": "同练",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2075",
              "stationName": "桂柳州融安东起乡崖脚村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2056",
              "stationName": "马山镇北浩村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2046",
              "stationName": "龙头",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2066",
              "stationName": "桂柳州柳城沙埔镇红马山景区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2085",
              "stationName": "融安泗顶国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2084",
              "stationName": "和睦镇和睦村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2108",
              "stationName": "洛满镇龙怀水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2093",
              "stationName": "程村乡泗里村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2120",
              "stationName": "桂柳州柳南区太阳村镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2105",
              "stationName": "融安板榄国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2028",
              "stationName": "成团村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2048",
              "stationName": "洛满社区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2058",
              "stationName": "土博镇五合村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2068",
              "stationName": "进德社区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3104",
              "stationName": "桃花村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3123",
              "stationName": "新寨村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3128",
              "stationName": "黄坪村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3133",
              "stationName": "上力村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3139",
              "stationName": "河口",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3144",
              "stationName": "仁合村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2073",
              "stationName": "良口",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7026",
              "stationName": "东平",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2090",
              "stationName": "桂柳州柳南区铁二中学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2083",
              "stationName": "老堡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3130",
              "stationName": "东华路",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2114",
              "stationName": "红水乡良友村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2080",
              "stationName": "桂柳州柳北区沙塘镇上垌村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2097",
              "stationName": "桂柳州柳东新区雒容镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2076",
              "stationName": "桂柳州柳城社冲社乡无忧村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2047",
              "stationName": "鹿寨黄冕国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2057",
              "stationName": "鹿寨拉沟国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2078",
              "stationName": "成团镇鲁比村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2070",
              "stationName": "桂柳州城中区楼梯山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2060",
              "stationName": "桂柳州柳北区钢一中学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2088",
              "stationName": "三都社区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2103",
              "stationName": "梅林乡石碑村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2127",
              "stationName": "鹿寨大阳村国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2125",
              "stationName": "融安雅瑶国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2663",
              "stationName": "桐岭镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2643",
              "stationName": "伏柳村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3014",
              "stationName": "大溶江",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3040",
              "stationName": "大河村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3044",
              "stationName": "猫儿山2000m",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3013",
              "stationName": "大境",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3089",
              "stationName": "两水",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3087",
              "stationName": "龙溪村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2635",
              "stationName": "象州罗秀土办气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2653",
              "stationName": "二塘镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3073",
              "stationName": "定江",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3076",
              "stationName": "茶城",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3082",
              "stationName": "保宁",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3041",
              "stationName": "两河村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3032",
              "stationName": "两江",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3049",
              "stationName": "温泉景区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3045",
              "stationName": "安定村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3025",
              "stationName": "西山村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3035",
              "stationName": "十万山村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3072",
              "stationName": "四塘",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3075",
              "stationName": "杨堤",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3078",
              "stationName": "水宾村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3007",
              "stationName": "堡里村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3023",
              "stationName": "九屋镇石洞村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3029",
              "stationName": "梅溪",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2584",
              "stationName": "大樟",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3038",
              "stationName": "莲花",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3163",
              "stationName": "垌坡村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3135",
              "stationName": "矮山村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2130",
              "stationName": "桂柳州柳北石碑坪镇大仙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2104",
              "stationName": "大浪镇潘里村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2107",
              "stationName": "鹿寨龙母水库国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7018",
              "stationName": "浦寨",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6908",
              "stationName": "卡白村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7003",
              "stationName": "东门镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7030",
              "stationName": "罗白乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6117",
              "stationName": "力洪",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3166",
              "stationName": "青山乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5746",
              "stationName": "坡心村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5772",
              "stationName": "大光村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5794",
              "stationName": "长寿村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5673",
              "stationName": "阳村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5713",
              "stationName": "金党村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5732",
              "stationName": "径口",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5693",
              "stationName": "升平村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5726",
              "stationName": "大容山800",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5745",
              "stationName": "良塘村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5652",
              "stationName": "宁潭",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5672",
              "stationName": "黄凌",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5733",
              "stationName": "长华村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5752",
              "stationName": "亚山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5914",
              "stationName": "横山村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5795",
              "stationName": "陆坡村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5842",
              "stationName": "六江村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6132",
              "stationName": "凤梧镇山环村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6135",
              "stationName": "都安乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6138",
              "stationName": "顶蚌村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6141",
              "stationName": "桥业",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5736",
              "stationName": "大容山600",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5703",
              "stationName": "新荣水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5685",
              "stationName": "良厚村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5705",
              "stationName": "永安村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5755",
              "stationName": "坡脚村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5676",
              "stationName": "新荣",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5696",
              "stationName": "林垌村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5716",
              "stationName": "隆盛",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5682",
              "stationName": "水鸣",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5625",
              "stationName": "古城",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5642",
              "stationName": "永安",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5662",
              "stationName": "浪平",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5684",
              "stationName": "平车村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5704",
              "stationName": "塘冲村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5664",
              "stationName": "陈村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6120",
              "stationName": "平三林场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3081",
              "stationName": "龙水",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5735",
              "stationName": "平山村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7500",
              "stationName": "屯安村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7246",
              "stationName": "伏德村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7530",
              "stationName": "东场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7532",
              "stationName": "丰塘",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7533",
              "stationName": "平睦",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7513",
              "stationName": "官垌",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7522",
              "stationName": "平山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7523",
              "stationName": "三合",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4840",
              "stationName": "玉石林风景区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5102",
              "stationName": "东龙",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5122",
              "stationName": "石卡凤思村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4790",
              "stationName": "联盟村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5014",
              "stationName": "中沙",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5024",
              "stationName": "西山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5034",
              "stationName": "厚禄",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5044",
              "stationName": "皮塘水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4770",
              "stationName": "滑水冲自然保护区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4633",
              "stationName": "新龙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7028",
              "stationName": "夏石",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3051",
              "stationName": "界顶村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3146",
              "stationName": "东昌",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3126",
              "stationName": "杜莫镇六部村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3136",
              "stationName": "花篢",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2576",
              "stationName": "桂来宾忻城北更乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7016",
              "stationName": "政洲村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7024",
              "stationName": "小明山林场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6948",
              "stationName": "弄昔村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6978",
              "stationName": "小河村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7038",
              "stationName": "上石",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7047",
              "stationName": "水窿农业示范园区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7020",
              "stationName": "渠显村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7033",
              "stationName": "龙头乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7043",
              "stationName": "昌平乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7058",
              "stationName": "英阳村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6608",
              "stationName": "克长",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7027",
              "stationName": "峡岗村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7037",
              "stationName": "彬桥",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7036",
              "stationName": "驮堪",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7571",
              "stationName": "青塘",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7633",
              "stationName": "龙城社区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7632",
              "stationName": "那隆",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7621",
              "stationName": "新棠镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7056",
              "stationName": "乐龙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7034",
              "stationName": "维新村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7066",
              "stationName": "福新",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6647",
              "stationName": "磨里村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5011",
              "stationName": "平天山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5113",
              "stationName": "马练",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5123",
              "stationName": "思旺",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4910",
              "stationName": "灵峰镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5012",
              "stationName": "中塘水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5010",
              "stationName": "瓦塘茶山水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5022",
              "stationName": "甘道水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5131",
              "stationName": "根竹",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5021",
              "stationName": "中里凉水山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7040",
              "stationName": "渠邦村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7048",
              "stationName": "板旺村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7057",
              "stationName": "金龙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7065",
              "stationName": "峙浪",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7075",
              "stationName": "东安",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7077",
              "stationName": "逐卜",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2524",
              "stationName": "桐木",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2525",
              "stationName": "象州大乐小巴除气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2504",
              "stationName": "三江",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2505",
              "stationName": "象州水晶气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2510",
              "stationName": "兴仁村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2168",
              "stationName": "露塘糖厂",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2180",
              "stationName": "阳和新区古亭山气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2503",
              "stationName": "通挽",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2246",
              "stationName": "桂柳州柳城寨隆镇黄垌村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2296",
              "stationName": "大要村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2500",
              "stationName": "石陵",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4640",
              "stationName": "大平",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4653",
              "stationName": "西乐村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4830",
              "stationName": "全乐村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5723",
              "stationName": "红江水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5766",
              "stationName": "香塘村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5724",
              "stationName": "古兆村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5743",
              "stationName": "铁联水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5764",
              "stationName": "康塘村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5785",
              "stationName": "冯杏村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5806",
              "stationName": "龙门水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3125",
              "stationName": "钟家村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3017",
              "stationName": "兴隆村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4581",
              "stationName": "莲山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6281",
              "stationName": "古美村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1343",
              "stationName": "六蒙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3092",
              "stationName": "渡头",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3539",
              "stationName": "花坪",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6188",
              "stationName": "板桥村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7215",
              "stationName": "安阳村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2530",
              "stationName": "石牙",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7540",
              "stationName": "龙门港",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6568",
              "stationName": "革步",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1057",
              "stationName": "平马",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5032",
              "stationName": "五里",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5020",
              "stationName": "防洪管理处",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5141",
              "stationName": "奇石",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5142",
              "stationName": "樟木振南",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5161",
              "stationName": "庆丰凤凰水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5151",
              "stationName": "武乐",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5173",
              "stationName": "东华",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1214",
              "stationName": "龙虎山风景区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1208",
              "stationName": "长联村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3079",
              "stationName": "白水村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3053",
              "stationName": "芦田水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5802",
              "stationName": "芳屋村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5822",
              "stationName": "凌清村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3088",
              "stationName": "栗木",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6144",
              "stationName": "永隆村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6146",
              "stationName": "惠布村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6149",
              "stationName": "洞弄",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6153",
              "stationName": "大道",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6154",
              "stationName": "东养村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7046",
              "stationName": "上映",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7055",
              "stationName": "寨安",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6156",
              "stationName": "清华村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5902",
              "stationName": "新茂村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5936",
              "stationName": "大罗垌村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5866",
              "stationName": "大坡村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1340",
              "stationName": "老虎岭水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3152",
              "stationName": "东宅水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3154",
              "stationName": "海洋山顶",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6224",
              "stationName": "梅宁村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1228",
              "stationName": "塘红乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1223",
              "stationName": "那周村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1227",
              "stationName": "青年水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4323",
              "stationName": "南垌村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4326",
              "stationName": "彩唐村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5854",
              "stationName": "容州镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5832",
              "stationName": "大塘村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5756",
              "stationName": "长塘村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4586",
              "stationName": "留利村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3024",
              "stationName": "漠川",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2640",
              "stationName": "桥巩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3054",
              "stationName": "上桂峡水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3042",
              "stationName": "六塘",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7064",
              "stationName": "其山村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1234",
              "stationName": "小林社区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4590",
              "stationName": "铺门",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3046",
              "stationName": "双江",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7084",
              "stationName": "五兆村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7086",
              "stationName": "都康",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7160",
              "stationName": "岜那村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7573",
              "stationName": "白石水",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6364",
              "stationName": "朔晚村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7502",
              "stationName": "陆屋",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7510",
              "stationName": "康熙岭",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7583",
              "stationName": "泉水",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5666",
              "stationName": "清湾",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5686",
              "stationName": "西琅",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5706",
              "stationName": "六靖",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1044",
              "stationName": "龙念村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1048",
              "stationName": "澄泰",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1054",
              "stationName": "乔联村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1053",
              "stationName": "古辣",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1055",
              "stationName": "加让村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1056",
              "stationName": "镇龙",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1045",
              "stationName": "加善村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1046",
              "stationName": "汉林村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N0001",
              "stationName": "板坝村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7068",
              "stationName": "三联村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7164",
              "stationName": "营旺村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6988",
              "stationName": "德峨镇水井村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7643",
              "stationName": "张黄",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N0044",
              "stationName": "桂柳州柳北区沙塘镇京柳小学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N0053",
              "stationName": "马家村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N0055",
              "stationName": "长滩水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N0061",
              "stationName": "葛坡镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N0435",
              "stationName": "那路",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N0451",
              "stationName": "山围",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N0942",
              "stationName": "泗水",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N0958",
              "stationName": "农科所",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N0960",
              "stationName": "安和村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N0964",
              "stationName": "新卫村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1003",
              "stationName": "桂南宁宾阳邹圩镇长安村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1006",
              "stationName": "屯宁村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1009",
              "stationName": "里建",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1010",
              "stationName": "体育中心",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1013",
              "stationName": "思陇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1014",
              "stationName": "金鸡滩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1015",
              "stationName": "古零",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1016",
              "stationName": "坛西村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1017",
              "stationName": "六景",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1018",
              "stationName": "桂南宁上林乔贤镇绿浪村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1019",
              "stationName": "仙湖镇三冬村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1020",
              "stationName": "人民公园",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N1023",
              "stationName": "大桥",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1024",
              "stationName": "銮正村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1025",
              "stationName": "周鹿",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1026",
              "stationName": "那盆村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1027",
              "stationName": "峦城",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1028",
              "stationName": "明亮镇万古村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1030",
              "stationName": "高速公路管理处",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N1033",
              "stationName": "和吉镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1034",
              "stationName": "良一村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1035",
              "stationName": "乔利",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1036",
              "stationName": "新生村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1037",
              "stationName": "平朗",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1038",
              "stationName": "中可村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1040",
              "stationName": "青秀山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4156",
              "stationName": "天平",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4165",
              "stationName": "都坡村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4173",
              "stationName": "塘坪村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4180",
              "stationName": "正阳村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4186",
              "stationName": "罗平村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4190",
              "stationName": "长地村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4193",
              "stationName": "望里村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4196",
              "stationName": "新马村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4200",
              "stationName": "高才村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4203",
              "stationName": "社垌村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4206",
              "stationName": "新大村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4210",
              "stationName": "镇安村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4213",
              "stationName": "珊瑚坪水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4216",
              "stationName": "宁康乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4220",
              "stationName": "旺坡村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4223",
              "stationName": "兆阳村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5030",
              "stationName": "罗英塘水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5040",
              "stationName": "湛江双联",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5064",
              "stationName": "紫荆",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5104",
              "stationName": "石龙",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5114",
              "stationName": "罗秀",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5124",
              "stationName": "大洋",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5133",
              "stationName": "寺面",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5143",
              "stationName": "大洲",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4691",
              "stationName": "石林村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4711",
              "stationName": "油沐村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4731",
              "stationName": "松光脚水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4810",
              "stationName": "立头村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4860",
              "stationName": "金竹村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5112",
              "stationName": "蒙公",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5160",
              "stationName": "新塘岭蒙水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5164",
              "stationName": "油麻",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5183",
              "stationName": "思界",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5194",
              "stationName": "马皮",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5254",
              "stationName": "龙潭森林公园",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5314",
              "stationName": "木圭",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5333",
              "stationName": "白马村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5344",
              "stationName": "子孙水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5363",
              "stationName": "大成",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5403",
              "stationName": "官成",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5413",
              "stationName": "国安",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5423",
              "stationName": "朝新村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5443",
              "stationName": "武林镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5511",
              "stationName": "六龙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5513",
              "stationName": "葵阳",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5184",
              "stationName": "永华村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5200",
              "stationName": "木梓",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5213",
              "stationName": "平山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5234",
              "stationName": "白石水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5303",
              "stationName": "镇隆",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5323",
              "stationName": "富藏",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5334",
              "stationName": "寻旺",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5364",
              "stationName": "罗贤水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5404",
              "stationName": "金田",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5414",
              "stationName": "四清水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5424",
              "stationName": "社岭塘水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5434",
              "stationName": "鱼乍水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5453",
              "stationName": "大平村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5510",
              "stationName": "谷山村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5512",
              "stationName": "那林",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5514",
              "stationName": "当中村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5515",
              "stationName": "新官村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5516",
              "stationName": "大容山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5520",
              "stationName": "南江防洪堤",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5052",
              "stationName": "大岭乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5110",
              "stationName": "瓦塘思怀",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5120",
              "stationName": "甘塘水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5130",
              "stationName": "八塘",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5140",
              "stationName": "木格",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5144",
              "stationName": "木乐",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5154",
              "stationName": "江口",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5163",
              "stationName": "大坡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5174",
              "stationName": "白沙镇良美村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5193",
              "stationName": "上渡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5202",
              "stationName": "樟木",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5214",
              "stationName": "石咀",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5244",
              "stationName": "社坡镇西安村",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N5304",
              "stationName": "罗播",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5324",
              "stationName": "垌心",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2554",
              "stationName": "圣堂山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2585",
              "stationName": "象州寺村横桥气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2605",
              "stationName": "象州马坪丰收气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2710",
              "stationName": "全来村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3021",
              "stationName": "绍水",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3030",
              "stationName": "朝阳",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3055",
              "stationName": "留公村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3059",
              "stationName": "瓢里",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3060",
              "stationName": "大埠",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3061",
              "stationName": "庙头",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3062",
              "stationName": "茶洞",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3064",
              "stationName": "西山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3065",
              "stationName": "镇绛村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3066",
              "stationName": "金雷村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3155",
              "stationName": "福利镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3159",
              "stationName": "大坨村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3162",
              "stationName": "腊村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3165",
              "stationName": "普益乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3168",
              "stationName": "龙虎乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3170",
              "stationName": "磨盘山码头",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3174",
              "stationName": "文明村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3176",
              "stationName": "新坪车电村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3179",
              "stationName": "天门村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3181",
              "stationName": "枧塘",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3186",
              "stationName": "杜莫镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3190",
              "stationName": "曙光所",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3200",
              "stationName": "巾山路",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3204",
              "stationName": "新圩村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3211",
              "stationName": "五福水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3230",
              "stationName": "宁远小学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3250",
              "stationName": "龙门村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3270",
              "stationName": "十一中",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6408",
              "stationName": "央革村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6414",
              "stationName": "陇穷村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6419",
              "stationName": "弄南村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6428",
              "stationName": "坝林村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6439",
              "stationName": "平满村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6448",
              "stationName": "木呈村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6454",
              "stationName": "祥周镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6459",
              "stationName": "平林村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6469",
              "stationName": "板坚村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6479",
              "stationName": "徕州村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6489",
              "stationName": "南合村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6499",
              "stationName": "西华村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6517",
              "stationName": "汉吉村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6527",
              "stationName": "花坪",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6539",
              "stationName": "香维村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6548",
              "stationName": "者保",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6557",
              "stationName": "武称",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6559",
              "stationName": "启文村立屯",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6317",
              "stationName": "品村村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6418",
              "stationName": "那哈村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6424",
              "stationName": "江城镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6429",
              "stationName": "央牙牧场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6438",
              "stationName": "坝弄村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6444",
              "stationName": "作登乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6449",
              "stationName": "广龙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6458",
              "stationName": "坡皿村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6468",
              "stationName": "周邦村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6478",
              "stationName": "古障镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6508",
              "stationName": "新立村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6518",
              "stationName": "沙梨",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6528",
              "stationName": "水洞村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6538",
              "stationName": "牛场村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6547",
              "stationName": "马庄",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6549",
              "stationName": "风老村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6558",
              "stationName": "桠杈",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7601",
              "stationName": "小董",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6378",
              "stationName": "妈篙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6388",
              "stationName": "西舍村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6371",
              "stationName": "那满镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7521",
              "stationName": "大路村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4113",
              "stationName": "糯垌",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4116",
              "stationName": "平福",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4124",
              "stationName": "殿村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4136",
              "stationName": "东荣",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4155",
              "stationName": "六夏村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4163",
              "stationName": "塘坡村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4280",
              "stationName": "龙平村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4176",
              "stationName": "交口村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4103",
              "stationName": "南渡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4115",
              "stationName": "平原村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4130",
              "stationName": "旺甫",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4135",
              "stationName": "青州村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4143",
              "stationName": "赤水村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4146",
              "stationName": "藤州",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6577",
              "stationName": "谐里屯",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7035",
              "stationName": "北江",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7045",
              "stationName": "明江",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7053",
              "stationName": "渠旧镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7067",
              "stationName": "联江村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7074",
              "stationName": "全茗",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7076",
              "stationName": "小山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7078",
              "stationName": "白龙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7100",
              "stationName": "太平街道办",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7110",
              "stationName": "湘桂糖厂",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7113",
              "stationName": "中华村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7134",
              "stationName": "上湖村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7120",
              "stationName": "那印村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7123",
              "stationName": "坛龙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7125",
              "stationName": "那党村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7126",
              "stationName": "进结",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7130",
              "stationName": "林村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7133",
              "stationName": "渠那村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7135",
              "stationName": "板烂村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7165",
              "stationName": "峙书村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7166",
              "stationName": "救汉村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7167",
              "stationName": "新联村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7170",
              "stationName": "那忙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7174",
              "stationName": "新民村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7175",
              "stationName": "东什村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7176",
              "stationName": "茴利村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7177",
              "stationName": "谷阳村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7180",
              "stationName": "中心小学第一分校",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7184",
              "stationName": "巴兰村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7185",
              "stationName": "百合村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7186",
              "stationName": "天南村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7187",
              "stationName": "敢赛村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7194",
              "stationName": "三湖村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7195",
              "stationName": "峙利村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7196",
              "stationName": "品力村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7197",
              "stationName": "武德村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7204",
              "stationName": "德天村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7205",
              "stationName": "宁明华侨农场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7206",
              "stationName": "种典村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7207",
              "stationName": "两庄村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7214",
              "stationName": "谨汤村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7216",
              "stationName": "南岭村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7217",
              "stationName": "武权村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7224",
              "stationName": "板价村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1353",
              "stationName": "欧阳村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2086",
              "stationName": "东泉",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2100",
              "stationName": "桂柳州柳北区小村小学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2095",
              "stationName": "桂柳州融安长安镇泗维河水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2126",
              "stationName": "三界村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2128",
              "stationName": "里高镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2137",
              "stationName": "鹿寨塘步村国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2140",
              "stationName": "桂柳州城中区广西科技大学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2144",
              "stationName": "大年乡林浪村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2145",
              "stationName": "桂柳州融安长安镇珠玉村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2146",
              "stationName": "西岸村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2147",
              "stationName": "鹿寨大村林场国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1233",
              "stationName": "名山村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1240",
              "stationName": "昆仑",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1245",
              "stationName": "妙圩村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1250",
              "stationName": "三塘",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1254",
              "stationName": "南圩镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1255",
              "stationName": "坛利村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1273",
              "stationName": "八凤村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1279",
              "stationName": "马头镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1290",
              "stationName": "金陵",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1297",
              "stationName": "站圩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1303",
              "stationName": "六合村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1307",
              "stationName": "那阳",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5526",
              "stationName": "平政",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5715",
              "stationName": "横山村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5734",
              "stationName": "石城村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5754",
              "stationName": "荣丰村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5775",
              "stationName": "石垌村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5796",
              "stationName": "那鞋村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5872",
              "stationName": "多浪林场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5942",
              "stationName": "西茅坪",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6001",
              "stationName": "东红村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6008",
              "stationName": "斗皇村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6014",
              "stationName": "新安村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6019",
              "stationName": "潞城",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6024",
              "stationName": "民族村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6029",
              "stationName": "平塘",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6034",
              "stationName": "联福村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6038",
              "stationName": "旺子",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6043",
              "stationName": "安宁",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6048",
              "stationName": "岩腊村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6053",
              "stationName": "岳圩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6059",
              "stationName": "者苗",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6064",
              "stationName": "六鲁村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6081",
              "stationName": "那坡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6083",
              "stationName": "同德",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6086",
              "stationName": "那隆",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5523",
              "stationName": "龙文小学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5792",
              "stationName": "镇北村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6067",
              "stationName": "沙里",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5814",
              "stationName": "东华村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5836",
              "stationName": "经龙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5862",
              "stationName": "那卜村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5896",
              "stationName": "岭垌村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5932",
              "stationName": "解放水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6000",
              "stationName": "龙和",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6072",
              "stationName": "凤梧",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6006",
              "stationName": "团结水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6013",
              "stationName": "地州",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6018",
              "stationName": "者浪",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6023",
              "stationName": "壬庄",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N6028",
              "stationName": "者黑村",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N6033",
              "stationName": "平江村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6037",
              "stationName": "逻西",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6042",
              "stationName": "新安镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6047",
              "stationName": "甘田",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6052",
              "stationName": "布见水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6058",
              "stationName": "者么村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6063",
              "stationName": "安德",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6158",
              "stationName": "老足别村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6160",
              "stationName": "伦楼村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6162",
              "stationName": "新安镇平果铝厂",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6164",
              "stationName": "那单村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6165",
              "stationName": "大年村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6167",
              "stationName": "平塘村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6168",
              "stationName": "央龙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6170",
              "stationName": "百背村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6172",
              "stationName": "南立村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6173",
              "stationName": "新甲",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6175",
              "stationName": "古寿村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6176",
              "stationName": "念井村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6180",
              "stationName": "那等村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6181",
              "stationName": "懂立村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6183",
              "stationName": "荣劳",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6185",
              "stationName": "钦甲村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6187",
              "stationName": "下伞村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6157",
              "stationName": "兰台村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6190",
              "stationName": "六核村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6191",
              "stationName": "朔柳村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6192",
              "stationName": "拥良村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6194",
              "stationName": "福星村",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N6195",
              "stationName": "马桥村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6196",
              "stationName": "那马水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6197",
              "stationName": "下甲乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6198",
              "stationName": "大河村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6115",
              "stationName": "大旺村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6105",
              "stationName": "朴圩村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6107",
              "stationName": "朝里",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5531",
              "stationName": "二中",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5742",
              "stationName": "大垌",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5762",
              "stationName": "大坝",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5784",
              "stationName": "登州村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5805",
              "stationName": "永平村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5826",
              "stationName": "端寨村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5852",
              "stationName": "文黎村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5882",
              "stationName": "珊瑚村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5916",
              "stationName": "南岸村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6003",
              "stationName": "古龙山风景区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6011",
              "stationName": "七联村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6016",
              "stationName": "百合",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6021",
              "stationName": "头塘",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6026",
              "stationName": "者欣村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6036",
              "stationName": "德隆",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6040",
              "stationName": "达江",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6045",
              "stationName": "巴头乡多作村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6050",
              "stationName": "巴平",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6055",
              "stationName": "旺洪村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6061",
              "stationName": "五村镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6075",
              "stationName": "扶平村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6103",
              "stationName": "三合",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6090",
              "stationName": "阳圩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6093",
              "stationName": "吞盘",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6096",
              "stationName": "下华",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6099",
              "stationName": "八桂",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6101",
              "stationName": "百峰",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5886",
              "stationName": "沙冲村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5922",
              "stationName": "久福村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6004",
              "stationName": "果柳村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6012",
              "stationName": "同老乡五柳村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6017",
              "stationName": "加尤",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6022",
              "stationName": "坡造龙马水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6027",
              "stationName": "皈里村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6032",
              "stationName": "海城乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6046",
              "stationName": "龙合",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6062",
              "stationName": "坡造镇内里村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6071",
              "stationName": "安宁村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6085",
              "stationName": "荣华乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6088",
              "stationName": "者车村",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N6091",
              "stationName": "琴华",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6094",
              "stationName": "义圩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6097",
              "stationName": "浩坤水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6100",
              "stationName": "发达村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6102",
              "stationName": "太平镇壮烈村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6108",
              "stationName": "那劳",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6119",
              "stationName": "平板村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6122",
              "stationName": "四塘镇金沙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6125",
              "stationName": "兴旺村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6130",
              "stationName": "汪乡村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6133",
              "stationName": "新圩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6136",
              "stationName": "那桑村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6139",
              "stationName": "平山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6184",
              "stationName": "平王村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6147",
              "stationName": "央里",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6150",
              "stationName": "乐益村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6159",
              "stationName": "高龙",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6161",
              "stationName": "永常村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6163",
              "stationName": "连境村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6166",
              "stationName": "北斗村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6169",
              "stationName": "龙车",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6171",
              "stationName": "三雷村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6174",
              "stationName": "那练村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6177",
              "stationName": "杂福村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6182",
              "stationName": "果化镇龙色村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5782",
              "stationName": "大田村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5804",
              "stationName": "六泉村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5824",
              "stationName": "古例村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5846",
              "stationName": "毓山村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5912",
              "stationName": "枫木村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5952",
              "stationName": "莫林村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6002",
              "stationName": "榜圩镇春德村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6010",
              "stationName": "伟阳村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6015",
              "stationName": "多模村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6020",
              "stationName": "浪塘水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6025",
              "stationName": "隆桑镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6030",
              "stationName": "东怀",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6035",
              "stationName": "龙光乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6039",
              "stationName": "上仁村",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N6044",
              "stationName": "桑洞村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6049",
              "stationName": "利周",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6054",
              "stationName": "坡塘",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6065",
              "stationName": "敬德镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6074",
              "stationName": "祷午",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3169",
              "stationName": "车田湾村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3171",
              "stationName": "凤凰",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3173",
              "stationName": "东江村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3175",
              "stationName": "白沙镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3178",
              "stationName": "平安乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3180",
              "stationName": "长海厂",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3184",
              "stationName": "罗家村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3199",
              "stationName": "凤水村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3210",
              "stationName": "七星中心校",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3220",
              "stationName": "飞凤小学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3240",
              "stationName": "十六中",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3260",
              "stationName": "职教中心",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3280",
              "stationName": "小水村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3518",
              "stationName": "旺塘村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3519",
              "stationName": "江口村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3524",
              "stationName": "猫儿山500m",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3528",
              "stationName": "雷峰村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3538",
              "stationName": "钓鱼村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3544",
              "stationName": "严关",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3548",
              "stationName": "长滩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3554",
              "stationName": "猫儿山1250",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3558",
              "stationName": "显堆村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3559",
              "stationName": "双洞村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3574",
              "stationName": "东界村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3589",
              "stationName": "和平村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3624",
              "stationName": "高尚镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4004",
              "stationName": "沙头",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4015",
              "stationName": "文圩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4025",
              "stationName": "黄村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4073",
              "stationName": "水汶",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4083",
              "stationName": "大业",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4093",
              "stationName": "归义",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5744",
              "stationName": "塘垌村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5765",
              "stationName": "黎洪村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5856",
              "stationName": "龙南村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5982",
              "stationName": "博白镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5812",
              "stationName": "四联村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5892",
              "stationName": "大观村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5786",
              "stationName": "六华村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5926",
              "stationName": "丹花村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5725",
              "stationName": "大连村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6137",
              "stationName": "玉洪",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6134",
              "stationName": "进化村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6126",
              "stationName": "龙华村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6143",
              "stationName": "龙临",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6151",
              "stationName": "百东河水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6131",
              "stationName": "惠洞水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6140",
              "stationName": "平布村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6128",
              "stationName": "弄汪",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6148",
              "stationName": "洞坚村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4133",
              "stationName": "福塘村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4175",
              "stationName": "瓦冲水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4183",
              "stationName": "古麻村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6076",
              "stationName": "定业",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2096",
              "stationName": "太平",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2094",
              "stationName": "杆洞乡高强村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7054",
              "stationName": "堪圩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3033",
              "stationName": "三街",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2526",
              "stationName": "桂来宾忻城大塘镇金山村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2514",
              "stationName": "头排",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2527",
              "stationName": "岭南镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5042",
              "stationName": "覃塘",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2507",
              "stationName": "北泗乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3084",
              "stationName": "灌阳文市清塘国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3037",
              "stationName": "永福罗锦镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7044",
              "stationName": "隘江村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5153",
              "stationName": "大新",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4230",
              "stationName": "儒岩村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4226",
              "stationName": "官罗村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3251",
              "stationName": "文桥村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7013",
              "stationName": "西长村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5521",
              "stationName": "罗田水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3050",
              "stationName": "莲花村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3047",
              "stationName": "广福村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3034",
              "stationName": "金石",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3056",
              "stationName": "新坪汉田村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3090",
              "stationName": "航专",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3011",
              "stationName": "大西江",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2680",
              "stationName": "小平阳",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5343",
              "stationName": "丹竹",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5354",
              "stationName": "中和",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3514",
              "stationName": "白石",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6098",
              "stationName": "马蚌",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3150",
              "stationName": "林科所",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3161",
              "stationName": "石枧水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7652",
              "stationName": "天顶山水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7653",
              "stationName": "古立村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7660",
              "stationName": "黄屋屯镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7662",
              "stationName": "升平村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7663",
              "stationName": "黄牛滩水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7672",
              "stationName": "急水村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7673",
              "stationName": "东叶景村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7682",
              "stationName": "牛皮鞑水",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7683",
              "stationName": "兰门村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7692",
              "stationName": "六峰村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7693",
              "stationName": "土东村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7703",
              "stationName": "大江口村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7712",
              "stationName": "充头村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7713",
              "stationName": "横岗村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7722",
              "stationName": "那垌村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7723",
              "stationName": "民生村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7732",
              "stationName": "石梯村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7733",
              "stationName": "龙头水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7742",
              "stationName": "烟霞山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7743",
              "stationName": "林村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7753",
              "stationName": "街口村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7762",
              "stationName": "大岭村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7763",
              "stationName": "五皇山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7772",
              "stationName": "镇南村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7773",
              "stationName": "马兰村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7782",
              "stationName": "大塘村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7783",
              "stationName": "六凤山水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7792",
              "stationName": "七里村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7793",
              "stationName": "平垌村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7802",
              "stationName": "大山塘水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7803",
              "stationName": "樟家村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7812",
              "stationName": "明山村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7813",
              "stationName": "竹根塘水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7822",
              "stationName": "邓阳水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7823",
              "stationName": "兰田村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7832",
              "stationName": "万利村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7833",
              "stationName": "五黄村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7842",
              "stationName": "文利镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7843",
              "stationName": "新丰村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8002",
              "stationName": "洛阳",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N8003",
              "stationName": "加里村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8004",
              "stationName": "那桃",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8006",
              "stationName": "月里",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8008",
              "stationName": "长州",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8010",
              "stationName": "五圩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8011",
              "stationName": "石别",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8012",
              "stationName": "塘万村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8013",
              "stationName": "拉增村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8014",
              "stationName": "东山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8015",
              "stationName": "下里社区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8016",
              "stationName": "车河",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8017",
              "stationName": "巴畴",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8018",
              "stationName": "平乐",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8019",
              "stationName": "都安永安乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8020",
              "stationName": "白土乡德荣社区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8021",
              "stationName": "榄树村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8022",
              "stationName": "下南",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8023",
              "stationName": "治安村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8024",
              "stationName": "那朝村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8025",
              "stationName": "大蒙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8026",
              "stationName": "中堡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8027",
              "stationName": "隘洞",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8028",
              "stationName": "砦牙",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8029",
              "stationName": "都安拉烈福言村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8030",
              "stationName": "六甲",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8031",
              "stationName": "安马",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8032",
              "stationName": "大才",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8033",
              "stationName": "羊里村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8034",
              "stationName": "燕洞镇洪晚村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8036",
              "stationName": "芒场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8037",
              "stationName": "江板水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8038",
              "stationName": "合运村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8039",
              "stationName": "都安高岭金竹村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8041",
              "stationName": "矮山社区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8042",
              "stationName": "龙岩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8043",
              "stationName": "芭暮",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8044",
              "stationName": "西山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8045",
              "stationName": "乔善乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8046",
              "stationName": "大厂镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8047",
              "stationName": "坡豪村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8048",
              "stationName": "凤平村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8050",
              "stationName": "六圩镇政府",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8051",
              "stationName": "北牙",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8052",
              "stationName": "明伦",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8053",
              "stationName": "五福村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8055",
              "stationName": "北安村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8056",
              "stationName": "吾隘",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8059",
              "stationName": "都安东庙乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8060",
              "stationName": "长排村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8062",
              "stationName": "塘房村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8063",
              "stationName": "更新",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8064",
              "stationName": "坡月村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8065",
              "stationName": "兼爱",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8068",
              "stationName": "金牙",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8070",
              "stationName": "保平",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8075",
              "stationName": "洞敏村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8076",
              "stationName": "莲花村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8079",
              "stationName": "都安百旺琳琅村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8084",
              "stationName": "那勤村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8087",
              "stationName": "武篆",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8088",
              "stationName": "凤山镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8091",
              "stationName": "洛东",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8095",
              "stationName": "龙岸镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8097",
              "stationName": "三弄",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8098",
              "stationName": "板均村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8101",
              "stationName": "福田村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8103",
              "stationName": "六排",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8107",
              "stationName": "泗孟",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8108",
              "stationName": "那乐村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8109",
              "stationName": "都安拉仁镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8110",
              "stationName": "白土",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8111",
              "stationName": "屏南",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8112",
              "stationName": "含香村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8113",
              "stationName": "新林村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8114",
              "stationName": "甲篆村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8115",
              "stationName": "小长安镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8116",
              "stationName": "山口林场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8117",
              "stationName": "花香",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8118",
              "stationName": "拉英村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8119",
              "stationName": "都安三只羊乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8120",
              "stationName": "三境村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8121",
              "stationName": "三岔",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8123",
              "stationName": "高楼山林场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8124",
              "stationName": "六能村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8126",
              "stationName": "拉堡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8127",
              "stationName": "金谷",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8128",
              "stationName": "久文村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8129",
              "stationName": "都安板岭带河村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8130",
              "stationName": "枫木村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8131",
              "stationName": "祥贝",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8132",
              "stationName": "福龙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8133",
              "stationName": "东瓦村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8134",
              "stationName": "坡腾村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8135",
              "stationName": "四把镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8136",
              "stationName": "龙腊",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8137",
              "stationName": "切亨村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8138",
              "stationName": "林佑村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8139",
              "stationName": "都安加贵乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8140",
              "stationName": "高功村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8141",
              "stationName": "福龙",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8142",
              "stationName": "上朝社区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8143",
              "stationName": "上景村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8144",
              "stationName": "弄峰村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8145",
              "stationName": "双蒙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8146",
              "stationName": "者麻村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8147",
              "stationName": "观测场旧址",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8148",
              "stationName": "下牙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8149",
              "stationName": "都安龙湾乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8150",
              "stationName": "北香村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8151",
              "stationName": "流河",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8152",
              "stationName": "永权村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8153",
              "stationName": "下景村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8154",
              "stationName": "立德村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8155",
              "stationName": "北源村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8156",
              "stationName": "四山村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8157",
              "stationName": "新烟村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8158",
              "stationName": "柏林村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8159",
              "stationName": "都安地苏镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8160",
              "stationName": "山脚村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8162",
              "stationName": "团结村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8163",
              "stationName": "那里村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8164",
              "stationName": "凤凰村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8165",
              "stationName": "牛毕村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8167",
              "stationName": "纳腊村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8168",
              "stationName": "平旺村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8169",
              "stationName": "都安大兴池花村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8170",
              "stationName": "三旺社区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8171",
              "stationName": "湖长村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8172",
              "stationName": "玉合村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8173",
              "stationName": "当里村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8174",
              "stationName": "那莫村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8175",
              "stationName": "坡甲水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8176",
              "stationName": "牙林村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8177",
              "stationName": "纳合村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8178",
              "stationName": "坡心村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8179",
              "stationName": "都安隆福乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8180",
              "stationName": "纳六村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8181",
              "stationName": "冬田村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8182",
              "stationName": "西南村",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N8183",
              "stationName": "百河村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8184",
              "stationName": "设长村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8185",
              "stationName": "白任村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8187",
              "stationName": "乐里村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8188",
              "stationName": "额里村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8190",
              "stationName": "旦洞村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8191",
              "stationName": "北屯村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8192",
              "stationName": "环界村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8193",
              "stationName": "纳碍村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8195",
              "stationName": "华张村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8196",
              "stationName": "才怀村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8197",
              "stationName": "达文村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8199",
              "stationName": "都安百旺龙燕水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8201",
              "stationName": "木寨村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8202",
              "stationName": "重楼村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8203",
              "stationName": "什里村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8205",
              "stationName": "寨道村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8206",
              "stationName": "波鸾村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8207",
              "stationName": "江洞村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8209",
              "stationName": "都安永安牙勇水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8211",
              "stationName": "二横村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8212",
              "stationName": "八面村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8213",
              "stationName": "老鹏村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8215",
              "stationName": "自求村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8216",
              "stationName": "蛮降村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8217",
              "stationName": "兰阳村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8218",
              "stationName": "江洲乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8221",
              "stationName": "龙头村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8222",
              "stationName": "社村村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8223",
              "stationName": "八腊乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8225",
              "stationName": "榕木村",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N8226",
              "stationName": "黄江村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8227",
              "stationName": "江平村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8229",
              "stationName": "都安下坳板旺村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8231",
              "stationName": "龙盘村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8232",
              "stationName": "何顿村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8233",
              "stationName": "牛场村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8235",
              "stationName": "三家村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8236",
              "stationName": "昌里村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8237",
              "stationName": "同乐村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8239",
              "stationName": "都安板岭永仁村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8241",
              "stationName": "怀道村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8242",
              "stationName": "同进村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8243",
              "stationName": "海州村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8245",
              "stationName": "双合村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8246",
              "stationName": "挽白村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8247",
              "stationName": "香河村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8249",
              "stationName": "都安永安永吉村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8251",
              "stationName": "众联村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8253",
              "stationName": "林列村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8255",
              "stationName": "四堡村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8256",
              "stationName": "恩村村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8261",
              "stationName": "祥北村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8263",
              "stationName": "当明村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8265",
              "stationName": "社甫村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8266",
              "stationName": "鸳鸯桥村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8269",
              "stationName": "都安保安平旺村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8271",
              "stationName": "坡榄村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8275",
              "stationName": "沙萍村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8276",
              "stationName": "塘仙水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8279",
              "stationName": "都安澄江古山村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8281",
              "stationName": "坪上村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8283",
              "stationName": "罗宜村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8285",
              "stationName": "板阳村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8286",
              "stationName": "贵江村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8289",
              "stationName": "都安澄江红渡村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8291",
              "stationName": "太平社区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8293",
              "stationName": "党隘林场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8296",
              "stationName": "纪沓村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8299",
              "stationName": "都安地苏镇三弄村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8301",
              "stationName": "下维村",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N8303",
              "stationName": "板龙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8306",
              "stationName": "董甲村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8309",
              "stationName": "都安地苏南江村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8311",
              "stationName": "富六村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8313",
              "stationName": "平腊村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8323",
              "stationName": "龙鱼村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8326",
              "stationName": "吧哈村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8333",
              "stationName": "纳州村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8336",
              "stationName": "八步村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8343",
              "stationName": "玉里村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8346",
              "stationName": "六寨镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8353",
              "stationName": "拉岩村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8363",
              "stationName": "龙凤村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8373",
              "stationName": "龙茶村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8383",
              "stationName": "纳关村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8403",
              "stationName": "大山林场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8413",
              "stationName": "索法村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8423",
              "stationName": "云榜村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8433",
              "stationName": "森里村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8443",
              "stationName": "龙安村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8453",
              "stationName": "龙滩水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8463",
              "stationName": "甲板村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8473",
              "stationName": "拉马村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8483",
              "stationName": "纳沙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8509",
              "stationName": "凤翔村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8519",
              "stationName": "六也",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8529",
              "stationName": "怀雄村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8539",
              "stationName": "满江村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8549",
              "stationName": "共和",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8559",
              "stationName": "江栋村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8569",
              "stationName": "健康村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8579",
              "stationName": "江南",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8589",
              "stationName": "乙圩",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8599",
              "stationName": "红柳村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8609",
              "stationName": "板烈村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8619",
              "stationName": "流水村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8639",
              "stationName": "镇西村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8649",
              "stationName": "古感村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8679",
              "stationName": "皮太水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8689",
              "stationName": "弄腾村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8699",
              "stationName": "达悟村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8709",
              "stationName": "敦肃村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8719",
              "stationName": "双福村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8729",
              "stationName": "德礼村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8739",
              "stationName": "春兴村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8749",
              "stationName": "棉山村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8759",
              "stationName": "华善村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8769",
              "stationName": "隆江村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8779",
              "stationName": "中良村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8789",
              "stationName": "古乔村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8799",
              "stationName": "百马村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8809",
              "stationName": "登排村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8819",
              "stationName": "四联村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8829",
              "stationName": "加司村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8839",
              "stationName": "吞依村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8859",
              "stationName": "坡马村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8869",
              "stationName": "带林村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8879",
              "stationName": "江洲村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8889",
              "stationName": "果好村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8909",
              "stationName": "汉达村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8919",
              "stationName": "三洞村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9000",
              "stationName": "竹林盐场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9003",
              "stationName": "星岛湖政府大院",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9010",
              "stationName": "驿马镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9013",
              "stationName": "山口政府大院",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9020",
              "stationName": "北暮盐场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9023",
              "stationName": "乌家新城街",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9030",
              "stationName": "兴港",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9033",
              "stationName": "石康政府大院",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9043",
              "stationName": "公馆政府大院",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9050",
              "stationName": "桂北海银海侨港镇文化公园",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9053",
              "stationName": "石湾政府大院",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9060",
              "stationName": "福成镇宁海村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9063",
              "stationName": "闸口西直大道",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9073",
              "stationName": "曲樟政府大院",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9083",
              "stationName": "七里村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9093",
              "stationName": "英罗",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9123",
              "stationName": "沙岗七星村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9133",
              "stationName": "党江亚桥村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9140",
              "stationName": "海滩公园",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9143",
              "stationName": "白沙政府大院",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9150",
              "stationName": "南康镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9153",
              "stationName": "山寮村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9163",
              "stationName": "党江中学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9203",
              "stationName": "牛栏冲村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9503",
              "stationName": "那勤村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9505",
              "stationName": "在妙",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9510",
              "stationName": "桂防城港港口光坡镇官山辽水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9513",
              "stationName": "桂防城港防城那良镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9514",
              "stationName": "城北社区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9515",
              "stationName": "桂防城港上思华兰镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9520",
              "stationName": "桂防城港港口企沙镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9523",
              "stationName": "桂防城港防城滩营乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9524",
              "stationName": "大桥村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9525",
              "stationName": "龙楼村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9530",
              "stationName": "桂防城港港口区公车小学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9533",
              "stationName": "桂防城港防城华石镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9534",
              "stationName": "黄竹村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9535",
              "stationName": "公正",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9544",
              "stationName": "交东村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9545",
              "stationName": "米强村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9555",
              "stationName": "桂防城港上思在妙镇联合村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9565",
              "stationName": "那当村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9573",
              "stationName": "江山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9574",
              "stationName": "江平镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9584",
              "stationName": "东兴气象站旧址",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9593",
              "stationName": "桂防城港防城大菉镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9595",
              "stationName": "桂防城港上思叫安镇凤凰山",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9603",
              "stationName": "田心村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9605",
              "stationName": "十万山公园",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9613",
              "stationName": "白龙",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9615",
              "stationName": "公安",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9623",
              "stationName": "十万山乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9633",
              "stationName": "南山895米",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9635",
              "stationName": "平福村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9643",
              "stationName": "那梭镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9653",
              "stationName": "桂防城港防城十万大山天马岭",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9655",
              "stationName": "那琴乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9663",
              "stationName": "桂防城港防城垌中镇板八村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9683",
              "stationName": "平旺村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9693",
              "stationName": "三曲水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9703",
              "stationName": "那垌村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9733",
              "stationName": "那昌水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8406",
              "stationName": "拉希水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8416",
              "stationName": "陋里村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1373",
              "stationName": "桂南宁宾阳古辣镇刘村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1274",
              "stationName": "那桐镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1200",
              "stationName": "广西大学农学院",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4353",
              "stationName": "岑溪旧址",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4185",
              "stationName": "蒙山旧址",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1264",
              "stationName": "新兴社区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9675",
              "stationName": "上思气象站旧址",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8272",
              "stationName": "环江气象站旧址",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7276",
              "stationName": "天等气象站旧址",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7173",
              "stationName": "扶绥气象站旧址",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8426",
              "stationName": "南丹旧址",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7670",
              "stationName": "钦州气象站站旧址",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7274",
              "stationName": "大新气象站旧址",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7098",
              "stationName": "凭祥气象站旧址",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1295",
              "stationName": "马山气象站旧址",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1520",
              "stationName": "城区站原址",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3196",
              "stationName": "修仁柘村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1530",
              "stationName": "桂南宁青秀区南宁大桥",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1550",
              "stationName": "桂南宁青秀区植物路",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N1540",
              "stationName": "桂南宁江南区那洪收费",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1560",
              "stationName": "桂南宁青秀区仙葫长福路",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1570",
              "stationName": "桂南宁青秀区民族广场",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N1580",
              "stationName": "桂南宁兴宁区狮山公园站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1610",
              "stationName": "桂南宁青秀区富宁立交站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1600",
              "stationName": "桂南宁江南区华南城站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1620",
              "stationName": "桂南宁青秀区火车东站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3648",
              "stationName": "新安街",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2686",
              "stationName": "隆光村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2696",
              "stationName": "木排村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2706",
              "stationName": "南闷村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8230",
              "stationName": "第三小学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8240",
              "stationName": "岜烈小学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1630",
              "stationName": "南宁市石门森林公园",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1640",
              "stationName": "南宁市凤岭儿童公园",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1650",
              "stationName": "南宁市邕江滨水公园",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N1700",
              "stationName": "南宁市五象岭森林公园",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1690",
              "stationName": "南宁市五象湖公园",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1660",
              "stationName": "南宁市青秀湖公园",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1670",
              "stationName": "南宁市埌东污水处理厂",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1680",
              "stationName": "南宁市十四中埌东校区",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N1710",
              "stationName": "南宁市兴宁区二塘互通",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1309",
              "stationName": "里建华侨中学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1319",
              "stationName": "宁武镇张朗村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1329",
              "stationName": "锣圩镇岜勋村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1339",
              "stationName": "罗波镇联新村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4930",
              "stationName": "龙山小学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4940",
              "stationName": "芳林学校",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8436",
              "stationName": "车河镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6889",
              "stationName": "田林县武装部弹药仓库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8949",
              "stationName": "雅龙乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8250",
              "stationName": "塘甫村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8319",
              "stationName": "都安地苏拉棠村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8204",
              "stationName": "巴纳村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8228",
              "stationName": "凤旁林场",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8282",
              "stationName": "才平村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8305",
              "stationName": "纳翁乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8331",
              "stationName": "宜州龙头乡金浪湾景区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8503",
              "stationName": "都隆村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8277",
              "stationName": "上圩村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8194",
              "stationName": "那敏村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8315",
              "stationName": "罗城气象站旧址",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1315",
              "stationName": "加方乡大陆村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1325",
              "stationName": "古零镇小都百",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1393",
              "stationName": "仙岩村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1403",
              "stationName": "双桥社区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1413",
              "stationName": "桂南宁宾阳新桥镇清平水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1248",
              "stationName": "明亮镇水利站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1258",
              "stationName": "白圩镇南华糖厂",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7190",
              "stationName": "崇左观测站旧址",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9590",
              "stationName": "桂防城港港口光坡镇中间坪村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1590",
              "stationName": "花卉公园",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N1900",
              "stationName": "移动自动站",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N1299",
              "stationName": "那打水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1284",
              "stationName": "乔建镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1294",
              "stationName": "丁当镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2400",
              "stationName": "桂柳州移动气象站",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N1238",
              "stationName": "云桃村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9999",
              "stationName": "装备移动站",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N3900",
              "stationName": "桂林移动站",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N1335",
              "stationName": "马周村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6714",
              "stationName": "气象站旧址",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6252",
              "stationName": "气象站旧址",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2900",
              "stationName": "来宾移动",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N7680",
              "stationName": "钦州农校",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7641",
              "stationName": "大寺镇养老院",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1304",
              "stationName": "古潭乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7690",
              "stationName": "那丽中学",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N9190",
              "stationName": "桂北海市海城区高德镇沙脚村委",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9213",
              "stationName": "乌家利添",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9243",
              "stationName": "闸口政府",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9263",
              "stationName": "公馆铁山炮竹厂",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9253",
              "stationName": "曲樟中学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8513",
              "stationName": "燕来村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7882",
              "stationName": "白木水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8214",
              "stationName": "那社乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9233",
              "stationName": "丰门岭",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8329",
              "stationName": "都安板岭乡板岭村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5152",
              "stationName": "桂玉林博白沙河镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5992",
              "stationName": "桂玉林博白菱角镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8339",
              "stationName": "都安百旺镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1443",
              "stationName": "桂南宁宾阳中华镇大庄村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1453",
              "stationName": "桂南宁宾阳大桥镇六龙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1463",
              "stationName": "桂南宁宾阳和吉镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9210",
              "stationName": "桂北海市银海平阳镇横路山村委",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1487",
              "stationName": "桂南宁横县莲塘中学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5242",
              "stationName": "桂玉林博白新田镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1447",
              "stationName": "陶圩镇六秀村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1457",
              "stationName": "平朗乡双窑生态旅游区玫瑰园",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1467",
              "stationName": "桂南宁横县马山乡克安村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1477",
              "stationName": "平马镇荷叶江村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9200",
              "stationName": "桂北海市银海侨港镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9223",
              "stationName": "沙岗村委",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7872",
              "stationName": "驲面水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7862",
              "stationName": "新胜塘水库",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N7892",
              "stationName": "六角塘水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9273",
              "stationName": "白沙新村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8969",
              "stationName": "古文乡政府",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8959",
              "stationName": "羌圩中学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2167",
              "stationName": "鹿寨县平山镇石龙村国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8325",
              "stationName": "黄金镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6275",
              "stationName": "那甲镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8351",
              "stationName": "拉托村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8260",
              "stationName": "河池镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6265",
              "stationName": "雅里村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6323",
              "stationName": "百色靖西市龙临镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8287",
              "stationName": "切学乡派出所",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7700",
              "stationName": "钦州港水厂",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8292",
              "stationName": "桂河池环江县下南乡南川水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5835",
              "stationName": "滩面镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5753",
              "stationName": "桂玉林兴业卖酒镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2187",
              "stationName": "鹿寨县拉沟乡拉沟村国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2177",
              "stationName": "鹿寨县黄冕镇波寨村国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7108",
              "stationName": "榴利村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7118",
              "stationName": "浦门村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7128",
              "stationName": "丰乐村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7138",
              "stationName": "夏桐村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7148",
              "stationName": "弄怀四方岭",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8302",
              "stationName": "桂河池环江县龙岩乡安良村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7284",
              "stationName": "硕龙",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7304",
              "stationName": "福隆乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1113",
              "stationName": "桂南宁宾阳古辣镇稔竹村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5865",
              "stationName": "横山镇",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N7286",
              "stationName": "向都",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7296",
              "stationName": "进远",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7237",
              "stationName": "下冻小学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7247",
              "stationName": "上龙乡幼儿园",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2218",
              "stationName": "洛满镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2198",
              "stationName": "三都镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2208",
              "stationName": "成团镇北弓水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1409",
              "stationName": "灵马镇中心学校",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5875",
              "stationName": "车田村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9685",
              "stationName": "有生村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5845",
              "stationName": "陆透水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5966",
              "stationName": "六行村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5855",
              "stationName": "王沙水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2248",
              "stationName": "鱼峰白沙气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2258",
              "stationName": "进德镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2675",
              "stationName": "象州妙皇中心校气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3658",
              "stationName": "中华村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7294",
              "stationName": "五山乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7183",
              "stationName": "东门林场苗圃园",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4783",
              "stationName": "桂贺州钟山县公安镇变电站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7315",
              "stationName": "钦加村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7265",
              "stationName": "板棍乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7275",
              "stationName": "那堪镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2017",
              "stationName": "鹿寨江口国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3182",
              "stationName": "临桂气象站旧址",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N3241",
              "stationName": "两河镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3231",
              "stationName": "安和镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5793",
              "stationName": "山心镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3206",
              "stationName": "龙怀乡政府",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3216",
              "stationName": "蒲芦乡万福村2",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N9695",
              "stationName": "那岩村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1429",
              "stationName": "甘圩镇唐历村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7200",
              "stationName": "罗白乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6391",
              "stationName": "田阳气象站旧址",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2356",
              "stationName": "桂柳州柳城寨隆镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2346",
              "stationName": "桂柳州柳城凤山镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2366",
              "stationName": "桂柳州柳城马山镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2376",
              "stationName": "桂柳州柳城社冲乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6343",
              "stationName": "桂百色靖西气象站旧址",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5220",
              "stationName": "湛江四季花田",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1423",
              "stationName": "桂南宁宾阳黎塘镇永安东社区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2685",
              "stationName": "象州罗秀敬老院气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5483",
              "stationName": "思界官塘村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2314",
              "stationName": "四荣乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4950",
              "stationName": "新燕村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4970",
              "stationName": "农科所",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5763",
              "stationName": "沙塘镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N3654",
              "stationName": "三桂",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5894",
              "stationName": "白鹤堂景区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5884",
              "stationName": "龟河水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5774",
              "stationName": "踏田村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4164",
              "stationName": "六堡镇八集山庄",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5773",
              "stationName": "高峰",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5783",
              "stationName": "大平山镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5803",
              "stationName": "北市镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5641",
              "stationName": "新桥二中",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5651",
              "stationName": "石和镇养老院",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1433",
              "stationName": "桂南宁宾阳气象站旧址",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8341",
              "stationName": "同德乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5493",
              "stationName": "思旺镇双上村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4960",
              "stationName": "敬老院",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2716",
              "stationName": "桂来宾红渡镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2726",
              "stationName": "桂来宾马泗乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2736",
              "stationName": "桂来宾果遂镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2694",
              "stationName": "青山村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4646",
              "stationName": "安和村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5976",
              "stationName": "六洋水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7295",
              "stationName": "宁明县气象站旧址",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1365",
              "stationName": "高德村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4656",
              "stationName": "金鸡镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5210",
              "stationName": "新塘万福",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1497",
              "stationName": "那阳镇上茶村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1517",
              "stationName": "南乡镇板路中学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5212",
              "stationName": "平龙水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1278",
              "stationName": "桂南宁上林木山乡政府",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5813",
              "stationName": "安怀镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2243",
              "stationName": "三江县程村乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1507",
              "stationName": "桂南宁横县峦城镇峦城收费站管理区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5222",
              "stationName": "三里镇一中",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4773",
              "stationName": "龙窝村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2253",
              "stationName": "良口乡和里村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2233",
              "stationName": "斗江镇东坪村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5232",
              "stationName": "黄练一中",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4682",
              "stationName": "木格",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5191",
              "stationName": "中里牛角",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5473",
              "stationName": "马练水晏村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5171",
              "stationName": "港城龙井",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2270",
              "stationName": "桂柳州柳南太阳村镇新圩村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2260",
              "stationName": "桂柳州柳东新区洛埠镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2240",
              "stationName": "桂柳州柳北石碑坪镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2250",
              "stationName": "桂柳州柳北长塘镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7883",
              "stationName": "旧州村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4751",
              "stationName": "小中屯",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4761",
              "stationName": "毛家渡口",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4771",
              "stationName": "花桥村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7863",
              "stationName": "北通镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7873",
              "stationName": "龙门镇",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N7893",
              "stationName": "十字村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7903",
              "stationName": "垌心村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2673",
              "stationName": "思灵镇思劳村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2693",
              "stationName": "东乡镇邓寺村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6320",
              "stationName": "永乐镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6310",
              "stationName": "大楞乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5262",
              "stationName": "桂玉林博白顿谷镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5172",
              "stationName": "桂玉林博白大坝镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5282",
              "stationName": "桂玉林博白文地镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4672",
              "stationName": "仙回",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5230",
              "stationName": "瓦塘香江",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5956",
              "stationName": "山心水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4692",
              "stationName": "凤凰",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5946",
              "stationName": "大郡村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8456",
              "stationName": "纳塘村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8446",
              "stationName": "拉纳村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8466",
              "stationName": "朝房村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8238",
              "stationName": "砦牙中学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5252",
              "stationName": "桂玉林博白大垌镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5192",
              "stationName": "桂玉林博白双凤镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5002",
              "stationName": "桂玉林博白那林镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5182",
              "stationName": "桂玉林博白水鸣镇新和村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5162",
              "stationName": "桂玉林博白凤山镇立石村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5272",
              "stationName": "桂玉林博白宁潭镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6353",
              "stationName": "桂百色靖西南坡乡逢鸡村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5474",
              "stationName": "碧滩村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5833",
              "stationName": "东华相资村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5503",
              "stationName": "武林新联村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5463",
              "stationName": "国安甘雅村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5823",
              "stationName": "镇隆马旦村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6909",
              "stationName": "丰防村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6919",
              "stationName": "潞城那帮村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6929",
              "stationName": "百乐乡三帮村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4636",
              "stationName": "气象站旧址",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5494",
              "stationName": "布新水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5484",
              "stationName": "白沙镇思建村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5464",
              "stationName": "石龙镇福平村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5874",
              "stationName": "木乐镇罗贤水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5504",
              "stationName": "社坡河水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5904",
              "stationName": "古长村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4793",
              "stationName": "钟山气象站旧址",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2303",
              "stationName": "桂柳州三江和平乡和平村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5302",
              "stationName": "亚山四维村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5181",
              "stationName": "奇石乡古龙村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2283",
              "stationName": "桂柳州三江林溪镇冠洞村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1268",
              "stationName": "桂南宁上林县澄泰一中",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2263",
              "stationName": "梅林乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2273",
              "stationName": "洋溪乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2293",
              "stationName": "老堡乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4712",
              "stationName": "赖村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4722",
              "stationName": "炭冲村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4980",
              "stationName": "平桂高中",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4383",
              "stationName": "都目电站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4363",
              "stationName": "榕树水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1527",
              "stationName": "横县气象局大院",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5974",
              "stationName": "上湾村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5964",
              "stationName": "蒙圩镇新建",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5954",
              "stationName": "麻垌镇南乔村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2384",
              "stationName": "同练乡和平村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2374",
              "stationName": "四荣乡东田村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2364",
              "stationName": "安太乡小桑村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2324",
              "stationName": "大浪镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5825",
              "stationName": "米场镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2820",
              "stationName": "正龙乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2780",
              "stationName": "陶邓乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2800",
              "stationName": "三五镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2830",
              "stationName": "南泗乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2790",
              "stationName": "七洞乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2810",
              "stationName": "五山乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2840",
              "stationName": "兴宾区工业园区管委会",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2850",
              "stationName": "兴宾区司法局",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1116",
              "stationName": "蒲庙镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1419",
              "stationName": "武鸣气象站旧址",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2215",
              "stationName": "桂柳州融安潭头乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2225",
              "stationName": "桂柳州融安沙子乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2235",
              "stationName": "桂柳州融安桥板乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2195",
              "stationName": "桂柳州融安大坡福上村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2185",
              "stationName": "桂柳州融安东起乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2175",
              "stationName": "桂柳州融安长安镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2766",
              "stationName": "桃源小学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2304",
              "stationName": "安陲乡江门村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2274",
              "stationName": "大年乡中学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2294",
              "stationName": "红水乡黄乃村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2354",
              "stationName": "滚贝乡小学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5996",
              "stationName": "上垌村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5650",
              "stationName": "双头村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5660",
              "stationName": "横埌村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5670",
              "stationName": "覃敏水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7912",
              "stationName": "桐油塘水库",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N7922",
              "stationName": "升安村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2344",
              "stationName": "汪洞乡腾合村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6262",
              "stationName": "同老乡",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N6272",
              "stationName": "坡造镇",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N2313",
              "stationName": "独峒镇八协村",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N1740",
              "stationName": "锦江村",
              "stationStatus": "异常"
          },
          {
              "stationCode": "N6206",
              "stationName": "金钟山乡自然保护区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8371",
              "stationName": "宜州气象站旧址",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N4170",
              "stationName": "逸夫小学",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5906",
              "stationName": "北流平政绿旺国家气象观测站",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N8040",
              "stationName": "下考社区",
              "stationStatus": "正常"
          },
          {
              "stationCode": "N5454",
              "stationName": "大藤峡水电站",
              "stationStatus": "正常"
          }
      ],
      "message": "success",
      "statusCode": "200"
  }
    return res.json(data)

  } catch (e) {
    console.log(e.stack)
    res.json({
      statusCode: 500,
      message: e.message,
      data: null
    })
  }
}

exports.getCityRate = async (req, res) => {
  try {
    const data = {
      'data': {
        'rateInfo': [{
          'municipality': '杭州',
          'ctsIntimeRate': '100'
        }],
        'stateInfo': [{
          'stationID': '54565',
          'stationName': '富阳',
          'province': '浙江省',
          'municipality': '杭州市',
          'county': '富阳区',
          'ctsInTimeState': '及时'
        }],
      },
      'statusCode': 200,
      'message': 'success'
    }
    return res.json(data)

  } catch (e) {
    console.log(e.stack)
    res.json({
      statusCode: 500,
      message: e.message,
      data: null
    })
  }
}

exports.getHistory = async (req, res) => {
  try {
    const data = {
      'data': {
        'dataName': '浙江省地面气象资料',
        'ctsCode': 'A.0001.0002.R001',
        'timesDetail': [{
          'dataName': '浙江省地面气象资料',
          'newDate': '2018-06-05 12:00',
          'stationAvail': '98',
          'missAccept': '10',
          'realityAccept': '192',
          'oughtAccept': '202',
          'ctsIntimeRate': '89',
          'ctsRate': '82',
          'destination': 'DPC',
          'missSend': '11',
          'realitySend': '199',
          'oughtSend': '210',
          'missPut': '20',
          'realityPut': '225',
          'oughtPut': '205',
          'sodRate': '99',
          'minuteStep': '5'
        }]
      },
      'statusCode': 200,
      'message': 'success'
    }
    return res.json(data)

  } catch (e) {
    console.log(e.stack)
    res.json({
      statusCode: 500,
      message: e.message,
      data: null
    })
  }
}

exports.getDataBasicInfo = async (req, res) => {
  try {
    const data = {
      "data": {
        "ctsdpcsodCode": "A.0001.0027.R001:A.0008.0001.P001:A.0008.0001.S001",
        "ctsOutTime": "0",
        "dataType": "地面气象资料",
        "ctsInTime": "0",
        "dataName": "cts:公路交通气象基本要素资料\nsod:中国公路交通气象基本要素资料",
        "ctsMiss": "0"
      },
      "message": "success",
      "statusCode": "200"
    }
    return res.json(data)

  } catch (e) {
    console.log(e.stack)
    res.json({
      statusCode: 500,
      message: e.message,
      data: null
    })
  }
}

exports.getStationBasicInfo = async (req, res) => {
  try {
    const data = {
      "data": {
        "ctsOutTimeRateMonth": 0,
        "fileName": "-------测试文件名------",
        "ctsOutTimeRateDay": 0,
        "dataType": null,
        "municipality": "绍兴市",
        "county": "诸暨市",
        "ctsMissRateDay": 100,
        "dataName": "cts:公路交通气象基本要素资料\nsod:中国公路交通气象基本要素资料",
        "oughtAcceptDay": 24,
        "ctsInTimeRateDay": 0,
        "ctsdpcsodCode": "A.0001.0027.R001:A.0008.0001.P001:A.0008.0001.S001",
        "ctsMissRateMonth": 100,
        "oughtAcceptMonth": 581,
        "stationName": "双桥",
        "ctsInTimeRateMonth": 0,
        "stationID": "K4213"
      },
      "message": "success",
      "statusCode": "200"
    }
    return res.json(data)

  } catch (e) {
    console.log(e.stack)
    res.json({
      statusCode: 500,
      message: e.message,
      data: null
    })
  }
}

exports.getStationListInfo = async (req, res) => {
  try {
    const data = {
      "data": {
        "stationInfo": [{
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "松阳县",
            "municipality": "丽水市",
            "stationName": "叶村",
            "time": "2018-10-26 06:00",
            "stationID": "K9284"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "仙居县",
            "municipality": "台州市",
            "stationName": "大陈村",
            "time": "2018-10-26 06:00",
            "stationID": "K8907"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "嵊州市",
            "municipality": "绍兴市",
            "stationName": "黄泽",
            "time": "2018-10-26 06:00",
            "stationID": "K4601"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "西湖区",
            "municipality": "杭州市",
            "stationName": "转塘",
            "time": "2018-10-26 06:00",
            "stationID": "K1160"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "嵊州市",
            "municipality": "绍兴市",
            "stationName": "灵鹅",
            "time": "2018-10-26 06:00",
            "stationID": "K4618"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "海宁市",
            "municipality": "嘉兴市",
            "stationName": "沪杭许村",
            "time": "2018-10-26 06:00",
            "stationID": "K5541"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "常山县",
            "municipality": "衢州市",
            "stationName": "古县村",
            "time": "2018-10-26 06:00",
            "stationID": "K7201"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "越城区",
            "municipality": "绍兴市",
            "stationName": "袍江高速",
            "time": "2018-10-26 06:00",
            "stationID": "K4046"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "诸暨市",
            "municipality": "绍兴市",
            "stationName": "三都高速",
            "time": "2018-10-26 06:00",
            "stationID": "K4229"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "青田县",
            "municipality": "丽水市",
            "stationName": "温溪",
            "time": "2018-10-26 06:00",
            "stationID": "K9234"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "开化县",
            "municipality": "衢州市",
            "stationName": "马金镇",
            "time": "2018-10-26 06:00",
            "stationID": "K7012"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "萧山区",
            "municipality": "杭州市",
            "stationName": "临浦",
            "time": "2018-10-26 06:00",
            "stationID": "K1131"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "临安区",
            "municipality": "杭州市",
            "stationName": "龙岗",
            "time": "2018-10-26 06:00",
            "stationID": "K1156"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "长兴县",
            "municipality": "湖州市",
            "stationName": "泗安",
            "time": "2018-10-26 06:00",
            "stationID": "K5012"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "松阳县",
            "municipality": "丽水市",
            "stationName": "樟溪",
            "time": "2018-10-26 06:00",
            "stationID": "K9280"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "长兴县",
            "municipality": "湖州市",
            "stationName": "洪桥",
            "time": "2018-10-26 06:00",
            "stationID": "K5060"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "南湖区",
            "municipality": "嘉兴市",
            "stationName": "乍嘉苏余新收费站",
            "time": "2018-10-26 06:00",
            "stationID": "K5542"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "萧山区",
            "municipality": "杭州市",
            "stationName": "萧山东",
            "time": "2018-10-26 06:00",
            "stationID": "K1079"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "上虞区",
            "municipality": "绍兴市",
            "stationName": "蒿坝",
            "time": "2018-10-26 06:00",
            "stationID": "K4409"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "义乌市",
            "municipality": "金华市",
            "stationName": "徐村",
            "time": "2018-10-26 06:00",
            "stationID": "K6065"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "东阳市",
            "municipality": "金华市",
            "stationName": "歌山",
            "time": "2018-10-26 06:00",
            "stationID": "K6038"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "龙游县",
            "municipality": "衢州市",
            "stationName": "大坪头村",
            "time": "2018-10-26 06:00",
            "stationID": "K7313"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "诸暨市",
            "municipality": "绍兴市",
            "stationName": "双桥",
            "time": "2018-10-26 06:00",
            "stationID": "K4213"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "江山市",
            "municipality": "衢州市",
            "stationName": "四都村",
            "time": "2018-10-26 06:00",
            "stationID": "K7113"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "秀洲区",
            "municipality": "嘉兴市",
            "stationName": "乍嘉苏新塍收费站",
            "time": "2018-10-26 06:00",
            "stationID": "K5543"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "建德市",
            "municipality": "杭州市",
            "stationName": "杨村桥",
            "time": "2018-10-26 06:00",
            "stationID": "K1130"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "桐乡市",
            "municipality": "嘉兴市",
            "stationName": "高桥镇",
            "time": "2018-10-26 06:00",
            "stationID": "K5540"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "桐庐县",
            "municipality": "杭州市",
            "stationName": "凤川",
            "time": "2018-10-26 06:00",
            "stationID": "K1129"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "余杭区",
            "municipality": "杭州市",
            "stationName": "南庄兜",
            "time": "2018-10-26 06:00",
            "stationID": "K1132"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "柯城区",
            "municipality": "衢州市",
            "stationName": "华墅乡",
            "time": "2018-10-26 06:00",
            "stationID": "K7502"
          },
          {
            "ctsCode": "A.0001.0027.R001",
            "timer": "2018-10-26 06:00:00/2018-10-26 07:00:00",
            "isCheck": "0",
            "fileName": "-------测试文件名------",
            "province": "浙江省",
            "county": "奉化区",
            "municipality": "宁波市",
            "stationName": "塔下",
            "time": "2018-10-26 06:00",
            "stationID": "K2717"
          }
        ],
        "ctsdpcsodCode": "A.0001.0027.R001:A.0008.0001.P001:A.0008.0001.S001",
        "dataName": "cts:公路交通气象基本要素资料\nsod:中国公路交通气象基本要素资料",
        "time": "2018-10-26 06:00"
      },
      "message": "success",
      "statusCode": "200"
    }
    return res.json(data)

  } catch (e) {
    console.log(e.stack)
    res.json({
      statusCode: 500,
      message: e.message,
      data: null
    })
  }
}

exports.getChartDataList = async (req, res) => {
  try {
    const data = {
      "data": {
        "flowData": [{
            "nodeName": "",
            "isAlert": "0",
            "fileName": "",
            "nextIP": "",
            "nodeType": "区域自动站",
            "nodeTypeId": 1,
            "ipAddr": "",
            "sendTime": "",
            "arriveTime": "",
            "timer": "",
            "assess": "",
            "children": [],
            "stationName": "",
            "bureau": "",
            "stationID": "",
            "elapsedTime": "",
            "avgElapsedTime": ""
          },
            {
                "nodeName": "",
                "isAlert": "0",
                "fileName": "",
                "nextIP": "",
                "nodeType": "区域自动站123",
                "nodeTypeId": 1,
                "ipAddr": "",
                "sendTime": "",
                "arriveTime": "",
                "timer": "",
                "assess": "",
                "children": [],
                "stationName": "",
                "bureau": "",
                "stationID": "",
                "elapsedTime": "",
                "avgElapsedTime": ""
            },
            {
                "nodeName": "",
                "isAlert": "0",
                "fileName": "",
                "nextIP": "",
                "nodeType": "区域自动站234",
                "nodeTypeId": 1,
                "ipAddr": "",
                "sendTime": "",
                "arriveTime": "",
                "timer": "",
                "assess": "",
                "children": [],
                "stationName": "",
                "bureau": "",
                "stationID": "",
                "elapsedTime": "",
                "avgElapsedTime": ""
            },
            {
                "nodeName": "",
                "isAlert": "0",
                "fileName": "",
                "nextIP": "",
                "nodeType": "区域自动站567",
                "nodeTypeId": 1,
                "ipAddr": "",
                "sendTime": "",
                "arriveTime": "",
                "timer": "",
                "assess": "",
                "children": [],
                "stationName": "",
                "bureau": "",
                "stationID": "",
                "elapsedTime": "",
                "avgElapsedTime": ""
            },
            {
                "nodeName": "",
                "isAlert": "0",
                "fileName": "",
                "nextIP": "",
                "nodeType": "区域自动站s123567",
                "nodeTypeId": 1,
                "ipAddr": "",
                "sendTime": "",
                "arriveTime": "",
                "timer": "",
                "assess": "",
                "children": [{
                    "nodeName": "",
                    "isAlert": "0",
                    "fileName": "",
                    "nextIP": "",
                    "nodeType": "MDOS环节123",
                    "ipAddr": "",
                    "sendTime": "",
                    "arriveTime": "",
                    "timer": "",
                    "assess": "",
                    "children": [],
                    "stationName": "",
                    "bureau": "",
                    "stationID": "",
                    "elapsedTime": "",
                    "avgElapsedTime": ""
                },
                    {
                        "nodeName": "",
                        "isAlert": "0",
                        "fileName": "",
                        "nextIP": "",
                        "nodeType": "DPC环节123",
                        "ipAddr": "",
                        "sendTime": "",
                        "arriveTime": "",
                        "timer": "",
                        "assess": "",
                        "children": [{
                            "nodeName": "",
                            "isAlert": "1",
                            "receive": "CTS",
                            "fileName": "Z_SURF_C_BEHZ-REG_20181025020910_O_AWS-RD_FTM.txt",
                            "city": "绍兴市",
                            "nextIP": "",
                            "nodeType": "SOD环节567",
                            "ipAddr": "",
                            "sendTime": "2018-10-25 02:09:16",
                            "arriveTime": "2018-10-25 02:00:00",
                            "timer": "",
                            "assess": "及时",
                            "children": [],
                            "dataTime": "2018-10-25 02:00",
                            "stationName": "双桥",
                            "bureau": "浙江省气象局",
                            "send": "SOD",
                            "stationID": "K4213",
                            "elapsedTime": "",
                            "avgElapsedTime": 2
                        }],
                        "stationName": "",
                        "bureau": "",
                        "stationID": "",
                        "elapsedTime": "",
                        "avgElapsedTime": ""
                    }
                ],
                "stationName": "",
                "bureau": "",
                "stationID": "",
                "elapsedTime": "",
                "avgElapsedTime": ""
            },
          {
            "nodeName": "",
            "isAlert": "0",
            "fileName": "",
            "nextIP": "",
            "nodeType": "CTS2.0",
            "nodeTypeId": 2,
            "ipAddr": "",
            "sendTime": "",
            "arriveTime": "",
            "timer": "[ 02:00:00, 02:00:00]",
            "assess": "",
            "children": [{
                "nodeName": "",
                "isAlert": "0",
                "fileName": "",
                "nextIP": "",
                "nodeType": "MDOS环节",
                "ipAddr": "",
                "sendTime": "",
                "arriveTime": "",
                "timer": "",
                "assess": "",
                "children": [],
                "stationName": "",
                "bureau": "",
                "stationID": "",
                "elapsedTime": "",
                "avgElapsedTime": ""
              },
              {
                "nodeName": "",
                "isAlert": "0",
                "fileName": "",
                "nextIP": "",
                "nodeType": "DPC环节",
                "ipAddr": "",
                "sendTime": "",
                "arriveTime": "",
                "timer": "",
                "assess": "",
                "children": [{
                  "nodeName": "",
                  "isAlert": "1",
                  "receive": "CTS",
                  "fileName": "Z_SURF_C_BEHZ-REG_20181025020910_O_AWS-RD_FTM.txt",
                  "city": "绍兴市",
                  "nextIP": "",
                  "nodeType": "SOD环节",
                  "ipAddr": "",
                  "sendTime": "2018-10-25 02:09:16",
                  "arriveTime": "2018-10-25 02:00:00",
                  "timer": "",
                  "assess": "及时",
                  "children": [],
                  "dataTime": "2018-10-25 02:00",
                  "stationName": "双桥",
                  "bureau": "浙江省气象局",
                  "send": "SOD",
                  "stationID": "K4213",
                  "elapsedTime": "",
                  "avgElapsedTime": 2
                }],
                "stationName": "",
                "bureau": "",
                "stationID": "",
                "elapsedTime": "",
                "avgElapsedTime": ""
              }
            ],
            "stationName": "",
            "bureau": "",
            "stationID": "",
            "elapsedTime": "",
            "avgElapsedTime": ""
          },
          {
            "nodeName": "",
            "isAlert": "0",
            "fileName": "",
            "nextIP": "",
            "nodeType": "国家局",
            "ipAddr": "",
            "sendTime": "",
            "arriveTime": "",
            "timer": "",
            "assess": "",
            "children": [],
            "stationName": "",
            "bureau": "",
            "stationID": "",
            "elapsedTime": "",
            "avgElapsedTime": ""
          }
        ],
        "nowTime": "2018-10-25 02:00"
      },
      "message": "success",
      "statusCode": "200"
    }
    return res.json(data)

  } catch (e) {
    console.log(e.stack)
    res.json({
      statusCode: 500,
      message: e.message,
      data: null
    })
  }
}

exports.getChartList = async (req, res) => {
  try {
    const data = {
      "data": {
          "flowData": [
              {
                  "nodeName": "",
                  "isAlert": "0",
                  "fileName": "",
                  "nextIP": "",
                  "nodeType": "交通站",
                  "nodeTypeId": 1,
                  "ipAddr": "",
                  "sendTime": "",
                  "arriveTime": "",
                  "timer": "",
                  "assess": "",
                  "children": [],
                  "stationName": "",
                  "bureau": "",
                  "stationID": "",
                  "elapsedTime": "",
                  "avgElapsedTime": ""
              },
              {
                  "nodeName": "",
                  "isAlert": "0",
                  "fileName": "",
                  "nextIP": "",
                  "nodeType": "交通站中心站",
                  "nodeTypeId": 2,
                  "ipAddr": "",
                  "sendTime": "",
                  "arriveTime": "",
                  "timer": "",
                  "assess": "",
                  "children": [],
                  "stationName": "",
                  "bureau": "",
                  "stationID": "",
                  "elapsedTime": "",
                  "avgElapsedTime": ""
              },
              {
                  "nodeName": "",
                  "isAlert": "0",
                  "fileName": "",
                  "nextIP": "",
                  "nodeType": "CTS前置机",
                  "nodeTypeId": 3,
                  "ipAddr": "",
                  "sendTime": "",
                  "arriveTime": "",
                  "timer": "",
                  "assess": "",
                  "children": [],
                  "stationName": "",
                  "bureau": "",
                  "stationID": "",
                  "elapsedTime": "",
                  "avgElapsedTime": ""
              },
              {
                  "nodeName": "",
                  "isAlert": "0",
                  "fileName": "",
                  "nextIP": "",
                  "nodeType": "CTS2.0",
                  "nodeTypeId": 2,
                  "ipAddr": "",
                  "sendTime": "",
                  "arriveTime": "",
                  "timer": "",
                  "assess": "",
                  "children": [
                      {
                          "nodeName": "",
                          "isAlert": "0",
                          "fileName": "",
                          "nextIP": "",
                          "nodeType": "MDOS环节",
                          "ipAddr": "",
                          "sendTime": "",
                          "arriveTime": "",
                          "timer": "",
                          "assess": "",
                          "children": [],
                          "stationName": "",
                          "bureau": "",
                          "stationID": "",
                          "elapsedTime": "",
                          "avgElapsedTime": ""
                      },
                      {
                          "nodeName": "",
                          "isAlert": "0",
                          "fileName": "",
                          "nextIP": "",
                          "nodeType": "DPC环节",
                          "ipAddr": "",
                          "sendTime": "",
                          "arriveTime": "",
                          "timer": "",
                          "assess": "",
                          "children": [
                              {
                                  "nodeName": "",
                                  "isAlert": "0",
                                  "fileName": "",
                                  "nextIP": "",
                                  "nodeType": "SOD环节",
                                  "ipAddr": "",
                                  "sendTime": "",
                                  "arriveTime": "",
                                  "timer": "",
                                  "assess": "",
                                  "children": [],
                                  "stationName": "",
                                  "bureau": "",
                                  "stationID": "",
                                  "elapsedTime": "",
                                  "avgElapsedTime": ""
                              }
                          ],
                          "stationName": "",
                          "bureau": "",
                          "stationID": "",
                          "elapsedTime": "",
                          "avgElapsedTime": ""
                      }
                  ],
                  "stationName": "",
                  "bureau": "",
                  "stationID": "",
                  "elapsedTime": "",
                  "avgElapsedTime": ""
              },
              {
                  "nodeName": "",
                  "isAlert": "0",
                  "fileName": "",
                  "nextIP": "",
                  "nodeType": "国家局",
                  "ipAddr": "",
                  "sendTime": "",
                  "arriveTime": "",
                  "timer": "",
                  "assess": "",
                  "children": [],
                  "stationName": "",
                  "bureau": "",
                  "stationID": "",
                  "elapsedTime": "",
                  "avgElapsedTime": ""
              }
          ]
      },
      "message": "success",
      "statusCode": "200"
  }
    return res.json(data)

  } catch (e) {
    console.log(e.stack)
    res.json({
      statusCode: 500,
      message: e.message,
      data: null
    })
  }
}

exports.getAlterModal = async (req, res) => {
  try {
    const data = {
      'data': {
        "pageNo": 1,
        "pageSize": 20,
        "totalPage": 2143,
        "total": 42846,
        "records": [{
          "id": 1,
          "firstOccurTime": "2018-09-05 09:07",
          "lastOccurTime": "2018-06-05 09:07",
          "count": 5,
          "source": "丽水58648",
          "name": "时次缺报",
          "desc": "未在相应时次内接受到报告",
          "state": 0
        }]
      },
      "statusCode": 200,
      "message": "success"
    }
    return res.json(data)

  } catch (e) {
    console.log(e.stack)
    res.json({
      statusCode: 500,
      message: e.message,
      data: null
    })
  }
}
exports.getAgentModal = async (req, res) => {
  try {
    const data = {
      'data': {
        "pageNo": 1,
        "pageSize": 20,
        "totalPage": 2143,
        "total": 42846,
        "records": [{
          "id": 1,
          "time": "2018-06-05 09:07",
          "source": "奉化气象局",
          "ip": "10.138.224.32",
          "agentState": "异常",
          "desc": "2018-06-05 09:07 奉化气象局  10.138.224.32 agent监控异常"
        }]
      },
      "statusCode": 200,
      "message": "success"
    }
    return res.json(data)

  } catch (e) {
    console.log(e.stack)
    res.json({
      statusCode: 500,
      message: e.message,
      data: null
    })
  }
}
exports.getDownLoadData = async (req, res) => {
    try {
        const data = {
            "data":[
                {
                    "dataName":"地面气象要素日数据",
                    "time":"2018-06-05 12：00",
                    "broadcastFilecount":"156123",
                    "broadcastFilesize":"23456",
                    "broadcaseIsdelay":"否",
                    "resvFilecount":"156",
                    "resvFilesize":"23456",
                    "sendFilecount":"156",
                    "sendFilesize":"23456",
                    "sendRate":"342"
                },
                {
                    "dataName":"地面气象要素日数据",
                    "time":"2018-06-05 12：00",
                    "broadcastFilecount":"156321123",
                    "broadcastFilesize":"23456",
                    "broadcaseIsdelay":"否",
                    "resvFilecount":"156",
                    "resvFilesize":"23456",
                    "sendFilecount":"156",
                    "sendFilesize":"23456",
                    "sendRate":"342"
                },{
                    "dataName":"地面气象要素日数据",
                    "time":"2018-06-05 12：00",
                    "broadcastFilecount":"156",
                    "broadcastFilesize":"23456",
                    "broadcaseIsdelay":"否",
                    "resvFilecount":"156",
                    "resvFilesize":"23456",
                    "sendFilecount":"156",
                    "sendFilesize":"23456",
                    "sendRate":"342"
                },{
                    "dataName":"地面气象要素日数据",
                    "time":"2018-06-05 12：00",
                    "broadcastFilecount":"156",
                    "broadcastFilesize":"23456",
                    "broadcaseIsdelay":"否",
                    "resvFilecount":"156",
                    "resvFilesize":"23456",
                    "sendFilecount":"156",
                    "sendFilesize":"23456",
                    "sendRate":"342"
                },{
                    "dataName":"地面气象要素日数据",
                    "time":"2018-06-05 12：00",
                    "broadcastFilecount":"156",
                    "broadcastFilesize":"23456",
                    "broadcaseIsdelay":"否",
                    "resvFilecount":"156",
                    "resvFilesize":"23456",
                    "sendFilecount":"156",
                    "sendFilesize":"23456",
                    "sendRate":"342"
                },{
                    "dataName":"地面气象要素日数据",
                    "time":"2018-06-05 12：00",
                    "broadcastFilecount":"156",
                    "broadcastFilesize":"23456",
                    "broadcaseIsdelay":"否",
                    "resvFilecount":"156",
                    "resvFilesize":"23456",
                    "sendFilecount":"156",
                    "sendFilesize":"23456",
                    "sendRate":"342"
                },{
                    "dataName":"地面气象要素日数据",
                    "time":"2018-06-05 12：00",
                    "broadcastFilecount":"156",
                    "broadcastFilesize":"23456",
                    "broadcaseIsdelay":"否",
                    "resvFilecount":"156",
                    "resvFilesize":"23456",
                    "sendFilecount":"156",
                    "sendFilesize":"23456",
                    "sendRate":"342"
                },{
                    "dataName":"地面气象要素日数据",
                    "time":"2018-06-05 12：00",
                    "broadcastFilecount":"156",
                    "broadcastFilesize":"23456",
                    "broadcaseIsdelay":"否",
                    "resvFilecount":"156",
                    "resvFilesize":"23456",
                    "sendFilecount":"156",
                    "sendFilesize":"23456",
                    "sendRate":"342"
                },{
                    "dataName":"地面气象要素日数据",
                    "time":"2018-06-05 12：00",
                    "broadcastFilecount":"156",
                    "broadcastFilesize":"23456",
                    "broadcaseIsdelay":"否",
                    "resvFilecount":"156",
                    "resvFilesize":"23456",
                    "sendFilecount":"156",
                    "sendFilesize":"23456",
                    "sendRate":"342"
                }
            ],
            "statusCode":200,
            "message":"success"
        }
        return res.json(data)

    } catch (e) {
        console.log(e.stack)
        res.json({
            statusCode: 500,
            message: e.message,
            data: null
        })
    }
}
exports.getSystemConfig = async (req, res) => {
  try {
    const data = {
      "data": {
        "basic":{
          "province":"浙江省",
          "destination":"BABJ,DPC,MDOS",
          "proSource":"前置机"
        },
        "collector":{
          "serviceIP":"10.135.72.68",
          "port":"22",
          "user":"cmacast",
          "password":"123456",
          "recFileNameModel":"/behz/workdir/incoming/cmacast/log/chan/recvDATATIME.log",
          "sendFileNameModel":"/behz/workdir/bkdata/YYYYMMDD/dvb_back/sendDATATIMEXXXX.log",
          "pushFileNameModel":"/behz/workdir/incoming/cmacast/log/fileftp/normal/fileftp"
        }
      },
      "message":"success","statusCode":"200"}
    return res.json(data)

  } catch (e) {
    console.log(e.stack)
    res.json({
      statusCode: 500,
      message: e.message,
      data: null
    })
  }
}

