var momenttz = require('moment-timezone');
var Sequelize = require('sequelize');
// const { Op } = require('sequelize')
const { col } = require('sequelize');
const Op = Sequelize.Op;
var momenttz = require('moment-timezone');
var axios = require('axios');

var sequelize = new Sequelize('Tracker', 'root', 'v3nu55upp1y', {
  host: '178.128.87.57',
  port: 3306,
  dialect: 'mysql',
  timezone: "+07:00",
  logging: false,
  operatorsAliases: false,
  define: {
    timestamps: false, //disable timestamps 'createdAt' and 'updatedAt'
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_unicode_ci'
    }
  }
});

var transactions = sequelize.define('transactions', {
  type: {
    type: Sequelize.STRING,
    field: 'type'
  },
  deviceId: {
    type: Sequelize.STRING,
    field: 'deviceId'
  },
  hereName: {
    type: Sequelize.STRING,
    field: 'hereName'
  },
  acc: {
    type: Sequelize.INTEGER,
    field: 'acc'
  },
  uploadTrigger: {
    type: Sequelize.INTEGER,
    field: 'uploadTrigger'
  },
  dateTime: {
    type: Sequelize.STRING,
    field: 'dateTime'
  },
  latitude: {
    type: Sequelize.STRING,
    field: 'latitude'
  },
  longitude: {
    type: Sequelize.STRING,
    field: 'longitude'
  },
  speed: {
    type: Sequelize.STRING,
    field: 'speed'
  },
  attitude: {
    type: Sequelize.STRING,
    field: 'attitude'
  },
  gpsmode: {
    type: Sequelize.STRING,
    field: 'gpsmode'
  },
  gpsfix: {
    type: Sequelize.STRING,
    field: 'gpsfix'
  },
  crc: {
    type: Sequelize.STRING,
    field: 'crc'
  }
},
  {
    freezeTableName: true
  });

var devices = sequelize.define('devices', {
  deviceId: {
    type: Sequelize.STRING,
    field: 'deviceId'
  },
  hereName: {
    type: Sequelize.STRING,
    field: 'hereName'
  },
  acc: {
    type: Sequelize.INTEGER,
    field: 'acc'
  },
  uploadTrigger: {
    type: Sequelize.INTEGER,
    field: 'uploadTrigger'
  },
  dateTime: {
    type: Sequelize.STRING,
    field: 'dateTime'
  },
  latitude: {
    type: Sequelize.STRING,
    field: 'latitude'
  },
  longitude: {
    type: Sequelize.STRING,
    field: 'longitude'
  },
  speed: {
    type: Sequelize.STRING,
    field: 'speed'
  },
  attitude: {
    type: Sequelize.STRING,
    field: 'attitude'
  },
  gpsmode: {
    type: Sequelize.STRING,
    field: 'gpsmode'
  },
  gpsfix: {
    type: Sequelize.STRING,
    field: 'gpsfix'
  },
  crc: {
    type: Sequelize.STRING,
    field: 'crc'
  },
  status: {
    type: Sequelize.INTEGER,
    field: 'status'
  },
  trackingId: {
    type: Sequelize.STRING,
    field: 'trackingId'
  },
  hereDeviceId: {
    type: Sequelize.STRING,
    field: 'hereDeviceId'
  },
  hereDeviceSecret: {
    type: Sequelize.STRING,
    field: 'hereDeviceSecret'
  }
},
  {
    freezeTableName: true
  });

var test = sequelize.define('test', {
  data: {
    type: Sequelize.STRING,
    field: 'data'
  },
  createdAt: {
    type: Sequelize.DATE,
    field: 'createdAt'
  },
},
  {
    freezeTableName: true
  });
var users = sequelize.define('users', {
    userId: {
      type: Sequelize.STRING,
      field: 'userId'
    },
    username: {
      type: Sequelize.STRING,
      field: 'username'
    },
    password: {
      type: Sequelize.STRING,
      field: 'password'
    },
    projectname: {
      type: Sequelize.STRING,
      field: 'projectname'
    },
    appId: {
      type: Sequelize.STRING,
      field: 'appId'
    },
    projectId: {
      type: Sequelize.STRING,
      field: 'projectId'
    },
    accessToken: {
      type: Sequelize.TEXT,
      field: 'accessToken'
    },
    refreshToken: {
      type: Sequelize.STRING,
      field: 'refreshToken'
    },
    tokenType: {
      type: Sequelize.STRING,
      field: 'tokenType'
    },
    expiresIn: {
      type: Sequelize.INTEGER,
      field: 'expiresIn'
    }
  },
{
freezeTableName: true
});

//-----------wialon ---------------
var deviceswialon = sequelize.define('devicesWialon', {
  deviceId: {
    type: Sequelize.STRING,
    field: 'deviceId'
  },
  devicePassword: {
    type: Sequelize.STRING,
    field: 'devicePassword'
  },
  CRC16: {
    type: Sequelize.STRING,
    field: 'CRC16'
  },  
  version: {
    type: Sequelize.STRING,
    field: 'version'
  },  
  status: {
    type: Sequelize.INTEGER,
    field: 'status'
  }
},
  {
    freezeTableName: true
  });

var testnew = sequelize.define('testnew', {
    data: {
      type: Sequelize.STRING,
      field: 'data'
    },
    createdAt: {
      type: Sequelize.DATE,
      field: 'createdAt'
    },
  },
    {
      freezeTableName: true
});

var transactionsWialon = sequelize.define('transactionsWialon', {
  type: {
    type: Sequelize.STRING,
    field: 'type'
  },
  deviceDate: {
    type: Sequelize.STRING,
    field: 'deviceDate'
  },
  deviceTime: {
    type: Sequelize.STRING,
    field: 'deviceTime'
  },
  Lat1: {
    type: Sequelize.INTEGER,
    field: 'Lat1'
  },
  Lat2: {
    type: Sequelize.INTEGER,
    field: 'Lat2'
  },
  Lon1: {
    type: Sequelize.STRING,
    field: 'Lon1'
  },
  Lon2: {
    type: Sequelize.STRING,
    field: 'Lon2'
  },
  Speed: {
    type: Sequelize.STRING,
    field: 'Speed'
  },
  Course: {
    type: Sequelize.STRING,
    field: 'Course'
  },
  Alt: {
    type: Sequelize.STRING,
    field: 'Alt'
  },
  Sats: {
    type: Sequelize.STRING,
    field: 'Sats'
  },
  CRC16: {
    type: Sequelize.STRING,
    field: 'CRC16'
  }
},
  {
    freezeTableName: true
  });

  //---------- venus ----------------
var testVenus = sequelize.define('testVenus', {
    rawdata: {
      type: Sequelize.TEXT,
      field: 'rawdata'
    },
    createdAt: {
      type: Sequelize.DATE,
      field: 'createdAt'
    },
  },
    {
      freezeTableName: true
    });


//-----------Internal server ---------------
export async function checkdevice(deviceId) {
  let result = await devices.findOne({
    where: {
      deviceId: deviceId
    }
  });
  return result
}
export async function checktoken(token) {
  let result = await devices.findOne({
    where: {
      token: token
    }
  });
  return result
}

export async function insertData(data) {
  let devarr = await devices.findAll({});
  for(let i in devarr){
    if(devarr[i].deviceId == data.DEVICE_ID){
      let result = await transactions.create({
        type: data.type,
        deviceId: data.DEVICE_ID,
        hereName: devarr[i].hereName,
        acc: data.ACC,
        uploadTrigger: data.UPLOAD_TRIGGER,
        dateTime: data.DATE_TIME,
        latitude: data.LATITUDE,
        longitude: data.LONGITUDE,
        speed: data.SPEED,
        attitude: data.ALTITUDE,
        gpsmode: data.GPS_MODE,
        gpsfix: data.GPS_FIX,
        crc: data.CRC
      });
    
      let result1 = await devices.update({
        type: data.type,
        acc: data.ACC,
        uploadTrigger: data.UPLOAD_TRIGGER,
        dateTime: data.DATE_TIME,
        latitude: data.LATITUDE,
        longitude: data.LONGITUDE,
        speed: data.SPEED,
        attitude: data.ALTITUDE,
        gpsmode: data.GPS_MODE,
        gpsfix: data.GPS_FIX,
        crc: data.CRC
      }, {
        where: { deviceId: data.DEVICE_ID }
      });
      return result
    }
  }
}

export async function insertConn(data) {
  let result = await transactions.create({
    type: data.type,
    deviceId: data.DEVICE_ID,
    crc: data.CRC,
    type: data.type
  });
  return result
}

export async function updateConn(data) {
  let result = await devices.update({
    status: 1,
    crc: data.CRC,
    type: data.type
  }, {
    where: { deviceId: data.DEVICE_ID }
  });
  return result
}

export async function insertTest(data) {
  await test.create({
    data: data
  });
  return 1
}

export async function insertTestvenus(data) {
  await testVenus.create({
    rawdata: data
  });
  return 1
}

export async function getLastData(device) {
  let result = await transactions.findAll({
    attributes: {exclude: ['deviceId','id']},
    where: {
      type: '$M',
      hereName: device
    },
  });
  // console.log(result[result.length-1].hereName, result[result.length-1].latitude, result[result.length-1].longitude)
  let a = {
    type: result[result.length-1].type,
    hereName: result[result.length-1].hereName,
    acc: result[result.length-1].acc,
    uploadTrigger: result[result.length-1].uploadTrigger,
    dateTime: result[result.length-1].dateTime,
    latitude: result[result.length-1].latitude,
    longitude: result[result.length-1].longitude,
    speed: result[result.length-1].speed,
    attitude: result[result.length-1].attitude,
    gpsmode: result[result.length-1].gpsmode,
    gpsfix: result[result.length-1].gpsfix,
    crc: result[result.length-1].crc
  }
  return a
}

export async function getDataById(device) {
  let result = await transactions.findAll({
    attributes: {exclude: ['deviceId','id']},
    limit: 1,
    where: {
      type: '$M',
      hereName: device
    },
    order: [['createdAt', 'DESC']]
  });
  return result
}

export async function getData() {
  let result = await transactions.findAll({
    attributes: {exclude: ['deviceId','id']},
    limit: 1,
    order: [['createdAt', 'DESC']]
  });
  return result
}

export async function getDataInitial(datelike) {
  let data=[]
  let d = await devices.findAll({
    attributes: ['deviceId']
  });
  
  // for(let i in d){console.log(d[i].deviceId)}

 for(let i in d){
   let device = d[i].deviceId
  let result = await transactions.findAll({
    where:{
      deviceId: device,
      type:"$M",
      createdAt: {
        [Op.startsWith] : datelike
    }
    }
  });

  for(let k in result){
    data.push({
      type: result[k].type,
      hereName: result[k].hereName,
      acc: result[k].acc,
      uploadTrigger: result[k].uploadTrigger,
      dateTime: result[k].dateTime,
      latitude: result[k].latitude,
      longitude: result[k].longitude,
      speed: result[k].speed,
      attitude: result[k].attitude,
      gpsmode: result[k].gpsmode,
      gpsfix: result[k].gpsfix,
      crc: result[k].crc
    })
  }
 }
  return data
}

export async function loadFile(datelike) {
  let data=[]
  let result = await test.findAll({
    where:{
      createdAt: {
        [Op.startsWith] : datelike
    }
    }
  });
  for(let i in result){
    let localTime = momenttz(new Date(result[i].createdAt))
    localTime = localTime.tz('Asia/Bangkok').format("YYYY-MM-DD HH:mm:ss")
    data.push({
      id: result[i].id,
      data: result[i].data,
      createdAt: localTime
    })
  }
  return data
}


export async function readSiteName() {
  let d = await devices.findAll({
    attributes: ['hereName']
  });
  return d
}

//clear data after 7 days
export async function clearDB(datelike){
  let data =  await test.destroy({
    where: {
    createdAt: {
        [Op.startsWith] : datelike
    }
  }
  });

  let data1 =  await transactions.destroy({
    where: {
    createdAt: {
        [Op.startsWith] : datelike
    }
  }
  });
  let data2 =  await testnew.destroy({
    where: {
    createdAt: {
        [Op.startsWith] : datelike
    }
  }
  });

  let data3 =  await transactionsWialon.destroy({
    where: {
    createdAt: {
        [Op.startsWith] : datelike
    }
  }
  });
  return data3
}

//-----------Here server ---------------
export async function loginHERE() {
  var data = JSON.stringify({
    "email": "HereTHTrackingDemo05@gmail.com",
    "password": "Here05Th@il@nd"
  });
  
  var config = {
    method: 'post',
    url: 'https://tracking.api.here.com/users/v2/login',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    let result = users.update({
      "userId": response.data.userId,
      "accessToken": response.data.accessToken,
      "tokenType": response.data.tokenType,
      "expiresIn":response.data.expiresIn,
      "refreshToken": response.data.refreshToken
    }, {
      where: { id: 1 }
    });
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  }); 
}

export async function sendDataHere(data, uploadtrigger, someDate) {
  let resultuser = await users.findOne({
    where: {
      id: 1
    },
  });
  let accessToken = resultuser.accessToken

  let trackId = await devices.findOne({
    where: {
      deviceId: data.DEVICE_ID
    },
  });

 let trackingId = trackId.trackingId
 let a = await sendHere(trackingId, data.LATITUDE, data.LONGITUDE, parseInt(data.SPEED), parseFloat(data.ALTITUDE), someDate, parseInt(data.ACC), uploadtrigger, accessToken)
 if(a.status == 200){return 200}
 else if(a.status == 90){return 90}
}

function sendHere(trackingId, LATITUDE, LONGITUDE, SPEED, ALTITUDE, DATE_TIME, ACC, uploadtrigger, accessToken){
  return new Promise(function (resolve, reject) {
  // console.log(trackingId, LATITUDE, LONGITUDE, SPEED, ALTITUDE, DATE_TIME, ACC, uploadtrigger, accessToken)
  var data = JSON.stringify({
    "id": trackingId,
    "data": [
      {
        "position": {
          "accuracy": 20,
          "lat": LATITUDE,
          "lng": LONGITUDE,
          "speed": SPEED,
          "alt": ALTITUDE
        },
        "timestamp": DATE_TIME,
        "payload": {
          "ACCStatus": ACC,
          "Upload_Tricker": uploadtrigger
        }
      }
    ]
  });

  var config = {
    method: 'post',
    url: 'https://tracking.api.here.com/v3/',
    headers: { 
      'Authorization': 'Bearer ' + accessToken, 
      'Content-Type': 'application/json'
    },
    data : data
  };
  console.log(config)
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    resolve({status: 200})
  })
  .catch(function (error) {
    console.log(error);
    resolve({status: 90})
  });
});
}


//-----------wialon functions ---------------
export async function insertTestnew(data) {
  await testnew.create({
    data: data
  });
  return 1
}

export async function insertTransactionsWialon(data){
  await transactionsWialon.create({
    type: data.type,
    deviceDate : data.deviceDate,
    deviceTime:data.deviceTime,
    Lat1: data.Lat1,
    Lat2 : data.Lat2,
    Lon1 : data.Lon1,
    Lon2: data.Lon2,
    Speed : data.Speed,
    Course : data.Course,
    Alt : data.Alt,
    Sats : data.Sats,
    CRC16 : data.CRC16
  });
  return 200
}

export async function insertDevice(data) {
  let result = await deviceswialon.findOne({
    where: {
      deviceId: data.deviceId
    }
  });
  if(result == null){ 
    let result1 = await deviceswialon.create({
      deviceId : data.deviceId,
      version: data.version,
      devicePassword: data.devicePassword,
      CRC16: data.CRC16,
      status:1
    });
    return 200
 }else{
    let result = await deviceswialon.update({
      version: data.version,
      devicePassword: data.devicePassword,
      CRC16: data.CRC16,
      status:1
    }, {
      where: {  deviceId : data.deviceId }
    });
    return 200
  }
}

export async function readSiteNameWialon() {
  let data=[]
  let d = await deviceswialon.findAll({
    attributes: ['deviceId']
  });

  for(let k in d){
    data.push({
      hereName:d[k].deviceId
    })
  }
  return data
}

export async function getLastDataWialon(device) {
  let result = await transactionsWialon.findAll({
    where: {
      type: '#SD#',
      hereName: device
    },
  });
  let a = {
    hereName: device,
    latitude: result[result.length-1].Lat1,
    longitude: result[result.length-1].Lon1,
  }
  return a
}

export async function getDataInitialWialon(datelike) {
  let data=[]
  let d = await deviceswialon.findAll({});
  // for(let i in d){console.log(d[i].deviceId)}
 for(let i in d){
   let device = d[i].deviceId
   let status = d[i].status

   if(status == 1){
    let result = await transactionsWialon.findAll({
      where:{
        createdAt: {
          [Op.startsWith] : datelike
      }
      }
    });
  
    for(let k in result){
      data.push({
        hereName: device,
        latitude: result[k].Lat1,
        longitude: result[k].Lon1,
      })
    }
   }
    return data
   }
}

export async function getDataByIdWialon(device) {
  let data =[]
  let result = await transactionsWialon.findAll({
    limit: 1,
    order: [['createdAt', 'DESC']]
  });

  for(let k in result){
    data.push({
      hereName: device,
      latitude: result[k].Lat1,
      longitude: result[k].Lon1,
    })
  }
  return data
}

export async function loadFileWialon(datelike) {
  console.log("xxx")
  let data=[]
  let result = await testnew.findAll({
    where:{
      createdAt: {
        [Op.startsWith] : datelike
    }
    }
  });
  for(let i in result){
    let localTime = momenttz(new Date(result[i].createdAt))
    localTime = localTime.tz('Asia/Bangkok').format("YYYY-MM-DD HH:mm:ss")
    data.push({
      id: result[i].id,
      data: result[i].data,
      createdAt: localTime
    })
  }
  return data
}


//-----------Venus AVOX functions ---------------
export async function getDataInitialVenus(datelike) {
  let data=[]
  let result = await testVenus.findAll({
    where: {
      createdAt: { [Op.startsWith] : datelike }
    },
  });
  for(let i in result){
    let b = JSON.parse(result[i].rawdata)
    data.push({
    "Overspeed_Alarm":b.Overspeed_Alarm,
    "GNSS_Fault_Alarm":b.GNSS_Fault_Alarm,
    "Device_Main_Power_Under_Voltage_Alarm":b.Device_Main_Power_Under_Voltage_Alarm,
    "Device_Main_Power_Off_Alarm":b.Device_Main_Power_Off_Alarm,
    "Remove_Alarm":b.Remove_Alarm,
    "Vibration_Alarm":b.Vibration_Alarm,
    "ACC":b.ACC,
    "GNSS_Position_Fix":b.GNSS_Position_Fix,
    "Time":b.Time,
    "Latitude":b.Latitude,
    "Longitude":b.Longitude,
    "Altitude":b.Altitude ,
    "Speed":b.Speed,
    "Direction":b.Direction ,
    "Mileage":b.Mileage,
    "Mobile_Network_Signal_Strength":b.Mobile_Network_Signal_Strength,
    "GNSS_Number_Of_Positioning_Satellites":b.GNSS_Number_Of_Positioning_Satellites,
    "Power_Supply_Voltage":b.Power_Supply_Voltage
    })
  }
  return data
}

export async function loadFileVenus(datelike) {
  let data=[]
  let result = await testVenus.findAll({
    where:{
      createdAt: {
        [Op.startsWith] : datelike
    }
    }
  });
  for(let i in result){
    let localTime = momenttz(new Date(result[i].createdAt))
    localTime = localTime.tz('Asia/Bangkok').format("YYYY-MM-DD HH:mm:ss")

    let b = JSON.parse(result[i].rawdata)
    data.push({
     id: result[i].id,
    "Overspeed_Alarm":b.Overspeed_Alarm,
    "GNSS_Fault_Alarm":b.GNSS_Fault_Alarm,
    "Device_Main_Power_Under_Voltage_Alarm":b.Device_Main_Power_Under_Voltage_Alarm,
    "Device_Main_Power_Off_Alarm":b.Device_Main_Power_Off_Alarm,
    "Remove_Alarm":b.Remove_Alarm,
    "Vibration_Alarm":b.Vibration_Alarm,
    "ACC":b.ACC,
    "GNSS_Position_Fix":b.GNSS_Position_Fix,
    "Time":b.Time,
    "Latitude":b.Latitude,
    "Longitude":b.Longitude,
    "Altitude":b.Altitude,
    "Speed":b.Speed,
    "Direction":b.Direction,
    "Mileage":b.Mileage,
    "Mobile_Network_Signal_Strength":b.Mobile_Network_Signal_Strength,
    "GNSS_Number_Of_Positioning_Satellites":b.GNSS_Number_Of_Positioning_Satellites,
    "Power_Supply_Voltage":b.Power_Supply_Voltage,
    "RAW_DATA":b.RAW_DATA,
    })
    if(parseInt(i) ==  result.length -1){ return data}
  }
}

