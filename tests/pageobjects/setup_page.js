class SetupPage {
	addMeetingAccount(conferenceCode, pinCode){
		browser.click('android=new UiSelector().resourceId("com.intercall.android.mobilemeet.beta:id/header_selected_account")')
				.click('android=new UiSelector().textContains("Add Meeting Account")')
				.click('android=new UiSelector().resourceId("com.android.packageinstaller:id/permission_allow_button")')
				.back()
				.click('android=new UiSelector().resourceId("com.intercall.android.mobilemeet.beta:id/edit_add_account_conferencecode")')
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
}
module.exports = new SetupPage();