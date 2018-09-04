	const {Given, When, Then} = require('cucumber');
  var expect = require('chai').expect;
  //var assert = require('assert');
	
  var AppLaunchPage = require('../tests/pageobjects/app_launch_page');
	var WelcomePage = require('../tests/pageobjects/welcome_page');
  var HomePage = require('../tests/pageobjects/home_page');
  var SetupPage = require('../tests/pageobjects/setup_page');

  Given('the new user click the Deny button', function () {
      AppLaunchPage.clickDenyButton();
  })      
  When('the user contact information is provided', function () {
      WelcomePage.enterUserInfo('Jackie','Bai','jbai@west.com','Canada', '+1','647-818-5618');
  })
  Then('the Add an Account option shows up', function () {
    //var addAnAccountButtonName = SetupPage.getAddAnAccountButton();
    //assert(addAnAccountButtonName == 'Add an account');
    expect(SetupPage.getAddAnAccountButton()).to.equal('Add an account');
  })

  Given('the new user click the Add New Account button', function(){
    SetupPage.clickAddMeetingAccountButton(); 
  })
  When('valid conference information is provided', function(){
    SetupPage.addMeetingAccount('6547814134','1120');
  })
  Then('the newly added account is available on the home page', function(){
    expect(HomePage.getSelectedAccountName()).to.equal('Selected Account: Jackie Bai');
  })