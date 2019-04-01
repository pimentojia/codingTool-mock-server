const fs = require('fs')
const path = require('path')

exports.getRunState = async (req, res) => {
    try {
        const data = {
            'data': {
                "lockedState": "已入锁",
                "signalNoiseRatio": "100.2dB",
                'openChannel': '96个',
                'authChannel': '95个',
                'softdogState': '正常',
                'softdogNo': '344555234848',
                'currentDisk': '/data大小1099G，已用18%'
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

exports.getReceiveList = async (req, res) => {
    try {
        const data = {
            "data": [
              {"totalFileSize":0,"id":"43f16f6e01ff40b18ffd9cd8fc8941d0","sourceType":"应急 ","receiveFileCount":0,"lostFileCount":0},{"totalFileSize":17225097898,"id":"2b7bd6202c7c4bc6ae1f9e7e12c17fe8","sourceType":"数值预报 ","receiveFileCount":16525,"lostFileCount":0},{"totalFileSize":285765420,"id":"f1cd97b13ac048be9271d261c289ec27","sourceType":"天气预报 ","receiveFileCount":2099,"lostFileCount":0},{"totalFileSize":3356262707,"id":"d84d0477718f4b87893adf3d5ea7b0a5","sourceType":"常规资料 ","receiveFileCount":136875,"lostFileCount":0},{"totalFileSize":1110503,"id":"1523f552c62d48439fcda0e9dbe58ffd","sourceType":"警报和预警 ","receiveFileCount":129,"lostFileCount":0},{"totalFileSize":0,"id":"39eb84fecf2f47988858918ecb50e774","sourceType":"部门外 ","receiveFileCount":0,"lostFileCount":0},{"totalFileSize":7953797961,"id":"b435d285e8944872a4cb4edf718fb3a9","sourceType":"国外 ","receiveFileCount":20833,"lostFileCount":0},{"totalFileSize":2552678266,"id":"0992f78fd46e4840b6c76d8af518e1f2","sourceType":"天气雷达 ","receiveFileCount":72709,"lostFileCount":0},{"totalFileSize":0,"id":"8fad613a7d4e459aac5ed849aa620048","sourceType":"其它资料 ","receiveFileCount":0,"lostFileCount":0},{"totalFileSize":4795955612,"id":"6c1dc3f9d7ed4bbbba581b3fd7b054d7","sourceType":"卫星资料 ","receiveFileCount":179,"lostFileCount":0},{"totalFileSize":0,"id":"732f114a074c4c1ca5c79eb97adf26f7","sourceType":"业务通知 ","receiveFileCount":0,"lostFileCount":0},{"totalFileSize":8117093212,"id":"0dce2570db0044b2be3154ce13402647","sourceType":"国内自定义 ","receiveFileCount":41757,"lostFileCount":0},{"totalFileSize":50096,"id":"d6a91ea5b6114ed1af836bf3d007d5e7","sourceType":"省通道组 ","receiveFileCount":1,"lostFileCount":0}

              // {
                //     'id': 10,
                //     'sourceType': '应急',
                //     'receiveFileCount':'12345',
                //     'lostFileCount': '0',
                //     'totalFileSize': '10',
                //
                // },
                // {
                //     'id': 11,
                //     'sourceType': '警报与预警',
                //     'receiveFileCount':'12345',
                //     'lostFileCount': '123',
                //     'totalFileSize': '10',
                //
                // },
                // {
                //     'id': 12,
                //     'sourceType': '常规资料',
                //     'receiveFileCount':'12345',
                //     'lostFileCount': '123',
                //     'totalFileSize': '10',
                //
                // },
                // {
                //     'id': 13,
                //     'sourceType': '国内自定义',
                //     'receiveFileCount':'12345',
                //     'lostFileCount': '0',
                //     'totalFileSize': '10',
                //
                // },
                // {
                //     'id': 15,
                //     'sourceType': '数值预报',
                //     'receiveFileCount':'12345',
                //     'lostFileCount': '123',
                //     'totalFileSize': '10',
                //
                // },
                // {
                //     'id': 16,
                //     'sourceType': '天气雷达',
                //     'receiveFileCount':'12345',
                //     'lostFileCount': '0',
                //     'totalFileSize': '10',
                //
                // },
                // {
                //     'id': 17,
                //     'sourceType': '卫星资料',
                //     'receiveFileCount':'12345',
                //     'lostFileCount': '0',
                //     'totalFileSize': '10',
                //
                // },
                // {
                //     'id': 18,
                //     'sourceType': '天气预报',
                //     'receiveFileCount':'12345',
                //     'lostFileCount': '0',
                //     'totalFileSize': '10',
                //
                // }
                // {
                //     'id': 19,
                //     'sourceType': '其他资料',
                //     'receiveFileCount':'12345',
                //     'lostFileCount': '123',
                //     'totalFileSize': '10',
                //
                // },
                // {
                //     'id': 20,
                //     'sourceType': '省通道组',
                //     'receiveFileCount':'12345',
                //     'lostFileCount': '123',
                //     'totalFileSize': '10',
                //
                // },
                // {
                //     'id': 21,
                //     'sourceType': '部门外',
                //     'receiveFileCount':'12345',
                //     'lostFileCount': '123',
                //     'totalFileSize': '10',
                //
                // },
                // {
                //     'id': 22,
                //     'sourceType': '国外',
                //     'receiveFileCount':'12345',
                //     'lostFileCount': '123',
                //     'totalFileSize': '10',
                //
                // },
                // {
                //     'id': 23,
                //     'sourceType': '业务通知',
                //     'receiveFileCount':'12345',
                //     'lostFileCount': '123',
                //     'totalFileSize': '10',
                //
                // },
                // {
                //     'id': 24,
                //     'sourceType': '其他',
                //     'receiveFileCount':'12345',
                //     'lostFileCount': '123',
                //     'totalFileSize': '10',
                //
                // },
                // {
                //     'id': 25,
                //     'sourceType': '总计',
                //     'receiveFileCount':'12345',
                //     'lostFileCount': '123',
                //     'totalFileSize': '10',
                //
                // }
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

exports.getReceiveState = async (req, res) => {
    try {
        const data = {
            'data': {
                "totalReceiveCount":"2456个",
                "totalReceviceSize":"12345675B",
                "lostReceiveCount": "0",
                "successPushCount":"2435个",
                "lostPushCount":"5个"

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

exports.getSystemState = async (req, res) => {
    try {
        const data = {
            "data":
            {
                'cpuUseRate': '30%',
                'cacheUseRate':'68%',
                'diskUseRate':[
                    {
                        'chkdsk': ' /',
                        'useRate': '18%'
                    },
                    {
                        'chkdsk':' /behz',
                        'useRate': '20%'
                    }
                ]
            },

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

exports.getFilesystem = async (req, res) => {
    try {
        const data = {
            "data": [
                {
                  'hostIp': '10.135.20.70',
                  'diskUseRate':'68%',
                  'diskList':[
                    {
                    'chkdsk': ' /Cmacast/behz',
                    'total': 17
                    },
                    {
                    'chkdsk':' /Cmacast/SL0',
                    'total': 18
                    }
                    ]
                },
                {
                    'hostIp': '10.135.20.211',
                    'diskUseRate':'68%',
                    'diskList':[
                        {
                            'chkdsk': ' /Cmacast/behz',
                            'total': 20
                        },
                        {
                            'chkdsk':' /Cmacast/SL0',
                            'total': 30
                        },
                        {
                            'chkdsk':' /Cmacast/abc',
                            'total': 10
                        }
                    ]
                },
                {
                    'hostIp': '10.135.20.212',
                    'diskUseRate':'68%',
                    'diskList':[
                        {
                            'chkdsk': ' /Cmacast/behz',
                            'total': 20
                        },
                        {
                            'chkdsk':' /Cmacast/SL0',
                            'total': 30
                        },
                        {
                            'chkdsk':' /Cmacast/abc',
                            'total': 10
                        }
                    ]
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

exports.getSystemNotice = async (req, res) => {
    try {
        const data = {
            "data": {
                notice:
                'CMACAST系统于2018-11-22 当天系统维护特此通知。CMACAST系统于2018-11-22 当天系统维护特此通知。CMACAST系统于2018-11-22 当天系统维护特此通知。国家气象局，2018年6月12日',
                noticeTitle: '关于CMACAST维护通知'
            },
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

exports.getPushMap = async (req, res) => {
    try {
        const data = {
            "data":[
                {
                    'id': '1',
                    'ip': '101.135.30.144',
                    'userName': 'fy2e',
                    'channel': 'SATE_FY2G_SVS'
                },
                {
                    'id': '2',
                    'ip': '10.135.22.103',
                    'userName': 'dvbs',
                    'channel': 'SATE_FY2G_SVS'
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

exports.getResourcePandect = async (req, res) => {
    try {
        const data = {"10.20.66.30":{"cpu_pctUsage":{"val":"10.2","point":"0"},
            "mem_pctUsage":{"val":"96.787912","point":"2"},
            "process":"-1","host_state":"1","disk_pctUsage":"2","mainState":0},
          "10.20.66.70":{"cpu_pctUsage":{"val":"10.2","point":"0"},
            "mem_pctUsage":{"val":"96.787912","point":"2"},
            "process":"-1","host_state":"1","disk_pctUsage":"2","mainState":0},
          "10.20.66.71":{"cpu_pctUsage":{"val":"10.2","point":"0"},
            "mem_pctUsage":{"val":"96.787912","point":"2"},
            "process":"-1","host_state":"1","disk_pctUsage":"2","mainState":0},
          "10.20.66.31":{"cpu_pctUsage":{"val":"10.2","point":"0"},"mem_pctUsage":{"val":"96.7","point":"2"},"process":"-1","host_state":"1","disk_pctUsage":"2","mainState":0},"10.20.66.32":{"cpu_pctUsage":{"val":"10.2","point":"0"},"mem_pctUsage":{"val":"96.7","point":"2"},"process":"-1","host_state":"1","disk_pctUsage":"2","mainState":0},"10.20.66.33":{"cpu_pctUsage":{"val":"10.2","point":"0"},"mem_pctUsage":{"val":"96.7","point":"2"},"process":"-1","host_state":"1","disk_pctUsage":"2","mainState":0},"10.20.66.34":{"cpu_pctUsage":{"val":"10.2","point":"0"},"mem_pctUsage":{"val":"96.7","point":"2"},"process":"-1","host_state":"1","disk_pctUsage":"2","mainState":0},"10.20.66.35":{"cpu_pctUsage":{"val":"10.2","point":"0"},"mem_pctUsage":{"val":"96.7","point":"2"},"process":"-1","host_state":"1","disk_pctUsage":"2","mainState":0},"10.20.66.36":{"cpu_pctUsage":{"val":"10.2","point":"0"},"mem_pctUsage":{"val":"96.7","point":"2"},"process":"-1","host_state":"1","disk_pctUsage":"2","mainState":0},"10.20.66.37":{"cpu_pctUsage":{"val":"10.2","point":"0"},"mem_pctUsage":{"val":"96.7","point":"2"},"process":"-1","host_state":"1","disk_pctUsage":"2","mainState":0},"10.20.66.38":{"cpu_pctUsage":{"val":"10.2","point":"0"},"mem_pctUsage":{"val":"96.7","point":"2"},"process":"-1","host_state":"1","disk_pctUsage":"2","mainState":0},"10.20.66.39":{"cpu_pctUsage":{"val":"10.2","point":"0"},"mem_pctUsage":{"val":"96.7","point":"2"},"process":"-1","host_state":"1","disk_pctUsage":"2","mainState":0},"10.20.65.60":{"cpu_pctUsage":{"val":"10.2","point":"0"},"mem_pctUsage":{"val":"96.7","point":"2"},"process":"-1","host_state":"1","disk_pctUsage":"2","mainState":0},"10.20.65.61":{"cpu_pctUsage":{"val":"10.2","point":"0"},"mem_pctUsage":{"val":"96.7","point":"2"},"process":"-1","host_state":"1","disk_pctUsage":"2","mainState":0},"10.20.65.62":{"cpu_pctUsage":{"val":"10.2","point":"0"},"mem_pctUsage":{"val":"96.7","point":"2"},"process":"-1","host_state":"1","disk_pctUsage":"2","mainState":0},"10.20.65.63":{"cpu_pctUsage":{"val":"10.2","point":"0"},"mem_pctUsage":{"val":"96.7","point":"2"},"process":"-1","host_state":"1","disk_pctUsage":"2","mainState":0},"10.20.65.64":{"cpu_pctUsage":{"val":"10.2","point":"0"},"mem_pctUsage":{"val":"96.7","point":"2"},"process":"-1","host_state":"1","disk_pctUsage":"2","mainState":0},"10.20.65.65":{"cpu_pctUsage":{"val":"10.2","point":"0"},"mem_pctUsage":{"val":"96.7","point":"2"},"process":"-1","host_state":"1","disk_pctUsage":"2","mainState":0}}

            // "statusCode":200,
            // "message":"success"
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

exports.getDataAnalysis = async (req, res) => {
    try {
        const data = [
                {
                    "name": "J.0012.0016.R001",
                    "time": "2018-11-25 09:00:00,000",
                    "receiveTime": 1543138226181,
                    "storageTime": 1543136075867,
                    "receiveCount": 21,
                    "storageCount": 20
                },
                {
                    "name": "J.0003",
                    "time": "2018-11-25 09:00:00,000",
                    "receiveTime": 1543138912939,
                    "storageTime": null,
                    "receiveCount": 34725,
                    "storageCount": 34726
                },
                {
                    "name": "J.0012.0018.R001",
                    "time": "2018-11-25 09:00:00,000",
                    "receiveTime": 1543138605822,
                    "storageTime": null,
                    "receiveCount": 20,
                    "storageCount": 21
                },
                {
                    "name": "J.0012.0015.R001",
                    "time": "2018-11-25 09:00:00,000",
                    "receiveTime": 1543138381051,
                    "storageTime": 1543136565930,
                    "receiveCount": 22,
                    "storageCount": 21
                },
                {
                    "name": "J.0001.0001.R001",
                    "time": "2018-11-25 09:00:00,000",
                    "receiveTime": 1543138204322,
                    "storageTime": 1543137145655,
                    "receiveCount": 959,
                    "storageCount": 958
                },
                {
                    "name": "J.0012.0017.R001",
                    "time": "2018-11-25 09:00:00,000",
                    "receiveTime": 1543138281063,
                    "storageTime": null,
                    "receiveCount": 20,
                    "storageCount": 21
                }
            ]
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

exports.getRadar = async (req, res) => {
    try {
        const data = [
                {
                    "name": "J.0012.0016.R001",
                    "time": "2018-11-25 09:00:00,000",
                    "receiveTime": 1543138226181,
                    "storageTime": 1543136075867,
                    "receiveCount": 21,
                    "storageCount": 20
                },
                {
                    "name": "J.0003",
                    "time": "2018-11-25 09:00:00,000",
                    "receiveTime": 1543138912939,
                    "storageTime": null,
                    "receiveCount": 34725,
                    "storageCount": 34726
                },
                {
                    "name": "J.0012.0018.R001",
                    "time": "2018-11-25 09:00:00,000",
                    "receiveTime": 1543138605822,
                    "storageTime": null,
                    "receiveCount": 20,
                    "storageCount": 21
                },
                {
                    "name": "J.0012.0015.R001",
                    "time": "2018-11-25 09:00:00,000",
                    "receiveTime": 1543138381051,
                    "storageTime": 1543136565930,
                    "receiveCount": 22,
                    "storageCount": 21
                },
                {
                    "name": "J.0001.0001.R001",
                    "time": "2018-11-25 09:00:00,000",
                    "receiveTime": 1543138204322,
                    "storageTime": 1543137145655,
                    "receiveCount": 959,
                    "storageCount": 958
                },
                {
                    "name": "J.0012.0017.R001",
                    "time": "2018-11-25 09:00:00,000",
                    "receiveTime": 1543138281063,
                    "storageTime": null,
                    "receiveCount": 20,
                    "storageCount": 21
                }
            ]
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

exports.getSatellite = async (req, res) => {
    try {
        const data = [
                {
                    "name": "J.0012.0016.R001",
                    "time": "2018-11-25 09:00:00,000",
                    "receiveTime": 1543138226181,
                    "storageTime": 1543136075867,
                    "receiveCount": 21,
                    "storageCount": 20
                },
                {
                    "name": "J.0003",
                    "time": "2018-11-25 09:00:00,000",
                    "receiveTime": 1543138912939,
                    "storageTime": null,
                    "receiveCount": 34725,
                    "storageCount": 34726
                },
                {
                    "name": "J.0012.0018.R001",
                    "time": "2018-11-25 09:00:00,000",
                    "receiveTime": 1543138605822,
                    "storageTime": null,
                    "receiveCount": 20,
                    "storageCount": 21
                },
                {
                    "name": "J.0012.0015.R001",
                    "time": "2018-11-25 09:00:00,000",
                    "receiveTime": 1543138381051,
                    "storageTime": 1543136565930,
                    "receiveCount": 22,
                    "storageCount": 21
                },
                {
                    "name": "J.0001.0001.R001",
                    "time": "2018-11-25 09:00:00,000",
                    "receiveTime": 1543138204322,
                    "storageTime": 1543137145655,
                    "receiveCount": 959,
                    "storageCount": 958
                },
                {
                    "name": "J.0012.0017.R001",
                    "time": "2018-11-25 09:00:00,000",
                    "receiveTime": 1543138281063,
                    "storageTime": null,
                    "receiveCount": 20,
                    "storageCount": 21
                }
            ]
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

exports.getCiPan = async (req, res) => {
    try {
        const data = [
            {
                "/dev/shm": {
                    "time": "2018-11-18 04:30:00",
                    "point": "62.82"
                }
            },
            {
                "/run/user/1000": {
                    "time": "2018-11-18 04:30:00",
                    "point": "12.57"
                }
            },
            {
                "/run/user/1005": {
                    "time": "2018-11-18 15:50:00",
                    "point": "12.57"
                }
            },
            {
                "/dev": {
                    "time": "2018-11-18 04:30:00",
                    "point": "62.81"
                }
            },
            {
                "/run": {
                    "time": "2018-11-18 04:30:00",
                    "point": "58.82"
                }
            },
            {
                "/sys/fs/cgroup": {
                    "time": "2018-11-18 04:30:00",
                    "point": "62.82"
                }
            },
            {
                "/": {
                    "time": "2018-11-18 04:30:00",
                    "point": "27.37"
                }
            },
            {
                "/run/user/0": {
                    "time": "2018-11-18 04:30:00",
                    "point": "12.57"
                }
            },
            {
                "/boot": {
                    "time": "2018-11-18 04:30:00",
                    "point": "0.31"
                }
            },
            {
                "/run/user/1004": {
                    "time": "2018-11-18 04:30:00",
                    "point": "12.57"
                }
            },
            {
                "/run/user/1003": {
                    "time": "2018-11-18 04:30:00",
                    "point": "12.57"
                }
            },
            {
                "/opt": {
                    "time": "2018-11-18 04:30:00",
                    "point": "151.29"
                }
            }
        ]
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

exports.getCiPanUse = async (req, res) => {
    try {
        const data = [
            {
                "/": {
                    "time": "2018-11-18 04:30:00",
                    "point": "41.0"
                }
            },
            {
                "/boot": {
                    "time": "2018-11-18 04:30:00",
                    "point": "34.0"
                }
            },
            {
                "/dev": {
                    "time": "2018-11-18 04:30:00",
                    "point": "0.0"
                }
            },
            {
                "/dev/shm": {
                    "time": "2018-11-18 04:30:00",
                    "point": "0.0"
                }
            },
            {
                "/opt": {
                    "time": "2018-11-18 04:30:00",
                    "point": "66.0"
                }
            },
            {
                "/run": {
                    "time": "2018-11-18 04:30:00",
                    "point": "6.0"
                }
            },
            {
                "/run/user/0": {
                    "time": "2018-11-18 04:30:00",
                    "point": "0.0"
                }
            },
            {
                "/run/user/1000": {
                    "time": "2018-11-18 04:30:00",
                    "point": "0.0"
                }
            },
            {
                "/run/user/1003": {
                    "time": "2018-11-18 04:30:00",
                    "point": "0.0"
                }
            },
            {
                "/run/user/1004": {
                    "time": "2018-11-18 04:30:00",
                    "point": "0.0"
                }
            },
            {
                "/sys/fs/cgroup": {
                    "time": "2018-11-18 04:30:00",
                    "point": "0.0"
                }
            }
        ]
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

exports.getProcess = async (req, res) => {
    try {
        const data = [
            {
                "processName": "org.apache.spark.deploy.worker",
                "time": "1542214200000",
                "point": 1
            },
            {
                "processName": "org.apache.cassandra.service",
                "time": "1542214200000",
                "point": 1
            },
            {
                "processName": "org.apache.spark.executor",
                "time": "1542214200000",
                "point": 1
            }
        ]
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

exports.getPctUsage = async (req, res) => {
    try {
        const data = [
            {
                "number": 25.69,
                "time": "2018-11-15 09:30:00"
            },
            {
                "number": 25.69,
                "time": "2018-11-15 09:40:00"
            },
            {
                "number": 25.69,
                "time": "2018-11-15 09:50:00"
            },
            {
                "number": 25.69,
                "time": "2018-11-15 10:00:00"
            },
            {
                "number": 25.7,
                "time": "2018-11-15 10:10:00"
            },
            {
                "number": 25.7,
                "time": "2018-11-15 10:20:00"
            },
            {
                "number": 25.7,
                "time": "2018-11-15 10:30:00"
            },
            {
                "number": 25.7,
                "time": "2018-11-15 10:40:00"
            },
            {
                "number": 25.7,
                "time": "2018-11-15 10:50:00"
            },
            {
                "number": 25.7,
                "time": "2018-11-15 11:00:00"
            },
            {
                "number": 25.7,
                "time": "2018-11-15 11:10:00"
            },
            {
                "number": 25.71,
                "time": "2018-11-15 11:20:00"
            },
            {
                "number": 25.71,
                "time": "2018-11-15 11:30:00"
            },
            {
                "number": 25.71,
                "time": "2018-11-15 11:40:00"
            },
            {
                "number": 25.72,
                "time": "2018-11-15 11:50:00"
            },
            {
                "number": 25.72,
                "time": "2018-11-15 12:00:00"
            },
            {
                "number": 25.72,
                "time": "2018-11-15 12:10:00"
            },
            {
                "number": 25.72,
                "time": "2018-11-15 12:20:00"
            },
            {
                "number": 25.73,
                "time": "2018-11-15 12:30:00"
            },
            {
                "number": 25.73,
                "time": "2018-11-15 12:40:00"
            },
            {
                "number": 25.73,
                "time": "2018-11-15 12:50:00"
            },
            {
                "number": 25.73,
                "time": "2018-11-15 13:00:00"
            },
            {
                "number": 25.73,
                "time": "2018-11-15 13:10:00"
            },
            {
                "number": 25.69,
                "time": "2018-11-15 13:20:00"
            },
            {
                "number": 25.67,
                "time": "2018-11-15 13:30:00"
            },
            {
                "number": 25.68,
                "time": "2018-11-15 13:40:00"
            },
            {
                "number": 25.68,
                "time": "2018-11-15 13:50:00"
            },
            {
                "number": 25.68,
                "time": "2018-11-15 14:00:00"
            },
            {
                "number": 25.68,
                "time": "2018-11-15 14:10:00"
            },
            {
                "number": 25.68,
                "time": "2018-11-15 14:20:00"
            },
            {
                "number": 25.68,
                "time": "2018-11-15 14:30:00"
            },
            {
                "number": 25.68,
                "time": "2018-11-15 14:40:00"
            },
            {
                "number": 25.68,
                "time": "2018-11-15 14:50:00"
            },
            {
                "number": 25.68,
                "time": "2018-11-15 15:00:00"
            },
            {
                "number": 25.69,
                "time": "2018-11-15 15:10:00"
            },
            {
                "number": 25.69,
                "time": "2018-11-15 15:20:00"
            },
            {
                "number": 25.69,
                "time": "2018-11-15 15:30:00"
            },
            {
                "number": 25.7,
                "time": "2018-11-15 15:40:00"
            },
            {
                "number": 25.7,
                "time": "2018-11-15 15:50:00"
            },
            {
                "number": 25.7,
                "time": "2018-11-15 16:00:00"
            },
            {
                "number": 25.7,
                "time": "2018-11-15 16:10:00"
            },
            {
                "number": 25.71,
                "time": "2018-11-15 16:20:00"
            },
            {
                "number": 25.71,
                "time": "2018-11-15 16:30:00"
            },
            {
                "number": 25.71,
                "time": "2018-11-15 16:40:00"
            },
            {
                "number": 25.62,
                "time": "2018-11-15 16:50:00"
            },
            {
                "number": 25.57,
                "time": "2018-11-15 17:00:00"
            },
            {
                "number": 25.56,
                "time": "2018-11-15 17:10:00"
            },
            {
                "number": 25.56,
                "time": "2018-11-15 17:20:00"
            },
            {
                "number": 25.56,
                "time": "2018-11-15 17:30:00"
            },
            {
                "number": 25.57,
                "time": "2018-11-15 17:40:00"
            },
            {
                "number": 25.55,
                "time": "2018-11-15 17:50:00"
            },
            {
                "number": 25.55,
                "time": "2018-11-15 18:00:00"
            },
            {
                "number": 25.55,
                "time": "2018-11-15 18:10:00"
            },
            {
                "number": 25.55,
                "time": "2018-11-15 18:20:00"
            },
            {
                "number": 25.56,
                "time": "2018-11-15 18:30:00"
            },
            {
                "number": 25.56,
                "time": "2018-11-15 18:40:00"
            },
            {
                "number": 25.56,
                "time": "2018-11-15 18:50:00"
            },
            {
                "number": 25.56,
                "time": "2018-11-15 19:00:00"
            },
            {
                "number": 25.57,
                "time": "2018-11-15 19:10:00"
            },
            {
                "number": 25.58,
                "time": "2018-11-15 19:20:00"
            },
            {
                "number": 25.59,
                "time": "2018-11-15 19:30:00"
            },
            {
                "number": 25.57,
                "time": "2018-11-15 19:40:00"
            },
            {
                "number": 25.57,
                "time": "2018-11-15 19:50:00"
            },
            {
                "number": 25.57,
                "time": "2018-11-15 20:00:00"
            },
            {
                "number": 25.57,
                "time": "2018-11-15 20:10:00"
            },
            {
                "number": 25.57,
                "time": "2018-11-15 20:20:00"
            },
            {
                "number": 25.58,
                "time": "2018-11-15 20:30:00"
            },
            {
                "number": 25.58,
                "time": "2018-11-15 20:40:00"
            },
            {
                "number": 25.57,
                "time": "2018-11-15 20:50:00"
            },
            {
                "number": 25.58,
                "time": "2018-11-15 21:00:00"
            },
            {
                "number": 25.58,
                "time": "2018-11-15 21:10:00"
            },
            {
                "number": 25.58,
                "time": "2018-11-15 21:20:00"
            },
            {
                "number": 25.58,
                "time": "2018-11-15 21:30:00"
            },
            {
                "number": 25.58,
                "time": "2018-11-15 21:40:00"
            },
            {
                "number": 25.58,
                "time": "2018-11-15 21:50:00"
            },
            {
                "number": 25.58,
                "time": "2018-11-15 22:00:00"
            },
            {
                "number": 25.58,
                "time": "2018-11-15 22:10:00"
            },
            {
                "number": 25.59,
                "time": "2018-11-15 22:20:00"
            },
            {
                "number": 25.6,
                "time": "2018-11-15 22:30:00"
            },
            {
                "number": 25.6,
                "time": "2018-11-15 22:40:00"
            },
            {
                "number": 25.6,
                "time": "2018-11-15 22:50:00"
            },
            {
                "number": 25.6,
                "time": "2018-11-15 23:00:00"
            },
            {
                "number": 25.6,
                "time": "2018-11-15 23:10:00"
            },
            {
                "number": 25.61,
                "time": "2018-11-15 23:20:00"
            },
            {
                "number": 25.61,
                "time": "2018-11-15 23:30:00"
            },
            {
                "number": 25.61,
                "time": "2018-11-15 23:40:00"
            },
            {
                "number": 25.61,
                "time": "2018-11-15 23:50:00"
            },
            {
                "number": 25.61,
                "time": "2018-11-16 00:00:00"
            },
            {
                "number": 25.62,
                "time": "2018-11-16 00:10:00"
            },
            {
                "number": 25.62,
                "time": "2018-11-16 00:20:00"
            },
            {
                "number": 25.62,
                "time": "2018-11-16 00:30:00"
            },
            {
                "number": 25.62,
                "time": "2018-11-16 00:40:00"
            },
            {
                "number": 25.63,
                "time": "2018-11-16 00:50:00"
            },
            {
                "number": 25.63,
                "time": "2018-11-16 01:00:00"
            },
            {
                "number": 25.62,
                "time": "2018-11-16 01:10:00"
            },
            {
                "number": 25.63,
                "time": "2018-11-16 01:20:00"
            },
            {
                "number": 25.63,
                "time": "2018-11-16 01:30:00"
            },
            {
                "number": 25.63,
                "time": "2018-11-16 01:40:00"
            },
            {
                "number": 25.63,
                "time": "2018-11-16 01:50:00"
            },
            {
                "number": 25.63,
                "time": "2018-11-16 02:00:00"
            },
            {
                "number": 25.64,
                "time": "2018-11-16 02:10:00"
            },
            {
                "number": 25.64,
                "time": "2018-11-16 02:20:00"
            },
            {
                "number": 25.64,
                "time": "2018-11-16 02:30:00"
            },
            {
                "number": 25.64,
                "time": "2018-11-16 02:40:00"
            },
            {
                "number": 25.64,
                "time": "2018-11-16 02:50:00"
            },
            {
                "number": 25.65,
                "time": "2018-11-16 03:00:00"
            },
            {
                "number": 25.65,
                "time": "2018-11-16 03:10:00"
            },
            {
                "number": 25.65,
                "time": "2018-11-16 03:20:00"
            },
            {
                "number": 25.65,
                "time": "2018-11-16 03:30:00"
            },
            {
                "number": 25.66,
                "time": "2018-11-16 03:40:00"
            },
            {
                "number": 25.66,
                "time": "2018-11-16 03:50:00"
            },
            {
                "number": 25.66,
                "time": "2018-11-16 04:00:00"
            },
            {
                "number": 25.66,
                "time": "2018-11-16 04:10:00"
            },
            {
                "number": 25.66,
                "time": "2018-11-16 04:20:00"
            },
            {
                "number": 25.66,
                "time": "2018-11-16 04:30:00"
            },
            {
                "number": 25.66,
                "time": "2018-11-16 04:40:00"
            },
            {
                "number": 25.67,
                "time": "2018-11-16 04:50:00"
            },
            {
                "number": 25.64,
                "time": "2018-11-16 05:00:00"
            },
            {
                "number": 25.63,
                "time": "2018-11-16 05:10:00"
            },
            {
                "number": 25.63,
                "time": "2018-11-16 05:20:00"
            },
            {
                "number": 25.64,
                "time": "2018-11-16 05:30:00"
            },
            {
                "number": 25.64,
                "time": "2018-11-16 05:40:00"
            },
            {
                "number": 25.64,
                "time": "2018-11-16 05:50:00"
            },
            {
                "number": 25.65,
                "time": "2018-11-16 06:00:00"
            },
            {
                "number": 25.65,
                "time": "2018-11-16 06:10:00"
            },
            {
                "number": 25.65,
                "time": "2018-11-16 06:20:00"
            },
            {
                "number": 25.66,
                "time": "2018-11-16 06:30:00"
            },
            {
                "number": 25.66,
                "time": "2018-11-16 06:40:00"
            },
            {
                "number": 25.66,
                "time": "2018-11-16 06:50:00"
            },
            {
                "number": 25.66,
                "time": "2018-11-16 07:00:00"
            },
            {
                "number": 25.66,
                "time": "2018-11-16 07:10:00"
            },
            {
                "number": 25.67,
                "time": "2018-11-16 07:20:00"
            },
            {
                "number": 25.66,
                "time": "2018-11-16 07:30:00"
            },
            {
                "number": 25.61,
                "time": "2018-11-16 07:40:00"
            },
            {
                "number": 25.62,
                "time": "2018-11-16 07:50:00"
            },
            {
                "number": 25.64,
                "time": "2018-11-16 08:00:00"
            },
            {
                "number": 25.64,
                "time": "2018-11-16 08:10:00"
            },
            {
                "number": 25.64,
                "time": "2018-11-16 08:20:00"
            },
            {
                "number": 25.63,
                "time": "2018-11-16 08:30:00"
            },
            {
                "number": 25.63,
                "time": "2018-11-16 08:40:00"
            },
            {
                "number": 25.63,
                "time": "2018-11-16 08:50:00"
            },
            {
                "number": 25.63,
                "time": "2018-11-16 09:00:00"
            },
            {
                "number": 25.63,
                "time": "2018-11-16 09:10:00"
            },
            {
                "number": 25.63,
                "time": "2018-11-16 09:20:00"
            }
        ]
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

exports.getFlow = async (req, res) => {
    try {
        const data = {
            "system.net.bytes_sent": [
                {
                    "number": 7447569,
                    "time": "2018-11-18 04:40:00"
                },
                {
                    "number": 6568807,
                    "time": "2018-11-18 04:50:00"
                },
                {
                    "number": 5724832,
                    "time": "2018-11-18 05:00:00"
                },
                {
                    "number": 4646918,
                    "time": "2018-11-18 05:10:00"
                },
                {
                    "number": 4010994,
                    "time": "2018-11-18 05:20:00"
                },
                {
                    "number": 4971689,
                    "time": "2018-11-18 05:30:00"
                },
                {
                    "number": 5113768,
                    "time": "2018-11-18 05:40:00"
                },
                {
                    "number": 3741957,
                    "time": "2018-11-18 05:50:00"
                },
                {
                    "number": 3323675,
                    "time": "2018-11-18 06:00:00"
                },
                {
                    "number": 2664479,
                    "time": "2018-11-18 06:10:00"
                },
                {
                    "number": 2740882,
                    "time": "2018-11-18 06:20:00"
                },
                {
                    "number": 1988193,
                    "time": "2018-11-18 06:30:00"
                },
                {
                    "number": 3750961,
                    "time": "2018-11-18 06:40:00"
                },
                {
                    "number": 2689245,
                    "time": "2018-11-18 06:50:00"
                },
                {
                    "number": 2153243,
                    "time": "2018-11-18 07:00:00"
                },
                {
                    "number": 2829774,
                    "time": "2018-11-18 07:10:00"
                },
                {
                    "number": 5017427,
                    "time": "2018-11-18 07:20:00"
                },
                {
                    "number": 5472201,
                    "time": "2018-11-18 07:30:00"
                },
                {
                    "number": 3599100,
                    "time": "2018-11-18 07:40:00"
                },
                {
                    "number": 5103636,
                    "time": "2018-11-18 07:50:00"
                },
                {
                    "number": 4516133,
                    "time": "2018-11-18 08:00:00"
                },
                {
                    "number": 1522395,
                    "time": "2018-11-18 08:10:00"
                },
                {
                    "number": 1785633,
                    "time": "2018-11-18 08:20:00"
                },
                {
                    "number": 1277046,
                    "time": "2018-11-18 08:30:00"
                },
                {
                    "number": 2567765,
                    "time": "2018-11-18 08:40:00"
                },
                {
                    "number": 2316156,
                    "time": "2018-11-18 08:50:00"
                },
                {
                    "number": 2213524,
                    "time": "2018-11-18 09:00:00"
                },
                {
                    "number": 1313437,
                    "time": "2018-11-18 09:10:00"
                },
                {
                    "number": 1075784,
                    "time": "2018-11-18 09:20:00"
                },
                {
                    "number": 967021,
                    "time": "2018-11-18 09:30:00"
                },
                {
                    "number": 1951736,
                    "time": "2018-11-18 09:40:00"
                },
                {
                    "number": 1644748,
                    "time": "2018-11-18 09:50:00"
                },
                {
                    "number": 2596213,
                    "time": "2018-11-18 10:00:00"
                },
                {
                    "number": 1074197,
                    "time": "2018-11-18 10:10:00"
                },
                {
                    "number": 2722467,
                    "time": "2018-11-18 10:20:00"
                },
                {
                    "number": 4352394,
                    "time": "2018-11-18 10:30:00"
                },
                {
                    "number": 5667916,
                    "time": "2018-11-18 10:40:00"
                },
                {
                    "number": 4513588,
                    "time": "2018-11-18 10:50:00"
                },
                {
                    "number": 3861497,
                    "time": "2018-11-18 11:00:00"
                },
                {
                    "number": 2531145,
                    "time": "2018-11-18 11:10:00"
                },
                {
                    "number": 3207090,
                    "time": "2018-11-18 11:20:00"
                },
                {
                    "number": 3461436,
                    "time": "2018-11-18 11:30:00"
                },
                {
                    "number": 3432345,
                    "time": "2018-11-18 11:40:00"
                },
                {
                    "number": 3650935,
                    "time": "2018-11-18 11:50:00"
                },
                {
                    "number": 2008634,
                    "time": "2018-11-18 12:00:00"
                },
                {
                    "number": 2364019,
                    "time": "2018-11-18 12:10:00"
                },
                {
                    "number": 946552,
                    "time": "2018-11-18 12:20:00"
                },
                {
                    "number": 1551323,
                    "time": "2018-11-18 12:30:00"
                },
                {
                    "number": 1272040,
                    "time": "2018-11-18 12:40:00"
                },
                {
                    "number": 1127344,
                    "time": "2018-11-18 12:50:00"
                },
                {
                    "number": 1478921,
                    "time": "2018-11-18 13:00:00"
                },
                {
                    "number": 653028,
                    "time": "2018-11-18 13:10:00"
                },
                {
                    "number": 613947,
                    "time": "2018-11-18 13:20:00"
                },
                {
                    "number": 705542,
                    "time": "2018-11-18 13:30:00"
                },
                {
                    "number": 643088,
                    "time": "2018-11-18 13:40:00"
                },
                {
                    "number": 641872,
                    "time": "2018-11-18 13:50:00"
                },
                {
                    "number": 842428,
                    "time": "2018-11-18 14:00:00"
                },
                {
                    "number": 307180,
                    "time": "2018-11-18 14:10:00"
                },
                {
                    "number": 990891,
                    "time": "2018-11-18 14:20:00"
                },
                {
                    "number": 886704,
                    "time": "2018-11-18 14:30:00"
                },
                {
                    "number": 663826,
                    "time": "2018-11-18 14:40:00"
                },
                {
                    "number": 446130,
                    "time": "2018-11-18 14:50:00"
                },
                {
                    "number": 720230,
                    "time": "2018-11-18 15:00:00"
                },
                {
                    "number": 325679,
                    "time": "2018-11-18 15:10:00"
                },
                {
                    "number": 873646,
                    "time": "2018-11-18 15:20:00"
                },
                {
                    "number": 1381030,
                    "time": "2018-11-18 15:30:00"
                },
                {
                    "number": 1754799,
                    "time": "2018-11-18 15:40:00"
                },
                {
                    "number": 2880568,
                    "time": "2018-11-18 15:50:00"
                },
                {
                    "number": 3339354,
                    "time": "2018-11-18 16:00:00"
                },
                {
                    "number": 1982127,
                    "time": "2018-11-18 16:10:00"
                },
                {
                    "number": 1965090,
                    "time": "2018-11-18 16:20:00"
                },
                {
                    "number": 4216603,
                    "time": "2018-11-18 16:30:00"
                },
                {
                    "number": 4262416,
                    "time": "2018-11-18 16:40:00"
                },
                {
                    "number": 5961630,
                    "time": "2018-11-18 16:50:00"
                },
                {
                    "number": 5396071,
                    "time": "2018-11-18 17:00:00"
                },
                {
                    "number": 5199804,
                    "time": "2018-11-18 17:10:00"
                },
                {
                    "number": 4630080,
                    "time": "2018-11-18 17:20:00"
                },
                {
                    "number": 4259633,
                    "time": "2018-11-18 17:30:00"
                },
                {
                    "number": 5520498,
                    "time": "2018-11-18 17:40:00"
                },
                {
                    "number": 4264917,
                    "time": "2018-11-18 17:50:00"
                },
                {
                    "number": 6021458,
                    "time": "2018-11-18 18:00:00"
                },
                {
                    "number": 2618022,
                    "time": "2018-11-18 18:10:00"
                },
                {
                    "number": 2467991,
                    "time": "2018-11-18 18:20:00"
                },
                {
                    "number": 2472105,
                    "time": "2018-11-18 18:30:00"
                },
                {
                    "number": 2266545,
                    "time": "2018-11-18 18:40:00"
                },
                {
                    "number": 2218344,
                    "time": "2018-11-18 18:50:00"
                },
                {
                    "number": 1535111,
                    "time": "2018-11-18 19:00:00"
                },
                {
                    "number": 3494523,
                    "time": "2018-11-18 19:10:00"
                },
                {
                    "number": 6287693,
                    "time": "2018-11-18 19:20:00"
                },
                {
                    "number": 4333615,
                    "time": "2018-11-18 19:30:00"
                },
                {
                    "number": 4954200,
                    "time": "2018-11-18 19:40:00"
                },
                {
                    "number": 4125110,
                    "time": "2018-11-18 19:50:00"
                },
                {
                    "number": 3042695,
                    "time": "2018-11-18 20:00:00"
                },
                {
                    "number": 1494926,
                    "time": "2018-11-18 20:10:00"
                },
                {
                    "number": 842076,
                    "time": "2018-11-18 20:20:00"
                },
                {
                    "number": 1202100,
                    "time": "2018-11-18 20:30:00"
                },
                {
                    "number": 1712589,
                    "time": "2018-11-18 20:40:00"
                },
                {
                    "number": 2281071,
                    "time": "2018-11-18 20:50:00"
                },
                {
                    "number": 2382505,
                    "time": "2018-11-18 21:00:00"
                },
                {
                    "number": 1637427,
                    "time": "2018-11-18 21:10:00"
                },
                {
                    "number": 1336876,
                    "time": "2018-11-18 21:20:00"
                },
                {
                    "number": 989329,
                    "time": "2018-11-18 21:30:00"
                },
                {
                    "number": 1800511,
                    "time": "2018-11-18 21:40:00"
                },
                {
                    "number": 2042688,
                    "time": "2018-11-18 21:50:00"
                },
                {
                    "number": 1489245,
                    "time": "2018-11-18 22:00:00"
                },
                {
                    "number": 2019210,
                    "time": "2018-11-18 22:10:00"
                },
                {
                    "number": 1122201,
                    "time": "2018-11-18 22:20:00"
                },
                {
                    "number": 3925306,
                    "time": "2018-11-18 22:30:00"
                },
                {
                    "number": 5568205,
                    "time": "2018-11-18 22:40:00"
                },
                {
                    "number": 6108661,
                    "time": "2018-11-18 22:50:00"
                },
                {
                    "number": 4023673,
                    "time": "2018-11-18 23:00:00"
                },
                {
                    "number": 3978538,
                    "time": "2018-11-18 23:10:00"
                },
                {
                    "number": 4186528,
                    "time": "2018-11-18 23:20:00"
                },
                {
                    "number": 2970484,
                    "time": "2018-11-18 23:30:00"
                },
                {
                    "number": 4515285,
                    "time": "2018-11-18 23:40:00"
                },
                {
                    "number": 3656253,
                    "time": "2018-11-18 23:50:00"
                },
                {
                    "number": 2551760,
                    "time": "2018-11-19 00:00:00"
                },
                {
                    "number": 1347732,
                    "time": "2018-11-19 00:10:00"
                },
                {
                    "number": 1633548,
                    "time": "2018-11-19 00:20:00"
                },
                {
                    "number": 1586227,
                    "time": "2018-11-19 00:30:00"
                },
                {
                    "number": 1695910,
                    "time": "2018-11-19 00:40:00"
                },
                {
                    "number": 1286156,
                    "time": "2018-11-19 00:50:00"
                },
                {
                    "number": 819760,
                    "time": "2018-11-19 01:00:00"
                },
                {
                    "number": 459140,
                    "time": "2018-11-19 01:10:00"
                },
                {
                    "number": 645302,
                    "time": "2018-11-19 01:20:00"
                },
                {
                    "number": 1205715,
                    "time": "2018-11-19 01:30:00"
                },
                {
                    "number": 876087,
                    "time": "2018-11-19 01:40:00"
                },
                {
                    "number": 590013,
                    "time": "2018-11-19 01:50:00"
                },
                {
                    "number": 974641,
                    "time": "2018-11-19 02:00:00"
                },
                {
                    "number": 783871,
                    "time": "2018-11-19 02:10:00"
                },
                {
                    "number": 807357,
                    "time": "2018-11-19 02:20:00"
                },
                {
                    "number": 798273,
                    "time": "2018-11-19 02:30:00"
                },
                {
                    "number": 839968,
                    "time": "2018-11-19 02:40:00"
                },
                {
                    "number": 1531196,
                    "time": "2018-11-19 02:50:00"
                },
                {
                    "number": 1117156,
                    "time": "2018-11-19 03:00:00"
                },
                {
                    "number": 1218997,
                    "time": "2018-11-19 03:10:00"
                },
                {
                    "number": 1088316,
                    "time": "2018-11-19 03:20:00"
                },
                {
                    "number": 1804143,
                    "time": "2018-11-19 03:30:00"
                },
                {
                    "number": 1800284,
                    "time": "2018-11-19 03:40:00"
                },
                {
                    "number": 2248122,
                    "time": "2018-11-19 03:50:00"
                },
                {
                    "number": 3248534,
                    "time": "2018-11-19 04:00:00"
                },
                {
                    "number": 1517712,
                    "time": "2018-11-19 04:10:00"
                },
                {
                    "number": 2823539,
                    "time": "2018-11-19 04:20:00"
                },
                {
                    "number": 1644403,
                    "time": "2018-11-19 04:30:00"
                }
            ],
            "system.net.bytes_rcvd": [
                {
                    "number": 9400930,
                    "time": "2018-11-18 04:40:00"
                },
                {
                    "number": 8520565,
                    "time": "2018-11-18 04:50:00"
                },
                {
                    "number": 7064416,
                    "time": "2018-11-18 05:00:00"
                },
                {
                    "number": 5933467,
                    "time": "2018-11-18 05:10:00"
                },
                {
                    "number": 5161319,
                    "time": "2018-11-18 05:20:00"
                },
                {
                    "number": 5832745,
                    "time": "2018-11-18 05:30:00"
                },
                {
                    "number": 6404564,
                    "time": "2018-11-18 05:40:00"
                },
                {
                    "number": 4383627,
                    "time": "2018-11-18 05:50:00"
                },
                {
                    "number": 4020587,
                    "time": "2018-11-18 06:00:00"
                },
                {
                    "number": 3038249,
                    "time": "2018-11-18 06:10:00"
                },
                {
                    "number": 2448304,
                    "time": "2018-11-18 06:20:00"
                },
                {
                    "number": 1848372,
                    "time": "2018-11-18 06:30:00"
                },
                {
                    "number": 4713512,
                    "time": "2018-11-18 06:40:00"
                },
                {
                    "number": 2166431,
                    "time": "2018-11-18 06:50:00"
                },
                {
                    "number": 2302547,
                    "time": "2018-11-18 07:00:00"
                },
                {
                    "number": 2994500,
                    "time": "2018-11-18 07:10:00"
                },
                {
                    "number": 4891954,
                    "time": "2018-11-18 07:20:00"
                },
                {
                    "number": 5893801,
                    "time": "2018-11-18 07:30:00"
                },
                {
                    "number": 3642560,
                    "time": "2018-11-18 07:40:00"
                },
                {
                    "number": 4617826,
                    "time": "2018-11-18 07:50:00"
                },
                {
                    "number": 4090050,
                    "time": "2018-11-18 08:00:00"
                },
                {
                    "number": 1329586,
                    "time": "2018-11-18 08:10:00"
                },
                {
                    "number": 1896199,
                    "time": "2018-11-18 08:20:00"
                },
                {
                    "number": 1203303,
                    "time": "2018-11-18 08:30:00"
                },
                {
                    "number": 2075316,
                    "time": "2018-11-18 08:40:00"
                },
                {
                    "number": 2129983,
                    "time": "2018-11-18 08:50:00"
                },
                {
                    "number": 2152434,
                    "time": "2018-11-18 09:00:00"
                },
                {
                    "number": 1571165,
                    "time": "2018-11-18 09:10:00"
                },
                {
                    "number": 1098142,
                    "time": "2018-11-18 09:20:00"
                },
                {
                    "number": 939319,
                    "time": "2018-11-18 09:30:00"
                },
                {
                    "number": 2057145,
                    "time": "2018-11-18 09:40:00"
                },
                {
                    "number": 1615862,
                    "time": "2018-11-18 09:50:00"
                },
                {
                    "number": 3162390,
                    "time": "2018-11-18 10:00:00"
                },
                {
                    "number": 1234447,
                    "time": "2018-11-18 10:10:00"
                },
                {
                    "number": 3635074,
                    "time": "2018-11-18 10:20:00"
                },
                {
                    "number": 5483258,
                    "time": "2018-11-18 10:30:00"
                },
                {
                    "number": 7816907,
                    "time": "2018-11-18 10:40:00"
                },
                {
                    "number": 5473922,
                    "time": "2018-11-18 10:50:00"
                },
                {
                    "number": 4826626,
                    "time": "2018-11-18 11:00:00"
                },
                {
                    "number": 3304483,
                    "time": "2018-11-18 11:10:00"
                },
                {
                    "number": 4437012,
                    "time": "2018-11-18 11:20:00"
                },
                {
                    "number": 4347001,
                    "time": "2018-11-18 11:30:00"
                },
                {
                    "number": 4254004,
                    "time": "2018-11-18 11:40:00"
                },
                {
                    "number": 4694187,
                    "time": "2018-11-18 11:50:00"
                },
                {
                    "number": 2103729,
                    "time": "2018-11-18 12:00:00"
                },
                {
                    "number": 3113672,
                    "time": "2018-11-18 12:10:00"
                },
                {
                    "number": 1122385,
                    "time": "2018-11-18 12:20:00"
                },
                {
                    "number": 1828115,
                    "time": "2018-11-18 12:30:00"
                },
                {
                    "number": 1486835,
                    "time": "2018-11-18 12:40:00"
                },
                {
                    "number": 1676892,
                    "time": "2018-11-18 12:50:00"
                },
                {
                    "number": 1489171,
                    "time": "2018-11-18 13:00:00"
                },
                {
                    "number": 522160,
                    "time": "2018-11-18 13:10:00"
                },
                {
                    "number": 504495,
                    "time": "2018-11-18 13:20:00"
                },
                {
                    "number": 733025,
                    "time": "2018-11-18 13:30:00"
                },
                {
                    "number": 716038,
                    "time": "2018-11-18 13:40:00"
                },
                {
                    "number": 624140,
                    "time": "2018-11-18 13:50:00"
                },
                {
                    "number": 700281,
                    "time": "2018-11-18 14:00:00"
                },
                {
                    "number": 300720,
                    "time": "2018-11-18 14:10:00"
                },
                {
                    "number": 674451,
                    "time": "2018-11-18 14:20:00"
                },
                {
                    "number": 545160,
                    "time": "2018-11-18 14:30:00"
                },
                {
                    "number": 541597,
                    "time": "2018-11-18 14:40:00"
                },
                {
                    "number": 402065,
                    "time": "2018-11-18 14:50:00"
                },
                {
                    "number": 572784,
                    "time": "2018-11-18 15:00:00"
                },
                {
                    "number": 401180,
                    "time": "2018-11-18 15:10:00"
                },
                {
                    "number": 1093601,
                    "time": "2018-11-18 15:20:00"
                },
                {
                    "number": 1668368,
                    "time": "2018-11-18 15:30:00"
                },
                {
                    "number": 2170646,
                    "time": "2018-11-18 15:40:00"
                },
                {
                    "number": 3887611,
                    "time": "2018-11-18 15:50:00"
                },
                {
                    "number": 4362813,
                    "time": "2018-11-18 16:00:00"
                },
                {
                    "number": 2778770,
                    "time": "2018-11-18 16:10:00"
                },
                {
                    "number": 2532406,
                    "time": "2018-11-18 16:20:00"
                },
                {
                    "number": 5514328,
                    "time": "2018-11-18 16:30:00"
                },
                {
                    "number": 5519623,
                    "time": "2018-11-18 16:40:00"
                },
                {
                    "number": 8040949,
                    "time": "2018-11-18 16:50:00"
                },
                {
                    "number": 6772609,
                    "time": "2018-11-18 17:00:00"
                },
                {
                    "number": 6802434,
                    "time": "2018-11-18 17:10:00"
                },
                {
                    "number": 5659274,
                    "time": "2018-11-18 17:20:00"
                },
                {
                    "number": 5573786,
                    "time": "2018-11-18 17:30:00"
                },
                {
                    "number": 6978349,
                    "time": "2018-11-18 17:40:00"
                },
                {
                    "number": 5336577,
                    "time": "2018-11-18 17:50:00"
                },
                {
                    "number": 6663170,
                    "time": "2018-11-18 18:00:00"
                },
                {
                    "number": 2838645,
                    "time": "2018-11-18 18:10:00"
                },
                {
                    "number": 2670869,
                    "time": "2018-11-18 18:20:00"
                },
                {
                    "number": 2199730,
                    "time": "2018-11-18 18:30:00"
                },
                {
                    "number": 1987827,
                    "time": "2018-11-18 18:40:00"
                },
                {
                    "number": 1987614,
                    "time": "2018-11-18 18:50:00"
                },
                {
                    "number": 1777713,
                    "time": "2018-11-18 19:00:00"
                },
                {
                    "number": 3893330,
                    "time": "2018-11-18 19:10:00"
                },
                {
                    "number": 6106205,
                    "time": "2018-11-18 19:20:00"
                },
                {
                    "number": 3854768,
                    "time": "2018-11-18 19:30:00"
                },
                {
                    "number": 4776284,
                    "time": "2018-11-18 19:40:00"
                },
                {
                    "number": 3740955,
                    "time": "2018-11-18 19:50:00"
                },
                {
                    "number": 2651075,
                    "time": "2018-11-18 20:00:00"
                },
                {
                    "number": 1606670,
                    "time": "2018-11-18 20:10:00"
                },
                {
                    "number": 1007280,
                    "time": "2018-11-18 20:20:00"
                },
                {
                    "number": 1169799,
                    "time": "2018-11-18 20:30:00"
                },
                {
                    "number": 1627655,
                    "time": "2018-11-18 20:40:00"
                },
                {
                    "number": 1794950,
                    "time": "2018-11-18 20:50:00"
                },
                {
                    "number": 2262018,
                    "time": "2018-11-18 21:00:00"
                },
                {
                    "number": 1715110,
                    "time": "2018-11-18 21:10:00"
                },
                {
                    "number": 1486219,
                    "time": "2018-11-18 21:20:00"
                },
                {
                    "number": 1050669,
                    "time": "2018-11-18 21:30:00"
                },
                {
                    "number": 1581142,
                    "time": "2018-11-18 21:40:00"
                },
                {
                    "number": 2688352,
                    "time": "2018-11-18 21:50:00"
                },
                {
                    "number": 1657892,
                    "time": "2018-11-18 22:00:00"
                },
                {
                    "number": 2564083,
                    "time": "2018-11-18 22:10:00"
                },
                {
                    "number": 1428473,
                    "time": "2018-11-18 22:20:00"
                },
                {
                    "number": 3867822,
                    "time": "2018-11-18 22:30:00"
                },
                {
                    "number": 5312573,
                    "time": "2018-11-18 22:40:00"
                },
                {
                    "number": 8155526,
                    "time": "2018-11-18 22:50:00"
                },
                {
                    "number": 4777550,
                    "time": "2018-11-18 23:00:00"
                },
                {
                    "number": 5173135,
                    "time": "2018-11-18 23:10:00"
                },
                {
                    "number": 5635013,
                    "time": "2018-11-18 23:20:00"
                },
                {
                    "number": 3650956,
                    "time": "2018-11-18 23:30:00"
                },
                {
                    "number": 5401056,
                    "time": "2018-11-18 23:40:00"
                },
                {
                    "number": 4221880,
                    "time": "2018-11-18 23:50:00"
                },
                {
                    "number": 3346565,
                    "time": "2018-11-19 00:00:00"
                },
                {
                    "number": 1736574,
                    "time": "2018-11-19 00:10:00"
                },
                {
                    "number": 2111529,
                    "time": "2018-11-19 00:20:00"
                },
                {
                    "number": 1783983,
                    "time": "2018-11-19 00:30:00"
                },
                {
                    "number": 1516509,
                    "time": "2018-11-19 00:40:00"
                },
                {
                    "number": 1365468,
                    "time": "2018-11-19 00:50:00"
                },
                {
                    "number": 741867,
                    "time": "2018-11-19 01:00:00"
                },
                {
                    "number": 416816,
                    "time": "2018-11-19 01:10:00"
                },
                {
                    "number": 569550,
                    "time": "2018-11-19 01:20:00"
                },
                {
                    "number": 970208,
                    "time": "2018-11-19 01:30:00"
                },
                {
                    "number": 684108,
                    "time": "2018-11-19 01:40:00"
                },
                {
                    "number": 378334,
                    "time": "2018-11-19 01:50:00"
                },
                {
                    "number": 803714,
                    "time": "2018-11-19 02:00:00"
                },
                {
                    "number": 496543,
                    "time": "2018-11-19 02:10:00"
                },
                {
                    "number": 708582,
                    "time": "2018-11-19 02:20:00"
                },
                {
                    "number": 708930,
                    "time": "2018-11-19 02:30:00"
                },
                {
                    "number": 911088,
                    "time": "2018-11-19 02:40:00"
                },
                {
                    "number": 1182126,
                    "time": "2018-11-19 02:50:00"
                },
                {
                    "number": 935562,
                    "time": "2018-11-19 03:00:00"
                },
                {
                    "number": 1111960,
                    "time": "2018-11-19 03:10:00"
                },
                {
                    "number": 1257278,
                    "time": "2018-11-19 03:20:00"
                },
                {
                    "number": 2205246,
                    "time": "2018-11-19 03:30:00"
                },
                {
                    "number": 2060077,
                    "time": "2018-11-19 03:40:00"
                },
                {
                    "number": 2659603,
                    "time": "2018-11-19 03:50:00"
                },
                {
                    "number": 3435068,
                    "time": "2018-11-19 04:00:00"
                },
                {
                    "number": 1554298,
                    "time": "2018-11-19 04:10:00"
                },
                {
                    "number": 3577692,
                    "time": "2018-11-19 04:20:00"
                },
                {
                    "number": 2724346,
                    "time": "2018-11-19 04:30:00"
                }
            ]
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

exports.getCpuInfo = async (req, res) => {
    try {
        const data = {
            "system.cpu.system": [
                {
                    "number": 0.5,
                    "time": "2018-11-15 09:30:00"
                },
                {
                    "number": 0.5,
                    "time": "2018-11-15 09:40:00"
                },
                {
                    "number": 1,
                    "time": "2018-11-15 09:50:00"
                },
                {
                    "number": 0.7,
                    "time": "2018-11-15 10:00:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-15 10:10:00"
                },
                {
                    "number": 0.5,
                    "time": "2018-11-15 10:20:00"
                },
                {
                    "number": 0.5,
                    "time": "2018-11-15 10:30:00"
                },
                {
                    "number": 0.9,
                    "time": "2018-11-15 10:40:00"
                },
                {
                    "number": 0.8,
                    "time": "2018-11-15 10:50:00"
                },
                {
                    "number": 1.1,
                    "time": "2018-11-15 11:00:00"
                },
                {
                    "number": 1,
                    "time": "2018-11-15 11:10:00"
                },
                {
                    "number": 0.8,
                    "time": "2018-11-15 11:20:00"
                },
                {
                    "number": 0.8,
                    "time": "2018-11-15 11:30:00"
                },
                {
                    "number": 0.9,
                    "time": "2018-11-15 11:40:00"
                },
                {
                    "number": 0.7,
                    "time": "2018-11-15 11:50:00"
                },
                {
                    "number": 0.9,
                    "time": "2018-11-15 12:00:00"
                },
                {
                    "number": 0.7,
                    "time": "2018-11-15 12:10:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-15 12:20:00"
                },
                {
                    "number": 0.5,
                    "time": "2018-11-15 12:30:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-15 12:40:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-15 12:50:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-15 13:00:00"
                },
                {
                    "number": 0.8,
                    "time": "2018-11-15 13:10:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-15 13:20:00"
                },
                {
                    "number": 0.5,
                    "time": "2018-11-15 13:30:00"
                },
                {
                    "number": 0.5,
                    "time": "2018-11-15 13:40:00"
                },
                {
                    "number": 0.5,
                    "time": "2018-11-15 13:50:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-15 14:00:00"
                },
                {
                    "number": 0.5,
                    "time": "2018-11-15 14:10:00"
                },
                {
                    "number": 0.7,
                    "time": "2018-11-15 14:20:00"
                },
                {
                    "number": 0.5,
                    "time": "2018-11-15 14:30:00"
                },
                {
                    "number": 0.4,
                    "time": "2018-11-15 14:40:00"
                },
                {
                    "number": 0.5,
                    "time": "2018-11-15 14:50:00"
                },
                {
                    "number": 0.5,
                    "time": "2018-11-15 15:00:00"
                },
                {
                    "number": 0.5,
                    "time": "2018-11-15 15:10:00"
                },
                {
                    "number": 0.7,
                    "time": "2018-11-15 15:20:00"
                },
                {
                    "number": 0.7,
                    "time": "2018-11-15 15:30:00"
                },
                {
                    "number": 1.2,
                    "time": "2018-11-15 15:40:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-15 15:50:00"
                },
                {
                    "number": 1.1,
                    "time": "2018-11-15 16:00:00"
                },
                {
                    "number": 0.9,
                    "time": "2018-11-15 16:10:00"
                },
                {
                    "number": 1,
                    "time": "2018-11-15 16:20:00"
                },
                {
                    "number": 1,
                    "time": "2018-11-15 16:30:00"
                },
                {
                    "number": 1,
                    "time": "2018-11-15 16:40:00"
                },
                {
                    "number": 1.2,
                    "time": "2018-11-15 16:50:00"
                },
                {
                    "number": 1.1,
                    "time": "2018-11-15 17:00:00"
                },
                {
                    "number": 1,
                    "time": "2018-11-15 17:10:00"
                },
                {
                    "number": 0.9,
                    "time": "2018-11-15 17:20:00"
                },
                {
                    "number": 0.9,
                    "time": "2018-11-15 17:30:00"
                },
                {
                    "number": 0.8,
                    "time": "2018-11-15 17:40:00"
                },
                {
                    "number": 0.9,
                    "time": "2018-11-15 17:50:00"
                },
                {
                    "number": 0.8,
                    "time": "2018-11-15 18:00:00"
                },
                {
                    "number": 0.7,
                    "time": "2018-11-15 18:10:00"
                },
                {
                    "number": 0.7,
                    "time": "2018-11-15 18:20:00"
                },
                {
                    "number": 0.7,
                    "time": "2018-11-15 18:30:00"
                },
                {
                    "number": 0.7,
                    "time": "2018-11-15 18:40:00"
                },
                {
                    "number": 0.8,
                    "time": "2018-11-15 18:50:00"
                },
                {
                    "number": 0.9,
                    "time": "2018-11-15 19:00:00"
                },
                {
                    "number": 0.8,
                    "time": "2018-11-15 19:10:00"
                },
                {
                    "number": 1.1,
                    "time": "2018-11-15 19:20:00"
                },
                {
                    "number": 0.8,
                    "time": "2018-11-15 19:30:00"
                },
                {
                    "number": 1.1,
                    "time": "2018-11-15 19:40:00"
                },
                {
                    "number": 0.8,
                    "time": "2018-11-15 19:50:00"
                },
                {
                    "number": 0.8,
                    "time": "2018-11-15 20:00:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-15 20:10:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-15 20:20:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-15 20:30:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-15 20:40:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-15 20:50:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-15 21:00:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-15 21:10:00"
                },
                {
                    "number": 0.8,
                    "time": "2018-11-15 21:20:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-15 21:30:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-15 21:40:00"
                },
                {
                    "number": 0.7,
                    "time": "2018-11-15 21:50:00"
                },
                {
                    "number": 0.8,
                    "time": "2018-11-15 22:00:00"
                },
                {
                    "number": 1,
                    "time": "2018-11-15 22:10:00"
                },
                {
                    "number": 1.9,
                    "time": "2018-11-15 22:20:00"
                },
                {
                    "number": 1.8,
                    "time": "2018-11-15 22:30:00"
                },
                {
                    "number": 0.9,
                    "time": "2018-11-15 22:40:00"
                },
                {
                    "number": 0.8,
                    "time": "2018-11-15 22:50:00"
                },
                {
                    "number": 0.9,
                    "time": "2018-11-15 23:00:00"
                },
                {
                    "number": 1.4,
                    "time": "2018-11-15 23:10:00"
                },
                {
                    "number": 0.8,
                    "time": "2018-11-15 23:20:00"
                },
                {
                    "number": 0.9,
                    "time": "2018-11-15 23:30:00"
                },
                {
                    "number": 1,
                    "time": "2018-11-15 23:40:00"
                },
                {
                    "number": 0.7,
                    "time": "2018-11-15 23:50:00"
                },
                {
                    "number": 0.7,
                    "time": "2018-11-16 00:00:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-16 00:10:00"
                },
                {
                    "number": 1.1,
                    "time": "2018-11-16 00:20:00"
                },
                {
                    "number": 0.5,
                    "time": "2018-11-16 00:30:00"
                },
                {
                    "number": 0.7,
                    "time": "2018-11-16 00:40:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-16 00:50:00"
                },
                {
                    "number": 0.9,
                    "time": "2018-11-16 01:00:00"
                },
                {
                    "number": 0.5,
                    "time": "2018-11-16 01:10:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-16 01:20:00"
                },
                {
                    "number": 0.8,
                    "time": "2018-11-16 01:30:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-16 01:40:00"
                },
                {
                    "number": 0.9,
                    "time": "2018-11-16 01:50:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-16 02:00:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-16 02:10:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-16 02:20:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-16 02:30:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-16 02:40:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-16 02:50:00"
                },
                {
                    "number": 0.7,
                    "time": "2018-11-16 03:00:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-16 03:10:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-16 03:20:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-16 03:30:00"
                },
                {
                    "number": 1.2,
                    "time": "2018-11-16 03:40:00"
                },
                {
                    "number": 1,
                    "time": "2018-11-16 03:50:00"
                },
                {
                    "number": 0.9,
                    "time": "2018-11-16 04:00:00"
                },
                {
                    "number": 1.1,
                    "time": "2018-11-16 04:10:00"
                },
                {
                    "number": 0.8,
                    "time": "2018-11-16 04:20:00"
                },
                {
                    "number": 0.9,
                    "time": "2018-11-16 04:30:00"
                },
                {
                    "number": 1.1,
                    "time": "2018-11-16 04:40:00"
                },
                {
                    "number": 1.5,
                    "time": "2018-11-16 04:50:00"
                },
                {
                    "number": 1.1,
                    "time": "2018-11-16 05:00:00"
                },
                {
                    "number": 0.9,
                    "time": "2018-11-16 05:10:00"
                },
                {
                    "number": 0.7,
                    "time": "2018-11-16 05:20:00"
                },
                {
                    "number": 0.8,
                    "time": "2018-11-16 05:30:00"
                },
                {
                    "number": 0.9,
                    "time": "2018-11-16 05:40:00"
                },
                {
                    "number": 1,
                    "time": "2018-11-16 05:50:00"
                },
                {
                    "number": 1.4,
                    "time": "2018-11-16 06:00:00"
                },
                {
                    "number": 0.9,
                    "time": "2018-11-16 06:10:00"
                },
                {
                    "number": 1,
                    "time": "2018-11-16 06:20:00"
                },
                {
                    "number": 1,
                    "time": "2018-11-16 06:30:00"
                },
                {
                    "number": 0.9,
                    "time": "2018-11-16 06:40:00"
                },
                {
                    "number": 0.8,
                    "time": "2018-11-16 06:50:00"
                },
                {
                    "number": 0.7,
                    "time": "2018-11-16 07:00:00"
                },
                {
                    "number": 0.7,
                    "time": "2018-11-16 07:10:00"
                },
                {
                    "number": 1,
                    "time": "2018-11-16 07:20:00"
                },
                {
                    "number": 1.9,
                    "time": "2018-11-16 07:30:00"
                },
                {
                    "number": 1.5,
                    "time": "2018-11-16 07:40:00"
                },
                {
                    "number": 1.5,
                    "time": "2018-11-16 07:50:00"
                },
                {
                    "number": 1.1,
                    "time": "2018-11-16 08:00:00"
                },
                {
                    "number": 0.8,
                    "time": "2018-11-16 08:10:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-16 08:20:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-16 08:30:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-16 08:40:00"
                },
                {
                    "number": 0.7,
                    "time": "2018-11-16 08:50:00"
                },
                {
                    "number": 0.7,
                    "time": "2018-11-16 09:00:00"
                },
                {
                    "number": 0.6,
                    "time": "2018-11-16 09:10:00"
                },
                {
                    "number": 0.7,
                    "time": "2018-11-16 09:20:00"
                }
            ],
            "system.cpu.user": [
                {
                    "number": 1.2,
                    "time": "2018-11-15 09:30:00"
                },
                {
                    "number": 1.2,
                    "time": "2018-11-15 09:40:00"
                },
                {
                    "number": 1.2,
                    "time": "2018-11-15 09:50:00"
                },
                {
                    "number": 1.3,
                    "time": "2018-11-15 10:00:00"
                },
                {
                    "number": 1.5,
                    "time": "2018-11-15 10:10:00"
                },
                {
                    "number": 1.3,
                    "time": "2018-11-15 10:20:00"
                },
                {
                    "number": 1.3,
                    "time": "2018-11-15 10:30:00"
                },
                {
                    "number": 1.8,
                    "time": "2018-11-15 10:40:00"
                },
                {
                    "number": 1.2,
                    "time": "2018-11-15 10:50:00"
                },
                {
                    "number": 2.6,
                    "time": "2018-11-15 11:00:00"
                },
                {
                    "number": 1.5,
                    "time": "2018-11-15 11:10:00"
                },
                {
                    "number": 1.4,
                    "time": "2018-11-15 11:20:00"
                },
                {
                    "number": 1.2,
                    "time": "2018-11-15 11:30:00"
                },
                {
                    "number": 1.9,
                    "time": "2018-11-15 11:40:00"
                },
                {
                    "number": 1.4,
                    "time": "2018-11-15 11:50:00"
                },
                {
                    "number": 1.5,
                    "time": "2018-11-15 12:00:00"
                },
                {
                    "number": 1,
                    "time": "2018-11-15 12:10:00"
                },
                {
                    "number": 1.5,
                    "time": "2018-11-15 12:20:00"
                },
                {
                    "number": 1.1,
                    "time": "2018-11-15 12:30:00"
                },
                {
                    "number": 1.3,
                    "time": "2018-11-15 12:40:00"
                },
                {
                    "number": 1.2,
                    "time": "2018-11-15 12:50:00"
                },
                {
                    "number": 1.1,
                    "time": "2018-11-15 13:00:00"
                },
                {
                    "number": 1.2,
                    "time": "2018-11-15 13:10:00"
                },
                {
                    "number": 1.2,
                    "time": "2018-11-15 13:20:00"
                },
                {
                    "number": 1.2,
                    "time": "2018-11-15 13:30:00"
                },
                {
                    "number": 1.2,
                    "time": "2018-11-15 13:40:00"
                },
                {
                    "number": 1,
                    "time": "2018-11-15 13:50:00"
                },
                {
                    "number": 1.3,
                    "time": "2018-11-15 14:00:00"
                },
                {
                    "number": 1,
                    "time": "2018-11-15 14:10:00"
                },
                {
                    "number": 0.9,
                    "time": "2018-11-15 14:20:00"
                },
                {
                    "number": 1.1,
                    "time": "2018-11-15 14:30:00"
                },
                {
                    "number": 0.9,
                    "time": "2018-11-15 14:40:00"
                },
                {
                    "number": 0.9,
                    "time": "2018-11-15 14:50:00"
                },
                {
                    "number": 0.9,
                    "time": "2018-11-15 15:00:00"
                },
                {
                    "number": 1.3,
                    "time": "2018-11-15 15:10:00"
                },
                {
                    "number": 1,
                    "time": "2018-11-15 15:20:00"
                },
                {
                    "number": 1.3,
                    "time": "2018-11-15 15:30:00"
                },
                {
                    "number": 1.4,
                    "time": "2018-11-15 15:40:00"
                },
                {
                    "number": 1.3,
                    "time": "2018-11-15 15:50:00"
                },
                {
                    "number": 1.5,
                    "time": "2018-11-15 16:00:00"
                },
                {
                    "number": 1.1,
                    "time": "2018-11-15 16:10:00"
                },
                {
                    "number": 1.6,
                    "time": "2018-11-15 16:20:00"
                },
                {
                    "number": 1.6,
                    "time": "2018-11-15 16:30:00"
                },
                {
                    "number": 1.5,
                    "time": "2018-11-15 16:40:00"
                },
                {
                    "number": 2,
                    "time": "2018-11-15 16:50:00"
                },
                {
                    "number": 2.2,
                    "time": "2018-11-15 17:00:00"
                },
                {
                    "number": 2.3,
                    "time": "2018-11-15 17:10:00"
                },
                {
                    "number": 1.4,
                    "time": "2018-11-15 17:20:00"
                },
                {
                    "number": 2,
                    "time": "2018-11-15 17:30:00"
                },
                {
                    "number": 1.4,
                    "time": "2018-11-15 17:40:00"
                },
                {
                    "number": 1.9,
                    "time": "2018-11-15 17:50:00"
                },
                {
                    "number": 2.1,
                    "time": "2018-11-15 18:00:00"
                },
                {
                    "number": 1.4,
                    "time": "2018-11-15 18:10:00"
                },
                {
                    "number": 1.4,
                    "time": "2018-11-15 18:20:00"
                },
                {
                    "number": 1.4,
                    "time": "2018-11-15 18:30:00"
                },
                {
                    "number": 1.4,
                    "time": "2018-11-15 18:40:00"
                },
                {
                    "number": 1.2,
                    "time": "2018-11-15 18:50:00"
                },
                {
                    "number": 1.7,
                    "time": "2018-11-15 19:00:00"
                },
                {
                    "number": 11.4,
                    "time": "2018-11-15 19:10:00"
                },
                {
                    "number": 16.5,
                    "time": "2018-11-15 19:20:00"
                },
                {
                    "number": 14.6,
                    "time": "2018-11-15 19:30:00"
                },
                {
                    "number": 14.2,
                    "time": "2018-11-15 19:40:00"
                },
                {
                    "number": 10,
                    "time": "2018-11-15 19:50:00"
                },
                {
                    "number": 7.1,
                    "time": "2018-11-15 20:00:00"
                },
                {
                    "number": 1.7,
                    "time": "2018-11-15 20:10:00"
                },
                {
                    "number": 1.5,
                    "time": "2018-11-15 20:20:00"
                },
                {
                    "number": 1.5,
                    "time": "2018-11-15 20:30:00"
                },
                {
                    "number": 1.5,
                    "time": "2018-11-15 20:40:00"
                },
                {
                    "number": 1.5,
                    "time": "2018-11-15 20:50:00"
                },
                {
                    "number": 1.9,
                    "time": "2018-11-15 21:00:00"
                },
                {
                    "number": 1.1,
                    "time": "2018-11-15 21:10:00"
                },
                {
                    "number": 1.2,
                    "time": "2018-11-15 21:20:00"
                },
                {
                    "number": 1.3,
                    "time": "2018-11-15 21:30:00"
                },
                {
                    "number": 1.3,
                    "time": "2018-11-15 21:40:00"
                },
                {
                    "number": 1.8,
                    "time": "2018-11-15 21:50:00"
                },
                {
                    "number": 2,
                    "time": "2018-11-15 22:00:00"
                },
                {
                    "number": 13,
                    "time": "2018-11-15 22:10:00"
                },
                {
                    "number": 14.9,
                    "time": "2018-11-15 22:20:00"
                },
                {
                    "number": 15.5,
                    "time": "2018-11-15 22:30:00"
                },
                {
                    "number": 9.8,
                    "time": "2018-11-15 22:40:00"
                },
                {
                    "number": 1.5,
                    "time": "2018-11-15 22:50:00"
                },
                {
                    "number": 2,
                    "time": "2018-11-15 23:00:00"
                },
                {
                    "number": 2,
                    "time": "2018-11-15 23:10:00"
                },
                {
                    "number": 1.9,
                    "time": "2018-11-15 23:20:00"
                },
                {
                    "number": 1.5,
                    "time": "2018-11-15 23:30:00"
                },
                {
                    "number": 1.5,
                    "time": "2018-11-15 23:40:00"
                },
                {
                    "number": 1.4,
                    "time": "2018-11-15 23:50:00"
                },
                {
                    "number": 1.5,
                    "time": "2018-11-16 00:00:00"
                },
                {
                    "number": 1.3,
                    "time": "2018-11-16 00:10:00"
                },
                {
                    "number": 1.8,
                    "time": "2018-11-16 00:20:00"
                },
                {
                    "number": 1.3,
                    "time": "2018-11-16 00:30:00"
                },
                {
                    "number": 1.6,
                    "time": "2018-11-16 00:40:00"
                },
                {
                    "number": 1,
                    "time": "2018-11-16 00:50:00"
                },
                {
                    "number": 1.2,
                    "time": "2018-11-16 01:00:00"
                },
                {
                    "number": 1.2,
                    "time": "2018-11-16 01:10:00"
                },
                {
                    "number": 1.1,
                    "time": "2018-11-16 01:20:00"
                },
                {
                    "number": 1.2,
                    "time": "2018-11-16 01:30:00"
                },
                {
                    "number": 1.1,
                    "time": "2018-11-16 01:40:00"
                },
                {
                    "number": 1.3,
                    "time": "2018-11-16 01:50:00"
                },
                {
                    "number": 1.2,
                    "time": "2018-11-16 02:00:00"
                },
                {
                    "number": 1.5,
                    "time": "2018-11-16 02:10:00"
                },
                {
                    "number": 1.5,
                    "time": "2018-11-16 02:20:00"
                },
                {
                    "number": 1.5,
                    "time": "2018-11-16 02:30:00"
                },
                {
                    "number": 1.3,
                    "time": "2018-11-16 02:40:00"
                },
                {
                    "number": 1.2,
                    "time": "2018-11-16 02:50:00"
                },
                {
                    "number": 1.2,
                    "time": "2018-11-16 03:00:00"
                },
                {
                    "number": 1.4,
                    "time": "2018-11-16 03:10:00"
                },
                {
                    "number": 1.2,
                    "time": "2018-11-16 03:20:00"
                },
                {
                    "number": 1.6,
                    "time": "2018-11-16 03:30:00"
                },
                {
                    "number": 1.8,
                    "time": "2018-11-16 03:40:00"
                },
                {
                    "number": 1.5,
                    "time": "2018-11-16 03:50:00"
                },
                {
                    "number": 1.4,
                    "time": "2018-11-16 04:00:00"
                },
                {
                    "number": 1.3,
                    "time": "2018-11-16 04:10:00"
                },
                {
                    "number": 1.9,
                    "time": "2018-11-16 04:20:00"
                },
                {
                    "number": 1.8,
                    "time": "2018-11-16 04:30:00"
                },
                {
                    "number": 1.8,
                    "time": "2018-11-16 04:40:00"
                },
                {
                    "number": 2,
                    "time": "2018-11-16 04:50:00"
                },
                {
                    "number": 2.1,
                    "time": "2018-11-16 05:00:00"
                },
                {
                    "number": 1.8,
                    "time": "2018-11-16 05:10:00"
                },
                {
                    "number": 1.5,
                    "time": "2018-11-16 05:20:00"
                },
                {
                    "number": 2.2,
                    "time": "2018-11-16 05:30:00"
                },
                {
                    "number": 1.5,
                    "time": "2018-11-16 05:40:00"
                },
                {
                    "number": 1.6,
                    "time": "2018-11-16 05:50:00"
                },
                {
                    "number": 2.3,
                    "time": "2018-11-16 06:00:00"
                },
                {
                    "number": 1.8,
                    "time": "2018-11-16 06:10:00"
                },
                {
                    "number": 1.8,
                    "time": "2018-11-16 06:20:00"
                },
                {
                    "number": 1.2,
                    "time": "2018-11-16 06:30:00"
                },
                {
                    "number": 1.6,
                    "time": "2018-11-16 06:40:00"
                },
                {
                    "number": 1.3,
                    "time": "2018-11-16 06:50:00"
                },
                {
                    "number": 1.3,
                    "time": "2018-11-16 07:00:00"
                },
                {
                    "number": 11.7,
                    "time": "2018-11-16 07:10:00"
                },
                {
                    "number": 11.9,
                    "time": "2018-11-16 07:20:00"
                },
                {
                    "number": 8.8,
                    "time": "2018-11-16 07:30:00"
                },
                {
                    "number": 12.2,
                    "time": "2018-11-16 07:40:00"
                },
                {
                    "number": 16.1,
                    "time": "2018-11-16 07:50:00"
                },
                {
                    "number": 15.8,
                    "time": "2018-11-16 08:00:00"
                },
                {
                    "number": 9.9,
                    "time": "2018-11-16 08:10:00"
                },
                {
                    "number": 1.2,
                    "time": "2018-11-16 08:20:00"
                },
                {
                    "number": 1.2,
                    "time": "2018-11-16 08:30:00"
                },
                {
                    "number": 1.8,
                    "time": "2018-11-16 08:40:00"
                },
                {
                    "number": 1.7,
                    "time": "2018-11-16 08:50:00"
                },
                {
                    "number": 1.6,
                    "time": "2018-11-16 09:00:00"
                },
                {
                    "number": 1.6,
                    "time": "2018-11-16 09:10:00"
                },
                {
                    "number": 1.3,
                    "time": "2018-11-16 09:20:00"
                }
            ]
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







