const ConvertLib = artifacts.require("ConvertLib");
const CrelatToken = artifacts.require("CrelatToken.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, CrelatToken);
  deployer.deploy(CrelatToken);
};
