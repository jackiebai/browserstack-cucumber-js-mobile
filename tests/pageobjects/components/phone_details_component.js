const CountryCodeComponent = require('./country_code_component');
class PhoneDetailsComponent {
	clickCountryCodeButton(){
		browser.click('android=new UiSelector().resourceId("com.intercall.android.mobilemeet.beta:id/phones_button_and_arrow_country_code")');
	}
	setPhoneNumber(phoneNumber){
		browser.click('android=new UiSelector().resourceId("com.intercall.android.mobilemeet.beta:id/edit_phone_number")').keys(phoneNumber);
	}
	clickFinishButton(){
		browser.click('android=new UiSelector().resourceId("com.intercall.android.mobilemeet.beta:id/button_done")');
	}
	getCountryCodeComponent(){return CountryCodeComponent;}
}
module.exports = new PhoneDetailsComponent();