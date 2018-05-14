const PhoneNumbersPage = require('./phone_numbers_page');

class WelcomePage {
	getTitle(){
		return browser.element('android=new UiSelector().resourceId("com.intercall.android.mobilemeet.beta:id/label_headline")').getText();
	}
	getFirstNameField(){
		return browser.element('android=new UiSelector().resourceId("com.intercall.android.mobilemeet.beta:id/edit_welcome_firstname")').click();
	}
	getLastNameField(){
		return browser.element('android=new UiSelector().resourceId("com.intercall.android.mobilemeet.beta:id/edit_welcome_lastname")').click();
	}
	getEmailAddressField(){
		return browser.element('android=new UiSelector().resourceId("com.intercall.android.mobilemeet.beta:id/edit_welcome_email")').click();
	}
	getPhoneNumbersButton(){
		return browser.element('android=new UiSelector().resourceId("com.intercall.android.mobilemeet.beta:id/welcome_button_and_arrow")');
	}
	setFirstName(firstName){
		this.getFirstNameField().keys(firstName).hideDeviceKeyboard();
	}
	setLastName(lastName){
		this.getLastNameField().keys(lastName).hideDeviceKeyboard();
	}
	setEmailAddress(emailAddress){
		this.getEmailAddressField().keys(emailAddress).hideDeviceKeyboard();
	}
	clickPhoneNumbersButton(){
		this.getPhoneNumbersButton().click();
	}
	clickFinishButton(){
		browser.click('android=new UiSelector().resourceId("com.intercall.android.mobilemeet.beta:id/button_done")');
	}	

	enterUserInfo(firstName, lastName, emailAddress,countryCode, areaCode, phoneNumber){
		this.setFirstName(firstName);
		this.setLastName(lastName);
		this.setEmailAddress(emailAddress);
		this.clickPhoneNumbersButton();
		PhoneNumbersPage.clickWorkPhoneButton();
		let PhoneDetailsComponent = PhoneNumbersPage.getPhoneDetailsComponent();
		PhoneDetailsComponent.clickCountryCodeButton();
		let CountryCodeComponent = PhoneDetailsComponent.getCountryCodeComponent();
		CountryCodeComponent.enterSearchText(countryCode);
		CountryCodeComponent.selectCountryCode(areaCode);
		PhoneDetailsComponent.setPhoneNumber(phoneNumber);
		PhoneDetailsComponent.clickFinishButton();
		PhoneNumbersPage.clickFinishButton();
		this.clickFinishButton();
	}
;
}
module.exports = new WelcomePage();