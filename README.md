# google-spread-sheet-api

## todo
- [x]  Set Up
  - [ ]  OAuth
  - [ ]  Service Account
- [x]  Edit

### Set Up
there are 3 way to [create credencials](https://developers.google.com/workspace/guides/create-credentials).
I want to edit internal sheets, so try OAuth and Service Account authentification methods.
it seems that api key is used in editing public sheets.

#### OAuth
Basically follow the [official getting started](https://developers.google.com/sheets/api/quickstart/nodejs).
1. create project in Google Cloud Platform
2. enable Google Sheets API
3. install npm modules
   ```
   npm install googleapis @google-cloud/local-auth --save
   ```
4. set OAuth consent screen.  
   before create OAuth 2.0 client ID, it si nessesary to setup OAuth consent screen.
   1. select internal type. (if use free account, only external type can be selected and there is a little difference.)
   2. in this time, issure token.json (To be described later) at local, then it si enougth to enter only must items at the first step.
   3. and then, go ahead as it is. (in step2, you can setup the scope OAuth can access, and this time we want to limit it only to googel spreadsheet, but it is same setup as we do at `2.enable Google Sheets API` so there is nothing to do in this step.)
   4. if you select external type, you should change mode from test to prod.
5. create OAuth 2.0 client ID
   1. select desktop
   2. create as default setting
   3. download json
6. how to get access token
   1. copy [sample code](https://developers.google.com/sheets/api/quickstart/nodejs#step_2_set_up_the_sample) and place credencials.json.
   2. execute code (`node .`)
   3. authentificatino window is launtched and push ok.
   4. then, token.json is created.

#### Service Account
1. create project in Google Cloud Platform
2. enable Google Sheets API
3. install npm modules
   ```
   npm install googleapis --save
   ```
4. create service account
   At a minimum, only the name and ID need to be set.
5. dowwload credentials
   1. go service account > KEYS
   2. ADD KEY
   3. select json
   4. json is downloaded

(TBW)

### Edit
[???Google Sheets API v4??? append?????????](https://qiita.com/nkuro/items/6400d437ec3859bfef01)
