class SetupPage {
	addMeetingAccount(conferenceCode, pinCode){
		//browser.click('android=new UiSelector().resourceId("com.intercall.android.mobilemeet.beta:id/header_selected_account")')
		//		.click('android=new UiSelector().textContains("Add Meeting Account")')
				browser.click('android=new UiSelector().resourceId("com.android.packageinstaller:id/permission_allow_button")')
				.back()
				var editAddAccountConferenceCodeSelector = 'android=new UiSelector().resourceId("com.intercall.android.mobilemeet.beta:id/edit_add_account_conferencecode")';
				browser.waitForVisible(editAddAccountConferenceCodeSelector, 60000);
				browser.click('android=new UiSelector().resourceId("com.intercall.android.mobilemeet.beta:id/edit_add_account_conferencecode")')
				.keys(conferenceCode)
				.click('android=new UiSelector().resourceId("com.intercall.android.mobilemeet.beta:id/edit_add_account_leaderpin")')
				.keys(pinCode)
				.click('android=new UiSelector().resourceId("com.intercall.android.mobilemeet.beta:id/button_done")');
				var finishButtonSelector = 'android=new UiSelector().textContains("Finish")';
				browser.waitForVisible(finishButtonSelector, 30000);
				browser.element(finishButtonSelector).click();
	}
	clickNoAccountButton(){
		browser.click('android=new UiSelector().textContains("I don\'t have an account")');
	}
	getAddAnAccountButton(){
		return browser.element('android=new UiSelector().textContains("Add an account")').getText();
	}
	clickAddMeetingAccountButton(){
		browser.click('android=new UiSelector().textContains("Add an account")');
	}
}
module.exports = new SetupPage();