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

#### Posting Data to Shard running at port 3001

Use fiddler or postman to make Http Post to ` http://localhost:8000/a` address and using below JSON.

```json
{
	"data":"Rupesh how are you?"
}
```

![](https://i.imgur.com/t5YYmPw.png)

![](https://i.imgur.com/yVlF1Eu.png)

#### Getting Data from Shard running at port 3001

Use fiddler or postman to make Http Get to ` http://localhost:8000/a` address. 

 ![](https://i.imgur.com/gIbcmb5.png)



 #### Posting Data to Shard running at port 3000

Use fiddler or postman to make Http Post to ` http://localhost:8000/b` address and using below JSON.

```json
{
	"data":"Hello data in shard 0?"
}
```


![](https://i.imgur.com/YOkAhBF.png)

#### Getting Data from Shard running at port 3000

Use fiddler or postman to make Http Get to ` http://localhost:8000/b` address. 

 ![](https://i.imgur.com/gIbcmb5.png)