const PhoneDetailsComponent = require('./components/phone_details_component');

class PhoneNumbersPage {
	clickHomePhoneButton(){
		return browser.click('//android.widget.RelativeLayout[1]');
	}
	clickMobilePhoneButton(){
		return browser.click('//android.widget.RelativeLayout[2]');
	}
	clickWorkPhoneButton(){
		return browser.click('//android.widget.RelativeLayout[3]');
	}
	clickOtherPhoneButton(){
		return browser.click('//android.widget.RelativeLayout[4]');
	}
	clickFinishButton(){
		browser.click('android=new UiSelector().resourceId("com.intercall.android.mobilemeet.beta:id/button_done")');
	}
	getPhoneDetailsComponent(){return PhoneDetailsComponent;}
}
module.exports = new PhoneNumbersPage();