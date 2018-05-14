class AppLaunchPage {
	getDenyButton(){
		var denyButtonSelector = 'android=new UiSelector().textContains("Deny")'
	 	browser.waitForVisible(denyButtonSelector, 20000);
		return browser.element(denyButtonSelector);
	}
	getAllowButton(){
		var allowButtonSelector = 'android=new UiSelector().textContains("Allow")'
	 	browser.waitForVisible(allowButtonSelector, 20000);
		return browser.element(allowButtonSelector);
	}
	clickDenyButton(){
		this.getDenyButton().click();

	}
	clickAllowButton(){
		this.getAllowButton().click();
	}
}
module.exports = new AppLaunchPage();
