class CountryCodeComponent {
	getSearchTextField(){
		return browser.click('android=new UiSelector().resourceId("com.intercall.android.mobilemeet.beta:id/button_search")')
		.click('android=new UiSelector().resourceId("com.intercall.android.mobilemeet.beta:id/edittext_search")');

	}
	enterSearchText(keywords){
		this.getSearchTextField().keys(keywords);
	}			
	selectCountryCode(countryCode){		
		browser.click('android=new UiSelector().textContains("'+countryCode+'")');
	}
}
module.exports = new CountryCodeComponent();