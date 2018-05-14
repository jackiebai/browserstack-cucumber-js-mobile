class HomePage {
	getSelectedAccountName(){
		return browser.element('android=new UiSelector().resourceId("com.intercall.android.mobilemeet.beta:id/header_selected_account")').getText();
	}
	startMeeting(){
		browser.click('android=new UiSelector().textContains("Start Meeting")');
	}
	joinMeeting(){
		browser.click('android=new UiSelector().textContains("Join Meeting")');
	}
}
module.exports = new HomePage()
