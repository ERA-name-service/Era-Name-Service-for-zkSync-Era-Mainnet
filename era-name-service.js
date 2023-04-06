const ERAns=class{constructor(Provider){this.Provider=Provider;
const abi=[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"string","name":"NAME","type":"string"}],"name":"Register","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"NAME","type":"string"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"WhitelistRegister","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"NAME","type":"string"}],"name":"_checkName","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost_public","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost_wl","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"name":"dataAddress","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"era_name","type":"string"},{"internalType":"string","name":"Area","type":"string"}],"name":"getDataAddress","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUnlockDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isContractLocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"name":"lastAddresses","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"primaryAddress","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"resolveAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"era_name","type":"string"},{"internalType":"address","name":"newresolve","type":"address"}],"name":"setAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"allwchr","type":"bytes"}],"name":"setAllowChars","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"customBaseURI_","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"era_name","type":"string"},{"internalType":"string","name":"setArea","type":"string"},{"internalType":"string","name":"newDatas","type":"string"}],"name":"setDataAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_newMerkleRoot","type":"bytes32"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"setPricePublic","type":"uint256"},{"internalType":"uint256","name":"SetPriceWL","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"era_name","type":"string"}],"name":"setPrimaryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"MintDate","type":"uint256"}],"name":"setUnlockDate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"time","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"tokenAddressandID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenIDandAddress","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwnerName","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];

const c_address="0x935442AF47F3dc1c11F006D551E13769F12eab13";this.contract=new Provider.eth.Contract(abi,c_address);}

primaryAddress(address){return this.contract.methods.primaryAddress(address).call((err,result)=>{if(err){console.error('Error: ',err);return err;}else{return result;}});}

async resolveAddress(era_name){let result=era_name.replace(".era","");return this.contract.methods.resolveAddress(result).call((err,result)=>{if(err){console.error('Error: ',err);return err;}else{return result;}});}

setResolveAddress(era_name,new_address,account){
	  var gasAmount="5000000";
		var gasPrice="260000000";
	return this.contract.methods.setAddress(era_name,new_address).send({gasLimit: String(gasAmount),gasPrice: String(gasPrice),from:account}).once("error",(err)=>{
		console.log(err);
		}).then((receipt)=>{
			return receipt;
		}).catch(function(error){
		return error;
	});}


setData(era_name,area,value,account){
	var gasAmount="5000000";
	var gasPrice="260000000";
	let result=era_name.replace(".era","");
	return this.contract.methods.setDataAddress(era_name,area,value).send({gasLimit: String(gasAmount),gasPrice: String(gasPrice),from:account}).once("error",(err)=>{
		console.log(err);
		}).then((receipt)=>{
		return receipt;
		}).catch(function(error){
		return error;
	});}


setPrimaryAddress(era_name,account){
	var gasAmount="5000000";
	var gasPrice="260000000";
	return this.contract.methods.setPrimaryAddress(era_name).send({gasLimit: String(gasAmount),gasPrice: String(gasPrice),from:account}).once("error",(err)=>{
		console.log(err);
		})
		.then((receipt)=>{
			return receipt;
		}).catch(function(error){
			return error;
	});}



Register(era_name,account,value) {
	var gasAmount="5000000";
	var gasPrice="260000000";
  return this.contract.methods.Register(era_name.replace(".era","")).send({gasLimit: String(gasAmount),gasPrice: String(gasPrice),from: account,value: value}).once("error", (err) => {
      console.log(err);
    })
    .then((receipt) => {
    return receipt;
  }).catch(function(error){
    return error;
  });
}


addressOwners(address){return this.contract.methods.walletOfOwnerName(address).call((err,result)=>{if(err){console.error('Error: ',err);return err;}else{return result;}}).catch(function(error){return error;});}
ownerOf(token_id){return this.contract.methods.ownerOf(token_id).call((err,result)=>{if(err){console.error('Error: ',err);return err;}else{return result;}}).catch(function(error){return error;});}
lastAddresses(count){return this.contract.methods.lastAddresses(count).call((err,result)=>{if(err){console.error('Error: ',err);return err;}else{return result;}}).catch(function(error){return error;});}
addressOwnersMap(address){return this.contract.methods.walletOfOwnerMap(address).call((err,result)=>{if(err){console.error('Error: ',err);return err;}else{return result;}}).catch(function(error){return error;});}
isTaken(era_name){let era_name3=era_name.replace(".era","");return this.contract.methods.tokenAddressandID(era_name3).call((err,result)=>{if(err){console.error('Error: ',err);return err;}else{return result;}}).catch(function(error){return error;});}
getData(era_name,data){let result=era_name.replace(".era","");return this.contract.methods.getDataAddress(result,data).call((err,result)=>{if(err){console.error('Error: ',err);return err;}else{return result;}});}
getTwitter(era_name){return this.getData(era_name,'twitter')}
getInstagram(era_name){return this.getData(era_name,'instagram')}
getEmail(era_name){return this.getData(era_name,'email')}
getUrl(era_name){return this.getData(era_name,'url')}
getAvatar(era_name){return this.getData(era_name,'avatar')}
getDescription(era_name){return this.getData(era_name,'description')}
getDiscord(era_name){return this.getData(era_name,'discord')}
getTelegram(era_name){return this.getData(era_name,'telegram')}
