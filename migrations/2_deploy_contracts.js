
/*
var FeatherFactory = artifacts.require("FeatherFactory");
var _fthr_address = "0x3b72571031Fdfb5Cf9106C43B34Ae22b3Cc5b764";
var _deployer_address = "0xC2954E57701bAA8a9F072aeAAbF735BA238f064D";
var _starting_block =  8923500;
*/

var FTHR = artifacts.require("FTHR");
module.exports = function(deployer) {
  //deployer.deploy(FeatherFactory, _fthr_address, _deployer_address, _starting_block);

  deployer.deploy(FTHR);

};
