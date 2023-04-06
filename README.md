# Era-Name-Service-for-zkSync-Era-Mainnet
Resolving an Ethereum address to a name using a library.

This document will help you incorporate .ether into your projects. In the document, available functions are examined by including web3.js and .ether name service in your project.

Requirements
If you are not actively using it in your project, you should install web3.js.

NODE

npm install web3
YARN

yarn add web3
In the Browser

<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
or

<script src="https://unpkg.com/web3@latest/dist/web3.min.js"></script>
Installation
NODE

npm install ethernameservice
In the Browser

<script src="https://unpkg.com/ethernameservice@1.0.2/index.js"></script>
Usage
First, we connect with the libraries.

const web3 = new Web3(Web3.givenProvider)
// First create a web3js provider

const etherNS = new EtherNS(web3)
// You are now ready for .ether
Primary Address

Returns the primary address registered to this address.

etherNS.primaryAddress("ETH_ADDRESS")
.then(function(result){
    console.log(result)
    // Returns the primary address registered to this address.
})
Resolve Address

Returns the resolved ethereum address of the .ether name.

etherNS.resolveAddress("alice.ether").then(function(result){
    console.log(result)
    // Returns the resolved ethereum address of the .ether name.
})
Address Owners

Returns the domains owned by an address.

etherNS.addressOwners("ETH_ADDRESS").then(function(resultOwners){
	console.log(resultOwners)	
})
Subdomain Status

This query returns whether the subdomain sale is active.

etherNS.subdomainPublicSale("ether_name").then(function(result) {
    if (result) {
        //Subdomain can be registered.
    } else {
        //Subdomain can't be registered.
    }
})
Subdomain Cost

This query returns the cost of subdomain sales.

etherNS.subdomainPublicSale("ether_name").then(function(result_cost) {
    console.log(result_cost)
})    
Last registered names

Returns the last registered .ether names

etherNS.lastAddresses(10).then(function(result){
    console.log(result)
    //Returns the last 10 registered .ether name
})
Is this domain name taken ?

Returns whether a domain name has been registered by another user.

etherNS.isTaken("ether_name").then(function(resultTaken){
    if (resultTaken>0) {
        //This domain name has been registered.
    } 
})
Get Data

Get domain name information.

etherNS.getData("ether_name","data_name").then(function(result){ {
    console.log(result)
});
Get Twitter Account

Get Twitter account from .ether name.

etherNS.getTwitter(ether_name).then(function(account_twitter){
     console.log(account_twitter)
})
Get Instagram Account

Get Instagram account from .ether name.

etherNS.getInstragram(ether_name).then(function(account_instagram){
     console.log(account_instagram)
})
Get Discord Account

Get Discord account from .ether name.

etherNS.getDiscord(ether_name).then(function(account_discord){
     console.log(account_discord)
})
Get Tiktok Account

Get Tiktok account from .ether name.

etherNS.getTiktok(ether_name).then(function(account_tiktok){
     console.log(account_tiktok)
})
Get Reddit Account

Get Reddit account from .ether name.

etherNS.getReddit(ether_name).then(function(account_reddit){
     console.log(account_reddit)
})
Get Telegram Account

Get Telegram account from .ether name.

etherNS.getTelegram(ether_name).then(function(account_telegram){
     console.log(account_telegram)
})
Get URL

Get URL from .ether name.

etherNS.getUrl(ether_name).then(function(account_url){
     console.log(account_url)
})
Get Email

Get Email from .ether name.

etherNS.getEmail(ether_name).then(function(account_email){
     console.log(account_email)
})
Get Description

Get Description from .ether name.

etherNS.getDescription(ether_name).then(function(account_description){
     console.log(account_description)
})
Get Notice

Get Notice from .ether name.

etherNS.getNotice(ether_name).then(function(account_notice){
     console.log(account_notice)
})
Get Keywords

Get Keywords from .ether name.

etherNS.getKeywords(ether_name).then(function(account_keywords){
     console.log(account_keywords)
})
Set New Primary Address

Changes the primary address.

etherNS.setPrimaryAddress("ether_name.ether","OWNER_ETH_ADDRESS").then(function(result){
    if (result['status']) {
     //Successful
     } else {
     //Failed
     }
})
Set New Resolve Address

Changes the resolve address.

 etherNS.setResolveAddress("ether_domain.ether","NEW_RESOLVE_ETH_ADDRESS", "OWNER_ETH_ADDRESS").then(function(result){
        if (result['status']) {
        //Successful
        } else {
        //Failed
        }
 })
Register Main Domain

Registers a new .ether address and returns the result.

etherNS.register("new_domain.ether",YOUR_ETH_ADDRESS,YOUR_REFERRAL_ADDRESS,web3.utils.toWei('0.04', 'ether')).then(function(result){
    if (result['status']) {
        // Registration Successful
    } else {
        // Registration Failed
    }
})
Register Subdomain

Registers a subdomain address and returns the result.

 etherNS.registerSubdomain("MAIN_DOMAIN_NAME","YOUR_ETH_ADDRESS","NEW_SUBDOMAIN_NAME","COST_WEI").then(function(result){
    if (result['status']) {
        // Registration Successful
    } else {
        // Registration Failed
    }    
})
Start or Close subdomain sale

etherNS.setSubdomainSaleActive("true",web3.utils.toWei("0.05",'ether'),"ether_name","OWNER_ETH_ADDRESS").then(function(result){
	if (result['status']) {
     //Successful
     } else {
     //Failed
     }
})
Set Data

It allows you to add data for the domain name you have.

etherNS.setData("ether_name","data_name","data_value", "Owner_Eth_Address").then(function(result){
    if (result['status']) {
     //Successful
     //eq: data_name: twitter, data_value: twitter_account
     } else {
     //Failed
     }
})
