let google = require('googleapis');
let authentication = require("./authentication");


function appendData(auth,sheetname,data) {

  return new Promise((resolve,reject)=>{

  var sheets = google.sheets('v4');
  var sheetrange = sheetname + '!A1:B';
  sheets.spreadsheets.values.append({
    auth: auth,
    spreadsheetId: '12O4LkuiSy_--PXBQWoLXKFPGKiCNEUqLTspbAqhMzco',
    range: sheetrange, //Change Sheet1 if your worksheet's name is something else
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [data]
    }
  }, (err, response) => {
    if (err) {
      reject(err);
    } else {
       resolve(1);
    }
  });

  });
}

function insert(sheetname,data){
    return new Promise((resolve,reject)=>{
       authentication.authenticate()
          .then((auth)=>{
          return appendData(auth,sheetname,data);
          }).then(data=>{
              resolve(data);
          }).catch((error)=>{
              reject(error);
          });  
    });
}


module.exports = insert;
