# ERA Name Service for zkSync Era 
This document will help you incorporate .era into your projects. In the document, available functions are examined by including web3.js and .era name service in your project.


### Requirements
>If you are not actively using it in your project, you should install web3.js.

**NODE**
```
npm install web3
```

**YARN**
```
yarn add web3
```

**In the Browser**
```javascript
<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
```
or
```javascript
<script src="https://unpkg.com/web3@latest/dist/web3.min.js"></script>
```

### Installation

**NODE**
```
npm i eranameservice
```

**In the Browser**
```javascript
<script src="https://www.unpkg.com/eranameservice@1.0.0/index.js"></script>
```


### Usage
First, we connect with the libraries.

```javascript
const web3 = new Web3(Web3.givenProvider)
// First create a web3js provider

const ERAns = new ERAns(web3)
// You are now ready for .era
```

## GETS

**Primary Address (Ethereum Address to Era Name)**

Returns the primary address registered to this address.
```javascript
ERAns.primaryAddress("ETH_ADDRESS")
.then(function(result){
    console.log(result)
    // Returns the primary address registered to this address.
})
```

**Resolve Address  (Era Name to Ethereum Address)**

Returns the resolved ethereum address of the .era name.
```javascript
ERAns.resolveAddress("name.era").then(function(result){
    console.log(result)
    // Returns the resolved ethereum address of the .era name.
})
```

**Address Owners**

Returns the domains owned by an address.
```javascript
ERAns.addressOwners("ETH_ADDRESS").then(function(resultOwners){
	console.log(resultOwners)	
})
```  

**Last registered names**

Returns the last  registered .era names
```javascript
ERAns.lastAddresses(20).then(function(result){
    console.log(result)
    //Returns the last 10 registered .era name
})
```

**Is this domain name taken ?**

Returns whether a domain name has been registered by another user.
```javascript
ERAns.isTaken("era").then(function(resultTaken){
    if (resultTaken>0) {
        //This domain name has been registered.
    } 
})
```


**Get Data**

Get domain name information.
```javascript
ERAns.getData("name","data_name").then(function(result){ {
    console.log(result)
});
```


**Get Twitter Account**

Get Twitter account from .era name.
```javascript
ERAns.getTwitter(name).then(function(account_twitter){
     console.log(account_twitter)
})
```


**Get Instagram Account**

Get Instagram account from .era name.
```javascript
ERAns.getInstragram(name).then(function(account_instagram){
     console.log(account_instagram)
})
```

**Get Discord Account**

Get Discord account from .era name.
```javascript
ERAns.getDiscord(name).then(function(account_discord){
     console.log(account_discord)
})
```

**Get Telegram Account**

Get Telegram account from .era name.
```javascript
ERAns.getTelegram(name).then(function(account_telegram){
     console.log(account_telegram)
})
```

**Get URL**

Get URL from .era name.
```javascript
ERAns.getUrl(name).then(function(account_url){
     console.log(account_url)
})
```

**Get Email**

Get Email from .era name.
```javascript
ERAns.getEmail(name).then(function(account_email){
     console.log(account_email)
})
```


**Get Description**

Get Description from .era name.
```javascript
ERAns.getDescription(name).then(function(account_description){
     console.log(account_description)
})
```

**Get Avatar**

Get Avatar from .era name.
```javascript
ERAns.getKeywords(name).then(function(account_keywords){
     console.log(account_keywords)
})
```

## SETS

**Set New Primary Address**

Changes the primary address.
```javascript
ERAns.setPrimaryAddress("name.era","OWNER_ETH_ADDRESS").then(function(result){
    if (result['status']) {
     //Successful
     } else {
     //Failed
     }
})
```

**Set New Resolve Address**

Changes the resolve address.
```javascript
 ERAns.setResolveAddress("name.era","NEW_RESOLVE_ETH_ADDRESS", "OWNER_ETH_ADDRESS").then(function(result){
        if (result['status']) {
        //Successful
        } else {
        //Failed
        }
 })
```

**Register Domain**

Registers a new .era address and returns the result.
```javascript
ERAns.register("name.era",YOUR_ETH_ADDRESS,"3000000000000000").then(function(result){
    if (result['status']) {
        // Registration Successful
    } else {
        // Registration Failed
    }
})
```


**Set Data**

It allows you to add data for the domain name you have.
```javascript
ERAns.setData("name","data_type","data_value", "Owner_Eth_Address").then(function(result){
    if (result['status']) {
     //Successful
     //eq: data_name: twitter, data_value: twitter_account
     } else {
     //Failed
     }
})
```
