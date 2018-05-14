	var expect = require('chai').expect;
	var AppLaunchPage = require('../tests/pageobjects/app_launch_page');
	var WelcomePage = require('../tests/pageobjects/welcome_page');

module.exports = function(){
	this.Given('the new user click the Deny button', function () {
           AppLaunchPage.clickDenyButton();
         });
       
    this.When('the user contact information is provided', function () {
           WelcomePage.enterUserInfo('Jackie','Bai','jbai@west.com','Canada', '+1','647-818-5618');
         });
       
    this.Then('the Add Meeting Account option shows up', function () {
           // Write code here that turns the phrase above into concrete actions
           
         });
       

}