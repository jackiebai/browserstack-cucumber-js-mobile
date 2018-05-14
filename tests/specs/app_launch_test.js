var expect = require('chai').expect;
var AppLaunchPage = require('../pageobjects/app_launch_page');
var WelcomePage = require('../pageobjects/welcome_page');
var SetupPage = require('../pageobjects/setup_page');
var HomePage = require('../pageobjects/home_page');

	describe("new install test", function () {
		it("deny googldrive share", function () {
			AppLaunchPage.clickDenyButton();
			expect(WelcomePage.getTitle()).to.equal('Welcome');
		});

		it("enter user info", function () {
			WelcomePage.enterUserInfo('Jackie','Bai','jbai@west.com','Canada', '+1','647-818-5618');
		});

		it("skip adding an account", function () {
			SetupPage.clickNoAccountButton();
		});

		it("configure a valid account", function () {
			SetupPage.addMeetingAccount('6547814134','1120');
			expect(HomePage.getSelectedAccountName()).to.equal('Selected Account: Jackie Bai');
		});

		it("start a meeting", function () {
			HomePage.startMeeting();
		});
	});