# google-spread-sheet-api
## todo
- [x]  Set Up (Google Sheet Api v4 を使えるようにするまでのセットアップ)
- [ ]  Edit (Google Sheet Api v4 で書き込む。)

### Set Up
Basically follow the [official getting started](https://developers.google.com/sheets/api/quickstart/nodejs).
1. create project in Google Cloud Platform
2. enable Google Sheets API
3. install npm modules
   ```
   npm install googleapis @google-cloud/local-auth --save
   ```
4. select authentication method  
   there are 3 way to [create credencials](https://developers.google.com/workspace/guides/create-credentials).  
   select the authentication method refering to [this article](https://boul.tech/sheets-api-get-dataframe/).  
   this time I use google workspace account, so select `OAuth 2.0 client ID`.  

5. set OAuth consent screen.  
   before create OAuth 2.0 client ID, it si nessesary to setup OAuth consent screen.
   1. select internal type. (if use free account, only external type can be selected and there is a little difference.)
   2. in this time, issure token.json (To be described later) at local, then it si enougth to enter only must items at the first step.
   3. and then, go ahead as it is. (in step2, you can setup the scope OAuth can access, and this time we want to limit it only to googel spreadsheet, but it is same setup as we do at `2.enable Google Sheets API` so there is nothing to do in this step.)
   4. if you select external type, you should change mode from test to prod.
6. create OAuth 2.0 client ID
   1. select desktop
   2. create as default setting
   3. download json
7. how to get access token
   1. copy [sample code](https://developers.google.com/sheets/api/quickstart/nodejs#step_2_set_up_the_sample) and place credencials.json.
   2. execute code (`node .`)
   3. authentificatino window is launtched and push ok.
   4. then, token.json is created.




