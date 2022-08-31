
const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const {google} = require('googleapis');
const dotenv = require('dotenv');
dotenv.config();

const TOKEN_PATH = path.join(process.cwd(), 'token.json');

const authorize = async ()  => {
  const content = await fs.readFile(TOKEN_PATH);
  const credentials = JSON.parse(content);
  return google.auth.fromJSON(credentials);
};

authorize().then(async (auth) => {

  // 読み取り
  const sheets = google.sheets({version: 'v4', auth});
  const read = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_API_SPREADSHEET_ID,
    range: process.env.GOOGLE_SHEET_API_TEST_SHEET,
  });
  const rows = read.data.values;
  console.log(rows);

  // 更新
  rows.push(['update'])
  const update = await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.GOOGLE_SHEET_API_SPREADSHEET_ID,
    range: process.env.GOOGLE_SHEET_API_TEST_SHEET,
    valueInputOption: 'RAW', // RAW/USER_ENTERED
    includeValuesInResponse: true,
    resource : {
      values : rows,
    }
  });
  // resource.values.rowsの値
  console.log(update.data.updatedData.values);

  // 挿入
  const append = await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_API_SPREADSHEET_ID,
    range: process.env.GOOGLE_SHEET_API_TEST_SHEET,
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS', // INSERT_ROWS/OVERWRITE
    includeValuesInResponse: true,
    resource : {
      values : [
        ['append']
      ],
    }
  });
  // resource.values.rowsの値
  console.log(append.data.updates.updatedData.values);

  // appendの仕様について https://qiita.com/nkuro/items/6400d437ec3859bfef01

}).catch(console.error);
