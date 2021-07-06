## How to run

### Running Database Servers for Shard 1

Open new powershell in admin mode from the root of this project. And run below script:

- Run `$env:PORT="3000"; $env:DATA_DIR="aedb_data_0"; node aedb.mjs`

![](https://i.imgur.com/4lKJDkH.png)

### Running Database Servers for Shard 1

Open new powershell in admin mode from the root of this project. And run below script.

- Run `$env:PORT="3001"; $env:DATA_DIR="aedb_data_1"; node aedb.mjs`

![](https://i.imgur.com/KR05Yd6.png)

### Running reverse proxy server

Open new powershell in admin mode from the root of this project. And run below script:

- Run `node aedb_proxy.mjs`

![](https://i.imgur.com/GfxpJzv.png)


### Running client 

- Install `curl` globally `npm i -g curl`
- Open Windows Command Prompt in admin mode 
- Then run below script to send payload to server
```
curl -d '{"data":"Rupesh how are you"}' -H 'Content-Type: application/json' http://localhost:8000/a
```